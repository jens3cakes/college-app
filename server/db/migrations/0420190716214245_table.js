
exports.up = function(knex, Promise) {
  return knex.schema.createTable('campus_life', function(table){
    table.increments('id').notNullable()
    table.string('type_of_lifestyle').unique().notNullable()
    table.timestamp('created_at').notNullable()
    table.timestamp('updated_at').notNullable()
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('campus_life')
};
