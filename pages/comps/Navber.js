import Image from 'next/image'
import Link from "next/link"

export default function Navber ({menu,portal_menu}) {    
var title=menu.program.title
return(

    <div className="program_header">
{title}
    </div>

    )
}

