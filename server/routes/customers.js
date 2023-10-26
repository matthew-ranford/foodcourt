import express from 'express'
import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.render('index', { users: users })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

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
  try {
    const ordersArr = await db.getAllOrders() //check this function name
    const viewData = {
      groupName: 'Orders',
      items: ordersArr,
    }
    res.render('orders', viewData)
  } catch (e) {
    next(e)
  }
})

export default router
