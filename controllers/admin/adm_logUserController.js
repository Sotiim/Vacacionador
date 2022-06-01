const controller = {};


/**
* Desarrollador: Cesar Alberto GarcÃ­a Aranda
*   Parametros: req, almacena la conexión con la base de datos.
*               res, respuesta al ejecutar una sentencia query.   
*Función que se encarga de listar todos los elementos de la tabla LogUser
*/
controller.list = (req, res) => {
  if(req.session.loggedin){
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM logUser', (err, logUsers) => {
     if (err) {
      res.json(err);
     }
     res.render('admin/adm_viewLogUser', {
        data: logUsers
     });
    });
  });
}else{
  res.redirect('/');
}
};


module.exports = controller;
