/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get() {
  const messages= [
    'Hello, world!',
    'This is a message from the server',
  ]

  return { json: { messages }}
}
