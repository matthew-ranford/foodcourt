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
  try {
    const customersArr = await db.getAllCustomers() //check this function name
    const viewData = {
      groupName: 'Customers',
      items: customersArr,
    }
    res.render('index', viewData)
  } catch (e) {
    next(e)
  }
})

//function to list all orders

router.get('/orders', async (req, res, next) => {
  const ordersArr = await db.getAllOrders() //check this function name
  const orders = { ordersArr }
  console.log(orders)
  res.render('orders', orders)

})

export default router
