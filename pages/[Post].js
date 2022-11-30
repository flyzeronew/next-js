import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Navber from '../comps/Navber'
import Link from "next/link"

export default function Post(props) {
  const router = useRouter();
  const postId=router.query.Post;
  const menu = props.menu;
  const portal_menu = props.portal_menu;
  const kv = props.index_cover;
  const fb_url='https://www.facebook.com/flyzero';
  const iframe_fb = '<iframe title="tvbs"" src="https://www.facebook.com/plugins/page.php?href='+fb_url+'&tabs=timeline&width=328&height=418&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=690035817779098" width="328" height="418" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'; 
  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={{__html:  props.iframe?props.iframe:""}} />);
  }
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
                <a href={kv.url ? kv.url:''}>
                  <div className="program_content_main_kv_writing">
                    <p className=" font20_2">{kv.title}</p>
                  </div>
                  <div className="img">
                    <div className="mask"></div> 
                      <Image src={kv.cover_image} alt="img" width={850} height={470}/>                     
                  </div>                    
                </a>           
            </div>
          </div>
        </div>
        
        <div className="program_content_right">
          <div className="program_content_right_time"><p className="font16_3">首播:歡樂台每週一至週五 18:00~18:30</p></div>
          <div className="program_content_right_fb_box"><Iframe iframe={iframe_fb}/></div>
        </div>
      </div>

      <div className="program_content2">
        <div className="program_content2_main2">
          <div className="program_content_main_information_titel">
              <p className="program_content_main_information_titel_p font30_1">精彩內容</p>
              <div className="program_content_main_information_titel_more">
                <div className="more01">
                  <Link href="https://www.tvbs.com.tw/">
                    <button className="font15_1">MORE</button>
                  </Link>                  
                </div>
              </div>
              <div className="line01"></div>
          </div>

          <div className="program_content_main_information2">
            <ul>
                <li>
                  <Link href="https://www.tvbs.com.tw/">
                    <a>
                      <div className="program_content_main_information2_img">                    
                        <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />
                      </div>                      
                      <p className="font20_3">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                    </a>
                  </Link>  
                </li>
                <li>
                  <Link href="https://www.tvbs.com.tw/">
                    <a>
                      <div className="program_content_main_information2_img">                    
                        <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />
                      </div>                      
                      <p className="font20_3">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                    </a>
                  </Link>  
                </li>
                <li>
                  <Link href="https://www.tvbs.com.tw/">
                    <a>
                      <div className="program_content_main_information2_img">                    
                        <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />
                      </div>                      
                      <p className="font20_3">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                    </a>
                  </Link>  
                </li>
                <li>
                  <Link href="https://www.tvbs.com.tw/">
                    <a>
                      <div className="program_content_main_information2_img">                    
                        <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />
                      </div>                      
                      <p className="font20_3">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                    </a>
                  </Link>  
                </li>
                <li>
                  <Link href="https://www.tvbs.com.tw/">
                    <a>
                      <div className="program_content_main_information2_img">                    
                        <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />
                      </div>                      
                      <p className="font20_3">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                    </a>
                  </Link>  
                </li>
                <li>
                  <Link href="https://www.tvbs.com.tw/">
                    <a>
                      <div className="program_content_main_information2_img">                    
                        <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />
                      </div>                      
                      <p className="font20_3">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                    </a>
                  </Link>  
                </li>
              </ul>
          </div>
        </div>
      </div>
      
      <div className="program_content">
        <div className="program_content_main">
          <div className="program_content_main_information_titel">
              <p className="program_content_main_information_titel_p font30_1">節目資訊</p>
              <div className="line01"></div>
          </div>

          <div className="program_content_main_information_one">
            <div className="program_content_main_information_one_img1">
              <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />
            </div>
            <div className="program_content_main_information_one_p1">
              <p><strong>面對變動的世局，提供即時分析專業解讀面對變動的世局，提供即時分析專業解讀面對變動的世局，提供即時分析專業解讀面對變動的世局，提供即時分析專業解讀面對變動的世局，提供即時分析專業解讀面對變動的世局，提供即時分析專業解讀</strong></p>
              <p>主持人：方念華</p>
            </div>
           
          </div>
        </div>

        <div className="program_content_right">
          <div className="program_content_main_information_titel">
              <p className="program_content_main_information_titel_p font30_1">相關新聞</p>
              <div className="line01"></div>
          </div>

          <div className="program_content_right_activity2">
            <ul>
              <li>
                <Link href="https://www.tvbs.com.tw/">
                  <a>
                    <div className="program_content_right_activity_img2">
                    <div className="mask"></div>
                      <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />                  
                    </div>
                    <p className="font18_1">相關新聞相關新聞相關新聞相關新聞相關新聞相關新聞</p>
                  </a>
                </Link>
              </li> 
              <li>
                <Link href="https://www.tvbs.com.tw/">
                  <a>
                    <div className="program_content_right_activity_img2">
                    <div className="mask"></div>
                      <Image src="/kv850x470.jpg" alt="img" width={850} height={470} />                  
                    </div>
                    <p className="font18_1">相關新聞相關新聞相關新聞相關新聞相關新聞相關新聞</p>
                  </a>
                </Link>
              </li> 
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
Post.getInitialProps = async (i) => {
  if (!i.req) { return { menu: [] }; } //防呆
  const { query } = i;
  const res_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id=' + query.Post);
  const res_portal_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/portal_menu');
  const res_index_cover = await fetch('https://tvbsapp.tvbs.com.tw/program_api/index_cover?id='+ query.Post);
  const menu = await res_menu.json();
  const portal_menu = await res_portal_menu.json();
  const index_cover = await res_index_cover.json();
  return {
    menu: menu,
    portal_menu: portal_menu.portal_menu,
    index_cover: index_cover.data[0]
  };
}
