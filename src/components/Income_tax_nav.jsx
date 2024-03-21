import React, { useEffect, useState } from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";

function Income_tax_nav() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  console.log("path", pathname);
  const [path, setPath] = useState(1);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    console.log(pathname);
    if (pathname === "/") {
      setPath(1);
    } else if (pathname === "/income_details") {
      setPath(2);
    } else if (pathname === "/deductions") {
      setPath(3);
    } else if (pathname === "/summary") {
      setPath(4);
    }
  }, [pathname]);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="/"
          className={
            path === 1 ? "flex items-center text-blue-600" : "flex items-center"
          }
        >
          1.Basic Details
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="/income_details"
          className={
            path === 2 ? "flex items-center text-blue-600" : "flex items-center"
          }
        >
          2. Income Details
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="/deductions"
          className={
            path === 3 ? "flex items-center text-blue-600" : "flex items-center"
          }
        >
          3. Deductions
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="/summary"
          className={
            path === 4 ? "flex items-center text-blue-600" : "flex items-center"
          }
        >
          4. Summary
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-extrabold"
          >
            Income Tax Calculator
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
}

export default Income_tax_nav;
