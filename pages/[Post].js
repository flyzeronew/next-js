
import {useRouter} from 'next/router'
import Image from 'next/image'
import Header from './comps/Navber'

export default function Post() {
  const router =useRouter();
  // 印資料
  //return <pre>{JSON.stringify(menu,null,4)}</pre>
  // return <pre>{JSON.stringify(portal_menu,null,4)}</pre>
  return (

    <div className="container">   

       <Header />
       <div id="back">
          <div id="back-img1"><Image src="/gotop.png" alt="arraw" width={50} height={50} /></div>
       </div>        
    </div>    

  )
}

