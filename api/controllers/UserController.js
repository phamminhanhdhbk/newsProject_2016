/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {



  /**
   * `UserController.create()`
   */

updateuser:function(req,res)
{

// console.log(req.params.all());
var id =req.param('id');
var data = req.params.all();

    
User.update({id:id},data).exec(function afterwards(err, updated){
  if (err)
   {
    return res.negotiate(err);
  }
  else
  {
  	console.log('Thành Cong');
  	return res.json('Thành Công rồi bạn');
  }
  //console.log('Updated user to have name ' + updated[0].name);
});

},

   id_post:function(req,res)
   {

   	var id =req.param('id');
   	User.find({id:id}).exec(function (err, usersNamedFinn)
   	{
   		if (err)
   		{
   			return res.serverError(err);
   		}
   		else
   		{
   			console.log(usersNamedFinn);
   			return res.json(usersNamedFinn);

   		}
   		
   	});


   },

   create: function (req, res)
   {

   	return res.view('create');
   },

  //  post: function (req, res)
  //  {

  //   var username = req.param('name');
  //   var password = req.param('sex');
  //   var all = req.params.all();
  //   console.log(all);
  //   return res.view('create');
  

  // },

  post: function(req,res,next)
  {

  	User.create(req.params.all()).exec(function (err, finn)
  	{
  		if (err)
  		{ 
  			console.log(err);

  			return res.serverError(err);
  		}
  		else
  		{
  			console.log('Bạn đã thêm'+'req.params.all()'+'Thành Công');
  			return res.view('create');
  			return res.redirect('list');
  		}



  	});


  },




  /**
   * `UserController.update()`
   */
   update: function (req, res) 
   {
   	return res.json({
   		todo: 'update() is not implemented yet!'
   	});
   },


  /**
   * `UserController.list()`
   */
   list: function (req, res) 
   {

   	User.find().exec(function (err, applicant){
   		if (err) 
   		{
   			return res.serverError(err);
   		}
   		else
   		{
   			var dem = 1;
   			// console.log(applicant);

   			return res.view({
   				layout:'user/listbootstrap',
   				data :applicant,
   				dem :dem,
   			});
   		}
   		
   	});

   },


// Action Count_user
countuser : function(req,res)
{
	User.count({name:'Phạm Minh Ánh 1'}).exec(function countCB(error, found) {

		if (error)
		{
			return res.json(error);
		}
		else 
		{
			return res.json(found);

		}

	});

},


findlike : function(req ,res)
{
	var name = "Phạm";
	var location = "Quảng";

	User.find({ 
		or :[ 
		{ like: { name: '%'+name+'%' } }, { like: { location : '%'+location+'%' } } 
		] 
	} , function ( err, users )
	{
		return res.json(users);
	});
	
},

updateget: function(req ,res)
{
	var id =req.param('id');
// var id = parseInt(id);
User.find({id:id}).exec(function (err, usersNamedFinn){
	if (err) 
	{
		return res.serverError(err);
	}
	console.log(usersNamedFinn);
	return res.json(usersNamedFinn);
});


},

updatepost: function(req ,res)
{


	User.update(req.params.all()).exec(function afterwards(err, updated){
		if (err) {
			return res.negotiate(err);
		}
  //console.log('Updated user to have name ' + updated[0].name);
});


},







};

