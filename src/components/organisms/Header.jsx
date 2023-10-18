import Link from "next/link";
import {headerMenu} from "@/data/menu";

const Header = () => {
    return <div className={'header'}>
        <div className="menu">
            {headerMenu?.map((linkItem)=><Link key={linkItem.title} href={linkItem.url}>{linkItem.title}</Link>)}
        </div>
    </div>
}

export default Header