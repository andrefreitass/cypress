
Feature: Realizar o login no site Kpages, e realizar o logout

   Feature Description: Como usuário do Kpages, preciso realizar o login, para visualizar a lista de produtos e depois realizar o logout
    
    Scenario: Acessar a área logada do Kpages
        Given que possuo acesso ao site klickpage
        When informar os dados obrigatórios
        Then o sistema realiza login com sucesso

    Scenario: Dados obrigatórios não informados         
        Given que possuo acesso ao site klickpage
        When não informar os dados obrigatórios
        Then o sistema não realiza login com sucesso

    Scenario: Usuário não informado        
        Given que possuo acesso ao site klickpage
        When não informar o usuário
        And informar a senha
        Then o sistema não realiza login com sucesso
        And e exibe uma mensagem de erro no campo de usuario

    Scenario: Senha não informada        
        Given que possuo acesso ao site klickpage
        When não informar a senha
        And informar o usuário
        Then o sistema não realiza login com sucesso
        And e exibe uma mensagem de erro no campo de senha

    Scenario: Realizar logout do sistema
        Given que possuo acesso ao site klickpage
        When informar os dados obrigatórios
        Then o sistema realiza login com sucesso
        And realizo o logout do sistema

        # Descrição dos defeitos

    Scenario: Validar mensagem de não preenchimento de usuário em inglês
        Given que possuo acesso ao site klickpage
        When não informar o usuário
        And informar a senha
        Then o sistema não realiza login com sucesso
        And exibe uma mensagem de erro no campo de usuario em inglês


    Scenario: Validar mensagem de não preenchimento da senha em inglês
        Given que possuo acesso ao site klickpage
        When não informar a senha
        And informar o usuário
        Then o sistema não realiza login com sucesso
        And exibe uma mensagem de erro no campo de senha em inglês

    Scenario: Validar a label username exibindo o usuário admin
        Given que possuo acesso ao site klickpage        
        Then e possivel visualizar a label username exibindo o usuário
        
    Scenario: Validar a label password exibindo o usuário any
        Given que possuo acesso ao site klickpage        
        Then e possivel visualizar a label password exibindo any

    
    Scenario: Validar dados preenchidos após logout
        Given que possuo acesso ao site klickpage
        When informar os dados obrigatórios
        Then o sistema realiza login com sucesso
        And realizo o logout do sistema
        And os campos username e password estão preenchidos

    Scenario: Validar que ao acessar o site do Klickpage o usuário já está preenchido
        Given que possuo acesso ao site klickpage        
         And o campo username está preenchido

    Scenario: Validar que é possivel enviar várias requisições quando a senha informada é menor que 6 digitos
        Given que possuo acesso ao site klickpage
        When informar uma senha menor que 6 digitos
        Then clicar várias vezes no botão login
        

    Scenario: Validar que é possivel enviar várias requisições quando o usuário não é informada
        Given que possuo acesso ao site klickpage
        When não informar o usuário
        And informar a senha
        Then clicar várias vezes no botão login



    

