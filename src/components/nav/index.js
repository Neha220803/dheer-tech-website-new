"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const HomeNavComp = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    router.push(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-70 w-full max-w-6xl px-4">
        <div
          className={cn(
            "border rounded-3xl md:rounded-full shadow-2xl transition-all duration-300",
            isScrolled
              ? "backdrop-blur-lg bg-white/10 border-white/20"
              : "bg-white/95 border-gray-200"
          )}
        >
          <div className="flex items-center justify-between px-3 sm:px-6 py-3">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/assets/images/logo/logo.jpeg"
                  alt="DheerTech Inc"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <span className="font-bold text-lg transition-color text-gray-900">
                DheerTech Inc
              </span>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleNavClick("/")}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleNavClick("/about")}
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleNavClick("/our-services")}
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleNavClick("/projects")}
                  >
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <Button
                className="bg-primary text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 hidden sm:flex"
                onClick={() => handleNavClick("/contact")}
              >
                Contact Us
              </Button>
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "lg:hidden rounded-full transition-all duration-200 hover:bg-gray-100 text-gray-900"
                )}
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation Menu - Simple Dropdown */}
        <div
          className={cn(
            "border rounded-3xl md:rounded-full shadow-2xl lg:hidden transition-all mt-3 duration-300 ease-in-out overflow-hidden",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            isScrolled
              ? "backdrop-blur-lg bg-white/10 border-white/20"
              : "bg-white/95 border-gray-200"
          )}
        >
          <div className="px-6 py-4 border-t border-white/20">
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors text-gray-900 hover:bg-gray-100 "
                onClick={() => handleNavClick("/")}
              >
                Home
              </Button>

              <Button
                variant="ghost"
                className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors text-gray-900 hover:bg-gray-100 "
                onClick={() => handleNavClick("/about")}
              >
                About
              </Button>

              <Button
                variant="ghost"
                className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors text-gray-900 hover:bg-gray-100 "
                onClick={() => handleNavClick("/services")}
              >
                Services
              </Button>

              <Button
                variant="ghost"
                className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors text-gray-900 hover:bg-gray-100 "
                onClick={() => handleNavClick("/projects")}
              >
                Projects
              </Button>

              <div className="pt-3">
                <Button
                  className="w-full bg-primary text-white font-medium rounded-full"
                  onClick={() => handleNavClick("/contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
