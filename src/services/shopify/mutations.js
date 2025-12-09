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
      addresses(first: 10) {
        edge {
          node {
            id
            firstName
            lastName
            address1
            address2
            city
            province
            country
            zip
            phone
          }
        }
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

export const GET_CUSTOMER_ADDRESSES = `
  query GetCustomerAddresses($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      addresses(first: 10) {
        edges {
          node {
            id
            firstName
            lastName
            address1
            address2
            city
            province
            country
            zip
            phone
          }
        }
      }
    }
  }
`;

export const CREATE_CUSTOMER_ADDRESS = `
  mutation CreateCustomerAddress(
    $customerAccessToken: String!
    $address: MailingAddressInput!
  ) {
    customerAddressCreate(
      customerAccessToken: $customerAccessToken
      address: $address
    ) {
      customerAddress {
        id
        firstName
        lastName
        address1
        address2
        city
        province
        country
        zip
        phone
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const UPDATE_CUSTOMER_ADDRESS = `
  mutation UpdateCustomerAddress(
    $customerAccessToken: String!
    $id: ID!
    $address: MailingAddressInput!
  ) {
    customerAddressUpdate(
      customerAccessToken: $customerAccessToken
      id: $id
      address: $address
    ) {
      customerAddress {
        id
        firstName
        lastName
        company
        address1
        address2
        city
        provinceCode
        country
        zip
        phone
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const DELETE_CUSTOMER_ADDRESS = `
  mutation DeleteCustomerAddress(
    $customerAccessToken: String!
    $id: ID!
  ) {
    customerAddressDelete(
      customerAccessToken: $customerAccessToken
      id: $id
    ) {
      deletedCustomerAddressId
      userErrors {
        field
        message
      }
    }
  }
`;

export const GET_ORDER_DETAILS = `
  query GetCustomerOrders($customerAccessToken: String!) {
        customer(customerAccessToken: $customerAccessToken) {
          email
          orders(first: 100, reverse: true) {
            edges {
              node {
                orderNumber
                processedAt
                financialStatus
                fulfillmentStatus
                canceledAt
                statusUrl
                totalPriceV2 {
                 amount
                }
                billingAddress {
                 address1
                 formattedArea
                }
                id
                name
                email
                phone
                lineItems(first: 20) {
                 edges {
                    node {
                      quantity
                      title
                      discountedTotalPrice {
                        amount
                      }
                      originalTotalPrice {
                        amount
                      }
                      currentQuantity
                      variant {
                        image {
                          src
                        }
                        price {
                          amount
                        }
                        compareAtPrice {
                          amount
                        }
                        product {
                          vendor
                          productType
                          id
                        }
                        id
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

export const GET_SEARCH_PRODUCTS = `
  query GetSearchProducts($query: String!) {
        products(first:80, query: $query) {
          edges {
            node {
              id
              title
              description
              tags
              productType
              vendor
              availableForSale
              priceRange { minVariantPrice { amount } }
              compareAtPriceRange { maxVariantPrice { amount } }
              images(first: 1) { edges { node { transformedSrc } } }
              variants(first: 1) { edges { node { 
              id
              availableForSale
              } } }  
            }
          }
        }
      }
`;


export const GET_SEARCH_SUGGESTION = `
  query GetSearchSuggestions($query: String!) {
        search(first: 10, query: $query) {
        edges {
          node {
            ... on Product {
              title
              id
            }
          }
        }
      }
      }
`;