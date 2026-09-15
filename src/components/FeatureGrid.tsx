"use client";

import { useEffect, useRef, useState } from "react";

type Feature = { n: string; title: string; desc: string };

export default function FeatureGrid({ features }: { features: Feature[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
    >
      {features.map((f, i) => (
        <div
          key={f.n}
          style={{ transitionDelay: shown ? `${i * 90}ms` : "0ms" }}
          className={`transition-all duration-700 ease-out ${
            shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <article className="group relative h-full overflow-hidden rounded-2xl border border-[#eaeaea] bg-gradient-to-b from-white to-[#fbfdfb] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#31B24B]/40 hover:shadow-[0_24px_48px_-24px_rgba(49,178,75,0.55)] md:p-7">
            <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#31B24B]/[0.07] blur-2xl transition-all duration-500 group-hover:bg-[#31B24B]/[0.16]" />
            <span className="absolute inset-x-0 top-0 h-[3px] w-0 bg-[#31B24B] transition-all duration-500 group-hover:w-full" />
            <span className="feature-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-[#31B24B]/[0.06] to-transparent" />

            <div className="relative">
              <span className="inline-flex h-8 items-center rounded-lg bg-[#e8f5ec] px-2.5 text-[13px] font-black tracking-wider text-[#31B24B] transition-colors duration-300 group-hover:bg-[#31B24B] group-hover:text-white">
                {f.n}
              </span>
              <h3 className="mb-2 mt-5 text-[16px] font-black leading-tight text-[#111] md:text-[17px]">
                {f.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#666] md:text-[14px]">
                {f.desc}
              </p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
