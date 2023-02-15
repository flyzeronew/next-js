import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Navber from '../../../comps/Navber'
import Footer from '../../../comps/Footer'
import Link from "next/link"

export default function Page(props) {
  const router = useRouter();
  const myJquery=props.myJquery;
  const postId=props.postId;  
  const detailId=router.query.detail;
  const portal_menu = props.portal_menu;
  const social = props.social;
  const menu = props.menu;
  const detail = props.detail;
  const time= props.broadcast_time;
  const fb_url=social.facebook;
  const footer=props.footer;  
  const iframe_fb = '<iframe title="tvbs" src="https://www.facebook.com/plugins/page.php?href='+fb_url+'&tabs=timeline&width=328&height=427&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=690035817779098" width="328" height="427" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'; 
  console.log(props);
  function Iframe(props) {return (<div dangerouslySetInnerHTML={{__html:  props.iframe?props.iframe:""}} />);}

  // 正規化取導言
  var content=detail.article_content;
  function stripHTML(input) {
    var output = '';
    if(typeof(input)=='string'){
        var output = input.replace(/(<([^>]+)>)/ig,"");
    }return output;}
  var clear=stripHTML(content);
  var description_txt=clear.substr(0,100);
  // 正規化取導言 ed 

  // 關鍵字轉換及搜尋
  const str =""+detail.keyword+"";
  const keywords = str.split(',').filter(Boolean);
  console.log(keywords);
  // 關鍵字轉換及搜尋 ed

  return (
  <>
    <div className="container" onLoad={myJquery}>
        <Head>
          <title>{detail.title+" | "+menu.program.title+" | TVBS 官網"}</title>
          <meta name="viewport" content="width=device-width"/>
          <meta name="keywords" content={detail.keyword}/>
          <meta name="description" content={description_txt}/>   
        </Head>
        <Navber menu={menu} portal_menu={portal_menu} social={social} postId={postId} />
        <div id="back">
          <div id="back-img1"><Image src="/gotop.png" alt="arraw" width={50} height={50} /></div>
        </div>

        <div className="program_content">
          <div className="program_content_main">
            <div className="program_content_main_detail">
                <div className="program_content_main_detail_titel font26_2">{detail.title}</div>
                <div className="program_content_main_detail_time"><p className="font16_5">{detail.publish}</p></div>
                <div className="program_content_main_detail_context">
                  <div dangerouslySetInnerHTML={ {__html:detail.article_content}} />             
                </div>

                <div className="program_content_main_detail_label_box">
                  <div className="program_content_main_detail_label">
                    <div className="program_content_main_detail_label_titel font16_5">標　　籤</div>
                    <div className="program_content_main_detail_label_titel_list">
                      <ul id='keywords'>
                        {
                          keywords.length == 0 ? 'Loading  keywords...': keywords.map((val, key) => (                                
                            <li key={key} className="font16_6" >
                              <button className="keyword_btn" value={val}>{val}</button>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>

                  <div className="program_content_main_detail_label">
                    <div class="program_content_main_detail_label_titel font16_5">追　　蹤</div>
                    <div class="community_btn">                  
                      <ul>
                        {                          
                          menu.program.facebook=="" ? "" :                            
                          <li className="font16_1">
                            <Link href={menu.program.facebook} target="_blank">加入</Link>
                          </li>
                          }
                          {
                          menu.program.youtube=="" ? "" :                            
                          <li className="font16_2">
                          <Link href={menu.program.youtube} target="_blank">訂閱</Link>
                        </li>
                        }
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="program_content_right">
            <div className="program_content_right_time"><p className="font16_3">{time.content}</p></div>
            <div className="program_content_right_fb_box"><Iframe iframe={iframe_fb}/></div>
          </div>
        </div>
    </div>
  </>)
}
export async function getServerSideProps(i) {
  if (!i.req) { return { menu: [],}; } //防呆
  const { query } = i;
  const id=query.Post;
  const id2=query.detail;
  const res_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id='+id);
  const res_portal_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/portal_menu');
  const res_index_cover = await fetch('https://tvbsapp.tvbs.com.tw/program_api/index_cover?id='+id);
  const res_social = await fetch('https://tvbsapp.tvbs.com.tw/program_api/social?id='+id);
  const res_broadcast_time = await fetch('https://tvbsapp.tvbs.com.tw/program_api/broadcast_time?id='+id);
  const res_program_info = await fetch('https://tvbsapp.tvbs.com.tw/program_api/program_info?id='+id);
  const res_wonderful_list = await fetch('https://tvbsapp.tvbs.com.tw/program_api/wonderful_list?id='+id+'&limit=6&page=0');
  const res_related_news = await fetch('https://tvbsapp.tvbs.com.tw/program_api/related_news_by_keywords?id='+id);
  const res_footer = await fetch('https://www.tvbs.com.tw/portal/footer');
  const res_detail = await fetch('https://tvbsapp.tvbs.com.tw/program_api/wonderful_detail?id='+id2);  

  const menu = await res_menu.json();
  const portal_menu = await res_portal_menu.json();
  const index_cover = await res_index_cover.json();
  const social = await res_social.json();
  const broadcast_time = await res_broadcast_time.json();
  const program_info = await res_program_info.json();
  const wonderful_list = await res_wonderful_list.json();
  const related_news = await res_related_news.json();  
  const footer = await res_footer.text();  
  const detail = await res_detail.json();  

  return { 
    props:{
      menu: menu,
      portal_menu: portal_menu.portal_menu,
      index_cover: index_cover.data[0],
      social:social.data[0],
      broadcast_time:broadcast_time.data[0],
      program_info:program_info.data[0],
      wonderful_list:wonderful_list.data,
      related_news:related_news.data.slice(0,2),
      footer:footer,
      detail:detail.data[0]
    }
   }
}
