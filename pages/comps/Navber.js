import Image from 'next/image'
import Link from "next/link"

function Navber ({menu,portal_menu}) {    
return(

    <div className="program_header">
{menu.program.title}
    </div>

    )
}
export default Navber;
