import Link from "next/link";
import { Link2, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "المميزات", href: "/features" },
  { label: "الأسعار", href: "/pricing" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative z-10 overflow-hidden scroll-mt-28 border-t border-white/[0.06] px-4 py-12 text-white sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1),transparent_34%),linear-gradient(180deg,rgba(2,6,23,0.4),#020617)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/[0.07] pb-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00D9FF] shadow-[0_0_18px_rgba(0,217,255,0.9)]" />
              </span>
              <span className="text-lg font-semibold text-white">
                AI Commerce Platform
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#94A3B8]">
              منصة ذكاء اصطناعي لمتاجر سلة تساعد أصحاب المتاجر على زيادة
              المبيعات وتحسين تجربة العملاء تلقائيًا.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              روابط الصفحات
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:max-w-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#94A3B8] transition duration-300 hover:text-cyan-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">تابعنا</h3>
            <div className="flex gap-3">
              {[
                { id: "whatsapp", Icon: MessageCircle },
                { id: "linkedin", Icon: Link2 },
                { id: "mail", Icon: Mail },
              ].map(({ id, Icon }) => (
                <Link
                  key={id}
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-slate-300 transition duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.08] hover:text-cyan-100 hover:shadow-[0_0_28px_rgba(34,211,238,0.14)]"
                  aria-label={id}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-sm text-[#94A3B8] sm:flex-row">
          <p>© 2026 AI Commerce Platform. جميع الحقوق محفوظة.</p>
          <p className="text-cyan-100/70">Built for intelligent commerce.</p>
        </div>
      </div>
    </footer>
  );
}
