import LoginPage2 from '../pageobjects/LoginPage2'
const loginPage2 = new LoginPage2

//informa os dados obrigatorios
Given("que possuo acesso ao site klickpage", () => {
    loginPage2.acessarSite();
})

When("informar os dados obrigatorios", () => {
    loginPage2.preencheUsuario();
    loginPage2.preencheSenha();
})

Then("o sistema realiza login com sucesso", () => {
    loginPage2.clicarBotaoEntrar();
    loginPage2.realizaLogout();
})

//Nao informa os dados obrigatorios
When("nao informar os dados obrigatorios", () => {
    loginPage2.limparCampoUsuario();
    loginPage2.limparCampoSenha();
})

Then("o sistema nao realiza login com sucesso", () => {
    loginPage2.clicarBotaoEntrar();
})
