export async function seed(knex) {
  await knex('orders').insert([
    {
      customer_id: 1,
      pizza: 0,
      burgers: 1,
      curry: 5,
      lobster_caviar: 0,
      croquembouche: 1,
    },
    {
      customer_id: 2,
      pizza: 2,
      burgers: 0,
      curry: 0,
      lobster_caviar: 2,
      croquembouche: 3,
    },
    {
      customer_id: 3,
      pizza: 0,
      burgers: 1,
      curry: 2,
      lobster_caviar: 7,
      croquembouche: 2,
    },
    {
      customer_id: 4,
      pizza: 1,
      burgers: 2,
      curry: 1,
      lobster_caviar: 9,
      croquembouche: 5,
    },
  ])
}
