module.exports = function (sequelize, DataTypes) {
    const Podcast = sequelize.define("Podcast", {
        pod_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
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
        },
        pod_website: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Podcast.associate = models => {
        Podcast.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Podcast;
};
