var mysql=require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'Ourtime',
    password: '526527853',
    database: 'baidunews'
});



module.exports = connection;
