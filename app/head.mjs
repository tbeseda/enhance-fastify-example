/** @type {import('@enhance/types').EnhanceHeadFn} */
export default function Head(state) {
  const { req, store, status, error } = state
  const { path } = req
  const title = `My app — ${path}`

  return /* html */`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
    </head>
  `
}
