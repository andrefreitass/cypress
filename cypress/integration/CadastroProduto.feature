Feature: Realizar o cadastro de novos produtos e poder visualizar a listagem dos produtos

   Feature Description: Como usuário do Kpages, preciso cadastrar novos produtos, para visualizar em uma lista de produtos
    
    Scenario: Realizar o cadastro do produto Apple
        When acessar a tela de cadastro de produtos
        Then realizar o cadastro dos produtos apple com sucesso 

    Scenario: Realizar o cadastro do produto Motorola
        When acessar a tela de cadastro de produtos
        Then realizar o cadastro dos produtos motorola com sucesso 

    Scenario: Realizar o cadastro do produto Samsung
        When acessar a tela de cadastro de produtos
        Then realizar o cadastro dos produtos samsung com sucesso 

    Scenario: Descrição não informada
        When acessar a tela de cadastro de produtos
        Then não informar a descrição
        And o sistema exibe uma mensagem para usuário informando a obrigatoriedade do campo descrição

    Scenario: Quantidade não informada
        When acessar a tela de cadastro de produtos
        Then não informar a quantidade
        And o sistema exibe uma mensagem para usuário informando a obrigatoriedade do campo quantidade
        
        # Descrição dos defeitos

    Scenario: Validar o tamanho maximo de caracteres no input descrição
        When acessar a tela de cadastro de produtos
        Then informar mais de 60 caracteres no campo descrição

    Scenario: Validar o tamanho minimo de caracteres no input descrição
        When acessar a tela de cadastro de produtos
        Then informar 1 caractere no campo descrição

    Scenario: Validar que o campo fabricante não é obrigatório
        When acessar a tela de cadastro de produtos
        Then realizar o cadastro e não informar o fabricante

    Scenario: Validar que o campo quantidade pode ser negativo
        When acessar a tela de cadastro de produtos
        Then no campo quantidade informar um valor negativo

    Scenario: Validar que o campo valor permite salvar um produto com valor zero
        When acessar a tela de cadastro de produtos
        Then no campo valor informar um valor zero
    
    Scenario: Validar que o campo preço deve possuir máscara 
        When acessar a tela de cadastro de produtos
        Then no campo valor informar um valor maior que zero

    Scenario: Validar que o campo preço permite informar valores diferente de númericos
        When acessar a tela de cadastro de produtos
        Then no campo valor informar carascteres especiais

        
    Scenario: Validar que é possivel cadastrar um produto com a mesma descrição
        When acessar a tela de cadastro de produtos
        Then no campo descrição informar valor que já exista

    Scenario: Validar que ao informar no campo valor um valor com máscara monetária é exibido NaN na tela de listagem de produtos
        When acessar a tela de cadastro de produtos
        Then no campo valor informar valor com máscara monetária

    Scenario: Validar que ao cadastrar um produto não é exibido o ID 
        When acessar a tela de cadastro de produtos
        Then realizar o cadastro
        And na tela de listagem não é exibido ao ID do produto

    Scenario: Validar que ao cadastrar um produto sem fabricante e com preço zerado, o sistema redireciona para uma tela em branco
        When acessar a tela de cadastro de produtos
        Then realizar o cadastro valores invalidos
        And o sistema redireciona para uma tela em branco


    