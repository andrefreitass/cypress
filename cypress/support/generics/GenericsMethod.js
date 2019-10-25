class GenericsMethod{

    clicar(elemento){
        cy.get(elemento).click();
    }

    limparCampo(elemento){
        cy.get(elemento).clear();        
    }

    preencheCampo(elemento, valor){
        this.limparCampo(elemento);
        cy.get(elemento).type(valor);
    }

}

export default GenericsMethod;