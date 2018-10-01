module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    User.associate = models => {
        User.hasMany(models.Review)
        User.hasMany(models.Podcast)
    }
    return User;
};
