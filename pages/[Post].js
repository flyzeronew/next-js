import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Navber from '../comps/Navber'
import Link from "next/link"

export default function Post(props) {
  const menu = props.menu;
  const portal_menu = props.portal_menu;
  //return <pre>{JSON.stringify(menu,null,4)}</pre>
  //return <pre>{JSON.stringify(portal_menu,null,4)}</pre>
  return (
    <div className="container">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Keywords" content="關鍵字1,關鍵字2" />
        <meta name="description" content="網頁敘述，網頁敘述" />
      </Head>
      <Navber menu={menu} portal_menu={portal_menu} />

      <div id="back">
        <div id="back-img1"><Image src="/gotop.png" alt="arraw" width={50} height={50} /></div>
      </div>

      <div className="program_content">
        <div className="program_content_main">
          <div className="program_content_main_kv_box">
            <div className="program_content_main_kv">
                <Link href="##" >
                  <a>
                    <div className="program_content_main_kv_writing">
                      <p className=" font20_2">2.女人我最大招募女孩軍團囉~ 對時尚有興趣嗎?想與達人老師學習最新的時尚資訊？</p>
                    </div>
                    <div className="img">
                      <div className="mask"></div>                       
                        <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />
                    </div>                    
                  </a>
                </Link>
            </div>
          </div>
        </div>
        
        <div className="program_content_right">
          <div className="program_content_right_time"><p className="font16_3">首播:歡樂台每週一至週五 18:00~18:30</p></div>
        </div>
      </div>
    </div>
  )
}
Post.getInitialProps = async (i) => {
  if (!i.req) { return { menu: [] }; } //防呆
  const { query } = i;
  const res1 = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id=' + query.Post);
  const res2 = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/portal_menu');
  const menu = await res1.json();
  const portal_menu = await res2.json();
  return {
    menu: menu,
    portal_menu: portal_menu.portal_menu
  };
}
