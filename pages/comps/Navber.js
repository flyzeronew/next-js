import Image from 'next/image'
import Link from "next/link"
import React from "react"

export default function Navber ({menu,portal_menu}) {    

return(

    <div className="program_header">
{
                        portal_menu.length == 0
                        ? 'Loading menu...': portal_menu.map((val, key) => (                                
                            <li key={key}>
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
                    } 
    </div>

    )
}

