"use client";

import { useState } from "react";

import Link from "next/link";

import { Dialog, DialogPanel } from "@headlessui/react";

import Button from "./button";
import { NavigationItem } from "@/data/navbarItems";
import { BsList, BsXCircle } from "react-icons/bs";

interface NavbarProps {
  items: NavigationItem[];
}

const NavbarDesktop: React.FC<NavbarProps> = ({ items }) => {
  const buttonHref = "#kontakt";
  const buttonText = "Napište nám";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* ------ DESKTOP MENU */}
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-20 bg-blue shadow-2xs h-20"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">
              Oušťáci - Sdružení nezávislých kandidátů
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/img/logo-white.png"
              className="h-auto w-40 -translate-y-1.5"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            <span className="sr-only">Otevřít menu</span>
            <BsList aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex justify-start gap-5">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-white menu-link hover:text-steel-600 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button label={buttonText} href={buttonHref} inverted />
        </div>
      </nav>

      {/* ------ MOBILE MENU */}

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue sm:max-w-sm sm:ring-1 sm:ring-light/10 transition-all duration-300 ease-in-out transform ${
            mobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex items-center justify-between h-20 px-6">
            <a href="#" className="">
              <span className="sr-only">
                Oušťáci - Sdružení nezávislých kandidátů
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/img/logo-white.png"
                className="h-auto w-40 -translate-y-1.5"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <span className="sr-only">Zavřít menu</span>
              <BsXCircle aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root bg-white h-full px-6">
            <div className="divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base/7 font-semibold text-dark hover:text-red transition-all"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Button label={buttonText} href={buttonHref} inverted />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default NavbarDesktop;
