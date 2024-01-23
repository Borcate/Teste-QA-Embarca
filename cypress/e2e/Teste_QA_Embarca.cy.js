const login = require('../fixtures/login.json')
import testes from '../support/Testes/testes'

describe('Teste QA Embarca', () => {

  beforeEach('Login', () => {
    cy.visit(login.baseUrl)

    cy.get('[href="/sessions/new"] > .text-white').click()
    cy.get('#email').type(login.email, {log: false})
    cy.get('#pass_log_id').type(login.senha, {log: false})
    cy.contains('form > .btn', 'Entrar').click()
    //não realiza login no ambiente automatizado, por isso o teste de dados do passageiro não irão funcionar
    //POST 429
    //POST 403
  })
  it('Busca por rota Caiobá - PR / Matinhos - PR', () => {
    //não possui serviços para essa data 
    //após buscar pelas rotas os testes não irão continuar
  testes.busca_por_rota1()
  })

  it('Busca por rota Matinhos - PR / Caiobá - PR ', () => {
    //rotas trocadas só para realizar os testes
  testes.busca_por_rota2()
  })

})