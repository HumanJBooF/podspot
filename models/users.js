module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        googleID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emails: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        online: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    });
    User.associate = models => {
        User.hasMany(models.Review)
        User.hasMany(models.Podcast)
    }
    return User;
};
