
exports.up = function(knex, Promise) {
  return knex.schema.createTable('housing', function(table){
    table.increments('id').notNullable()
    table.string('type_of_housing').notNullable()
    table.string('location').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('housing')
};
