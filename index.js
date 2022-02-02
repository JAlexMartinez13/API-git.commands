const { application, request, response } = require('express')
const express = require('express')

const app = express()


const cars = [
    { id: 1, make: 'Tesla', year: 2021, model: 'X'},
    { id: 2, make: 'Subaru', year: 2020, model: 'Sti'},
    { id: 3, make: 'Honda', year: 2019, model: 'Civic'},
    { id: 4, make: 'Kia', year: 2022, model: 'Soul'},
    { id: 5, make: 'Ford', year: 200, model: 'F-150'}
]

// ############## get all cars ##############
app.get('/', (req, res)=>{
    res.send(cars)
})

// ######### get only one car ###########
app.get('/car/:carId', (req, res) => {
    
    console.log('this is my request.params +++++', req.params)
// ########## extracting cardId from req.parmas #########
    const {carId} = req.params

    res.send(cars[carId])

})




app.listen(3000, () =>{
    console.log('connected to port 3000')
})