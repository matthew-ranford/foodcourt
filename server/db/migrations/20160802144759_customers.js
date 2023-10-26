export async function up(knex) {
  await knex.schema.createTable('customers', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('order_id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('customers')
}
