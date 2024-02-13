import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <a
            href={href}
            class="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent  md:p-0 hover:text-white "
            aria-current="page"
        >
            {title}
        </a>
    );
};

export default NavLink;
