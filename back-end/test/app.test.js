
const assert=require("assert")
const chai=require("chai")
const chaiHttp=require("chai-http")
chai.use(chaiHttp)
const expect=chai.expect
const app=require("../app.js")


describe("Contact page test:", function(){
    it("receives ", done=>[
        chai.request(app)
        .post("/contact")
        .send({"category":"Login issue", "description": "I have an issue"})
        .end((err, res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
        done()
        })
    ])
})

