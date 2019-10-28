Feature: Editar um produto e poder visualizar na listagem dos produtos

   Feature Description: Como usuário do Kpages, preciso alterar produtos, para visualizar em uma lista de produtos
    
    Scenario: Realizar alteração de produtos
        When acessar a tela de listagem de produtos
        Then realizar a edição dos produtos com sucesso

    Scenario: Descrição não informada
        When acessar a tela de edição de produtos
        Then não informar a descrição
        And o sistema exibe uma mensagem para usuário informando a obrigatoriedade do campo descrição

    Scenario: Quantidade não informada
        When acessar a tela de edição de produtos
        Then não informar a quantidade
        And o sistema exibe uma mensagem para usuário informando a obrigatoriedade do campo quantidade

          # Descrição dos defeitos

    Scenario: Validar o tamanho maximo de caracteres no input descrição
        When acessar a tela de edição de produtos
        Then informar mais de 60 caracteres no campo descrição

    Scenario: Validar o tamanho minimo de caracteres no input descrição
        When acessar a tela de edição de produtos
        Then informar 1 caractere no campo descrição

    Scenario: Validar que o campo quantidade pode ser negativo
        When acessar a tela de edição de produtos
        Then no campo quantidade informar um valor negativo

    Scenario: Validar que o campo valor permite salvar um produto com valor zero
        When acessar a tela de edição de produtos
        Then no campo valor informar um valor zero
    
    Scenario: Validar que o campo preço deve possuir máscara 
        When acessar a tela de edição de produtos
        Then no campo valor informar um valor maior que zero

    Scenario: Validar que o campo preço permite informar valores diferente de númericos
        When acessar a tela de edição de produtos
        Then no campo valor informar carascteres especiais

        
    Scenario: Validar que é possivel cadastrar um produto com a mesma descrição
        When acessar a tela de edição de produtos
        Then no campo descrição informar valor que já exista

    Scenario: Validar que ao informar no campo valor um valor com máscara monetária é exibido NaN na tela de listagem de produtos
        When acessar a tela de edição de produtos
        Then no campo valor informar valor com máscara monetária

    Scenario: Validar que ao cadastrar um produto sem fabricante e com preço zerado, o sistema redireciona para uma tela em branco
        When acessar a tela de edição de produtos
        Then realizar o cadastro valores invalidos
        And o sistema redireciona para uma tela em branco