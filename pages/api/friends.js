// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const contentful = require('contentful')
// import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

// const client = contentful.createClient({
//   space: process.env.SPACE,
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: process.env.ACCESS
// })

// export default function handler(req, res) {
//   client.getEntry('1YVs7lzkCnXcId3oq7wFwy')
//   .then((entry) => res.status(200).json(entry.fields.products))
//   .catch(console.error)
// // 
// }