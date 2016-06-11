module.exports = function(app) {
var MongoDB = app.dataSources.MongoDB;

MongoDB.automigrate('customer', function(err) {
   if (err) throw (err);
   var customer = app.models.customer;

  customer.find({ where: { username: 'admin' }, limit: 1 }, function (err, users) {

      if (!users) {


   customer.create([
    {username: 'admin', email: 'john@doe.com', password: '1234567'},
  ], function(err, users) {
    if (err) throw (err);
     var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw (err);
       //make admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) throw (err);
      });
    });
  });
}
      else {

      }

    });
});

};
