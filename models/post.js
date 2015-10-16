"use strict"

module.exports=function(sequelize,DataTypes){
	var Post=sequelize.define("post",{
		//post_id:DataTypes.INTEGER,
		post:DataTypes.STRING,
		user_id:DataTypes.INTEGER
	});
	return Post;
};