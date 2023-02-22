import Image from 'next/image'
import Link from "next/link"

function Navber (props) {
    const postId=props.postId;
    const menu=props.menu;
    const portal_menu=props.portal_menu;
    const social=props.social;
      //return <pre>{JSON.stringify(menu,null,4)}</pre>
return(
    <> 
        <div className="google-search"><div className="gcse-search"></div></div>
        <div className="program_header">
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
                        <button className="search_btn" id="search_button"><Image src="/search_btn.svg" width={35} height={35} alt="search_btn" title="search_btn"/></button>
                        <Link href="https://www.tvbs.com.tw/ours/en" >
                            <a className="en_page"  target="_new">EN</a>
                        </Link>                        
                    </div>

                    <div className="header_search_m">   
                        <button className="search_btn" id="search_button"><Image src="/search_btn.svg" width={35} height={35} alt="search_btn" title="search_btn"/></button>               
                        <button className="ham"><Image src="/ham.svg" width={25} height={25} title="btn"/></button>
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
                        {portal_menu.map((v, k) => (
                            <li key={k}>
                                <Link href={v.url}>
                                    <a>{v.title}</a>
                                </Link>  
                                {
                                    v.child ?
                                    <div className="nav_sub">
                                        {
                                        v.child.map((v2, k2) => (
                                            <Link key={k2} href={v2.url}>
                                                <a>{v2.title}</a>
                                            </Link> 
                                        ))
                                        }                                            
                                    </div> : ''
                                }                          
                            </li>
                        ))}
                        
                    </ul>

                    <ul className="nav_inner_m">
                    <button className="ham_close"><Image src="/ham_close.svg"width={25} height={25} alt="ham_close"/></button>
                        {portal_menu.map((v, k) => (
                            <li key={k}>
                                <Link href={v.url}>
                                    <a>{v.title}</a>
                                </Link>  
                                {
                                    v.child ?
                                    <>
                                     <div className="aw1"><Image src="/dropdown.svg"width={20} height={20} alt="arraw"/></div>                                     
                                     <div className="nav_sub">
                                        {
                                        v.child.map((v2, k2) => (
                                            <Link key={k2} href={v2.url}>
                                                <a>{v2.title}</a>
                                            </Link> 
                                        ))
                                        }                                            
                                    </div>
                                    </>
                                     : ''
                                }                          
                            </li>
                        ))}
                        
                    </ul>
                </nav>
            </div>
            <div className="program_header_box">
                <div className="program_header_box_hamburger">
                    <div className="ham_box">
                        <div className="program_header_box_hamburger1">
                            <ul className="font20_1">
                                {
                                    menu.data.length == 0
                                    ? 'Loading menu...'
                                    : menu.data.map((v, k) => (
                                        k == 0 ?
                                            <li key={k}> 
                                            <Link href={"/"+v.parentid}><a>{v.title}</a></Link>                                 
                                            </li>
                                            :
                                            <li key={k}> 
                                            <Link href={v.url} target="_blank"><a>{v.title}</a></Link>                                     
                                            </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="program_header_box_hamburger_community">
                            <div className="community_btn">
                                <ul>
                                    {
                                        social.facebook=="" ? "" :                            
                                        <li className="font16_1"><Link href={social.facebook}>訂閱</Link></li>
                                    }
                                    {
                                        social.youtube=="" ? "" :                            
                                        <li className="font16_2"><Link href={social.youtube}>訂閱</Link></li>
                                    }   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="program_header_titel font26_1">
                    <Link href={"/"+postId}><a>{menu.program.title}</a></Link>
                </div>
                <div className="program_header_nav">
                    <ul className="font20_1">
                        {
                            menu.data.length == 0
                            ? 'Loading menu...'
                            : menu.data.map((v, k) => (
                                k == 0 ?
                                    <li key={k}> 
                                    <Link href={"/"+v.parentid}><a>{v.title}</a></Link>                                 
                                    </li>
                                    :
                                    <li key={k}> 
                                    <Link href={v.url}><a >{v.title}</a></Link>                                     
                                    </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="program_header_community">
                    <div className="community_btn">
                        <ul>                            
                            {
                                social.facebook=="" ? "" :                            
                                <li className="font16_1"><Link href={social.facebook}>訂閱</Link></li>
                            }
                            {
                                social.youtube=="" ? "" :                            
                                <li className="font16_2"><Link href={social.youtube}>訂閱</Link></li>
                            }                           
                        </ul>
                    </div>
                </div>

                <div className="program_header_arraw">                
                    <Image src="/icon_label01.svg" alt="arrow" width={20} height={20} />
                </div>
            </div>
        </div>
    </>
    )
}
export default Navber;


