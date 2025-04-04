# qaAgiTest

# Cypress Test Automation

## 📌 Descrição
Este é um projeto de automação de testes utilizando o [Cypress](https://www.cypress.io/), uma ferramenta moderna para testes end-to-end de aplicações web.

## 🚀 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [VS Code](https://code.visualstudio.com/)

## 📂 Estrutura do Projeto
```
projeto-cypress/
├── cypress/
│   ├── tests/            # Testes automatizados
│   ├── fixtures/         # Dados de teste
│   ├── support/          # Funções auxiliares
│   ├── plugins/          # Configuração de plugins
├── cypress.config.js     # Arquivo de configuração do Cypress
├── package.json         # Dependências do projeto
├── README.md            # Documentação do projeto
```

## 🛠️ Configuração e Instalação

### 1️⃣ Pré-requisitos
Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 2️⃣ Instalação do Cypress
Clone este repositório e instale as dependências:
- npm install


### 3️⃣ Executando o Cypress
- Para abrir a interface gráfica do Cypress:
  - npx cypress open

## 📝 Configurações Adicionais
- Caso precise modificar configurações do Cypress, edite o arquivo `cypress.config.js`.

## 🔄 Uso do Wait Until
Para esperar um elemento com `waitUntil`, instale o pacote auxiliar:
npm install -D cypress-wait-until
E importe no `cypress/support/commands.js`:
import 'cypress-wait-until';

## 📌 Contato
Caso tenha dúvidas, sinta-se à vontade para entrar em contato! 🚀

