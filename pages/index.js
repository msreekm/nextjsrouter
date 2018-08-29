import Link from 'next/link'

//For client side routing you use next/link like this:
//The reason you have to explicitly provide the href and as is that Next.js is not aware of any other pages 
//on the client side. We don't send a manifest of all pages to the client side and subsequent routes 
//get lazy-loaded, which is scalable.


export default () => (
  <ul>
    <li><Link href='/artemis/post?id=first' as='/artemis/post/first'><a>My first blog post</a></Link></li>
    <li><Link href='/artemis/post/second' as='/artemis/post/second?name=prabhu&city=bangalore'><a>My second blog post</a></Link></li>
    <li><Link href='/artemis/post?id=last' as='/artemis/post/last'><a>My last blog post</a></Link></li>
  </ul>
)