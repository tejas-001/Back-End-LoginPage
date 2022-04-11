const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/signup', (request,response)=>{
    console.log('User is siginin up')
    const { firstName, lastName, age, dob, address} = request.body
    const query = `insert into User (firstName, lastName, age, dob, address) values (?,?,?,?,?)`
    const params = [firstName, lastName, age, dob, address]
    db.execute(query, params, (error,result)=> {
        if(error){
            console.log(error)
        }else {
            console.log(result)
        }
        response.send('done')
    })
})

router.put('/update/:id', (request, response) => {
    console.log('User information is updated')
    const { id } = request.params
    const {firstName,lastName,age,dob,address} = request.body
    const query = `UPDATE User SET firstName = ?,lastName = ?,age = ?,dob = ?, address = ? WHERE id = ${id}`
    const params = [firstName, lastName, age, dob, address]
    db.execute(query, params, (error,result)=> {
        if(error){
            console.log(error)
        }else {
            console.log(result)
        }
        response.send('done')
    })
})

router.get('/getall', (request, response) => {
    console.log('All information is displayed')
    const query = `SELECT * from User`
    db.execute(query,(error,result) => {
        if(error) {
           response.send(error)
        }
        else {
            response.send(result)
        }

    })
})
 router.delete('/delete/:id', (request,response)=> {
     const { id } = request.params
     const query = `DELETE from User WHERE id = ${id}`
     db.execute(query,[], (error,result) => {
         if(error) {
             console.log(error)
        }
        else {
            console.log(result)
        }
        response.send()
     })
 })
 router.get('/getbyid/:id', (request, response) => {
    const { id } = request.params
    console.log('All information is displayed')
    const query = `SELECT * from User WHERE id = ${id}`
    db.execute(query,[],(error,result) => {
        if(error) {
           response.send(error)
        }
        else {
            response.send(result)
        }

    })
})
module.exports = router