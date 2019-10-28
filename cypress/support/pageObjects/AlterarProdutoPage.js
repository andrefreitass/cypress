import AlterarProdutoElements from '../elements/AlterarProdutoElements';
import GenericsMethod from '../generics/GenericsMethod';

const alteraProduto = new AlterarProdutoElements;
const usr = Cypress.config("usuario");
const senha = Cypress.config("senha");

class AlterarProdutoPage extends GenericsMethod{
    
    acessarAplicacao(){
        this.acessarSite();
    }

    realizaLogin(){        
        this.preencheCampo(alteraProduto.campoUsuario(),usr);        
        this.preencheCampo(alteraProduto.campoSenha(),senha);
        this.clicar(alteraProduto.botaoLogin());
    }
        

    acessarTelaAlteracao(){
        this.clicar(alteraProduto.botaoEditarProduto());
        this.pontoVerificacao(alteraProduto.tituloPaginaEditarProduto(), "Editar Produto");
    }

    preencheCampoDescricao(){
        cy.wait(300);
        this.preencheCampo(alteraProduto.campoDescricao(), "Teste Automacao Edicao");        
    }

    preencheCampoVazio(){
        cy.wait(300);
        this.limparCampo(alteraProduto.campoDescricao());        
    }

    preencheCampoDescricaoIgual(){
        cy.wait(300);
        this.preencheCampo(alteraProduto.campoDescricao(), "iPhone 8");        
    }

    preencheCampoDescricaoTamanhoMaximo(){
        cy.wait(300);
        this.preencheCampo(alteraProduto.campoDescricao(), " O conto venha ver o pôr-do-sol fala sobre a vida amorosa de Raquel e Ricardo. Ela tem ótimas condiçoês financeras e ele não, mas isso não impede dos dois terem um caso. Ricardo convida Raquel para um ultimo encontro, mas ela nem imaginava que este encontro seria em um cemitério, um romance planejado e mal fadado, doce ilusão.");        
    }

    preencheCampoDescricaoTamanhoMinimo(){
        cy.wait(300);
        this.preencheCampo(alteraProduto.campoDescricao(), "t");        
    }

    quantidadeVazia(){
        for (let index = 0; index < 104; index++) {
            this.clicar(alteraProduto.quantidadeDiminuir());            
        }      
        
    }

    quantidadeProduto(){
        this.clicar(alteraProduto.quantidadeAumentar());
    }

    quantidadeProdutoNegativa(){
        this.clicar(alteraProduto.quantidadeDiminuir());
    }

    preencheValor(){        
        this.preencheCampo(alteraProduto.campoPreco(),'50.00');
    }

    preencheValorZerado(){        
        this.preencheCampo(alteraProduto.campoPreco(),'0.00');
    }

    preencheValorMascara(){        
        this.preencheCampo(alteraProduto.campoPreco(),'R$ 10.00');
    }

    preencheValorNegativo(){        
        this.preencheCampo(alteraProduto.campoPreco(),'-1.00');
    }
    preencheValorEspecial(){        
        this.preencheCampo(alteraProduto.campoPreco(),'@%ta');
    }

    selecionarOpcaoHabilitado(){
        this.clicar(alteraProduto.opcaoHabilitadoDesabilitado());
    }

    selecionarOpcaoDesabilitado(){
        this.clicar(alteraProduto.opcaoHabilitadoDesabilitado());
    }

    selecionaProdutoApple(){
        this.clicar(alteraProduto.campoFabricante());
        cy.wait(300);
        this.clicar(alteraProduto.fabricanteApple());
    }

    selecionaProdutoMotorola(){
        this.clicar(alteraProduto.campoFabricante());
        cy.wait(300);
        this.clicar(alteraProduto.fabricanteMotorola());
    }

    selecionaProdutoSamsung(){
        this.clicar(alteraProduto.campoFabricante());
        cy.wait(300);
        this.clicar(alteraProduto.fabricanteSamsung());
    }

    clicarBotaoSalvar(){
        this.clicar(alteraProduto.botaoCadastrar());       
    }

    aguardaTelaListaProdutos(){
        this.pontoVerificacao(alteraProduto.tituloTelaCadastro(),'Lista de Produtos');
    }

    mensagemErroDescricao(){
        cy.wait(300);
        this.pontoVerificacao(alteraProduto.mensagemErroDescricao(),'O campo descrição é obrigatório')
    }

    mensagemErroQuantidade(){
        cy.wait(300);
        this.pontoVerificacao(alteraProduto.mensagemErroQuantidade(),'O campo quantidade deve ser maior que zero')
    }

}

export default AlterarProdutoPage;