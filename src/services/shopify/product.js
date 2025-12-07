import { fetchGraphQL } from "../../utils/fetchGraphql";

export const shopifySingleProductService = {
    async getProductById(id) {
        const query = `{
                    product(id: "${id}") {
                      id
                      title
                      handle
                      descriptionHtml
                      productType
                      vendor
                      tags
                      options {
                        name
                        values
                      }
                      images(first: 50) {
                        edges {
                          node {
                            originalSrc
                          }
                        }
                      }
                      priceRange {
                        minVariantPrice {
                          amount
                        }
                      }
                      compareAtPriceRange {
                        minVariantPrice {
                          amount
                        }
                      }
                      variants(first: 50) {
                        edges {
                          node {
                            id
                            availableForSale
                            image {
                              originalSrc
                            }
                            price {
                              amount
                            }
                            sku
                            title
                            product {
                              title
                            }
                            selectedOptions {
                              name
                              value
                            }
                            compareAtPrice {
                              amount
                            }
                          }
                        }
                      }
                      specificationValues: metafield(
                        namespace: "custom"
                        key: "specification_name_1_values"
                      ) {
                        value
                        type
                      }
                      features: metafield(
                        namespace: "custom"
                        key: "features"
                      ) {
                        value
                        type
                      }
                      supportingFile: metafield(
                        namespace: "custom"
                        key: "supporting_file"
                      ) {
                        value
                        reference {
                          ... on GenericFile {
                            url
                          }
                        }
                      }
                    }
                  }`;

        try {

            // Run GraphQL query
            const data = await fetchGraphQL(query);

            const product = {
                id: data.data.product.id,
                title: data.data.product.title,
                handle: data.data.product.handle,
                descriptionHtml: data.data.product.descriptionHtml,
                productType: data.data.product.productType,
                vendor: data.data.product.vendor,
                tags: data.data.product.tags,
                images: data.data.product.images.edges.map((img) => ({
                    src: img.node.originalSrc,
                })),
                variants: data.data.product.variants.edges.map((vr) => {
                    return {
                        id: vr.node.id,
                        sku: vr.node.sku,
                        title: vr.node.title,
                        price: vr.node.price.amount,
                        oldPrice: data.data.product.compareAtPriceRange.minVariantPrice.amount,
                        image: vr.node.image.originalSrc,
                        available: vr.node.availableForSale,
                    };
                }),
                specificationValues: data.data.product.specificationValues?.value || null,
                features: data.data.product.features?.value || null,
                supportingFile: data.data.product.supportingFile?.reference?.url || null,
            };

            return product;
        } catch (error) {
            console.error("Error fetching collection products:", error);
            throw error;
        }
    },

    async getRecommendedProductsById(id) {
        const query = `
            {
                        productRecommendations(productId: "${id}") {
                                        id
                                        title
                                        availableForSale
                                        tags
                                        images(first: 1) {
                                            nodes {
                                                transformedSrc(maxWidth: 500, maxHeight: 500)
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
                                        variants(first: 1) 
                                            { edges 
                                                { node
                                                     {
                                                        id
                                                        availableForSale
                                                    }
                                                }                
                                            }
                                    }
                                }
                            `;

        try {

            const data = await fetchGraphQL(query, {
                input: { id },
            });

            const recommendations = data.data.productRecommendations.map(
                (recommendation) => ({
                    id: recommendation.id,
                    title: recommendation.title,
                    available: recommendation.availableForSale,
                    image: recommendation.images.nodes[0].transformedSrc,
                    price: recommendation.priceRange.minVariantPrice.amount,
                    oldPrice: recommendation.compareAtPriceRange.maxVariantPrice.amount,
                    merchandiseId: recommendation.variants.edges[0]?.node.id,
                    productTags: recommendation.tags,
                })
            );

            return recommendations;
        } catch (error) {
            console.error("Error fetching collection products:", error);
            throw error;
        }
    },

};