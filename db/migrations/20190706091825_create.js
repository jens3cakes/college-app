
exports.up = function (knex, Promise) {
  return knex.schema.createTable('sector_statuses', function (table) {
    table.increments('id').unique()
    table.string('status').unique().notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })

};

exports.down = function (knex) {
  return knex.schema.dropTable('sector_statuses')
};
