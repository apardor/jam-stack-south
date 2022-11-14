import Head from "next/head";
const contentful = require('contentful')


const client = contentful.createClient({
  space: '9hlpa7svnavx',
  environment: 'master',
  accessToken: 'dTQjEwq25CAhkwM4sJNg-ZQtHOmfB2iac0OC7vosCBY'
})

function handler(req, res) {
  return client.getEntry('1YVs7lzkCnXcId3oq7wFwy')
  .then((entry) => entry.fields.products)
  .catch(console.error)

}



export async function getStaticProps() {
  const res = await handler();
  return {
    props: {
      post:  res,
    },
  };
}

export default function Home({ post }) {
  return (
    <div>
      <Head>
        <title>Jam</title>
        <meta property="og:jam" content="Jam" key="title" />
      </Head>
      <div>
        {post.friends.map((el) => (
          <h1 key={el.id}>{el.name}</h1>
        ))}
      </div>
    </div>
  );
}
