import { fetchGraphQL } from "../../utils/fetchGraphql";

export const shopifyProductService = {
    async getCollectionProductsByHandle(handle, productCount = 5) {

        const query = `
      query {
        nodes(ids: ${JSON.stringify(handle)}) {
          ... on Collection {
            id
            title
            handle
            description
            image { src }
            products(first: 4) {
              edges {
                node {
                  id
                  title
                  tags
                  handle
                  vendor
                  productType
                  publishedAt
                  tags
                  images(first: 1) {
                    edges { node { transformedSrc(maxWidth: 500, maxHeight: 500) } }
                  }
                  priceRange { minVariantPrice { amount } }
                  compareAtPriceRange { maxVariantPrice { amount } }
                  variants(first: 50) { edges { node { id availableForSale } } }
                }
              }
            }
          }
        }
      }
    `;

        try {

            // Run GraphQL query
            const response = await fetchGraphQL(query);

            if (response.errors) {
                throw new Error(response.errors[0].message);
            }

            const collections = response.data.nodes.map((node) => ({
                id: node.id,
                title: node.title,
                handle: node.handle,
                description: node.description,
                image: node.image ? node.image.src : null,
                products: node.products.edges.map((edge) => ({
                    id: edge.node.id,
                    title: edge.node.title,
                    tags: edge.node.tags,
                    handle: edge.node.handle,
                    vendor: edge.node.vendor,
                    productType: edge.node.productType,
                    publishedAt: edge.node.publishedAt,
                    productTags: edge.node.tags,
                    image: edge.node.images.edges[0]?.node.transformedSrc,
                    price: edge.node.priceRange.minVariantPrice.amount,
                    oldPrice: edge.node.compareAtPriceRange.maxVariantPrice.amount,
                    merchandiseId: edge.node.variants.edges[0]?.node.id,
                    available: edge.node.variants.edges[0]?.node.availableForSale,
                })),
            }));

            console.log("Fetched collections:", collections);

            return collections
        } catch (error) {
            console.error("Error fetching collection products:", error);
            throw error;
        }
    },
};