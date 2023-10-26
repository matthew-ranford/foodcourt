import express from 'express'
import * as db from '../db/db.js'

const router = express.Router()

//function to list all customers

//TODO: check function names from db

//set up try/catch function
//inside the try {},
//define const for customers/orders to await function
//define viewData for customers/orders
//render the data in the specific handlebars
//catch errors

router.get('/', async (req, res, next) => {
  const customersArr = await db.getAllCustomers() //check this function name
  const customers = { customersArr }
  console.log(customers)
  res.render('index', customers)
})

//function to list all orders

router.get('/orders', async (req, res, next) => {
  const ordersArr = await db.getAllOrders() //check this function name
  const orders = { ordersArr }
  res.render('orders', orders)
})

//route for individual customer
router.get('/:name', async (req, res, next) => {
  const name = req.params.name
  const customersArr = await db.getIndividualCustomer() //check this function name
  const customers = { customersArr }
  console.log(customers)
  res.render('individual_customer', customers)
})

export default router
