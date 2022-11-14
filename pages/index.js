import styles from '../styles/Home.module.css'

export async function getStaticProps () {
  // Call an external API endpoint to get post.
  const res = await fetch('http://localhost:3000/api/hello')
  return {
    props: {
      post: await res.json(),
}, }
}
// posts will be populated at build time by getStaticProps()


export default function Home({post}) {
  return (
  <div>
    {post.friends.map((el) => <h1 key={el.id}>{el.name}</h1>)}
   
  </div>
  )
}
