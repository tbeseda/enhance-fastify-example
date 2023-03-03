/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const messages = state.store.messages || []

  return html`
<ul>
  ${messages.map(message => `<li>${message}</li>`).join('')}
</ul>
  `
}
