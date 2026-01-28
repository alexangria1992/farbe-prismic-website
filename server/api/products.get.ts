import { useServerStripe } from '#stripe/server';

export default defineEventHandler(async (event) => {
  const stripe = await useServerStripe(event);
  // 1. Fetch data from stripe
  const { data: products } = await stripe.products.list({
    active: true,
    expand: ['data.default_price'],
  });

  const productMap: Record<string, StripeProduct> = {};

  for (const product of products) {
    if (
      product.default_price &&
      typeof product.default_price === 'object' &&
      product.default_price.unit_amount
    ) {
      productMap[product.id] = {
        id: product.id,
        price: {
          id: product.default_price.id,
          amount: product.default_price.unit_amount,
        },
      };
    }
  }

  // 2. Format it correctly
  // 3. Return that data

  // console.log(products);
  return productMap;
});
