let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'educalab.id',
   user:        'CfSqkF2G8IFMMVv0',
   password:    'vx3OgVOHB4lHNGbu',
   database:    'SYYTC8OptA6xAqy6',
   port: 3307
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi ke database MySql Berhasil!');
   }
 })

module.exports = connection;
