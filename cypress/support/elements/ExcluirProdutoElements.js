import ElementsGenerics from "./ElementsGenerics";

class ExcluirProdutoElements extends ElementsGenerics{    
    tituloTelaCadastro = () => {return "h2"}
    botaoExcluirProduto = () => {return ':nth-child(1) > .el-table_1_column_7 > .cell > .el-button--danger'}       
}

export default ExcluirProdutoElements;


