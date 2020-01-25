
exports.up = function(knex, Promise) {
  return knex.schema.createTable('colleges', function (table){
    table.increments('id').notNullable()
    table.string('name').notNullable()
    table.string('road_address').notNullable()
    table.integer('city_id').references('id').inTable('us_cities')
    table.integer('state_id').references('id').inTable('us_states')
    table.string('website').unique()
    table.integer('cost_id').references('id').inTable('costs')
    table.integer('college_sector_status_id').references('id').inTable('sector_statuses')
    table.timestamp('created_at').notNullable()
    table.timestamp('updated_at').notNullable()

  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('colleges')
};
