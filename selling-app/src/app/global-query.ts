import gql from 'graphql-tag';

export const Items = gql`
  query {
    items{
      id
      name
      price
      description
    }
  }`;

export const Item = gql`
query {
  item(id: "1"){
    id
    name
    price
    description
  }
}`;

