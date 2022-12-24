// const mongoose = require('mongoose');
// const { dbHost, dbPass, dbName, dbPort, dbUser } = require('../appp/config')

// mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);

// const db = mongoose.connection;
// // db.on('open', () => {
// // server.listen(port);
// // server.on('error', onError);
// // server.on('listening', onListining)
// //     console.log('oke')
// // })

// module.exports = db


const mongoose = require('mongoose')
const { dbHost, dbKey } = require('../app/config')

mongoose.connect(`mongodb://${dbHost}:${dbKey}@ccontainers-us-west-85.railway.app:7974`)
// mongo "mongodb://mongo:I29EctNkYfHnfejBcs2U@containers-us-west-85.railway.app:7974"
const db = mongoose.connection

module.exports = db