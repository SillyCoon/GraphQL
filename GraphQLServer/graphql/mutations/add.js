var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ItemType = require('../types/item');
var ItemModel = require('../../models/item');
var GraphQLFloat = require('graphql').GraphQLFloat;

exports.add = {
  type: ItemType.itemType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
        type: GraphQLFloat
    },
    description: {
        type: GraphQLString
    }
  },
  resolve(root, params) {
    const iModel = new ItemModel(params);
    const newItem = iModel.save();
    if (!newItem) {
      throw new Error('Error');
    }
    return newItem
  }
}