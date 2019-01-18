var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLFloat = require('graphql').GraphQLFloat;

// Item Type
exports.itemType = new GraphQLObjectType({
    name: 'item',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: GraphQLString
            },
            price: {
                type: GraphQLFloat
            },
            description: {
                type: GraphQLString
            }
        }
    }
});