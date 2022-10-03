
import {useRouter} from 'next/router'
import Image from 'next/image'


export default function Post() {
  const router =useRouter();
  return (
    <div className="container">  
    111
       <div id="back">
          <div id="back-img1"><Image src="/gotop.png" alt="arraw" width={50} height={50} /></div>
       </div>        
    </div>    

  )
}

