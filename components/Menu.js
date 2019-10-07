import React from "react";
import Link from 'next/link';

function Menu(props) {
    return (
        <div
      className="menu"
      >
<ul>
<li><Link href="/">
            <a>Main page</a>
          </Link></li>
<li><Link href="/contacts">
            <a>Contacts</a>
          </Link></li>
</ul>
    </div>
    );
}
export default Menu;