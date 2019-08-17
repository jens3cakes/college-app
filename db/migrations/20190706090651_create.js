
exports.up = function(knex, Promise) {
  return knex.schema.createTable('COLLEGES', function (table){
    table.increments('ID').notNullable()
    table.string('NAME').notNullable()
    table.string('ROAD_ADDRESS').notNullable()
    table.integer('CITY_ID').references('ID').inTable('US_CITIES')
    table.integer('STATE_ID').references('ID').inTable('US_STATES')
    table.string('WEBSITE').unique()
    table.integer('COST_ID').references('ID').inTable('COST_RANGES')
    table.integer('COLLEGE_SECTOR_STATUS_ID').references('ID').inTable('SECTOR_STATUSES')
    table.timestamp('CREATED_AT').notNullable()
    table.timestamp('UPDATED_AT').notNullable()

  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('COLLEGES')
};
