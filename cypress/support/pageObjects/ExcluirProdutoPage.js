import ExcluirProdutoElements from '../elements/ExcluirProdutoElements';
import GenericsMethod from '../generics/GenericsMethod';

const excluirProduto = new ExcluirProdutoElements;
const usr = Cypress.config("usuario");
const senha = Cypress.config("senha");

class ExcluirProdutoPage extends GenericsMethod{
    
    acessarAplicacao(){
        this.acessarSite();
    }

    realizaLogin(){        
        this.preencheCampo(excluirProduto.campoUsuario(),usr);        
        this.preencheCampo(excluirProduto.campoSenha(),senha);
        this.clicar(excluirProduto.botaoLogin());
    }

    exclusaoProduto(){
        this.pontoVerificacao(excluirProduto.tituloTelaCadastro(), 'Lista de Produtos');
        this.clicar(excluirProduto.botaoExcluirProduto());        
    }        
}

export default ExcluirProdutoPage;