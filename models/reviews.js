module.exports = function (sequelize, DataTypes) {
    const Reviews = sequelize.define("reviews", {
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Reviews.associates = models => {
        Reviews.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Reviews;
};
