import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

// export async function getUsers() {
//   return connection('users').select()
// }

// export async function getUser(id) {
//   return connection('users').where('id', id).first()
// }

export async function getAllCustomers() {
  return await connection('customers')
    .join('orders', 'customers.id', 'orders.customer_id')
    .select(
      'customers.name',
      'orders.pizza',
      'orders.burgers',
      'orders.curry',
      'orders.lobster_caviar',
      'orders.croquembouche',
      'customers.id'
    )
}

// export async function editOrder(editedOrder) {
//   console.log(editedOrder)
//   return connection('orders')
//     .where('orders.id', editedOrder.id)
//     .update(editedOrder)
// }

// export async function addOrder(addNewOrder) {
//   return connection('orders')
//     .where('orders.id', addNewOrder.id)
//     .update(addNewOrder)
// }

export async function getAllOrders() {
  return await connection('customers')
    .join('orders', 'orders.id', 'customers.order_id')
    .select('orders.id', 'customers.name')
}

export async function getIndividualCustomer(id) {
  return await connection('customers')
    .join('orders', 'customers.id', 'orders.customer_id')
    .where('customers.id', id)
    .first()
    .select(
      'customers.name',
      'orders.pizza',
      'orders.burgers',
      'orders.curry',
      'orders.lobster_caviar',
      'orders.croquembouche',
      'customers.id'
    )
}
