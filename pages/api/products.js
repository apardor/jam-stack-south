const contentful = require('contentful')
const space = '9hlpa7svnavx'
const access = 'dTQjEwq25CAhkwM4sJNg-ZQtHOmfB2iac0OC7vosCBY'

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