export async function seed(knex) {
  await knex('customers').del()
  await knex('orders').del()
}
