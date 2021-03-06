'use strict';

module.exports = (sequelize, DataTypes) => {
  const Topics = sequelize.define('Topics', {
    topicName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });

  Topics.associate = function (models) {
    this.belongsTo(models.Users, {
      foreignKey: 'userId'
    });

    // associations for posts
    this.hasMany(models.Posts, {
      foreignKey: 'topicId'
    });

    // association for tag
    this.belongsToMany(models.Tags, {
      through: 'TopicTag',
      foreignKey: 'topicId',
    });
  };

  return Topics;
};
