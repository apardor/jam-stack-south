const contentful = require('contentful')
const space = process.env.SPACE
const access = process.env.ACCESS
// console.log(space, access, 'env vari')

const client = contentful.createClient({
  space: space,
  environment: 'master',
  accessToken: access
})
export default async function handler(req, res) {
  return client.getEntry('1YVs7lzkCnXcId3oq7wFwy')
  .then((entry) => entry.fields.products)
 .catch(console.error)
}