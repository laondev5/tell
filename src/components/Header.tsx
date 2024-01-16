"use client";
import React from "react";
import { MenuIcon, Moon, Sun, Bell } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import ProfileButton from "./ui/ProfileButton";
import Container from "./Container";
import { UserButton, useUser } from "@clerk/nextjs";

const MenuList = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#",
    label: "Blogs",
  },
  {
    href: "#",
    label: "Service",
  },
  {
    href: "#",
    label: "About",
  },
];

const loggedInMenu = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/create",
    label: "Create",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
  },
];
const Header = () => {
  const { theme, setTheme } = useTheme();
  const { user, isLoaded } = useUser();
  const auth = false;
  return (
    <header className="sm:flex sm:justify-between sm:items-center py-3 px-4 shadow-md sticky top-0 left-0 z-50">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 w-full flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="w-6 h-6 lg:hidden" />
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col mx-6 space-y-4 lg:space-x-6">
                  {isLoaded && user ? (
                    <>
                      {loggedInMenu.map((route, i) => (
                        <Button key={i}  asChild variant="ghost">
                          <Link
                            key={i}
                            href={route.href}
                            className="text-sm transition-colors font-medium"
                          >
                            {route.label}
                          </Link>
                        </Button>
                      ))}
                    </>
                  ) : (
                    <>
                      {MenuList.map((route, i) => (
                        <Button key={i} asChild variant="ghost">
                          <Link
                            key={i}
                            href={route.href}
                            className="text-sm transition-colors font-medium"
                          >
                            {route.label}
                          </Link>
                        </Button>
                      ))}
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className=" ml-4 lg:ml-0">
              <h1 className=" text-3xl font-bold text-red-600 cursor-pointer">
                TELL.
                <span className="text-black dark:text-white font-semibold">
                  CO
                </span>
              </h1>
            </Link>
          </div>

          {/* desktop nav bar */}
          <nav className="hidden lg:flex items-center mx-6 space-x-4 lg:space-x-6  ">
            {isLoaded && user ? (
              <>
                {loggedInMenu.map((route, i) => (
                  <Button key={i} asChild variant="ghost">
                    <Link
                      key={i}
                      href={route.href}
                      className="text-sm transition-colors font-medium"
                    >
                      {route.label}
                    </Link>
                  </Button>
                ))}
              </>
            ) : (
              <>
                {MenuList.map((route, i) => (
                  <Button key={i} asChild variant="ghost">
                    <Link
                      key={i}
                      href={route.href}
                      className="text-sm transition-colors font-medium"
                    >
                      {route.label}
                    </Link>
                  </Button>
                ))}
              </>
            )}
          </nav>

          <div className="flex items-center justify-center space-x-4">
            <Button
              size="icon"
              variant="ghost"
              className="mr-2"
              aria-label="shopping cart"
            >
              <span className="sr-only">shopping cart</span>
              <Bell className="h-6 w-6" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              aria-label="theme toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="w-6 h-6 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all" />
              <span className="sr-only">toggle theme</span>
            </Button>
            {isLoaded && user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="flex items-center space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="mr-2"
                  aria-label="login"
                >
                  <span className="sr-only">login</span>
                  <Link
                    href="/login"
                    className="text-sm transition-colors font-medium"
                  >
                    Login
                  </Link>
                </Button>
                <Button size="sm" variant="default" aria-label="register">
                  <span className="sr-only">register</span>
                  <Link
                    href="/register"
                    className="text-sm transition-colors font-medium"
                  >
                    Register
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
