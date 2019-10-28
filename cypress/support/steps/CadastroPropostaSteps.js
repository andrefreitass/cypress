import CadastroProposta from '../pageobjects/CadastroProdutoPage';

const cadastroProposta = new CadastroProposta;


/**
 * Realiza cadastro com sucesso
 */


When("acessar a tela de cadastro de produtos",() => {
    cadastroProposta.acessarAplicacao();    
    cadastroProposta.realizaLogin();
    cadastroProposta.acessarTelaCadastro();
})

Then("realizar o cadastro dos produtos apple com sucesso", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoApple();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();
    cadastroProposta.clicarBotaoSalvar();
    
})

Then("realizar o cadastro dos produtos motorola com sucesso", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoMotorola();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();
    cadastroProposta.clicarBotaoSalvar();
})

Then("realizar o cadastro dos produtos samsung com sucesso", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();
    cadastroProposta.clicarBotaoSalvar();
})

/**
 * Descricao não informado
 */

Then("não informar a descrição", () => {        
    cadastroProposta.clicarBotaoSalvar();
})

And("o sistema exibe uma mensagem para usuário informando a obrigatoriedade do campo descrição", () => {        
    cadastroProposta.mensagemErroDescricao();
})

/**
 * Quantidade zerada
 */

Then("não informar a quantidade", () => {        
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();    
    cadastroProposta.preencheValor();
    cadastroProposta.clicarBotaoSalvar();
})

And("o sistema exibe uma mensagem para usuário informando a obrigatoriedade do campo quantidade", () => {        
    cadastroProposta.mensagemErroQuantidade();
})

/**
 * Defeitos encontrados
 */

Then("informar mais de 60 caracteres no campo descrição", () => {
    cadastroProposta.preencheCampoDescricaoTamanhoMaximo();    
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();
    cadastroProposta.clicarBotaoSalvar();
})

Then("informar 1 caractere no campo descrição", () => {
    cadastroProposta.preencheCampoDescricaoTamanhoMinimo();    
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();
    cadastroProposta.clicarBotaoSalvar();
})

Then("realizar o cadastro e não informar o fabricante", () => {
    cadastroProposta.preencheCampoDescricao();    
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();
    cadastroProposta.clicarBotaoSalvar();
})

Then("no campo quantidade informar um valor negativo", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProdutoNegativa();
    cadastroProposta.preencheValor();      
})

Then("no campo valor informar um valor zero", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValorNegativo();      
})

Then("no campo valor informar um valor maior que zero", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();      
})

Then("no campo valor informar carascteres especiais", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValorEspecial();      
})

Then("no campo descrição informar valor que já exista", () => {
    cadastroProposta.preencheCampoDescricaoIgual();
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();
    cadastroProposta.clicarBotaoSalvar();
})

Then("no campo valor informar valor com máscara monetária", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoSamsung();
    cadastroProposta.selecionarOpcaoHabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValorMascara();  
})

Then("realizar o cadastro", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoMotorola();
    cadastroProposta.selecionarOpcaoDesabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();
    
})

And("na tela de listagem não é exibido ao ID do produto", () => {
    cadastroProposta.clicarBotaoSalvar();
    cadastroProposta.aguardaTelaListaProdutos();
})

Then("realizar o cadastro valores invalidos", () => {
    cadastroProposta.preencheCampoDescricao();
    cadastroProposta.selecionaProdutoMotorola();
    cadastroProposta.selecionarOpcaoDesabilitado();
    cadastroProposta.quantidadeProduto();
    cadastroProposta.preencheValor();
    
})
 

And("o sistema redireciona para uma tela em branco", () => {
        cadastroProposta.clicarBotaoSalvar();
        cadastroProposta.aguardaTelaListaProdutos();
})



