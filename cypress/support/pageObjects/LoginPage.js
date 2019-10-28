import LoginElements from '../elements/LoginElements';
import GenericsMethod from '../generics/GenericsMethod';

const loginElements = new LoginElements;
const url = Cypress.config("baseUrl");
const usr = Cypress.config("usuario");
const senha = Cypress.config("senha");
// const msgErroUsuario = Cypres.config("");
// const msgErroSenha = Cypres.config("");

class LoginPage extends GenericsMethod{
    
    acessarAplicacao(){
        this.acessarSite();
    }

    preencheUsuario(){
        this.preencheCampo(loginElements.campoUsuario(),usr);        
    }

    preencheSenha(){
        this.preencheCampo(loginElements.campoSenha(),senha);
    }

    preencheSenhaInvalida(){
        this.preencheCampo(loginElements.campoSenha(),'1234');
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

    clicarBotaoEntrarVariasVezes(){
        for (let index = 0; index < 10; index++) {
            this.clicar(loginElements.botaoLogin());
        }
    }

    realizaLogout(){
        cy.wait(500);
        this.clicar(loginElements.botaoOpcaoSair());
        cy.wait(500);
        this.clicar(loginElements.botaoSair());        
    }

    validaMensagemCampoUsuario(){
        this.pontoVerificacao(loginElements.mensagemErroUsuario(),'Please enter the correct user name');
    }

    validaMensagemCampoSenha(){
        this.pontoVerificacao(loginElements.mensagemErroSenha(),'The password can not be less than 6 digits');
    }

    tituloAreaLogada(){
        this.pontoVerificacao(loginElements.tituloAreaLogada(), 'Lista de Produtos');
    }

    tituloLogin(){
        this.pontoVerificacao(loginElements.tituloLogin(), 'Teste Técnico para Tester');
    }

    labelUserName(){
        this.pontoVerificacao(loginElements.labelUserName(), 'username: admin');
    }

    labelPassword(){
        this.pontoVerificacao(loginElements.labelPassWord(),' password: any')
    }
}

export default LoginPage;
