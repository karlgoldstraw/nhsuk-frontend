describe('setting screen res', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');

  });

  it('Navigating to Footer Component', function () {

    cy
      .visit(Cypress.config().baseUrl + '/footer.html')

  });


  // checking for footer list class
  it('Checking for footer list class', function () {
    cy
      .get('.nhsuk-width-container').children().should('have.class', 'nhsuk-footer__list')

  });

  // Checking for footer list item class
  it('Checking for footer list item class', function () {
    cy
      .get('.nhsuk-footer__list').first().children().should('have.class', 'nhsuk-footer__logo nhsuk-footer__list-item')

  });

  // Checking for NHS logo in footer
  it('Checking for footer for NHS logo', function () {
    cy
      .get('.global-footer__link').first().children().should('have.class', 'nhsuk-logo')

  });

  // Checking for aria hidden status
  it('Checking for aria hidden status', function () {
    cy
      .get('.nhsuk-footer__list').children().children().children().should('have.attr', 'aria-hidden','true').should('have.attr','role','img')

  });

  // checking for visually hidden attr - NHS Homepage
  it('Checking for visually hidden attr - NHS Homepage', function () {
    cy
      .get('.global-footer__link').children().should('have.class', 'nhsuk-u-visually-hidden', 'NHS homepage')

  });
});

