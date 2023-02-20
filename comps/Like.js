import Image from 'next/image'
import Link from "next/link"
function  Like (props) {
    const postId=props.postId;
    const like=props.like.data;
return(
        <div className="program_content_main_detail_like">     
            <div className="program_content_main_detail_like_titel font24_1">你可能也會喜歡</div>
            <div className="program_content_main_information3">
                <ul> 
                    {
                        like.length == 0 ? 'Loading  keywords...': like.map((val, key) => (                                
                        <li key={key}>                          
                            <Link href={"/"+postId+"/detail/"+val.id}>
                              <a>   
                                <div className="program_content_main_information3_img">
                                    <div className="mask"></div>            
                                    <Image src={val.cover_image} alt="img" layout='fill' rel="preload"/>                                    
                                </div>  
                                <p class="font18_1">{val.title}</p>                              
                              </a>
                            </Link>
                        </li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    )
}
export default Like;

