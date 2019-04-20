var User = db.sequelize.define(
  'users',    {
        user_id: {
          type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        first_name: {type: Sequelize.STRING},
        last_name: {type: Sequelize.STRING},
        user_name: {type: Sequelize.STRING},
        user_password: {type: Sequelize.STRING}
    },
    {
        timestamps: false
    }
);

User.sync().success(function(){
    console.log("table created")
}).error(function(error){
    console.log(err);
})


var Favorite = db.sequelize.define("favorites",{
    user_id: { type: db.Sequelize.INTEGER },
    recipe_id: { type: db.Sequelize.INTEGER},
});

Favorite.sync().success(function(){
    console.log("table created")
}).error(function(error){
    console.log(err);
})


User.hasMany(Favorite, {foreignKey: 'user_id'})
Favorite.belongsTo(User, {foreignKey: 'user_id'})
