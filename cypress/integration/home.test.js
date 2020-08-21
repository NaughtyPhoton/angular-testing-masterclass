describe('Home Page', () => {
  it('displays a list of courses', () => {
    cy.server();
    cy.fixture('courses.json').as('coursesJSON');
    cy.route('/api/courses', '@coursesJSON').as('courses');

    cy.visit('/');
    cy.contains('All Courses');

    cy.wait('@courses');
    cy.get('mat-card').should('have.length', 9);
  });
});
