import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navber from '../../comps/Navber'
import Footer from '../../comps/Footer'
import ReactPaginate from 'react-paginate';
import Link from "next/link"

export default function List(props) {

  // 伺服器端資料
  const pageCount=props.wonderful_pages.length;
  const myJquery=props.myJquery;
  const postId=props.postId;
  const menu = props.menu;
  const portal_menu = props.portal_menu;
  const social = props.social;
  const time= props.broadcast_time;
  const fb_url=social.facebook;
  const footer=props.footer;  
  const iframe_fb = '<iframe title="tvbs" src="https://www.facebook.com/plugins/page.php?href='+fb_url+'&tabs=timeline&width=328&height=427&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=690035817779098" width="328" height="427" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'; 
  // 伺服器端資料ed

  // 客戶端動態拉資料
  const [loading, setLoading] = useState('');
  const [pageList, listData] = useState('');
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setLoading(true)
    fetch('https://tvbsapp.tvbs.com.tw/program_api/wonderful_list?id='+postId+'&limit=12&page='+offset)
      .then((res) => res.json())
      .then((data) => {
        listData(data.data)    
      })
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };

 // 客戶端動態拉資料 ed

  function Iframe(props) {return (<div dangerouslySetInnerHTML={{__html:  props.iframe?props.iframe:""}} />);}

  return (
    <> 
      <div className="container" onLoad={myJquery}>
        <Head>
          <title>{menu.program.title+" | TVBS 官網"}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="Keywords" content={menu.program.keywords} />
          <meta name="description" content={menu.program.description} />        
        </Head>
        <Navber menu={menu} portal_menu={portal_menu} social={social} />
        <div className="program_content">
          <div className="program_content_main">
            <div className="program_content_main_information_titel">
                <p className="program_content_main_information_titel_p font30_1">精彩內容</p>    
                <div className="line01"></div>
            </div>
            <div className="program_content_main_information_box1">
              <div className="program_content_main_information">
                <ul>
                  {pageList.length!=0 ? pageList.map((val, key) => (
                    <li key={key}>
                      <Link href={"/"+postId+"/detail/"+val.id}>
                        <a>
                          <div className="program_content_main_information2_img">
                            <Image src={val.cover_image} alt="img" layout='fill' rel="preload"/>
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

              <div className="jump_list pc_display">
                  <ReactPaginate
                    previousLabel={"上一頁"}
                    nextLabel={"下一頁"}
                    breakLabel={"..."}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    containerClassName={"jump_list"}
                    activeClassName={"act"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                  />                      
              </div>
            </div>
            
          </div>
          <div className="program_content_right">
            <div className="program_content_right_time"><p className="font16_3">{time.content}</p></div>
            <div className="program_content_right_fb_box"><Iframe iframe={iframe_fb}/></div>
          </div>
        </div>
        <Footer footer={footer}/>
      </div>     
    </>  
  ) 
}

export async function getServerSideProps(i) {
  if (!i.req) { return { menu: [],}; } //防呆
  const { query } = i;
  const id=query.Post;
  const res_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id='+id);
  const res_portal_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/portal_menu');
  const res_social = await fetch('https://tvbsapp.tvbs.com.tw/program_api/social?id='+id);
  const res_broadcast_time = await fetch('https://tvbsapp.tvbs.com.tw/program_api/broadcast_time?id='+id);
  const res_wonderful_pages = await fetch('https://tvbsapp.tvbs.com.tw/program_api/wonderful_pages?id='+id);
  const res_footer = await fetch('https://www.tvbs.com.tw/portal/footer');

  const menu = await res_menu.json();
  const portal_menu = await res_portal_menu.json();
  const social = await res_social.json();
  const broadcast_time = await res_broadcast_time.json();
  const wonderful_pages = await res_wonderful_pages.json();
  const footer = await res_footer.text();  

  return { 
    props:{
      menu: menu,
      portal_menu: portal_menu.portal_menu,
      social:social.data[0],
      broadcast_time:broadcast_time.data[0], 
      wonderful_pages:wonderful_pages.data,
      footer:footer
    }
   }
}
