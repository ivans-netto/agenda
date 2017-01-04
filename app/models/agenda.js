/*global require, console, module*/
'use strict';

var mongoose = require('mongoose'),
    agendaTodoSchema;

agendaTodoSchema = mongoose.model('Agenda', {
    text: {
        type: String,
        default: ''
    }
});

module.exports = agendaTodoSchema;
