"use client"
import { Link } from "@heroui/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import Image from "next/image";
import React from "react";



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="   justify-start pl-2 lg:pl-40 h-[100px] bg-white"  >
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Image
            src="/favicon.ico"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden shadow-xl lg:flex gap-14 font-extrabold border mt-20 p-2 rounded-[120px] border-[#00acf01c] bg-[#ffffff11]" justify="center">
        <NavbarItem className="p-4  border-r-1" >
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="p-4 border-r-1 flex" >
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem className="p-4 border-r-1" isActive>
          <Link aria-current="page" href="#">
            Laundry Services
          </Link>
        </NavbarItem>
        <NavbarItem className="p-4">
          <Link color="foreground" href="#">
            Cleaning Services
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="fixed end-0 pr-4">
        <NavbarItem className="hidden lg:flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="#00ABF0" d="M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5m0 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/></svg>                  
        <Link href="https://maps.google.com/maps?q=11.27851%2C76.2238372&z=17&hl=en" className="text-gray-500 font-light text-lg">Nilambur, Malapuram</Link>
        </NavbarItem> 
        <NavbarItem className="hidden lg:flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="#00ABF0" d="m5.966 4.49l-.827.742a5 5 0 0 0 .455 1.073a4.7 4.7 0 0 0 .722.922l1.071-.33c.6-.185 1.255.005 1.654.48l.61.726a1.47 1.47 0 0 1-.137 2.042c-.995.908-2.527 1.215-3.674.314a10.4 10.4 0 0 1-2.516-2.87A10 10 0 0 1 2.03 4.013c-.22-1.422.821-2.56 2.119-2.948c.774-.232 1.6.166 1.884.908l.335.875c.22.576.062 1.225-.402 1.641"/></svg>    
        <Link href="tel:+916238481190" className="text-gray-500  font-light text-lg">+916238481190</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem className="p-2  mt-20">
        <a href="tel:+916238481190">
        <Image
          className="cursor-pointer"
          src="/images/helpdesk.png"
          width={40}
          height={40}
          alt="Picture of the author"
        />
        </a>
      </NavbarItem>


      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}

