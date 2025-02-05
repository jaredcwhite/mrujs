import { assert } from '@esm-bundle/chai'
import { Csrf, getToken, getParam } from '../../../src/csrf.js'

describe('Csrf', () => {
  it('Should properly set the authenticity token value in the form', () => {
    const csrf = Csrf()
    csrf.connect()
    assert.equal(getToken(), '1234')
  })

  it('Should properly find the csrf-param', () => {
    const csrf = Csrf()
    csrf.connect()
    assert.equal(getParam(), 'authenticity_token')
  })

  it('Should properly set all authenticity_tokens to 1234', () => {
    const authenticityInputs = document.querySelectorAll("form input[name='authenticity_token']")
    assert.equal(authenticityInputs.length, 2)
    authenticityInputs.forEach((el) => {
      assert.equal((el as HTMLInputElement).value, '1234')
    })
  })
})
