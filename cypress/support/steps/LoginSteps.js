import LoginPage from '../pageobjects/LoginPage';

const loginPage = new LoginPage;

//informa os dados obrigatorios
Given("que possuo acesso ao site klickpage", () => {
    loginPage.acessarSite();
})

When("informar os dados obrigatorios", () => {
    loginPage.preencheUsuario();
    loginPage.preencheSenha();
})

Then("o sistema realiza login com sucesso", () => {
    loginPage.clicarBotaoEntrar();
    loginPage.realizaLogout();
})

//Nao informa os dados obrigatorios
When("nao informar os dados obrigatorios", () => {
    loginPage.limparCampoUsuario();
    loginPage.limparCampoSenha();
})

Then("o sistema nao realiza login com sucesso", () => {
    loginPage.clicarBotaoEntrar();
})

//Nao informa o usuario

When("nao informar o Usuario", () => {
    loginPage.limparCampoUsuario();    
})

And("informo a senha", () => {
    loginPage.preencheSenha();
})

//Nao informa o senha

When("nao informar a senha", () => {
    loginPage.limparCampoSenha();    
})

And("informo o usuario", () => {
    loginPage.preencheUsuario();
})
