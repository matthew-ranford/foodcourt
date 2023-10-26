export async function up(knex) {
  await knex.schema.createTable('orders', (table) => {
    table.increments('id').primary()
    table.integer('customer_id')
    table.integer('pizza')
    table.integer('burgers')
    table.integer('curry')
    table.integer('lobster caviar')
    table.integer('croquembouche')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('orders')
}
