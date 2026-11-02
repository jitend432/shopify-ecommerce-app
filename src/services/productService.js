import axios from 'axios';

// Apne Shopify Store ki details yahan configure karein
const SHOPIFY_DOMAIN = 'your-store.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = 'your_storefront_access_token';

const storefrontAPI = axios.create({
  baseURL: `https://${SHOPIFY_DOMAIN}/api/2023-10/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
});

export const productService = {
  async getProducts() {
    const query = `
      {
        products(first: 20) {
          edges {
            node {
              id
              title
              description
              variants(first: 1) {
                edges {
                  node {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await storefrontAPI.post('', { query });
      const products = response.data.data.products.edges.map(edge => {
        const node = edge.node;
        return {
          id: node.id,
          title: node.title,
          description: node.description,
          price: node.variants.edges[0]?.node.price.amount || '0.00',
          currency: node.variants.edges[0]?.node.price.currencyCode || 'INR',
          image: node.images.edges[0]?.node.url || '',
        };
      });
      return products;
    } catch (error) {
      console.error('Error fetching products from Shopify:', error);
      throw error;
    }
  },
};