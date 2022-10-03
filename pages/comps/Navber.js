import Image from 'next/image'
import Link from "next/link"

export default function Navber ({menu,portal_menu}) {    
return(

    <div className="program_header">
{portal_menu[0].title}
    </div>

    )
}

