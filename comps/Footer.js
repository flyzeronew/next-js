import Image from 'next/image'
import Link from "next/link"

function Page(props) {
    const footer=props.footer;
    return (
        <>
            <div className="footer">
                <div className="square">
                    <div className="logo">
                        <Link href="https://www.tvbs.com.tw/">
                            <a>
                                <Image src="https://cc.tvbs.com.tw/portal/images/logo-1.png"  width={116} height={40} alt="logo" />
                            </a>
                        </Link>
                    </div>
                    <span id="footer_all" dangerouslySetInnerHTML={{__html: footer}}></span>

                    <ul>
                        <li>
                            <div class="service"><p>您的意見是我們前進的動力.歡迎來信或來電反映</p>
                                <ul>            
                                    <li>意見反映：<a href="mailto:service@tvbs.com.tw">service@tvbs.com.tw</a></li>
                                    <li>觀眾服務專線：<span class="service-hover">02-2656-1599</span></li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <div className="square-m">
                        <ul>
                            <li className="service13"><a href="mailto:service@tvbs.com.tw">意見反映</a></li>
                            <li className="service13">觀眾服務專線:02-2656-1599</li>
                        </ul>
                        <div className="square-m-under1">聯利媒體股份有限公司  TVBS Media Inc‧ All Rights Reserved.</div>
                        <div className="square-m-under2">觀眾服務專線:02-2656-1599<br/>聯利媒體股份有限公司<br/>© TVBS Media Inc. All Rights Reserved.</div>
                    </div>
                </div>
                <small>台北市內湖區瑞光路451號 | 聯利媒體股份有限公司 © TVBS Media Inc. All Rights Reserved.</small>
            </div>
        </>        
    )
  } 
  
  export default Page