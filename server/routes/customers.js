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

//function list all customers

//TODO: check function names from db

//set up try/catch function
//inside the try {},
//define const for customers/orders to await function
//define viewData for customers/orders
//render the data in the specific handlebars
//catch errors

//function list all orders

export default router
