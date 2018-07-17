const mongoose = require('mongoose');
const config = require('./local_config.json')

mongoose.connect(config.MongoDB_URI, {useNewUrlParser: true});