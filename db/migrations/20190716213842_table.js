
exports.up = function(knex, Promise) {
return knex.schema.createTable('MAJORS', function (table){
  table.increments('ID').notNullable()
  table.string('NAME_OF_MAJOR').unique().notNullable()
  table.timestamp('CREATED_AT').notNullable()
  table.timestamp('UPDATED_AT').notNullable()
})
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('MAJORS')
};
