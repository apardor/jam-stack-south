// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const contentful = require('contentful')

const client = contentful.createClient({
  space: '9hlpa7svnavx',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'dTQjEwq25CAhkwM4sJNg-ZQtHOmfB2iac0OC7vosCBY'
})



export default function handler(req, res) {
  client.getEntry('1YVs7lzkCnXcId3oq7wFwy')
  .then((entry) => res.status(200).json(entry.fields.products))
  .catch(console.error)

}

// res.status(200).json({ name: 'John Doe' })