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
const { dbHost, dbKey } = require('../appp/config')

mongoose.connect(`mongodb://${dbHost}:${dbKey}@containers-us-west-113.railway.app:7663`)
// mongodb://mongo:PljU9JQRmD9g86C3cTCc@containers-us-west-113.railway.app:7663
const db = mongoose.connection

module.exports = db