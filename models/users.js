module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        googleID: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        emails: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    User.associate = function (models) {
        User.hasMany(models.Review, { as: 'review' })
    }
    return User;
};
