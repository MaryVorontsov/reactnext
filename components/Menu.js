import React from "react";
import Link from 'next/link';
const items = [{
  href: "/",
  text: "Main page",
},
{
  href: "/contacts",
  text: "Contacts",
},
  {
  href: "/about",
  text: "About",
},
]



function Menu(props) {
    return (
        <div
      className="menu"
      >
<ul>
{
  items.map (item =>
     (
      <li><Link href={item.href}>
            <a>{item.text}</a>
          </Link></li>
          )
  )
}
</ul>
    </div>
    );
}
export default Menu;