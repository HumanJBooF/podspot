module.exports = function (sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Review.associates = models => {
        Review.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Review;
};
