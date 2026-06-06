export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#020617] px-4 py-24 text-white selection:bg-cyan-300/25 selection:text-white sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_78%_34%,rgba(124,58,237,0.14),transparent_32%),linear-gradient(180deg,#020617_0%,#071122_54%,#020617_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-cyan-100">اتصل بنا</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            تحدث معنا لتشغيل مساعد البيع الذكي في متجرك
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
            شاركنا احتياجك وسنساعدك على اختيار أفضل طريقة لربط المنتجات وتشغيل تجربة المحادثة.
          </p>
        </div>
      </section>
    </main>
  );
}
