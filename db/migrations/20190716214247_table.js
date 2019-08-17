
exports.up = function(knex, Promise) {
  return knex.schema.createTable('HOUSING', function(table){
    table.increments('ID').notNullable()
    table.string('TYPE_OF_HOUSING').notNullable()
    table.string('LOCATION').notNullable()
    table.timestamp('CREATED_AT')
    table.timestamp('UPDATED_AT')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('HOUSING')
};
