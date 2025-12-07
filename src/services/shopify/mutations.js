// mutations.js - GraphQL Queries
export const CUSTOMER_LOGIN = `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        message
      }
    }
  }
`;

export const CUSTOMER_CREATE = `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        firstName
        lastName
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const CUSTOMER_DETAILS = `
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      email
      firstName
      lastName
      phone
      defaultAddress {
        id
        address1
        city
        country
        province
        zip
      }
    }
  }
`;

export const PASSWORD_RESET_REQUEST = `
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      userErrors {
        field
        message
      }
    }
  }
`;

export const FETCH_COLLECTIONS = `
  query fetchCollections($collectionIds: [ID!]!) {
    nodes(ids: $collectionIds) {
      ... on Collection {
        id
        title
        handle
        description
        image {
          src
        }
        products(first: 20) {
          edges {
            node {
              id
              title
              tags
              handle
              productType
              publishedAt
              tags
              images(first: 1) {
                edges {
                  node {
                    transformedSrc(maxWidth: 500, maxHeight: 500)
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              compareAtPriceRange {
                maxVariantPrice {
                  amount
                }
              }
              variants(first: 50) {
                edges {
                  node {
                    id
                    availableForSale
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
