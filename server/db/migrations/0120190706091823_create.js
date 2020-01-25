
exports.up = function(knex, Promise) {
    return knex.schema.createTable('us_states', function(table){
      table.increments('id').notNullable()
      table.string('state_name').notNullable().unique()
      table.string('state_code').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
      
    }
    )
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('us_states')
};
