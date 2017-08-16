if (process.env.NODE_ENV === 'production'){
    //we are in production use env variables
    module.exports = require('./prod');
} else {
    //we are in development use dev.js
    module.exports = require('./dev');
}