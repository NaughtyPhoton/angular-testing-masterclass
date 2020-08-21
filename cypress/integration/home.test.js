describe('Home Page', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('courses.json')
      .as('coursesJSON');
    cy.route('/api/courses', '@coursesJSON')
      .as('courses');

    cy.visit('/');
    cy.contains('All Courses');
  });

  it('displays a list of courses', () => {
    cy.wait('@courses');
    cy.get('mat-card').should('have.length', 9);
  });

  it('displays the advanced courses', () => {
    cy.get('.mat-tab-label').should('have.length', 2);
    cy.get('.mat-tab-label')
      .last()
      .click();
    cy.get('.mat-tab-body-active .mat-card-title')
      .its('length')
      .should('be.gt', 1);
  });
});
