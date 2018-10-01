module.exports = function (sequelize, DataTypes) {
    const Podcasts = sequelize.define("podcasts", {
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
    Podcasts.associate = models => {
        Podcast.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Podcasts;
};
