const { table } = require("../db");

exports.up = knex =>
    knex.schema.createTable("playlists", tbl => {
        tbl.increments('playlists');
        tbl
            .text('title')
            .notNullable()
            .unique()
        tbl.text('spotify_code')
            .notNullable()
    });

exports.down = knex => knex.schema.dropTableIfExists("playlists");