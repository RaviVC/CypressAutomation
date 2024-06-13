/// <reference types ="Cypress"
describe('API Tests', () => {
  let tokenID = 'Bearer 264cccb496c776c2ef9c5009e398836108de3035f31fa4d7cd0580f98de9284b'
  it('http GET requests', () => {
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public-api/users/2',
        headers: {
          'authorization': "Bearer " + tokenID
        }
    }).then((res)=>{
        expect(res.status).to.eq(200)
        //expect(res.body.name).to.eq("Arnesh Chattopadhyay")
    })
  })

  it('http POST requests', () => {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
           "name": "morpheus",
           "job": "leader"
        }
    }).then((res)=>{
        expect(res.status).to.eq(201)
        expect(res.body).has.property('name','morpheus')
        expect(res.body).has.property('job','leader')
    })
  })

  it('http DELETE requests', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/2'

    }).then((res)=>{
        expect(res.status).to.eq(204)
        //expect(res.body.name).to.eq("Arnesh Chattopadhyay")
    })
  })

})