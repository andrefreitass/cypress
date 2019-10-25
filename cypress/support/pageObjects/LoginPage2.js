import LoginElements2 from '../elements/LoginElements2'
const loginElements2 = new LoginElements2
const url = Cypress.config("baseUrl2");

class LoginPage2{
    acessarSite(){
        cy.visit(url);
    }

    preencheUsuario(){
        cy.wait(200);
        cy.get(loginElements2.campoUsuario()).clear().type('admin');
    }

    preencheSenha(){
        cy.get(loginElements2.campoSenha()).clear().type('123456');
    }

    limparCampoUsuario(){
        cy.get(loginElements2.campoUsuario()).clear();
    }

    limparCampoSenha(){
        cy.get(loginElements2.campoSenha()).clear();
    }

    clicarBotaoEntrar(){
        cy.get(loginElements2.botaoLogin()).click();
    }

    realizaLogout(){
        cy.wait(1000);
        cy.get(loginElements2.botaoOpcaoSair()).click();
        cy.wait(20);
        cy.get(loginElements2.botaoSair()).click();
    }
}

export default LoginPage2;
