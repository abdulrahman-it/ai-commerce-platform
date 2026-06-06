"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "الرئيسية", href: "/" },
  { label: "المميزات", href: "/features" },
  { label: "الأسعار", href: "/pricing" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-center px-4 pt-5 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group/nav relative flex w-full items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/[0.058] px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition duration-500 hover:border-cyan-300/18 hover:bg-white/[0.07] hover:shadow-[0_22px_80px_rgba(0,0,0,0.36),0_0_42px_rgba(34,211,238,0.08),inset_0_1px_0_rgba(255,255,255,0.1)] sm:px-5"
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 transition duration-500 group-hover/nav:opacity-100" />
          <div className="pointer-events-none absolute -inset-x-10 -top-16 h-20 bg-cyan-300/10 blur-3xl opacity-0 transition duration-700 group-hover/nav:opacity-100" />

          <Link
            href="/"
            className="group relative flex items-center gap-3"
            aria-label="AI Commerce Platform"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.25)] transition duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-300/15">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00D9FF] shadow-[0_0_18px_rgba(0,217,255,0.9)]" />
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
              منصة الذكاء الاصطناعي التجارية
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition duration-300 ${
                    isActive
                      ? "bg-cyan-300/[0.1] text-cyan-100 shadow-[0_0_26px_rgba(34,211,238,0.2)]"
                      : "text-slate-300 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {isActive ? (
                    <span className="absolute inset-x-4 -bottom-1 h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent shadow-[0_0_16px_rgba(0,217,255,0.9)]" />
                  ) : null}
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="hidden rounded-full px-4 py-2 text-sm text-slate-300 transition duration-300 hover:bg-white/8 hover:text-white sm:inline-flex"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="#"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(255,255,255,0.18)] transition duration-300 hover:scale-[1.02] hover:bg-cyan-100 hover:shadow-[0_0_34px_rgba(34,211,238,0.32)] sm:inline-flex"
            >
              ابدأ مجاناً
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-white shadow-[0_0_24px_rgba(34,211,238,0.08)] backdrop-blur-xl transition duration-300 active:scale-95 active:border-cyan-300/30 active:bg-cyan-300/[0.08] lg:hidden"
              aria-label="فتح القائمة"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-5 w-5" strokeWidth={1.9} />
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-slate-950/55 backdrop-blur-xl lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%", opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.9 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="absolute right-3 top-3 flex h-[calc(100dvh-1.5rem)] w-[min(88vw,380px)] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#071122]/82 p-4 shadow-[0_28px_110px_rgba(0,0,0,0.55),0_0_70px_rgba(34,211,238,0.12)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00D9FF]/14 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[#7C3AED]/14 blur-2xl" />

              <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#00D9FF] shadow-[0_0_18px_rgba(0,217,255,0.9)]" />
                  </span>
                  <span className="text-sm font-semibold text-white">
                    منصة الذكاء الاصطناعي التجارية
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-slate-200 transition duration-300 active:scale-95 active:border-cyan-300/30 active:bg-cyan-300/[0.08]"
                  aria-label="إغلاق القائمة"
                >
                  <X className="h-5 w-5" strokeWidth={1.9} />
                </button>
              </div>

              <nav className="relative mt-5 grid gap-2">
                {navItems.map((item, index) => {
                  const isActive = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={`${item.href}-${index}`}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`relative rounded-2xl border px-4 py-4 text-sm font-medium transition duration-300 active:scale-[0.985] ${
                        isActive
                          ? "border-cyan-300/20 bg-cyan-300/[0.1] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.14)]"
                          : "border-white/[0.07] bg-white/[0.035] text-slate-300 active:border-cyan-300/20 active:bg-white/[0.06]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="relative mt-auto grid gap-3 border-t border-white/[0.07] pt-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.055] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 active:scale-[0.985] active:border-cyan-300/25 active:bg-white/[0.08]"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#00D9FF] px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_46px_rgba(0,217,255,0.38)] ring-1 ring-cyan-100/30 transition duration-300 active:scale-[0.985]"
                >
                  ابدأ مجاناً
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
