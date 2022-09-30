const Sequelize = require("sequelize");
const {DataTypes} = Sequelize;

const sequelize = new Sequelize('sequelizedata', 'root', 'root',{

    host: 'localhost',
    dialect: 'mysql'

});


const User = sequelize.define('user',{

    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [4,14]
        }
    },
    password: {
        
        type: DataTypes.STRING,
        allowNull: false    
    },
    age: {
        
        type: DataTypes.INTEGER,
        defaultValue: 21

    },
    
    weight: {
        
        type: DataTypes.FLOAT,
        defaultValue: 45.57

    }
},
{
    freezeTableName: true,
    timestamps: false

}); 


User.sync({alter : true}).then(() => {
    //works with our updated table 
     /*
    return User.create({

        username: 'momin',
        password: '2ndyear',
        age:'18',
        weight: '60'

    });
    */
   // return User.findAll({ attributes: ['username', 'password', 'user_id', 'age']});
  // return User.findAll({ attributes: [[sequelize.fn('SUM', sequelize.col('age')) , 'howOld']]});

}).then((data) =>{

    data.forEach((element) => {

        console.log(element.toJSON());

    })


 /*   console.log("USER ADDED TO DATABASE! ");
    data.username = 'pizza';
    data.age = '55';
    return data.save({fields: ['age']});
*/

}).catch((err) =>{

        
    console.log(err);
})