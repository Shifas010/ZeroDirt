"use client"
import { Link } from "@heroui/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import Image from "next/image";
import React from "react";



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      menu: "Home",
      link: "#",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00ABF0" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19" /></svg>
    },
    {
      menu: "About Us",
      link: "#",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#00ABF0" fillRule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z" /></svg>
    }, {
      menu: "Laundry Services",
      link: "#LaundryServiceLayout",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#00ABF0" d="M9 14.5h6M17 4H7m10 0a3 3 0 0 0 3-3V.5H7.5a3.5 3.5 0 1 0 0 7H20V7a3 3 0 0 0-3-3ZM3.5 23.5h17c0-4 .934-7.79 2.722-11.217l.278-.533v-.25H.5v.25l.278.533C2.566 15.71 3.5 19.5 3.5 23.5Z" strokeWidth="1"/></svg>
    }, {
      menu: "cleaning Services",
      link: "#CleaningServiceLayout",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#00ABF0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="#00ABF0"><path d="M11 9h8.995c.496 0 .744 0 .89.16c.145.16.126.413.088.917l-.621 8.23c-.132 1.752-.198 2.628-.763 3.16c-.564.533-1.426.533-3.15.533h-4.504c-1.723 0-2.585 0-3.15-.533C7.947 20.675 8.082 19.07 8 18"/><path d="M11 8.91v5.454c0 1.714 0 2.57-.586 3.104C9.828 18 8.886 18 7 18s-2.828 0-3.414-.532C3 16.935 3 16.078 3 14.364v-.91c0-2.57 0-3.856.879-4.655C4.757 8 6.172 8 9 8h1c.471 0 .707 0 .854.133c.146.133.146.348.146.776"/><path d="M19 9c0-3.866-2.25-7-5.025-7C11.443 2 9.348 4.608 9 8m-6 6h8m0-1h9"/></g></svg>
    },
    {
      menu: "Nilambur, Malapuram",
      link: "https://maps.google.com/maps?q=11.27851%2C76.2238372&z=17&hl=en",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="#00ABF0" d="M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5m0 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" /></svg>

    },
    {
      menu: "+916238481190",
      link: "tel:+916238481190",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="#00ABF0" d="m5.966 4.49l-.827.742a5 5 0 0 0 .455 1.073a4.7 4.7 0 0 0 .722.922l1.071-.33c.6-.185 1.255.005 1.654.48l.61.726a1.47 1.47 0 0 1-.137 2.042c-.995.908-2.527 1.215-3.674.314a10.4 10.4 0 0 1-2.516-2.87A10 10 0 0 1 2.03 4.013c-.22-1.422.821-2.56 2.119-2.948c.774-.232 1.6.166 1.884.908l.335.875c.22.576.062 1.225-.402 1.641" /></svg>

    }
  ];



  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="   justify-start pl-2 lg:pl-40 h-[100px] bg-white"  >
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
          <Link aria-current="page" href="#LaundryServiceLayout">
            Laundry Services
          </Link>
        </NavbarItem>
        <NavbarItem className="p-4">
          <Link color="foreground" href="#CleaningServiceLayout">
            Cleaning Services
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="fixed end-0 pr-4">
        <NavbarItem className="hidden lg:flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="#00ABF0" d="M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5m0 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" /></svg>
          <Link href="https://maps.google.com/maps?q=11.27851%2C76.2238372&z=17&hl=en" className="text-gray-500 font-light text-lg">Nilambur, Malapuram</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="#00ABF0" d="m5.966 4.49l-.827.742a5 5 0 0 0 .455 1.073a4.7 4.7 0 0 0 .722.922l1.071-.33c.6-.185 1.255.005 1.654.48l.61.726a1.47 1.47 0 0 1-.137 2.042c-.995.908-2.527 1.215-3.674.314a10.4 10.4 0 0 1-2.516-2.87A10 10 0 0 1 2.03 4.013c-.22-1.422.821-2.56 2.119-2.948c.774-.232 1.6.166 1.884.908l.335.875c.22.576.062 1.225-.402 1.641" /></svg>
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
              onClickCapture={() => setIsMenuOpen(false)}
              className="w-full gap-4 font-semibold"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={item.link}
              size="lg"

            >
              {item.icon}
              {item.menu}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}

