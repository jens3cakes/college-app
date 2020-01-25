
exports.up = function(knex, Promise) {
  return knex.schema.createTable('us_cities', function(table){
    table.increments('id').notNullable()
    table.string('city').notNullable()
    table.string('state_name').notNullable()
    table.integer('state_id').references('id').inTable('us_states')
    table.timestamp('created_at').notNullable()
    table.timestamp('updated_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('us_cities')
};
