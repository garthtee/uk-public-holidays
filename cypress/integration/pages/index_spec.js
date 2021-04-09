describe('index', () => {
  it('renders correct header', () => {
    cy.visitIndex();

    cy.contains('UK Public Holidays 🌴');
  });

  it('renders list of locations and holidays', () => {
    cy.visitIndex();

    cy.findByRole('combobox', {name: 'Location'})
      .select('northern-ireland');

    cy.contains('Good Friday');
  });

  it('renders list of locations and holidays, then filters by year', () => {
    cy.visitIndex();

    cy.findByRole('combobox', {name: 'Location'})
      .select('northern-ireland');

    cy.findByRole('combobox', {name: 'Year'})
      .select('2022');

    cy.contains('Platinum Jubilee bank holiday');

    cy.contains('Holidays 11');
  });

  it('renders correct locations', () => {
    cy.visitIndex();

    cy.findAllByText('England and Wales').should('exist');
    cy.findAllByText('Scotland').should('exist');
    cy.findAllByText('Northern Ireland').should('exist');
  });
});
