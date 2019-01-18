var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var ItemModel = require('../../models/item');
var itemType = require('../types/item').itemType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      items: {
        type: new GraphQLList(itemType),
        resolve: function () {
          const items = ItemModel.find().exec();
          if (!items) {
            throw new Error('Error')
          }
          return items
        }
      }
    }
  }
});
