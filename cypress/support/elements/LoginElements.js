import ElementsGenerics from "../elements/ElementsGenerics";

class LoginElements extends ElementsGenerics{        
    botaoOpcaoSair= () => {return 'div.avatar-wrapper.el-dropdown-selfdefine'}
    botaoSair=() => {return 'li.el-dropdown-menu__item.el-dropdown-menu__item--divided > span'}
    mensagemErroUsuario=() => {return "div.el-form-item__error"}
    mensagemErroSenha=() => {return "div.el-form-item__error"}
    tituloAreaLogada=() => {return "h2"}
    tituloLogin=() => {return "h3.title"}
    labelUserName = () => {return '[style="margin-right: 20px;"]'}    
    labelPassWord = () => {return '.tips > :nth-child(2)'}

}

export default LoginElements;