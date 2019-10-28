import ElementsGenerics from "./ElementsGenerics";

class CadastroProdutoElements extends ElementsGenerics{
    tituloTelaCadastro = () => {return "h2"}
    botaoCadastrar = () => {return 'button.el-button.el-button--success.is-circle'}    
    campoDescricao = () => {return ':nth-child(1) > .el-form-item__content > .el-col > .el-input > .el-input__inner'}
    campoFabricante = () => {return 'div.el-input.el-input--suffix'}
    fabricanteApple = () => {return '.el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)'}
    fabricanteMotorola = () => {return 'body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li:nth-child(2)'}
    fabricanteSamsung = () => {return 'body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li:nth-child(3)'}
    opcaoHabilitadoDesabilitado = () => {return 'span.el-switch__core'}
    quantidadeAumentar = () => {return 'span.el-input-number__increase'}
    quantidadeDiminuir = () => {return 'span.el-input-number__decrease'}
    campoPreco = () => {return ':nth-child(5) > .el-form-item__content > .el-col > .el-input > .el-input__inner'}
    botaoCadastrar = () => {return 'button.el-button.el-button--success'}
    botaoVoltar = () => {return 'button.el-button.el-button--danger'}
    mensagemErroDescricao = () => {return 'p.el-message__content'}
    mensagemErroQuantidade = () => {return 'p.el-message__content'}
 
    
}

export default CadastroProdutoElements;

