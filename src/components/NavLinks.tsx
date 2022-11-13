import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  const links = [
    // { name: "About Me" },
    {
      name: "Portfolio",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Logos", link: "/" },
            { name: "Flyers", link: "/" },
            { name: "Websites", link: "/" },
            { name: "T-Shirts", link: "/" },
          ],
        },
      ],
    },
    // { name: "Contact" },
  ];

  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.toString()} className="z-50"> 
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              {link.name}
              <span className="text-xl md:mt-1 md:ml-2 inline">
                {/* <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon> */}
                <i className="fa-solid fa-chevron-up"></i>              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 border-2"></div>
                  </div>
                  <div className="bg-white p-3.5 border-2">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.toString()}>
                        {mysublinks.sublink.map((slink) => (
                          <li key={slink.toString()} className="text-sm text-gray-600 my-2.5">
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Menus */}
          <div
            className={`
          ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* Sublinks */}
            {link.sublinks?.map((slinks) => (
              <div key={slinks.toString()}>
                {slinks.sublink.map((slink) => (
                  <li key={slink.toString()} className="py-3 pl-14">
                    <Link href={slink.link}>{slink.name}</Link>
                  </li>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
