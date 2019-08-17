
exports.up = function(knex, Promise) {
    return knex.schema.createTable('US_STATES', function(table){
      table.increments('ID').notNullable()
      table.string('STATE_NAME').notNullable().unique()
      table.string('STATE_CODE').notNullable()
      table.timestamp('CREATED_AT')
      table.timestamp('UPDATED_AT')
      
    }
    )
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('US_STATES')
};
