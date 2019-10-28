import LoginPage from '../pageobjects/LoginPage';

const loginPage = new LoginPage;

/**
 * Realiza login com sucesso
 */
Given("que possuo acesso ao site klickpage", () => {
    loginPage.acessarAplicacao();
    loginPage.tituloLogin();
})

When("informar os dados obrigatórios", () => {
    loginPage.preencheUsuario();
    loginPage.preencheSenha();
})

Then("o sistema realiza login com sucesso", () => {
    loginPage.clicarBotaoEntrar();
    cy.wait(500);
    loginPage.tituloAreaLogada();
})

/**
 * Dados obrigatórios não informados
 */
When("não informar os dados obrigatórios", () => {
    loginPage.limparCampoUsuario();
    loginPage.limparCampoSenha();
})

Then("o sistema não realiza login com sucesso", () => {
    loginPage.clicarBotaoEntrar();
})

/**
 * Usuário não informado
 */

When("não informar o usuário", () => {
    loginPage.limparCampoUsuario();    
})

And("informar a senha", () => {
    loginPage.preencheSenha();
})

And("e exibe uma mensagem de erro no campo de usuario", () => {
    loginPage.validaMensagemCampoUsuario();
})

/**
 * Senha não informada
 */

When("não informar a senha", () => {
    loginPage.limparCampoSenha();    
})

And("informar o usuário", () => {
    loginPage.preencheUsuario();
})

And("e exibe uma mensagem de erro no campo de senha", () => {
    loginPage.validaMensagemCampoSenha();
})

/**
 * Logout do sistema
 */
And("realizo o logout do sistema", () => {
    loginPage.realizaLogout();
})

/**
 * Defeitos encontrados
 */

 
And("exibe uma mensagem de erro no campo de usuario em inglês", () => {
    loginPage.validaMensagemCampoUsuario();
})


And("exibe uma mensagem de erro no campo de senha em inglês", () => {
    loginPage.validaMensagemCampoSenha();
})
 
Then("e possivel visualizar a label username exibindo o usuário", () => {
    loginPage.labelUserName();
})

Then("e possivel visualizar a label password exibindo any", () => {
    loginPage.labelPassword();
})

And("os campos username e password estão preenchidos", () => {
    loginPage.tituloLogin();
})

And("o campo username está preenchido", () => {
    loginPage.tituloLogin();
})

When("informar uma senha menor que 6 digitos", () => {
    loginPage.preencheSenhaInvalida();
})

Then("clicar várias vezes no botão login", () => {
    loginPage.clicarBotaoEntrarVariasVezes();
})
 


 

