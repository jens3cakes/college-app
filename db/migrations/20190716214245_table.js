
exports.up = function(knex, Promise) {
  return knex.schema.createTable('CAMPUS_LIFE', function(table){
    table.increments('ID').notNullable()
    table.string('TYPE_OF_LIFESTYLE').unique().notNullable()
    table.timestamp('CREATED_AT').notNullable()
    table.timestamp('UPDATED_AT').notNullable()
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('CAMPUS_LIFE')
};
