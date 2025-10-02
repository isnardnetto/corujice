describe("Create a company - API Test", () => {
  let companyId;

  it("Create a company and get by ID", () => {
    const randomId = Math.floor(Math.random() * 1000000);
    const newCompany = {
      name: "Empresa Exemplo",
      email: `empresa${randomId}@gmail.com`,
      password: "senha123",
    };

    cy.request("POST", "/companies", newCompany)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        companyId = response.body.id;
        cy.log("Company criada com sucesso!");
        cy.task("log", companyId);
      })
      .then(() => {
        cy.request("GET", `/companies/${companyId}`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("id", companyId);
          expect(response.body).to.have.property("name");
          cy.log("Company encontrada com sucesso!");
          cy.task(
            "log",
            `Company encontrada: ${JSON.stringify(response.body)}`
          );
        });
      });
  });

  it("delete a company again", () => {
    const randomId = Math.floor(Math.random() * 1000000);
    const deleteCompany = {
      name: "Empresa Exemplo",
      email: `empresa${randomId}@gmail.com`,
      password: "senha123",
    };
    cy.request("POST", "/companies", deleteCompany).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      const deleteCompanyID = response.body.id;
      cy.log("Company criada com sucesso!");
      cy.task("log", deleteCompanyID);

      cy.request("DELETE", `/companies/${deleteCompanyID}`).then(
        (deleteResponse) => {
          expect(deleteResponse.status).to.eq(204);
          cy.log("Company deletada com sucesso!");
          cy.task("log", `Company ${deleteCompanyID} deletada`);
        }
      );
    });
  });
});
