var somebd;
var someWebAPI;
var token;
var security;

someWebAPI.getJ('/login')
          .then(token.checkToken(req.token))
		  .then(somebd.find(username))
		  .then(security.ckeckPassword(user.password,req.password))
		  .then(res.send(userData))
		  .success(function(){})
		  .error(function(){});