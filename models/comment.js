"use strict"

module.exports=function(sequelize,DataTypes){
	var Comment=sequelize.define("comment",{
		post_id:DataTypes.INTEGER,
		user_id:DataTypes.INTEGER,
		comment:DataTypes.STRING
	});
	return Comment;
}