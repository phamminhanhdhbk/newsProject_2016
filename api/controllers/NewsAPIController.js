/**
 * NewsAPIController
 *
 * @description :: Server-side logic for managing newsapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

 json: function (request, response) {
 	var mang = ['Phạm Minh Ánh','Nghĩa Thắng','Nam','Việt Nam'];
 	console.log("Chào bạn Phạm minh Ánh");
    // response.json({time: new Date(),mang});
    return response.view('bootstrap');
  },
	
};

