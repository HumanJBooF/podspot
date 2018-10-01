module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define("users", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Users.associate = models => {
        Users.hasMany(models.Reviews)
        Users.hasMany(models.Podcasts)
    }
    return Users;
};
