export async function seed(knex) {
  await knex('customers').insert([
    { name: 'Raidon', order_id: 1 },
    { name: 'Matt', order_id: 2 },
    { name: 'Sofia', order_id: 3 },
    { name: 'Iggy', order_id: 4 },
  ])
}
