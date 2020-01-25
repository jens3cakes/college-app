
exports.up = function(knex, Promise) {
  return knex.schema.createTable('costs', function(table){
    table.increments('id')
    table.integer('cost_ranges').notNullable()
    table.string('approx_ranges', 25).notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('costs')
};
