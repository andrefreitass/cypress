const url = Cypress.config("baseUrl");

class GenericsMethod{
    
    acessarSite(){
            //cy.clearCookies();
            cy.visit(url);
        }

    clicar(elemento){
        cy.get(elemento).click({ multiple: true, force: true });
    }

    limparCampo(elemento){
        cy.get(elemento).clear();        
    }

    preencheCampo(elemento, valor){
        this.limparCampo(elemento);
        cy.get(elemento).type(valor);
    }

    pontoVerificacao(elemento, valorCheck){
        cy.get(elemento).should('contain', valorCheck);
    }

}

export default GenericsMethod;