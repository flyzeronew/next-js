
import Head from 'next/head'
import Image from 'next/image'
import Navber from '../comps/Navber'
import Link from "next/link"

export default function Post(props) {
  const postId=props.postId;
  const menu = props.menu;
  const portal_menu = props.portal_menu;
  const kv = props.index_cover;
  const social = props.social;
  const time= props.broadcast_time;
  const program_info=props.program_info;
  const fb_url=social.facebook;
  const wonderful_list=props.wonderful_list;
  const iframe_fb = '<iframe title="tvbs"" src="https://www.facebook.com/plugins/page.php?href='+fb_url+'&tabs=timeline&width=328&height=418&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=690035817779098" width="328" height="418" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'; 
  function Iframe(props) {return (<div dangerouslySetInnerHTML={{__html:  props.iframe?props.iframe:""}} />);}
  //return <pre>{JSON.stringify(menu,null,4)}</pre> 印資料
  //return <pre>{JSON.stringify(portal_menu,null,4)}</pre>
  return (
    <div className="container">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Keywords" content="關鍵字1,關鍵字2" />
        <meta name="description" content="網頁敘述，網頁敘述" />
      </Head>
      <Navber menu={menu} portal_menu={portal_menu} social={social} />
      <div id="back">
        <div id="back-img1"><Image src="/gotop.png" alt="arraw" width={50} height={50} /></div>
      </div>

      <div className="program_content">
        <div className="program_content_main">
          <div className="program_content_main_kv_box">
            <div className="program_content_main_kv">  
            {/* <Link href={kv.url ? kv.url: {pathname: '/[slug]', query: {slug:''}}} >555</Link> */}
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
          <div className="program_content_right_time"><p className="font16_3">{time.content}</p></div>
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
              {wonderful_list.length!=0 ? wonderful_list.map((val, key) => (
                <li>
                  <Link href={postId+"/detail/"+val.id}>
                    <a>
                      <div className="program_content_main_information2_img">                    
                        <Image src={val.cover_image} alt="img" width={850} height={470} />
                      </div>                      
                      <p className="font20_3">{val.title}</p>
                    </a>
                  </Link>
                </li>
               ))
              :''
              }
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
              <Image src={program_info.image} alt="img" width={850} height={470} />
            </div>
            <div className="program_content_main_information_one_p1" dangerouslySetInnerHTML={{__html: program_info.content}}></div>
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
  if (!i.req) { return { menu: [],}; } //防呆
  const { query } = i;
  const id=query.Post;
  const res_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id='+id);
  const res_portal_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/portal_menu');
  const res_index_cover = await fetch('https://tvbsapp.tvbs.com.tw/program_api/index_cover?id='+id);
  const res_social = await fetch('https://tvbsapp.tvbs.com.tw/program_api/social?id='+id);
  const res_broadcast_time = await fetch('https://tvbsapp.tvbs.com.tw/program_api/broadcast_time?id='+id);
  const res_program_info = await fetch('https://tvbsapp.tvbs.com.tw/program_api/program_info?id='+id);
  const res_wonderful_list = await fetch('https://tvbsapp.tvbs.com.tw/program_api/wonderful_list?id='+id+'&limit=6&page=0');
  const res_related_news = await fetch('https://tvbsapp.tvbs.com.tw/program_api/related_news_by_keywords?id='+id);

  
  const menu = await res_menu.json();
  const portal_menu = await res_portal_menu.json();
  const index_cover = await res_index_cover.json();
  const social = await res_social.json();
  const broadcast_time = await res_broadcast_time.json();
  const program_info = await res_program_info.json();
  const wonderful_list = await res_wonderful_list.json();
  const related_news = await res_related_news.json();

  

  return {
    menu: menu,
    portal_menu: portal_menu.portal_menu,
    index_cover: index_cover.data[0],
    social:social.data[0],
    broadcast_time:broadcast_time.data[0],
    program_info:program_info.data[0],
    wonderful_list:wonderful_list.data,
    related_news:related_news.data    
  };
}
