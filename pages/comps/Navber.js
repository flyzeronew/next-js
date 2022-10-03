import Image from 'next/image'
import Link from "next/link"
import React from "react"

function Navber (props) {      
   console.log(props);
return(
    <div className="program_header">
{props.menu.program.title}
        <div className="main_header">
            <div className="header_inner">
                <h1 className="header_logo">
                    <Link href="https://www.tvbs.com.tw/" >
                        <a target="_blank">
                            <Image src="/TVBS_logo.svg" alt="logo" width={102} height={49} />
                        </a>
                    </Link>                        
                </h1>


                <div className="header_search_pc">
                    <input className="search_input" type="search" id="search" placeholder="關鍵字"/>
                    <Link href="https://www.tvbs.com.tw/ours/en" >
                        <a className="en_page"  target="_new">EN</a>
                    </Link>                        
                </div>

                <div className="header_search_m">                      
                    <div className="search_page">                                                  
                        <div className="search_page_inner">
                            <input className="search_page_input" type="search" id="search_mobile" placeholder="請輸入關鍵字"/>
                        </div>
                    </div>
                </div>


            </div>
      
            <nav>
                <div className="nav_bg"></div>
                <ul className="nav_inner_pc">
                    {/* {
                        portal_menu.length == 0
                        ? 'Loading menu...': portal_menu.map((val, index) => (                                
                            <li key={index} >
                            <a href={val.url}>{val.title}</a> 
                                {
                                    val.child ? 
                                        <div className="nav_sub">
                                            {
                                                val.child.map(val2 => (
                                                    <a href={val2.url}>{val2.title}</a>
                                                ))
                                            }                                            
                                        </div>
                                    : '' 
                                }
                            </li>                                
                        ))
                    }  */}
                </ul>
            </nav>
        </div>
    </div>

    )
}
export default Navber;

