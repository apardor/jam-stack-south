const contentful = require('contentful')
const env = require('dotenv').config();

const client = contentful.createClient({
  space: process.env.SPACE,
  environment: 'master',
  accessToken: process.env.ACCESS
})

export default function handler(req, res) {
  return client.getEntry('1YVs7lzkCnXcId3oq7wFwy')
  .then((entry) => entry.fields.products)
  .catch(console.error)
}