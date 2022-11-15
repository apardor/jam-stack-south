import Head from "next/head";
import handler from "./api/products";

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
        <h1>Jam South test with keys</h1>
        {post.products.data.items.map((el) => (
          <div key={el.id}>
          <h3>{el.name}</h3>
          <p>{el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
