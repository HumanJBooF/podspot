module.exports = function (sequelize, DataTypes) {
    const Podcast = sequelize.define("Podcast", {
        pod_link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Podcast.associate = models => {
        Podcast.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
        Podcast.hasMany(models.Review)
    }
    return Podcast;
};