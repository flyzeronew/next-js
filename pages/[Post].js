
import {useRouter} from 'next/router'
import Image from 'next/image'
import Header from './comps/Navber'

export default function Post({menu,portal_menu}) {
  const router =useRouter();
  // 印資料
  //return <pre>{JSON.stringify(menu,null,4)}</pre>
  return <pre>{JSON.stringify(portal_menu,null,4)}</pre>
  return (

    <div className="container">   

       <Header menu={menu} portal_menu={portal_menu}/>
       <div id="back">
          <div id="back-img1"><Image src="/gotop.png" alt="arraw" width={50} height={50} /></div>
       </div>        
    </div>    

  )
}
Post.getInitialProps =async (i)=>{  
    if(!i.req){return{menu:[]};} //防呆
    const {query } =i;
    const res1 = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id='+query.Post);
    const res2 = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/portal_menu');
    const menu =await res1.json();
    const portal_menu =await res2.json();
    return{
        menu:menu,
        portal_menu:portal_menu.portal_menu
    };
}
