import AlterarProposta from '../pageobjects/AlterarProdutoPage';

const alteraProduto = new AlterarProposta;


/**
 * Realiza cadastro com sucesso
 */


When("acessar a tela de listagem de produtos",() => {
    alteraProduto.acessarAplicacao();    
    alteraProduto.realizaLogin();
    alteraProduto.acessarTelaAlteracao();
})

Then("realizar a edição dos produtos com sucesso", () => {
    alteraProduto.preencheCampoDescricao();
    alteraProduto.selecionaProdutoApple();
    alteraProduto.selecionarOpcaoHabilitado();
    alteraProduto.quantidadeProduto();
    alteraProduto.preencheValor();
    alteraProduto.clicarBotaoSalvar();    
})
