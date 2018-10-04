module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        emails: {
           type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        }

    });
    User.associate = models => {
        User.hasMany(models.Review)
        User.hasMany(models.Podcast)
    }
    return User;
};
