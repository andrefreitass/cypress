const url = Cypress.config("baseUrl");

class GenericsMethod{
    
    /**
     * Metodo para acessar a URL do sistema
     */
    acessarSite(){
            cy.visit(url);
        }

    /**
     * Clicar nos objetos 
     * @param elemento
     */
    clicar(elemento){
        cy.get(elemento).click({ multiple: true, force: true });
    }

    /**
     * Limpar Objetos
     * @param elemento
     */
    limparCampo(elemento){
        cy.get(elemento).clear();        
    }

    /**
     * Digita texto no elemento
     * @param elemento
     * @param valor
     */
    preencheCampo(elemento, valor){
        this.limparCampo(elemento);
        cy.get(elemento).type(valor);
    }

    
    /**
     * Validação de campos e resultados esperado
     * @param elemento
     * @param valorCheck
     */
    pontoVerificacao(elemento, valorCheck){
        cy.get(elemento).should('contain', valorCheck);
    }

}

export default GenericsMethod;