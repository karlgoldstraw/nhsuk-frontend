describe('Care-card urgent component tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to urgent care card Component', function () {
    cy.visit(Cypress.config().baseUrl + '/care-card-urgent.html')
  });

  it('Checking for nhsuk-care-card class', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--urgent')
  });

  it('Checking for nhsuk-care-card__heading-container class', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--urgent').children()
      .should('have.class', 'nhsuk-care-card__heading-container')
  });

  it('Checking for nhsuk-care-card__content class ', function () {
    cy.get('.nhsuk-care-card.nhsuk-care-card--urgent').children()
      .should('have.class', 'nhsuk-care-card__content')
  });

  it('Checking for nhsuk-care-card__heading class ', function () {
    cy.get('.nhsuk-care-card__heading-container').children()
      .should('have.class', 'nhsuk-care-card__heading')
  });

  it('Checking for visually hidden class', function () {
    cy.get('.nhsuk-care-card__heading').children().children()
      .should('have.class', 'nhsuk-u-visually-hidden', 'Urgent advice:')
  });

  it('Checking care card title color to be red', function () {
    cy.get('.nhsuk-care-card__heading-container')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(218, 41, 28)')
  });

  it('Checking font', function () {
    cy.get('.nhsuk-care-card__content')
      .should('have.css', 'font-family').and('eq', '"Frutiger W01", Helvetica, Arial, sans-serif')
  });
});
