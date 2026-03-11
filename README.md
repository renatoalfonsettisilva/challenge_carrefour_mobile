Projeto de Automação de Testes Mobile

Este projeto tem como objetivo automatizar os testes de um aplicativo mobile, utilizando as tecnologias e ferramentas recomendadas. A automação cobre as principais funcionalidades do aplicativo, garantindo a qualidade e a confiabilidade do software.

Tecnologias Utilizadas:

- Linguagem: JavaScript
- Framework: WebdriverIO
- Biblioteca: Appium
- Gerenciador de Testes: Mocha
- Asserts: Chai
- Relatórios: Allure Report ou ExtentReport
- CI/CD: GitLab CI/CD
- Cloud de Dispositivos: BrowserStack
- Controle de Versão: Git

Estrutura do Projeto:

/mobile-automation │ ├── /tests # Diretório contendo os testes automatizados │ ├── login.test.js # Testes de login │ ├── cadastro.test.js # Testes de cadastro │ ├── feedback.test.js # Testes de feedback │ └── ... │ ├── /pages # Diretório contendo os Page Objects │ ├── LoginPage.js # Page Object da tela de login │ ├── CadastroPage.js # Page Object da tela de cadastro │ └── ... │ ├── /data # Diretório para arquivos de dados │ └── testData.json # Arquivo JSON com dados de teste │ ├── wdio.conf.js # Arquivo de configuração do WebdriverIO ├── .gitlab-ci.yml # Configuração do pipeline CI/CD └── package.json # Dependências do projeto

Cenários de Teste
O projeto cobre os seguintes cenários de teste:

1. Cadastro de um novo usuário
2. Login com credenciais válidas
3. Mensagem de erro para login inválido
4. Navegação entre a tela inicial e a tela de configurações
5. Preenchimento do formulário de feedback
6. Mensagem de erro ao enviar formulário vazio
7. Logout do usuário
8. Alteração de configurações do usuário
9. Verificação de dados do usuário
10. Lidar com a conexão de internet perdida

Execução dos Testes
Pré-requisitos:

1. Instale o Node.js e o npm.
2. Configure o Appium e os emuladores/ simuladores de dispositivos.
3. Crie uma conta no BrowserStack (opcional) para testar em dispositivos reais.

Instalação:
Clone o repositório e instale as dependências:

bash
git clone https://github.com/seu-usuario/mobile-automation.git
cd mobile-automation
npm install

Executar os Testes
Para executar os testes, use o seguinte comando:
npx wdio wdio.conf.js

Geração de Relatórios
Os relatórios de testes são gerados automaticamente após a execução dos testes. Os relatórios podem ser encontrados na pasta allure-results (se utilizando Allure) ou conforme configurado no ExtentReport.

Para visualizar o relatório Allure, execute:
allure serve allure-results

Integração CI/CD
O projeto está configurado para executar testes automaticamente em cada commit ou merge request através do GitLab CI/CD. O pipeline está definido no arquivo .gitlab-ci.yml.
