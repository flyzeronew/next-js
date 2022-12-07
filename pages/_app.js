import { useRouter } from 'next/router'
import '../styles/globals.css'
import '../styles/program_master.css'
import '../styles/program_article_share.css'
import '../styles/main.css'
import '../styles/p_footer_news.css'


export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const postId=router.query.Post;
  return <Component {...pageProps}  postId={postId}/>
}
