"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "MeTubers", href: "/metubers" },
    { label: "For Brands", href: "/brands" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#eee]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/metubez-logo.png"
            alt="MeTubez"
            width={40}
            height={40}
            className="rounded-md"
            priority
          />
          <span className="text-[18px] font-black tracking-tight text-[#31B24B]">
            MeTubez
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-[#333] hover:text-[#31B24B] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/metubers"
            className="inline-flex items-center gap-2 bg-[#31B24B] hover:bg-[#279940] text-white text-[13px] font-bold px-5 py-2.5 rounded-md transition-colors whitespace-nowrap"
          >
            Become a Metuber
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#ddd]"
          aria-label="Toggle menu"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path
              d="M1 1h16M1 6h16M1 11h16"
              stroke="#111"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#eee] bg-white">
          <div className="px-5 py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-[#333] py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/metubers"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-[#31B24B] text-white text-[14px] font-bold px-5 py-3 rounded-md"
            >
              Become a Metuber
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
