import LoginElements from '../elements/LoginElements';
import GenericsMethod from '../generics/GenericsMethod';

const loginElements = new LoginElements;
const url = Cypress.config("baseUrl");
const usr = Cypress.config("usuario");
const senha = Cypress.config("senha");

class LoginPage extends GenericsMethod{
    acessarSite(){
        cy.visit(url);
    }

    preencheUsuario(){
        this.preencheCampo(loginElements.campoUsuario(),usr);        
    }

    preencheSenha(){
        this.preencheCampo(loginElements.campoSenha(),senha);
    }

    limparCampoUsuario(){
        this.limparCampo(loginElements.campoUsuario());  
    }

    limparCampoSenha(){
        this.limparCampo(loginElements.campoSenha());        
    }

    clicarBotaoEntrar(){
        this.clicar(loginElements.botaoLogin());
    }

    realizaLogout(){
        this.clicar(loginElements.botaoOpcaoSair());
        this.clicar(loginElements.botaoSair());        
    }
}

export default LoginPage;
