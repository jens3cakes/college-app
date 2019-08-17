
exports.up = function(knex, Promise) {
  return knex.schema.createTable('COSTS', function(table){
    table.increments('ID')
    table.integers('COST-RANGES').notNullable()
    table.string('APPROX_RANGES', 25).notNullable()
    table.timestamp('CREATED_AT')
    table.timestamp('UPDATED_AT')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('COSTS')
};
