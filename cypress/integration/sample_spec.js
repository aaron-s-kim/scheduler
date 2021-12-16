describe('My First Test', () => {
  it('Does not do much', () => {
    // Arrange - setup initial app state
      // - visit a web page
      // - query for an alement
    // Act - take an action
      // - interact with that element
    // Assert - make an assertion
      // - make an assertion about page content
    expect(true).to.equal(true)
  })

  it('Visits the site', () => {
    cy.visit('/')
  })

  it('Finds an element', () => {
    cy.pause()
    cy.get('.appointment__add-button').first().click()
      // .should('have.value', "Save")
    // cy.url()
    //   .should('include', '/commands/actions')
  })
})