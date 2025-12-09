import { fetchGraphQL } from "../../utils/fetchGraphql";

export const shopifyCheckoutService = {
    async createCheckoutUrl(cartDetail) {
        try {
            // format here (one time only)
            const lines = cartDetail.cartItems
                .map(
                    (item) => `
          {
            quantity: ${item.quantity},
            merchandiseId: "${item.merchandiseId}"
          }`
                )
                .join(",");

            const formattedLines = `[${lines}]`;

            const mutation = cartDetail?.email
                ? `
          mutation {
            cartCreate(
              input: {
                lines: ${formattedLines},
                attributes: { key: "cart_attribute", value: "This is a cart attribute from mobile app" },
                buyerIdentity: {
                  email: "${cartDetail.email}",
                  countryCode: AE,
                  deliveryAddressPreferences: [{
                    deliveryAddress: {
                      firstName: "${cartDetail.selectedAddress.firstName}",
                      lastName: "${cartDetail.selectedAddress.lastName}",
                      address1: "${cartDetail.selectedAddress.address1 || ""}",
                      city: "${cartDetail.selectedAddress.city || ""}",
                      province: "${cartDetail.selectedAddress.province || ""}",
                      country: "AE",
                      zip: "${cartDetail.selectedAddress.zip || ""}",
                      phone: "${cartDetail.selectedAddress.phone || ""}"
                    }
                  }]
                }
              }
            ) {
              cart { checkoutUrl }
            }
          }
        `
                : `
          mutation {
            cartCreate(
              input: { lines: ${formattedLines} }
            ) {
              cart { checkoutUrl }
            }
          }
        `;

            const response = await fetchGraphQL(mutation);
            // console.log("response", response)
            return response.data.cartCreate.cart.checkoutUrl;

        } catch (error) {
            console.error("Checkout Error:", error);
            throw error;
        }
    }
};