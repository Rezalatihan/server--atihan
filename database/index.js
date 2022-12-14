const mongoose = require('mongoose');
const { dbHost, dbPass, dbName, dbPort, dbUser } = require('../appp/config')

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
const db = mongoose.connection;
// db.on('open', () => {
// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListining)
//     console.log('oke')
// })

module.exports = db