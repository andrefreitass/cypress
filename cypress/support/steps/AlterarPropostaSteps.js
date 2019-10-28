import AlterarProposta from '../pageobjects/AlterarProdutoPage';

const alteraProduto = new AlterarProposta;


/**
 * Realiza alteração com sucesso
 */


When("acessar a tela de listagem de produtos", () => {
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

/**
 * Descricao não informado
 */

When("acessar a tela de edição de produtos", () => {
    alteraProduto.acessarAplicacao();
    alteraProduto.realizaLogin();
    alteraProduto.acessarTelaAlteracao();
})

Then("não informar a descrição", () => {
    alteraProduto.preencheCampoVazio();
    alteraProduto.selecionaProdutoMotorola();
    alteraProduto.selecionarOpcaoHabilitado();
    alteraProduto.quantidadeProduto();
    alteraProduto.preencheValor();
    alteraProduto.clicarBotaoSalvar();
})

And("o sistema exibe uma mensagem para usuário informando a obrigatoriedade do campo descrição", () => {
    alteraProduto.mensagemErroDescricao();
})

/**
 * Quantidade zerada
 */

Then("não informar a quantidade", () => {
    alteraProduto.preencheCampoDescricao();
    alteraProduto.selecionaProdutoSamsung();
    alteraProduto.selecionarOpcaoHabilitado();
    alteraProduto.quantidadeVazia();
    alteraProduto.quantidadeProdutoNegativa();
    alteraProduto.preencheValor();
    alteraProduto.clicarBotaoSalvar();
})

And("o sistema exibe uma mensagem para usuário informando a obrigatoriedade do campo quantidade", () => {
    alteraProduto.mensagemErroQuantidade();
})

/**
 * Defeitos encontrados
 */

Then("informar mais de 60 caracteres no campo descrição", () => {
    alteraProduto.preencheCampoDescricaoTamanhoMaximo();
    alteraProduto.selecionaProdutoSamsung();
    alteraProduto.selecionarOpcaoHabilitado();
    alteraProduto.quantidadeProdutoNegativa();
    alteraProduto.preencheValor();
    alteraProduto.clicarBotaoSalvar();
})

Then("informar 1 caractere no campo descrição", () => {
    alteraProduto.preencheCampoDescricaoTamanhoMinimo();
    alteraProduto.selecionaProdutoApple();
    alteraProduto.selecionarOpcaoHabilitado();    
    alteraProduto.quantidadeProduto();
    alteraProduto.preencheValor();
    alteraProduto.clicarBotaoSalvar();
})


Then("no campo quantidade informar um valor negativo", () => {
    alteraProduto.preencheCampoDescricao();
    alteraProduto.selecionaProdutoMotorola();
    alteraProduto.selecionarOpcaoHabilitado();    
    alteraProduto.quantidadeProduto();
    alteraProduto.preencheValorNegativo();
    alteraProduto.clicarBotaoSalvar();
})

Then("no campo valor informar um valor zero", () => {
    alteraProduto.preencheCampoDescricao();
    alteraProduto.selecionaProdutoMotorola();
    alteraProduto.selecionarOpcaoHabilitado();    
    alteraProduto.quantidadeProduto();
    alteraProduto.preencheValorZerado();
    alteraProduto.clicarBotaoSalvar();
})

Then("no campo valor informar carascteres especiais", () => {
    alteraProduto.preencheCampoDescricao();
    alteraProduto.selecionaProdutoMotorola();
    alteraProduto.selecionarOpcaoHabilitado();    
    alteraProduto.quantidadeProduto();
    alteraProduto.preencheValorEspecial();
    alteraProduto.clicarBotaoSalvar();
})

Then("no campo descrição informar valor que já exista", () => {
    alteraProduto.preencheCampoDescricaoIgual();
    alteraProduto.selecionaProdutoSamsung();
    alteraProduto.selecionarOpcaoHabilitado();    
    alteraProduto.quantidadeProduto();
    alteraProduto.preencheValor();
    alteraProduto.clicarBotaoSalvar();
})

Then("no campo valor informar valor com máscara monetária", () => {
    alteraProduto.preencheCampoDescricao();
    alteraProduto.selecionaProdutoSamsung();
    alteraProduto.selecionarOpcaoHabilitado();    
    alteraProduto.quantidadeProduto();
    alteraProduto.preencheValorMascara();
    alteraProduto.clicarBotaoSalvar();
})

Then("realizar o cadastro valores invalidos", () => {
    alteraProduto.preencheCampoDescricao();
    alteraProduto.selecionaProdutoMotorola();
    alteraProduto.selecionarOpcaoDesabilitado();
    alteraProduto.quantidadeProduto();
    alteraProduto.preencheValor();

})


And("o sistema redireciona para uma tela em branco", () => {
    alteraProduto.clicarBotaoSalvar();
    alteraProduto.aguardaTelaListaProdutos();
})
