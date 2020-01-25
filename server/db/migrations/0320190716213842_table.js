
exports.up = function(knex, Promise) {
return knex.schema.createTable('majors', function (table){
  table.increments('id').notNullable()
  table.string('name_of_major').unique().notNullable()
  table.timestamp('created_at').notNullable()
  table.timestamp('updated_at').notNullable()
})
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('majors')
};
