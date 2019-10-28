import ExcluirProposta from '../pageobjects/ExcluirProdutoPage';

const excluirProduto = new ExcluirProposta;


/**
 * Realiza exclusão com sucesso
 */


When("acessar a tela de listagem de produtos e selecionar a opção de exclusão", () => {
    excluirProduto.acessarAplicacao();
    excluirProduto.realizaLogin();    
})

Then("realizar a exclusão do produto com sucesso", () => {
    excluirProduto.exclusaoProduto();
})

