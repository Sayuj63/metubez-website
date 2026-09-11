"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const groups = [
  {
    title: "Metubez Legal",
    items: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Use", href: "/legal/terms" },
      { label: "CSAE Standards", href: "/legal/csae" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Grievance Officer", href: "/support/grievance" },
      { label: "Contact Support", href: "/support/contact" },
      { label: "Community Guidelines", href: "/legal/community" },
    ],
  },
];

export default function PolicyNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(groups.map((g) => [g.title, true])),
  );

  return (
    <nav className="flex flex-col gap-3">
      {groups.map((group) => {
        const isOpen = open[group.title];
        return (
          <div
            key={group.title}
            className="bg-[#f8f8f8] border border-[#eee] rounded-xl p-2"
          >
            <button
              type="button"
              onClick={() =>
                setOpen((prev) => ({ ...prev, [group.title]: !prev[group.title] }))
              }
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-3 py-2 text-left"
            >
              <span className="text-[14px] font-black text-[#111]">
                {group.title}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isOpen && (
              <div className="flex flex-col gap-1 pt-1">
                {group.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`px-3 py-2 rounded-lg text-[13.5px] transition-colors ${
                        active
                          ? "bg-white border border-[#eee] text-[#31B24B] font-bold"
                          : "text-[#555] hover:text-[#31B24B] border border-transparent"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
