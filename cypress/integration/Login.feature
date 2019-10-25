Feature: Realizar Login no site Kpages

    Scenario: Realizar login com sucesso 
        Given que possuo acesso ao site klickpage
        When informar os dados obrigatorios
        Then o sistema realiza login com sucesso

    Scenario: Dados obrigatorios nao informados         
        Given que possuo acesso ao site klickpage
        When nao informar os dados obrigatorios
        Then o sistema nao realiza login com sucesso

    Scenario: Usuario nao informada        
        Given que possuo acesso ao site klickpage
        When nao informar o Usuario
        And informo a senha
        Then o sistema nao realiza login com sucesso


    Scenario: Senha nao informada        
        Given que possuo acesso ao site klickpage
        When nao informar a senha
        And informo o usuario
        Then o sistema nao realiza login com sucesso