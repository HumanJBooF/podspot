module.exports = function (sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        podTitle: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    Review.associates = function (models) {
        Review.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Review;
};

