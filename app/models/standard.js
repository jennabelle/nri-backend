// app/models/standard.js
var mongoose = require('mongoose');

var standardSchema = mongoose.Schema({
  standard_id: { type: String, required: true, index: { unique: true } },
  name: { type: String, required: false }
});

var Standard = mongoose.model('Standard', standardSchema);

module.exports = Standard;
