import CadastroProdutoElements from '../elements/CadastroProdutoElements';
import GenericsMethod from '../generics/GenericsMethod';

const cadastroProduto = new CadastroProdutoElements;
const usr = Cypress.config("usuario");
const senha = Cypress.config("senha");

class CadastroProdutoPage extends GenericsMethod{
    
    acessarAplicacao(){
        this.acessarSite();
    }

    realizaLogin(){        
        this.preencheCampo(cadastroProduto.campoUsuario(),usr);        
        this.preencheCampo(cadastroProduto.campoSenha(),senha);
        this.clicar(cadastroProduto.botaoLogin());
    }
        

    acessarTelaCadastro(){
        this.clicar(cadastroProduto.botaoCadastrar());
        this.pontoVerificacao(cadastroProduto.tituloTelaCadastro(), "Cadastrar Novo Produto");
    }

    preencheCampoDescricao(){
        cy.wait(300);
        this.preencheCampo(cadastroProduto.campoDescricao(), "Teste Automacao");        
    }

    preencheCampoDescricaoIgual(){
        cy.wait(300);
        this.preencheCampo(cadastroProduto.campoDescricao(), "iPhone 6s");        
    }

    preencheCampoDescricaoTamanhoMaximo(){
        cy.wait(300);
        this.preencheCampo(cadastroProduto.campoDescricao(), " O conto venha ver o pôr-do-sol fala sobre a vida amorosa de Raquel e Ricardo. Ela tem ótimas condiçoês financeras e ele não, mas isso não impede dos dois terem um caso. Ricardo convida Raquel para um ultimo encontro, mas ela nem imaginava que este encontro seria em um cemitério, um romance planejado e mal fadado, doce ilusão.");        
    }

    preencheCampoDescricaoTamanhoMinimo(){
        cy.wait(300);
        this.preencheCampo(cadastroProduto.campoDescricao(), "t");        
    }

    quantidadeProduto(){
        this.clicar(cadastroProduto.quantidadeAumentar());
    }

    quantidadeProdutoNegativa(){
        this.clicar(cadastroProduto.quantidadeDiminuir());
    }

    preencheValor(){        
        this.preencheCampo(cadastroProduto.campoPreco(),'50.00');
    }

    preencheValorZerado(){        
        this.preencheCampo(cadastroProduto.campoPreco(),'0.00');
    }

    preencheValorMascara(){        
        this.preencheCampo(cadastroProduto.campoPreco(),'R$ 10.00');
    }

    preencheValorNegativo(){        
        this.preencheCampo(cadastroProduto.campoPreco(),'-1.00');
    }
    preencheValorEspecial(){        
        this.preencheCampo(cadastroProduto.campoPreco(),'@%ta');
    }

    selecionarOpcaoHabilitado(){
        this.clicar(cadastroProduto.opcaoHabilitadoDesabilitado());
    }

    selecionarOpcaoDesabilitado(){
        this.clicar(cadastroProduto.opcaoHabilitadoDesabilitado());
    }

    selecionaProdutoApple(){
        this.clicar(cadastroProduto.campoFabricante());
        cy.wait(300);
        this.clicar(cadastroProduto.fabricanteApple());
    }

    selecionaProdutoMotorola(){
        this.clicar(cadastroProduto.campoFabricante());
        cy.wait(300);
        this.clicar(cadastroProduto.fabricanteMotorola());
    }

    selecionaProdutoSamsung(){
        this.clicar(cadastroProduto.campoFabricante());
        cy.wait(300);
        this.clicar(cadastroProduto.fabricanteSamsung());
    }

    clicarBotaoSalvar(){
        this.clicar(cadastroProduto.botaoCadastrar());       
    }

    aguardaTelaListaProdutos(){
        this.pontoVerificacao(cadastroProduto.tituloTelaCadastro(),'Lista de Produtos');
    }

    mensagemErroDescricao(){
        cy.wait(300);
        this.pontoVerificacao(cadastroProduto.mensagemErroDescricao(),'O campo descrição é obrigatório')
    }

    mensagemErroQuantidade(){
        cy.wait(300);
        this.pontoVerificacao(cadastroProduto.mensagemErroQuantidade(),'O campo quantidade deve ser maior que zero')
    }

}

export default CadastroProdutoPage;