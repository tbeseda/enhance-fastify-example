/** @type {import('@enhance/types').EnhanceElemFn} */
export default function({ html }) {
  // this could be .html, but it's an example
  return html`
<my-header></my-header>

<main>
  <my-messages></my-messages>
</main>

<my-footer></my-footer>
  `
}
