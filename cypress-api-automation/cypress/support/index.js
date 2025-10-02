Cypress.Commands.add("apiRequest", (method, endpoint, body = null) => {
  return cy.request({
    method: method,
    url: endpoint,
    body: body,
    failOnStatusCode: false,
  });
});
