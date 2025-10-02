🚀 Automação de Testes de API com Cypress + CI/CD
<img alt="End-to-end tests" src="https://github.com/seu-usuario/projetoCypresCICD/actions/workflows/ci.yml/badge.svg">

📋 Sobre o Projeto
Este projeto implementa automação de testes de API utilizando Cypress para validar operações CRUD (Create, Read, Update, Delete) em uma API de empresas. Além disso, utiliza CI/CD com GitHub Actions para execução automática dos testes a cada commit.

🛠️ Tecnologias Utilizadas
Cypress - Framework de testes end-to-end
JavaScript - Linguagem de programação
GitHub Actions - CI/CD para automação
Node.js - Ambiente de execução
🎯 Funcionalidades Testadas
📊 Cenários de Teste

1. Create & Read Company
   ✅ Criação de empresa via API POST
   ✅ Validação do status 201 (Created)
   ✅ Verificação da propriedade id retornada
   ✅ Busca da empresa criada via GET
   ✅ Validação dos dados retornados
2. Create & Delete Company
   ✅ Criação de empresa para teste de exclusão
   ✅ Exclusão via DELETE endpoint
   ✅ Validação do status 204 (No Content)
   ✅ Confirmação da operação
   🔧 Estrutura do Projeto
   🚀 Como Executar
   Pré-requisitos
   Node.js 16+
   npm ou yarn
   Instalação
   Execução dos Testes
   🔄 CI/CD - GitHub Actions
   🚦 Execução Automática
   A cada commit no repositório, os testes são executados automaticamente!

Trigger Events:
✅ Push para branches main ou master
✅ Pull Requests
✅ Execução manual via GitHub Actions
Pipeline Steps:
Checkout do código
Setup Node.js 18
Instalação de dependências
Execução dos testes Cypress
Upload de screenshots/vídeos em caso de falha
📊 Relatórios
Screenshots automáticos em caso de falha
Vídeos de execução dos testes
Logs detalhados no GitHub Actions
Status badges no README
🌐 API Testada
Base URL: https://corujice-vendas-api.onrender.com

Endpoints:
POST /companies - Criar empresa
GET /companies/{id} - Buscar empresa
DELETE /companies/{id} - Deletar empresa
Payload de Exemplo:
📈 Resultados dos Testes
✅ Últimos Resultados:
2 cenários implementados
100% de cobertura das operações CRUD básicas
Emails únicos gerados automaticamente
Validações completas de status e propriedades
📊 Métricas:
⏱️ Tempo médio: ~3-4 segundos
🎯 Taxa de sucesso: 100%
🔄 Execução: A cada commit
