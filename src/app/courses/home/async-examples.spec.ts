import {fakeAsync, flush, flushMicrotasks, tick} from '@angular/core/testing';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

describe('Async Testing Examples', () => {

  it('async example - Jasmine done()', (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      console.log('Running assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it('async example - setTimeout()', fakeAsync(() => {
    let test = false;

    setTimeout(() => {
    });

    setTimeout(() => {
      console.log('Running assertions');
      test = true;
    }, 1000);

    // tick waits for a given amount of time for async code to finish
    // tick(1000);

    // flush ensures that all timeouts are executed before moving forward
    flush();

    expect(test).toBeTruthy();
  }));

  it('async example - plain Promise', fakeAsync(() => {
    let test = false;
    console.log('Creating Promise');
    Promise.resolve().then(() => {
      console.log('Promise evaluated');
      test = true;
    });
    // flushMicrotasks - finishes all microtasks (Promises) in queue
    flushMicrotasks();
    console.log('Running test assertions');
    expect(test).toBeTruthy();
  }));

  it('async with both micro and full tasks', fakeAsync(() => {
    let counter = 0;
    Promise.resolve().then(() => {
      counter += 10;

      setTimeout(() => {
        counter += 1;
      }, 1000);
    });

    expect(counter).toBe(0);

    flushMicrotasks();
    expect(counter).toBe(10);

    flush();
    expect(counter).toBe(11);
  }));

  it('async example - Observables', fakeAsync(() => {
    let test = false;
    console.log('Creating Observable');

    const test$ = of(test)
      .pipe(
        delay(1000)
      );

    test$.subscribe(() => {
      console.log('Observable callback');
      test = true;
    });

    tick(1000);

    console.log('Running assertions');
    expect(test).toBeTruthy();
  }));

});
