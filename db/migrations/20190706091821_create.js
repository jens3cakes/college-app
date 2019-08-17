
exports.up = function(knex, Promise) {
  return knex.schema.createTable('CITIES', function(table){
    table.increments('ID').notNullable()
    table.string('CITY').notNullable()
    table.string('STATE_ID').references('ID').inTable('US_STATES')
    table.timestamp('CREATED_AT').notNullable()
    table.timestamp('UPDATED_AT')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('CITIES')
};
