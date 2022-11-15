const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.SPACE_KEY,
  environment: 'master',
  accessToken: process.env.ACCESS_KEY,
})
export default async function handler(req, res) {
  return client.getEntry('1YVs7lzkCnXcId3oq7wFwy')
  .then((entry) => entry.fields.products)
 .catch(console.error)
}