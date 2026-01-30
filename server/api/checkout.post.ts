import { useServerStripe } from '#stripe/server';

export default defineEventHandler(async (event) => {
  const stripe = await useServerStripe(event);

  const indexURL = getRequestURL(event).origin;

  // 1. Read the body of the POST request
  const body = await readBody<Record<string, string>>(event);

  const items = Object.entries(body)
    .map(([priceId, quantity]) => ({
      price: priceId,
      quantity: Number(quantity),
    }))
    .filter((item) => item.quantity > 0);

  // 2. Validate the items
  if (items.length === 0) {
    return sendRedirect(event, indexURL);
  }

  // 3. Create the checkout session
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: items,
    success_url: `${indexURL}/thanks?order=completed`,
    cancel_url: `${indexURL}#cart`,
  });

  if (!session.url) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create checkout session',
    });
  }

  return sendRedirect(event, session.url);
});
