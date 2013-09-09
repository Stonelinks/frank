var express = require("express");
var orm = require('orm');

module.exports = {
  person: {
    attributes: {
      name      : String,
      surname   : String,
      age       : Number,
      // male      : Boolean,
      // continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
      // photo     : Buffer, // BLOB/BINARY
      // data      : Object // JSON encoded
    },
    methods: {
      fullName: function() {
        return this.name + ' ' + this.surname;
      }
    },
    validations: {
      age: orm.enforce.ranges.number(18, undefined, "under-age")
    }
  }
}
