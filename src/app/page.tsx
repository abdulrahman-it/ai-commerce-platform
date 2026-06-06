"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Building2,
  Check,
  ChevronDown,
  Code2,
  Crown,
  Headphones,
  HelpCircle,
  Link2,
  Mail,
  MessageCircle,
  MessageSquareText,
  RefreshCw,
  Rocket,
  SearchCheck,
  Send,
  Settings2,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  UserPlus,
  Zap,
} from "lucide-react";

const products = [
  { name: "سماعات برو", price: "349 ر.س" },
  { name: "ساعة ذكية", price: "599 ر.س" },
];

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "أنشئ حسابك واربط متجرك",
    description: "قم بإنشاء حساب وربط متجرك في سلة بسهولة خلال دقائق.",
  },
  {
    number: "02",
    icon: Link2,
    title: "أضف رابط Product Feed",
    description:
      "الصق رابط المنتجات الخاص بمتجرك ليبدأ الذكاء الاصطناعي بقراءة البيانات تلقائياً.",
  },
  {
    number: "03",
    icon: Code2,
    title: "ثبت الـ Widget داخل متجرك",
    description:
      "انسخ كود الـ Widget وضعه داخل الثيم ليظهر البوت مباشرة للعملاء.",
  },
];

const features = [
  {
    icon: RefreshCw,
    title: "مزامنة مباشرة مع سلة",
    description:
      "البوت يقرأ المنتجات والأسعار والتوفر مباشرة من متجرك دون أي تحديث يدوي.",
    className: "lg:col-span-2",
  },
  {
    icon: SearchCheck,
    title: "بحث ذكي باللهجة العربية",
    description:
      "يفهم الذكاء الاصطناعي اللهجات والأخطاء الإملائية ويقترح المنتجات المناسبة بدقة.",
    className: "lg:col-span-1",
  },
  {
    icon: ShoppingCart,
    title: "روابط شراء مباشرة",
    description:
      "يعرض البوت بطاقات منتجات احترافية مع زر شراء مباشر داخل المحادثة.",
    className: "lg:col-span-1",
  },
  {
    icon: Settings2,
    title: "تخصيص شخصية البوت",
    description:
      "تحكم بطريقة كلام البوت ونبرة التواصل والعروض التي يقترحها للعملاء.",
    className: "lg:col-span-1",
  },
  {
    icon: BarChart3,
    title: "تحليلات وتقارير ذكية",
    description:
      "اكتشف أكثر المنتجات طلبًا والأسئلة المتكررة لتطوير تجربة الشراء وزيادة فرص البيع.",
    className: "lg:col-span-2",
  },
];

const pricingPlans = [
  {
    icon: Rocket,
    name: "الباقة الأساسية",
    label: "Starter",
    price: "تجربة مجانية 7 أيام",
    cadence: "",
    description: "للبدء السريع وتجربة المنصة داخل متجر واحد.",
    cta: "ابدأ مجانًا",
    features: [
      "متجر سلة واحد",
      "حتى 100 منتج",
      "500 محادثة شهريًا",
      "ظهور شعار المنصة",
      "توصيات أساسية",
      "لوحة تحكم أساسية",
    ],
  },
  {
    icon: Crown,
    name: "الباقة الاحترافية",
    label: "Pro",
    price: "49$",
    cadence: "/ شهرياً",
    description: "الخطة المثالية للمتاجر الجادة في تحويل المحادثات إلى مبيعات.",
    cta: "ابدأ التجربة الاحترافية",
    badge: "الأكثر طلبًا",
    featured: true,
    features: [
      "حتى 3 متاجر",
      "حتى 5000 منتج",
      "محادثات غير محدودة",
      "إزالة شعار المنصة",
      "تخصيص الهوية والألوان",
      "تحليلات متقدمة",
      "توصيات ذكية",
      "تدريب مخصص للمتجر",
    ],
  },
  {
    icon: Building2,
    name: "باقة الشركات",
    label: "Enterprise",
    price: "تواصل معنا",
    cadence: "",
    description: "للمتاجر الكبيرة واحتياجات مخصصة على مستوى الشركات.",
    cta: "تواصل مع فريق المبيعات",
    features: [
      "متاجر غير محدودة",
      "منتجات غير محدودة",
      "محادثات غير محدودة",
      "سيرفر مخصص",
      "WhatsApp API",
      "CSS كامل",
      "دعم أولوية",
      "SLA",
    ],
  },
];

const faqs = [
  {
    question: "هل يتطلب الربط مع سلة خبرة برمجية؟",
    answer:
      "لا، الربط يتم بسهولة عبر إضافة رابط المنتجات وتثبيت الـ Widget داخل المتجر.",
  },
  {
    question: "هل يدعم البوت اللهجات العربية؟",
    answer:
      "نعم، الذكاء الاصطناعي يفهم اللهجات العربية المختلفة والأخطاء الإملائية.",
  },
  {
    question: "هل يمكن تخصيص طريقة كلام البوت؟",
    answer: "نعم، يمكنك تخصيص شخصية البوت وطريقة الترحيب والعروض المقترحة.",
  },
  {
    question: "هل يمكن استخدامه مع أكثر من متجر؟",
    answer: "نعم، الباقة الاحترافية وباقة الشركات تدعم عدة متاجر.",
  },
];

const contactLinks = [
  { icon: Mail, label: "بريد الدعم", value: "support@aicommerce.sa" },
  { icon: MessageCircle, label: "واتساب", value: "+966 55 000 0000" },
  { icon: MessageCircle, label: "تويتر", value: "@AICommerce" },
  { icon: Link2, label: "لينكدإن", value: "AI Commerce Platform" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white selection:bg-cyan-300/25 selection:text-white"
      dir="rtl"
    >
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent shadow-[0_0_22px_rgba(0,217,255,0.75)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-75">
        <div className="absolute right-[8%] top-[8%] h-64 w-64 rounded-full bg-[#00D9FF]/9 blur-2xl" />
        <div className="absolute left-[5%] top-[36%] hidden h-72 w-72 rounded-full bg-[#7C3AED]/9 blur-2xl md:block" />
        <div className="absolute bottom-[8%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#22D3EE]/6 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,211,238,0.12),transparent_34%),linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.62)_65%,#020617_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.028)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
        <span className="absolute right-[18%] top-[22%] hidden h-1 w-1 rounded-full bg-cyan-200/60 shadow-[0_0_12px_rgba(34,211,238,0.6)] md:block" />
        <span className="absolute left-[14%] top-[30%] hidden h-1 w-1 rounded-full bg-cyan-200/60 shadow-[0_0_12px_rgba(34,211,238,0.6)] md:block" />
        <span className="absolute right-[32%] bottom-[20%] hidden h-1 w-1 rounded-full bg-cyan-200/60 shadow-[0_0_12px_rgba(34,211,238,0.6)] md:block" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_12%_18%,rgba(124,58,237,0.18),transparent_26%),radial-gradient(circle_at_88%_42%,rgba(0,217,255,0.14),transparent_28%),linear-gradient(180deg,#020617_0%,#07111f_48%,#020617_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00D9FF]/15 blur-2xl" />
        <div className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-[#7C3AED]/18 blur-2xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#22D3EE]/10 blur-2xl" />
      </div>

      <section
        id="hero"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] scroll-mt-28 w-full max-w-7xl items-center gap-10 px-4 py-12 sm:gap-14 sm:px-6 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-right">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.12)] backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_14px_rgba(34,211,238,0.95)]" />
            منصة ذكاء اصطناعي مصممة لمتاجر سلة
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="text-balance text-[2.35rem] font-semibold leading-[1.16] tracking-[-0.04em] text-white drop-shadow-[0_18px_70px_rgba(0,0,0,0.35)] min-[380px]:text-4xl sm:text-5xl sm:leading-[1.14] sm:tracking-[-0.045em] lg:text-6xl xl:text-7xl"
          >
            حوّل زوار متجرك إلى مشترين في ثوانٍ باستخدام{" "}
            <span className="relative inline-block text-[#CFFAFE] drop-shadow-[0_0_24px_rgba(34,211,238,0.85)]">
              الذكاء الاصطناعي
              <span className="absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent shadow-[0_0_18px_rgba(0,217,255,0.95)]" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-[#94A3B8] sm:mt-7 sm:text-xl lg:mx-0"
          >
            شات بوت ذكي يقرأ منتجات متجرك مباشرة من سلة ويجيب العملاء ويرسل
            روابط شراء مباشرة لزيادة المبيعات تلقائياً.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.28, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row lg:justify-start"
          >
            <a
              href="#"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#00D9FF] px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_0_42px_rgba(0,217,255,0.45),inset_0_1px_0_rgba(255,255,255,0.45)] ring-1 ring-cyan-100/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_68px_rgba(34,211,238,0.68),0_16px_55px_rgba(0,217,255,0.18)] active:scale-[0.98] sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-l from-white/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="relative">ابدأ تجربتك المجانية الآن</span>
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.055] px-7 py-4 text-sm font-semibold text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.085] hover:text-cyan-50 active:scale-[0.98] sm:w-auto"
            >
              شاهد الديمو الحقيقي
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[620px] lg:mx-0"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-[#0B132B]/78 p-3 shadow-[0_24px_72px_rgba(0,0,0,0.42),0_0_52px_rgba(34,211,238,0.1)] backdrop-blur-xl">
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-cyan-300/25 via-white/5 to-purple-500/20 opacity-70 blur-sm" />
            <div className="relative overflow-hidden rounded-[1.55rem] border border-white/8 bg-slate-950/70">
              <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.035] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-1.5 text-xs text-slate-400">
                  mystore.sa
                </div>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-[1fr_0.86fr]">
                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/8 bg-white/[0.045] p-4">
                    <div className="mb-4 h-36 rounded-2xl bg-[radial-gradient(circle_at_35%_25%,rgba(34,211,238,0.32),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(124,58,237,0.16))] shadow-inner shadow-white/5" />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          سماعات عزل ذكية
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          اقتراح AI حسب اهتمام العميل
                        </p>
                      </div>
                      <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-bold text-cyan-200">
                        349 ر.س
                      </span>
                    </div>
                    <button className="mt-4 w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:bg-cyan-100">
                      شراء الآن
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {products.map((product) => (
                      <div
                        key={product.name}
                        className="rounded-2xl border border-white/8 bg-white/[0.04] p-3"
                      >
                        <div className="mb-3 h-14 rounded-xl bg-gradient-to-br from-cyan-300/14 to-purple-500/18" />
                        <p className="truncate text-xs text-slate-300">
                          {product.name}
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          {product.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl border border-cyan-300/12 bg-[#06101f]/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_46%)]" />
                  <div className="relative mb-auto flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.045] p-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300/12 text-sm font-black text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.22)]">
                      AI
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        مساعد المتجر
                      </p>
                      <p className="text-xs text-cyan-100/70">
                        متصل بمنتجات سلة
                      </p>
                    </div>
                  </div>

                  <div className="relative space-y-3">
                    <div className="mr-auto max-w-[88%] rounded-2xl rounded-bl-md border border-white/8 bg-white/[0.06] p-3 text-xs leading-6 text-slate-200">
                      أبحث عن هدية تقنية بسعر مناسب.
                    </div>
                    <div className="max-w-[92%] rounded-2xl rounded-br-md border border-cyan-300/16 bg-cyan-300/[0.08] p-3 text-xs leading-6 text-cyan-50 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
                      أنصحك بسماعات العزل الذكية. مناسبة جدًا، متوفرة الآن،
                      ويمكنك شراؤها مباشرة.
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.055] p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold text-white">
                            سماعات عزل ذكية
                          </p>
                          <p className="text-xs text-slate-400">349 ر.س</p>
                        </div>
                        <button className="rounded-full bg-[#00D9FF] px-3 py-2 text-xs font-bold text-slate-950 shadow-[0_0_22px_rgba(0,217,255,0.35)]">
                          رابط الشراء
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-20 hidden rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:block">
            <p className="text-xs text-slate-400">معدل التحويل</p>
            <p className="mt-1 text-2xl font-bold text-white">+38%</p>
          </div>

          <div className="absolute -bottom-5 left-3 hidden rounded-2xl border border-cyan-300/15 bg-[#0B132B]/70 px-4 py-3 shadow-[0_0_34px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:block">
            <p className="text-xs text-slate-400">رسائل AI اليوم</p>
            <p className="mt-1 text-2xl font-bold text-cyan-100">1,284</p>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 overflow-hidden border-t border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00D9FF]/12 blur-2xl" />
          <div className="absolute -right-28 bottom-12 h-80 w-80 rounded-full bg-[#7C3AED]/14 blur-2xl" />
          <div className="absolute left-10 top-1/3 h-56 w-56 rounded-full bg-[#22D3EE]/10 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.045] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#00D9FF] shadow-[0_0_14px_rgba(0,217,255,0.9)]" />
              تشغيل سريع بدون تعقيد
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              3 خطوات والتشغيل فوراً
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-[#94A3B8]">
              اربط متجرك وابدأ تشغيل الذكاء الاصطناعي خلال دقائق.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
            <div className="pointer-events-none absolute left-8 right-8 top-16 hidden h-px bg-gradient-to-l from-transparent via-cyan-300/22 to-transparent md:block" />

            {steps.map((step) => {
              const StepIcon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B132B]/58 p-px shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/22 via-white/5 to-purple-500/18 opacity-60 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#22D3EE]/12 blur-2xl transition duration-500 group-hover:bg-[#22D3EE]/20" />
                  <div className="absolute -bottom-20 left-4 h-44 w-44 rounded-full bg-[#7C3AED]/10 blur-2xl transition duration-500 group-hover:bg-[#7C3AED]/16" />

                  <div className="relative h-full rounded-[calc(2rem-1px)] bg-slate-950/72 p-6 sm:p-7">
                    <div className="mb-10 flex items-start justify-between gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/16 bg-cyan-300/[0.08] text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.16)] transition duration-500 group-hover:border-cyan-300/35 group-hover:bg-cyan-300/[0.12] group-hover:shadow-[0_0_48px_rgba(34,211,238,0.28)]">
                        <StepIcon className="h-6 w-6" strokeWidth={1.8} />
                      </div>

                      <span className="bg-gradient-to-b from-white via-cyan-100 to-cyan-400 bg-clip-text text-6xl font-semibold leading-none text-transparent opacity-85 drop-shadow-[0_0_22px_rgba(34,211,238,0.22)] sm:text-7xl">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#94A3B8] sm:text-base">
                      {step.description}
                    </p>

                    <div className="mt-7 flex items-center gap-3 text-xs font-semibold text-cyan-100/80">
                      <span className="h-px w-10 bg-gradient-to-l from-[#00D9FF] to-transparent shadow-[0_0_14px_rgba(0,217,255,0.9)]" />
                      جاهز خلال دقائق
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative z-10 overflow-hidden scroll-mt-28 border-t border-white/[0.06] px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/10 bg-white/[0.03] px-4 py-2 text-sm text-cyan-100">
              <MessageSquareText
                className="h-4 w-4 text-[#22D3EE]"
                strokeWidth={1.8}
              />
              ملخص المميزات الأساسية
            </div>

            <h3 className="text-2xl font-semibold text-white">
              اكتشف ماذا يمكن للذكاء الاصطناعي أن يفعل لمتجرك
            </h3>
            <p className="mt-3 text-sm text-[#94A3B8] mx-auto max-w-2xl">
              عرض مختصر لأهم المميزات. للمزيد زر العرض الكامل.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                Icon: SearchCheck,
                title: "بحث ذكي",
                text: "فهم اللهجات والبحث الدلالي",
              },
              {
                Icon: ShoppingCart,
                title: "روابط شراء",
                text: "بطاقات منتجات مع روابط قابلة للقياس",
              },
              {
                Icon: BarChart3,
                title: "تحليلات",
                text: "مقاييس الأداء والتحويل بشكل مُركّز",
              },
            ].map((item) => {
              const IconComp = item.Icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/14 bg-cyan-300/[0.06] text-cyan-100">
                      <IconComp className="h-6 w-6" strokeWidth={1.7} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-[#94A3B8]">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-full bg-[#00D9FF] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_34px_rgba(0,217,255,0.32)]"
            >
              شاهد المميزات كاملة
            </a>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative z-10 overflow-hidden scroll-mt-28 border-t border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,217,255,0.2),transparent_28%),radial-gradient(circle_at_18%_38%,rgba(124,58,237,0.2),transparent_31%),radial-gradient(circle_at_86%_70%,rgba(0,217,255,0.12),transparent_28%),linear-gradient(180deg,#020617_0%,#061225_48%,#020617_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.032)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
          <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00D9FF]/10 blur-2xl" />
          <div className="absolute -left-28 bottom-20 h-96 w-96 rounded-full bg-[#7C3AED]/14 blur-2xl" />
          <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#22D3EE]/10 blur-2xl" />
          <div className="absolute right-12 top-28 h-24 w-24 rounded-full border border-cyan-300/10 bg-white/[0.025] shadow-[0_0_55px_rgba(34,211,238,0.08)] backdrop-blur-sm opacity-70" />
          <div className="absolute bottom-28 left-16 h-20 w-20 rounded-3xl border border-purple-300/10 bg-purple-400/[0.035] blur-[1px] opacity-50" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.045] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#22D3EE]" strokeWidth={1.8} />
              منصة الذكاء الاصطناعي التجارية
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-6xl">
              ابدأ بتحويل محادثات متجرك إلى مبيعات حقيقية
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-[#94A3B8]">
              اختر الخطة المناسبة لنمو متجرك، ودع الذكاء الاصطناعي يرفع تجربة
              التسوق داخل متجرك.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] p-1.5 shadow-[0_18px_60px_rgba(0,0,0,0.24),0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-2xl"
          >
            <span className="rounded-full px-4 py-2 text-sm text-slate-300">
              سنويًا
            </span>
            <span className="rounded-full bg-[#00D9FF] px-4 py-2 text-sm font-bold text-slate-950 shadow-[0_0_34px_rgba(0,217,255,0.42)]">
              شهريًا
            </span>
            <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.08] px-3 py-2 text-xs font-semibold text-emerald-200">
              خصم 20%
            </span>
          </motion.div>

          <div className="mt-14 grid items-center gap-5 lg:grid-cols-3 lg:gap-6">
            {pricingPlans.map((plan, index) => {
              const PlanIcon = plan.icon;

              return (
                <motion.article
                  key={plan.label}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{
                    duration: 0.72,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: plan.featured ? -10 : -7,
                    scale: plan.featured ? 1.018 : 1.01,
                  }}
                  className={`group relative overflow-hidden rounded-[2.2rem] p-px backdrop-blur-2xl ${
                    plan.featured
                      ? "bg-gradient-to-br from-cyan-200/90 via-cyan-300/22 to-purple-500/48 shadow-[0_42px_150px_rgba(0,217,255,0.34),0_0_110px_rgba(124,58,237,0.2)] ring-1 ring-cyan-200/25 lg:-mt-8 lg:scale-[1.045]"
                      : "border border-white/10 bg-gradient-to-br from-white/13 via-white/[0.035] to-purple-500/13 shadow-[0_26px_85px_rgba(0,0,0,0.34)]"
                  }`}
                >
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { y: [0, plan.featured ? -5 : -3, 0] }
                    }
                    transition={{
                      duration: 14 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.2),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_35%,rgba(124,58,237,0.08))] opacity-60 transition duration-500 group-hover:opacity-100" />
                  <div
                    className={`absolute -top-24 right-1/2 h-64 w-64 translate-x-1/2 rounded-full blur-2xl transition duration-500 ${plan.featured ? "bg-[#00D9FF]/24 group-hover:bg-[#00D9FF]/32" : "bg-[#22D3EE]/10 group-hover:bg-[#22D3EE]/17"}`}
                  />
                  <div className="absolute -bottom-28 left-8 h-64 w-64 rounded-full bg-[#7C3AED]/12 blur-2xl transition duration-500 group-hover:bg-[#7C3AED]/18" />
                  {plan.featured ? (
                    <div className="pointer-events-none absolute -bottom-7 left-1/2 h-28 w-72 -translate-x-1/2 rounded-[50%] border border-cyan-300/32 bg-cyan-300/[0.04] shadow-[0_0_55px_rgba(0,217,255,0.34)]">
                      <div className="absolute inset-4 rounded-[50%] border border-cyan-300/18" />
                      <div className="absolute inset-8 rounded-[50%] border border-cyan-300/12" />
                    </div>
                  ) : null}

                  <div
                    className={`relative flex h-full min-h-[590px] flex-col rounded-[calc(2.2rem-1px)] bg-[#071122]/82 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-7 ${plan.featured ? "border border-cyan-300/28 bg-[#061629]/88" : ""}`}
                  >
                    {plan.badge ? (
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl rounded-t-sm border border-cyan-200/40 bg-[#00D9FF] px-6 py-2 text-xs font-black text-slate-950 shadow-[0_0_42px_rgba(0,217,255,0.62)] backdrop-blur-xl">
                        {plan.badge}
                      </div>
                    ) : null}

                    <div className="flex items-start justify-between gap-5">
                      <motion.div
                        animate={
                          shouldReduceMotion ? undefined : { y: [0, -3, 0] }
                        }
                        transition={{
                          duration: 13 + index,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`grid h-[3.75rem] w-[3.75rem] place-items-center rounded-2xl border text-cyan-100 transition duration-500 ${
                          plan.featured
                            ? "border-cyan-300/35 bg-cyan-300/[0.13] shadow-[0_0_58px_rgba(34,211,238,0.32)]"
                            : "border-cyan-300/16 bg-cyan-300/[0.08] shadow-[0_0_34px_rgba(34,211,238,0.16)] group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.12]"
                        }`}
                      >
                        <PlanIcon className="h-7 w-7" strokeWidth={1.75} />
                      </motion.div>
                      <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-semibold text-slate-300">
                        {plan.label}
                      </span>
                    </div>

                    <div className="mt-7 h-28 overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <div className="relative h-full rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.2),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(124,58,237,0.12))]">
                        {plan.featured ? (
                          <div className="absolute inset-0 flex items-end justify-center gap-2 px-8 pb-5">
                            {[42, 62, 86, 58, 72].map((height) => (
                              <span
                                key={`featured-bar-${height}`}
                                style={{ height: `${height}%` }}
                                className="w-5 rounded-t-xl bg-gradient-to-t from-[#00D9FF] to-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.34)] transition-[height] duration-500"
                              />
                            ))}
                            <TrendingUp
                              className="absolute left-8 top-6 h-8 w-8 text-cyan-100 drop-shadow-[0_0_18px_rgba(34,211,238,0.7)]"
                              strokeWidth={1.7}
                            />
                          </div>
                        ) : (
                          <div className="absolute inset-0 grid place-items-center">
                            <PlanIcon
                              className={`h-16 w-16 ${plan.label === "Enterprise" ? "text-purple-300" : "text-cyan-100"} drop-shadow-[0_0_22px_rgba(34,211,238,0.36)]`}
                              strokeWidth={1.35}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-7">
                      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
                        {plan.name}
                      </h3>
                      <p className="mt-3 min-h-14 text-sm leading-7 text-[#94A3B8]">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mt-7 border-y border-white/[0.07] py-5">
                      <div className="flex items-end gap-2">
                        <span
                          className={`font-semibold tracking-[-0.04em] ${plan.featured ? "text-5xl text-white drop-shadow-[0_0_22px_rgba(34,211,238,0.58)]" : plan.label === "Enterprise" ? "text-3xl text-purple-300 drop-shadow-[0_0_18px_rgba(124,58,237,0.5)]" : "text-2xl text-[#00D9FF] drop-shadow-[0_0_18px_rgba(0,217,255,0.38)]"}`}
                        >
                          {plan.price}
                        </span>
                        {plan.cadence ? (
                          <span className="pb-1 text-sm font-medium text-[#94A3B8]">
                            {plan.cadence}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3.5 text-sm text-slate-300">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${plan.featured ? "border-cyan-300/35 bg-cyan-300/15 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.28)]" : "border-white/10 bg-white/[0.055] text-cyan-100"}`}
                          >
                            <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                          </span>
                          <span className="leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-9">
                      <motion.a
                        whileTap={{ scale: 0.98 }}
                        href="#"
                        className={`group/cta relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-6 py-4 text-sm font-bold transition duration-300 ${
                          plan.featured
                            ? "bg-[#00D9FF] text-slate-950 shadow-[0_0_46px_rgba(0,217,255,0.42)] hover:shadow-[0_0_70px_rgba(34,211,238,0.62)]"
                            : "border border-white/12 bg-white/[0.06] text-white backdrop-blur-xl hover:border-cyan-300/30 hover:bg-white/[0.09] hover:text-cyan-50"
                        }`}
                      >
                        <span className="absolute inset-0 bg-gradient-to-l from-white/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover/cta:opacity-100" />
                        <span className="relative">{plan.cta}</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.72, delay: 0.18, ease: "easeOut" }}
            className="mt-10 grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-[0_24px_90px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl md:grid-cols-4"
          >
            {[
              [
                "تجربة بلا مخاطر",
                "جرب المنصة مجانًا لمدة 7 أيام بدون بطاقة بنكية",
                Check,
              ],
              [
                "دعم 24/7",
                "فريق فني جاهز لمساعدتك على مدار الساعة",
                Headphones,
              ],
              [
                "أمان وخصوصية",
                "بيانات متجرك وعملائك مشفرة وفق أعلى المعايير",
                Store,
              ],
              [
                "إلغاء في أي وقت",
                "يمكنك الإلغاء أو تغيير خطتك في أي وقت",
                RefreshCw,
              ],
            ].map(([title, description, Icon]) => {
              const TrustIcon = Icon as typeof Check;

              return (
                <motion.div
                  key={title as string}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden border-b border-white/[0.07] p-5 last:border-b-0 md:border-b-0 md:border-l md:last:border-l-0 md:border-white/[0.07]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-300/16 bg-cyan-300/[0.08] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.14)]">
                      <TrustIcon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {title as string}
                      </h3>
                      <p className="mt-1 text-xs leading-6 text-[#94A3B8]">
                        {description as string}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden border-t border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_12%,rgba(0,217,255,0.16),transparent_30%),radial-gradient(circle_at_14%_44%,rgba(124,58,237,0.16),transparent_31%),radial-gradient(circle_at_84%_78%,rgba(34,211,238,0.1),transparent_28%),linear-gradient(180deg,#020617_0%,#07111f_48%,#020617_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="absolute right-1/3 top-24 h-96 w-96 rounded-full bg-[#00D9FF]/11 blur-2xl" />
          <div className="absolute -left-28 top-1/3 h-96 w-96 rounded-full bg-[#7C3AED]/14 blur-2xl" />
          <div className="absolute bottom-8 right-16 h-72 w-72 rounded-full bg-[#22D3EE]/10 blur-2xl" />
          <div className="absolute left-12 top-28 h-24 w-24 rounded-[2rem] border border-cyan-300/10 bg-white/[0.025] shadow-[0_0_55px_rgba(34,211,238,0.08)] backdrop-blur-sm opacity-70" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.045] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <Bot className="h-4 w-4 text-[#22D3EE]" strokeWidth={1.8} />
              تجربة حية داخل المحادثة
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-6xl">
              ذكاء اصطناعي يبيع منتجاتك تلقائياً
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-[#94A3B8]">
              البوت يفهم العملاء، يقترح المنتجات المناسبة، ويرسل روابط الشراء
              المباشرة داخل المحادثة.
            </p>
          </motion.div>

          <div className="mt-16 grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-cyan-300/32 via-white/[0.04] to-purple-500/24 p-px shadow-[0_28px_90px_rgba(0,0,0,0.38),0_0_64px_rgba(34,211,238,0.12)] backdrop-blur-xl"
              >
                <div className="absolute -top-28 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-[#00D9FF]/18 blur-2xl" />
                <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-[#7C3AED]/14 blur-2xl" />

                <div className="relative overflow-hidden rounded-[calc(2.25rem-1px)] border border-white/10 bg-slate-950/78">
                  <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.035] px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.1] text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.18)]">
                        <Bot className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          AI Sales Assistant
                        </p>
                        <p className="text-xs text-cyan-100/65">
                          متصل الآن بمنتجات سلة
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
                      مباشر
                    </div>
                  </div>

                  <div className="space-y-5 p-5 sm:p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: 0.1,
                        ease: "easeOut",
                      }}
                      className="mr-auto max-w-[82%] rounded-3xl rounded-bl-md border border-white/10 bg-white/[0.055] px-4 py-3 text-sm leading-7 text-slate-200 shadow-2xl shadow-black/10 backdrop-blur-xl"
                    >
                      أبغى سماعة ممتازة للجيم
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: 0.28,
                        ease: "easeOut",
                      }}
                      className="max-w-[88%] rounded-3xl rounded-br-md border border-cyan-300/16 bg-cyan-300/[0.08] px-4 py-3 text-sm leading-7 text-cyan-50 shadow-[0_0_34px_rgba(34,211,238,0.12)] backdrop-blur-xl"
                    >
                      رشحنا لك هذه السماعة الأكثر مبيعًا 🎧
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 22, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.65,
                        delay: 0.42,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_0%,rgba(34,211,238,0.18),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent)]" />
                      <div className="relative grid gap-4 sm:grid-cols-[150px_1fr]">
                        <div className="relative min-h-40 overflow-hidden rounded-3xl border border-cyan-300/12 bg-[radial-gradient(circle_at_50%_24%,rgba(34,211,238,0.28),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(124,58,237,0.16))] shadow-inner shadow-white/5">
                          <div className="absolute inset-x-8 top-7 h-24 rounded-full border-[10px] border-cyan-100/20 shadow-[0_0_34px_rgba(34,211,238,0.28)]" />
                          <div className="absolute bottom-7 left-1/2 grid h-20 w-20 -translate-x-1/2 place-items-center rounded-[1.4rem] border border-white/12 bg-slate-950/58 text-cyan-100 shadow-[0_0_40px_rgba(0,217,255,0.18)] backdrop-blur-xl">
                            <Headphones
                              className="h-10 w-10"
                              strokeWidth={1.6}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col justify-between gap-4">
                          <div>
                            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-3 py-1 text-xs font-semibold text-cyan-100">
                              <Zap className="h-3.5 w-3.5" strokeWidth={1.8} />
                              موصى بها للجيم
                            </div>
                            <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                              سماعة رياضية عازلة للصوت Pro Fit
                            </h3>
                            <div className="mt-3 flex flex-wrap items-center gap-3">
                              <span className="text-2xl font-bold text-cyan-100 drop-shadow-[0_0_16px_rgba(34,211,238,0.45)]">
                                349 ر.س
                              </span>
                              <div className="flex items-center gap-1 text-amber-300">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className="h-4 w-4 fill-current"
                                    strokeWidth={1.5}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-[#94A3B8]">
                                4.9 من 328 تقييم
                              </span>
                            </div>
                          </div>

                          <motion.a
                            whileTap={{ scale: 0.98 }}
                            href="#"
                            className="group/buy relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[#00D9FF] px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_42px_rgba(0,217,255,0.38)] transition duration-300 hover:shadow-[0_0_64px_rgba(34,211,238,0.6)]"
                          >
                            <span className="absolute inset-0 bg-gradient-to-l from-white/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover/buy:opacity-100" />
                            <span className="relative flex items-center gap-2">
                              اشترِ الآن
                              <ShoppingCart
                                className="h-4 w-4"
                                strokeWidth={2}
                              />
                            </span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                      className="flex w-fit items-center gap-1.5 rounded-full border border-cyan-300/12 bg-cyan-300/[0.055] px-4 py-2 shadow-[0_0_26px_rgba(34,211,238,0.1)] backdrop-blur-xl"
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22D3EE]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22D3EE] [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22D3EE] [animation-delay:240ms]" />
                      <span className="mr-2 text-xs text-cyan-100/70">
                        AI يجهز رابط الشراء
                      </span>
                    </motion.div>

                    <div className="flex items-center gap-3 rounded-3xl border border-white/[0.08] bg-white/[0.035] p-3 backdrop-blur-xl">
                      <div className="flex-1 rounded-full border border-white/[0.07] bg-slate-950/60 px-4 py-3 text-sm text-slate-500">
                        اكتب رسالة للعميل...
                      </div>
                      <button className="grid h-11 w-11 place-items-center rounded-full bg-[#00D9FF] text-slate-950 shadow-[0_0_28px_rgba(0,217,255,0.38)] transition duration-300 hover:scale-105 hover:shadow-[0_0_42px_rgba(34,211,238,0.55)]">
                        <Send className="h-4 w-4" strokeWidth={2.2} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid gap-5">
                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -4, scale: 1.006 }}
                  className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/16 via-white/[0.035] to-cyan-300/18 p-px shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                >
                  <div className="absolute -top-20 left-8 h-56 w-56 rounded-full bg-[#22D3EE]/14 blur-2xl" />
                  <div className="relative rounded-[calc(2rem-1px)] bg-slate-950/74 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-[#94A3B8]">توصيات المنتج</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                          أفضل تطابق للعميل
                        </h3>
                      </div>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/18 bg-cyan-300/[0.08] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                        <TrendingUp className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                    </div>

                    <div className="mt-6 space-y-3">
                      {[
                        ["سماعة رياضية Pro Fit", "92% تطابق", "349 ر.س"],
                        ["ساعة تتبع تمارين", "78% تطابق", "599 ر.س"],
                        ["حقيبة رياضية ذكية", "64% تطابق", "189 ر.س"],
                      ].map(([name, match, price]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/14 to-purple-500/18 text-cyan-100">
                              <Headphones
                                className="h-5 w-5"
                                strokeWidth={1.7}
                              />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {name}
                              </p>
                              <p className="text-xs text-cyan-100/70">
                                {match}
                              </p>
                            </div>
                          </div>
                          <span className="text-sm font-bold text-white">
                            {price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    ["نية الشراء", "+41%", Zap],
                    ["روابط مرسلة", "1,284", Send],
                  ].map(([label, value, Icon]) => {
                    const StatIcon = Icon as typeof Zap;

                    return (
                      <motion.div
                        key={label as string}
                        animate={
                          shouldReduceMotion ? undefined : { y: [0, -3, 0] }
                        }
                        transition={{
                          duration: 16,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_58px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                      >
                        <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/16 bg-cyan-300/[0.08] text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.14)]">
                          <StatIcon className="h-5 w-5" strokeWidth={1.8} />
                        </div>
                        <p className="text-sm text-[#94A3B8]">
                          {label as string}
                        </p>
                        <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
                          {value as string}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="dashboard"
        className="relative z-10 overflow-hidden scroll-mt-28 border-t border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(0,217,255,0.18),transparent_32%),radial-gradient(circle_at_10%_45%,rgba(124,58,237,0.18),transparent_32%),radial-gradient(circle_at_86%_76%,rgba(34,211,238,0.11),transparent_28%),linear-gradient(180deg,#020617_0%,#071122_48%,#020617_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="absolute right-1/4 top-24 h-80 w-80 rounded-full bg-[#00D9FF]/10 blur-2xl" />
          <div className="absolute -left-32 top-1/3 h-[24rem] w-[24rem] rounded-full bg-[#7C3AED]/12 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.045] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <BarChart3 className="h-4 w-4 text-[#22D3EE]" strokeWidth={1.8} />
              Dashboard AI حي لمتجرك
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-6xl">
              لوحة تحكم ذكية لمتابعة أداء متجرك
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-[#94A3B8]">
              راقب المحادثات، المنتجات الأكثر طلبًا، وأداء الذكاء الاصطناعي لحظة
              بلحظة.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
            className="relative mx-auto mt-16 max-w-6xl overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible lg:pb-0"
          >
            <div className="relative w-[980px] overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-cyan-200/42 via-white/[0.055] to-purple-500/28 p-px shadow-[0_34px_115px_rgba(0,0,0,0.42),0_0_68px_rgba(34,211,238,0.14)] backdrop-blur-xl lg:w-full">
              <div className="absolute -top-32 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-[#00D9FF]/18 blur-2xl" />
              <div className="absolute -bottom-36 left-16 h-96 w-96 rounded-full bg-[#7C3AED]/16 blur-2xl" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),transparent_28%,rgba(34,211,238,0.08)_58%,transparent)] opacity-70" />

              <div className="relative rounded-[calc(2.4rem-1px)] border border-white/10 bg-slate-950/72 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-4">
                <div className="grid min-h-[660px] gap-3 lg:grid-cols-[72px_1.15fr_0.95fr]">
                  <aside className="hidden rounded-[1.65rem] border border-white/[0.08] bg-white/[0.045] p-3 backdrop-blur-2xl lg:flex lg:flex-col lg:items-center lg:justify-between">
                    <div className="space-y-3">
                      {[
                        { id: "store", Icon: Store },
                        { id: "messages", Icon: MessageCircle },
                        { id: "analytics", Icon: BarChart3 },
                        { id: "bot", Icon: Bot },
                        { id: "settings", Icon: Settings2 },
                      ].map(({ id, Icon }, index) => (
                        <div
                          key={id}
                          className={`grid h-11 w-11 place-items-center rounded-2xl border transition duration-300 hover:-translate-y-0.5 hover:scale-105 ${index === 0 ? "border-cyan-300/28 bg-cyan-300/[0.12] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.18)]" : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-cyan-300/20 hover:text-cyan-100"}`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                      ))}
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-400">
                      <Sparkles className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                  </aside>

                  <div className="grid gap-3">
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {[
                        {
                          label: "إيراد اليوم",
                          value: "12,840 ر.س",
                          helper: "+14.6% عن أمس",
                          Icon: Zap,
                        },
                        {
                          label: "طلبات من المحادثة",
                          value: "186",
                          helper: "47 طلباً مدفوعاً",
                          Icon: ShoppingCart,
                        },
                        {
                          label: "معدل التحويل",
                          value: "24.8%",
                          helper: "من الزوار المتفاعلين",
                          Icon: TrendingUp,
                        },
                        {
                          label: "رضا العملاء",
                          value: "4.9/5",
                          helper: "328 تقييم هذا الأسبوع",
                          Icon: Star,
                        },
                      ].map(({ label, value, helper, Icon }) => (
                        <div
                          key={label}
                          className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.055] p-4 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_42%)] opacity-60 transition duration-500 group-hover:opacity-100" />
                          <div className="relative flex items-start justify-between gap-3">
                            <div>
                              <p className="text-xs text-[#94A3B8]">{label}</p>
                              <p className="mt-2 text-2xl font-bold tracking-[-0.04em] text-cyan-100 drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]">
                                {value}
                              </p>
                              <p className="mt-2 text-xs text-emerald-200/85">
                                {helper}
                              </p>
                            </div>
                            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/14 bg-cyan-300/[0.08] text-cyan-100">
                              <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-3 xl:grid-cols-[1fr_1.05fr]">
                      <div className="relative overflow-hidden rounded-3xl border border-cyan-300/12 bg-cyan-300/[0.055] p-5 shadow-[0_0_48px_rgba(34,211,238,0.1)] backdrop-blur-2xl">
                        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#22D3EE]/14 blur-2xl" />
                        <div className="relative">
                          <div className="mb-5 flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan-300/18 bg-slate-950/40 text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.16)]">
                                <Bot className="h-7 w-7" strokeWidth={1.65} />
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-white">
                                  مساعد التوصيات الذكي
                                </p>
                                <p className="mt-1 text-xs text-cyan-50/70">
                                  يربط نية الشراء بالمخزون والهامش والمنتجات
                                  الأعلى تحويلاً
                                </p>
                              </div>
                            </div>
                            <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.08] px-2.5 py-1 text-xs font-semibold text-emerald-200">
                              3 فرص جاهزة
                            </span>
                          </div>

                          <div className="space-y-3">
                            {[
                              {
                                title: "ادفع سماعة Pro Fit في بداية المحادثة",
                                reason:
                                  "92% تطابق مع الباحثين عن الجيم + هامش ربح 31%",
                                impact: "+12.4% تحويل",
                              },
                              {
                                title: "اعرض باقة ساعة + سماعة",
                                reason:
                                  "متوسط السلة يرتفع 86 ر.س عند دمج المنتجين",
                                impact: "+18% AOV",
                              },
                              {
                                title: "فعّل كوبون للزائر المتردد بعد 3 رسائل",
                                reason: "41 جلسة مشابهة تحولت بعد خصم محدود",
                                impact: "+9% استرداد",
                              },
                            ].map((item) => (
                              <div
                                key={item.title}
                                className="rounded-[1.4rem] border border-white/[0.08] bg-slate-950/38 p-4"
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <p className="text-sm font-semibold text-white">
                                    {item.title}
                                  </p>
                                  <span className="rounded-full border border-cyan-300/12 bg-cyan-300/[0.07] px-2.5 py-1 text-[11px] font-semibold text-cyan-100">
                                    {item.impact}
                                  </span>
                                </div>
                                <p className="mt-2 text-xs leading-6 text-[#94A3B8]">
                                  {item.reason}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-3xl border border-white/[0.08] bg-white/[0.045] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                        <div className="mb-5 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-white">
                              تحليلات المحادثات
                            </h3>
                            <p className="mt-1 text-xs text-[#94A3B8]">
                              توزيع الجلسات حسب نية العميل خلال آخر 7 أيام
                            </p>
                          </div>
                          <span className="rounded-full bg-cyan-300/[0.08] px-3 py-1 text-xs text-cyan-100">
                            1,452 جلسة
                          </span>
                        </div>

                        <div className="flex h-40 items-end gap-2">
                          {[44, 58, 62, 74, 69, 82, 88, 78, 64, 71, 93, 76].map(
                            (height, index) => (
                              <div
                                key={`intent-bar-${index}`}
                                className="flex flex-1 flex-col items-center justify-end gap-2"
                              >
                                <div
                                  style={{ height: `${height}%` }}
                                  className="w-full rounded-t-xl bg-gradient-to-t from-[#7C3AED]/55 via-[#00D9FF]/70 to-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.18)] transition-[height] duration-500"
                                />
                              </div>
                            ),
                          )}
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-[#94A3B8]">
                          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3">
                            <p className="text-white">شراء مباشر</p>
                            <p className="mt-1 text-cyan-100">38%</p>
                          </div>
                          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3">
                            <p className="text-white">مقارنة منتجات</p>
                            <p className="mt-1 text-cyan-100">27%</p>
                          </div>
                          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3">
                            <p className="text-white">أسئلة توفر</p>
                            <p className="mt-1 text-cyan-100">19%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 xl:grid-cols-[1.04fr_0.96fr]">
                      <div className="rounded-3xl border border-white/[0.08] bg-white/[0.045] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                        <div className="mb-5 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-white">
                              منتجات يوصي بها الذكاء الاصطناعي
                            </h3>
                            <p className="mt-1 text-xs text-[#94A3B8]">
                              مرتبة حسب التحويل المتوقع والهامش والتوفر
                            </p>
                          </div>
                          <span className="rounded-full border border-cyan-300/12 bg-cyan-300/[0.07] px-3 py-1 text-xs text-cyan-100">
                            Product Feed متصل
                          </span>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                          {[
                            {
                              name: "سماعة رياضية Pro Fit",
                              price: "349 ر.س",
                              match: "92% تطابق",
                              stock: "متوفر: 28 قطعة",
                              badge: "الأعلى تحويلاً",
                            },
                            {
                              name: "ساعة ذكية Active S",
                              price: "599 ر.س",
                              match: "81% تطابق",
                              stock: "متوفر: 14 قطعة",
                              badge: "يرفع متوسط السلة",
                            },
                            {
                              name: "حقيبة جيم Tech Bag",
                              price: "189 ر.س",
                              match: "67% تطابق",
                              stock: "متوفر: 42 قطعة",
                              badge: "ملحق مناسب",
                            },
                          ].map((product) => (
                            <div
                              key={product.name}
                              className="relative overflow-hidden rounded-[1.65rem] border border-white/[0.08] bg-white/[0.045] p-4 transition duration-300 hover:-translate-y-1"
                            >
                              <div className="mb-4 rounded-[1.35rem] border border-white/[0.07] bg-[radial-gradient(circle_at_50%_18%,rgba(34,211,238,0.24),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(124,58,237,0.14))] p-3">
                                <div className="flex h-24 items-center justify-center rounded-2xl border border-white/[0.06] bg-slate-950/28 text-cyan-100">
                                  <Headphones
                                    className="h-9 w-9"
                                    strokeWidth={1.7}
                                  />
                                </div>
                              </div>
                              <span className="rounded-full border border-cyan-300/14 bg-cyan-300/[0.08] px-2.5 py-1 text-[11px] font-semibold text-cyan-100">
                                {product.badge}
                              </span>
                              <p className="mt-3 text-sm font-semibold text-white">
                                {product.name}
                              </p>
                              <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                                <span className="text-cyan-100">
                                  {product.match}
                                </span>
                                <span className="text-white">
                                  {product.price}
                                </span>
                              </div>
                              <p className="mt-2 text-xs text-[#94A3B8]">
                                {product.stock}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-3">
                        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.045] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                          <div className="mb-5 flex items-center justify-between">
                            <div>
                              <h3 className="text-sm font-semibold text-white">
                                أداء المبيعات
                              </h3>
                              <p className="mt-1 text-xs text-[#94A3B8]">
                                مقارنة المبيعات من الزوار العاديين مقابل زوار AI
                              </p>
                            </div>
                            <div className="flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-3 py-1.5 text-sm font-bold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
                              +118%
                              <Zap
                                className="h-4 w-4 text-[#22D3EE]"
                                strokeWidth={1.8}
                              />
                            </div>
                          </div>
                          <div className="relative h-44 overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/42 p-4">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
                            <svg
                              viewBox="0 0 320 140"
                              className="relative h-full w-full overflow-visible"
                            >
                              <path
                                d="M0 112 C48 92 72 98 110 86 C148 74 182 58 216 44 C250 32 286 28 320 20"
                                fill="none"
                                stroke="#22D3EE"
                                strokeWidth="4"
                                strokeLinecap="round"
                              />
                              <path
                                d="M0 122 C44 110 72 108 112 102 C156 96 188 84 220 76 C254 68 288 62 320 56"
                                fill="none"
                                stroke="#7C3AED"
                                strokeWidth="4"
                                strokeLinecap="round"
                                opacity="0.9"
                              />
                            </svg>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-[#94A3B8]">
                              <p className="text-white">إيراد من AI</p>
                              <p className="mt-1 text-cyan-100">41,220 ر.س</p>
                            </div>
                            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-[#94A3B8]">
                              <p className="text-white">متوسط الطلب</p>
                              <p className="mt-1 text-cyan-100">221 ر.س</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-3xl border border-cyan-300/12 bg-cyan-300/[0.055] p-4 text-sm leading-7 text-cyan-50/80 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl">
                          <div className="mb-3 flex items-center justify-between">
                            <span className="font-semibold text-white">
                              رؤى تفاعل العملاء
                            </span>
                            <span className="flex items-center gap-1.5 rounded-full bg-emerald-300/[0.08] px-2.5 py-1 text-xs text-emerald-200">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                              Live
                            </span>
                          </div>
                          <div className="space-y-2 text-xs text-cyan-50/75">
                            {[
                              "61% من العملاء يسألون أولاً عن منتج مناسب للجيم قبل السعر",
                              "أفضل وقت لإرسال رابط الشراء هو بعد الرسالة الثالثة بمتوسط 42 ثانية",
                              "سماعة Pro Fit تظهر في 37% من المحادثات الناجحة هذا الأسبوع",
                              "العملاء القادمون من الجوال يتحولون أعلى عند اقتراح منتج واحد فقط",
                            ].map((activity) => (
                              <div
                                key={activity}
                                className="flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.035] px-3 py-2"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF] shadow-[0_0_12px_rgba(0,217,255,0.9)]" />
                                {activity}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-3xl border border-white/[0.08] bg-white/[0.05] p-4 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            أداء الفئات الأعلى طلباً
                          </p>
                          <p className="mt-1 text-xs text-[#94A3B8]">
                            نسبة النقر إلى الشراء من جلسات الذكاء الاصطناعي
                          </p>
                        </div>
                        <BarChart3
                          className="h-5 w-5 text-cyan-100"
                          strokeWidth={1.8}
                        />
                      </div>
                      <div className="space-y-3 text-xs">
                        {[
                          ["سماعات رياضية", 52],
                          ["ساعات ذكية", 38],
                          ["إكسسوارات الجيم", 24],
                        ].map(([name, score]) => (
                          <div key={name as string}>
                            <div className="mb-2 flex items-center justify-between text-[#94A3B8]">
                              <span className="text-white">
                                {name as string}
                              </span>
                              <span className="text-cyan-100">
                                {score as number}%
                              </span>
                            </div>
                            <div className="h-2 rounded-full bg-white/[0.06]">
                              <div
                                style={{ width: `${score as number}%` }}
                                className="h-2 rounded-full bg-gradient-to-l from-[#00D9FF] to-[#7C3AED]"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/[0.08] bg-white/[0.05] p-4 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            جلسات تحتاج متابعة بشرية
                          </p>
                          <p className="mt-1 text-xs text-[#94A3B8]">
                            العملاء الذين أظهروا نية شراء لكن لم يكملوا الطلب
                          </p>
                        </div>
                        <UserPlus
                          className="h-5 w-5 text-cyan-100"
                          strokeWidth={1.8}
                        />
                      </div>
                      <div className="space-y-3 text-xs">
                        {[
                          [
                            "عميل #2031",
                            "سأل عن الشحن ثم غادر",
                            "منتظر منذ 18 دقيقة",
                          ],
                          [
                            "عميل #1984",
                            "قارن بين سماعتين ولم يطلب",
                            "منتظر منذ 26 دقيقة",
                          ],
                          ["عميل #2047", "طلب كوبون خصم", "منتظر منذ 33 دقيقة"],
                        ].map(([name, note, time]) => (
                          <div
                            key={name as string}
                            className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="font-semibold text-white">
                                {name as string}
                              </span>
                              <span className="text-cyan-100">
                                {time as string}
                              </span>
                            </div>
                            <p className="mt-2 leading-6 text-[#94A3B8]">
                              {note as string}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-cyan-300/12 bg-cyan-300/[0.055] p-4 text-sm leading-7 text-cyan-50/80 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-semibold text-white">
                          نشاط البوت المباشر
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full bg-emerald-300/[0.08] px-2.5 py-1 text-xs text-emerald-200">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                          متصل
                        </span>
                      </div>
                      <div className="space-y-2 text-xs text-cyan-50/75">
                        {[
                          "أرسل AI رابط شراء لسماعة Pro Fit بعد مقارنة ناجحة بين 3 منتجات",
                          "اقترح باقة ساعة + سماعة لعميل رياضي ورفع قيمة السلة إلى 948 ر.س",
                          "حوّل جلسة مترددة إلى طلب مكتمل بعد عرض كوبون شحن مجاني",
                        ].map((activity) => (
                          <div
                            key={activity}
                            className="flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.035] px-3 py-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF] shadow-[0_0_12px_rgba(0,217,255,0.9)]" />
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-20 hidden rounded-2xl border border-cyan-300/14 bg-white/[0.07] px-4 py-3 text-xs text-cyan-50/80 shadow-[0_0_26px_rgba(34,211,238,0.1)] backdrop-blur-xl lg:block">
              الطلب على منتجات الشتاء يرتفع الآن
            </div>

            <div className="absolute -left-4 bottom-16 hidden rounded-2xl border border-purple-300/14 bg-white/[0.07] px-4 py-3 text-xs text-slate-200 shadow-[0_0_26px_rgba(124,58,237,0.12)] backdrop-blur-xl lg:block">
              توصية جديدة جاهزة للتطبيق
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="faq"
        className="relative z-10 overflow-hidden scroll-mt-28 border-t border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_12%_58%,rgba(124,58,237,0.13),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.45),#020617_88%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
          <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00D9FF]/10 blur-2xl" />
          <div className="absolute -right-28 bottom-12 h-80 w-80 rounded-full bg-[#7C3AED]/12 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.045] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <HelpCircle
                className="h-4 w-4 text-[#22D3EE]"
                strokeWidth={1.8}
              />
              إجابات واضحة قبل البدء
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              الأسئلة الشائعة
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-[#94A3B8]">
              كل ما تحتاج معرفته قبل تشغيل الذكاء الاصطناعي داخل متجرك.
            </p>
          </motion.div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.62,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-white/14 via-white/[0.035] to-cyan-300/14 p-px shadow-[0_22px_75px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
                >
                  <div className="relative rounded-[calc(1.75rem-1px)] border border-white/[0.06] bg-slate-950/72">
                    <div className="absolute inset-0 rounded-[calc(1.75rem-1px)] bg-[radial-gradient(circle_at_85%_0%,rgba(34,211,238,0.1),transparent_38%)] opacity-60 transition duration-500 group-hover:opacity-100" />
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="relative flex w-full items-center justify-between gap-5 px-5 py-5 text-right sm:px-7"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-white sm:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition duration-300 ${isOpen ? "border-cyan-300/30 bg-cyan-300/[0.12] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.2)]" : "border-white/10 bg-white/[0.045] text-slate-300 group-hover:border-cyan-300/20 group-hover:text-cyan-100"}`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                          strokeWidth={1.8}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="relative border-t border-white/[0.07] px-5 pb-6 pt-5 text-sm leading-8 text-[#94A3B8] sm:px-7 sm:text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 overflow-hidden scroll-mt-28 border-t border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(0,217,255,0.14),transparent_30%),radial-gradient(circle_at_18%_72%,rgba(124,58,237,0.16),transparent_32%),linear-gradient(180deg,#020617_0%,#07111f_45%,#020617_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.032)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="absolute right-1/4 top-20 h-96 w-96 rounded-full bg-[#22D3EE]/11 blur-2xl" />
          <div className="absolute -left-24 bottom-20 h-96 w-96 rounded-full bg-[#7C3AED]/13 blur-2xl" />
          <div className="absolute left-16 top-32 h-24 w-24 rounded-full border border-cyan-300/10 bg-cyan-300/[0.025] shadow-[0_0_58px_rgba(34,211,238,0.08)] backdrop-blur-sm opacity-70" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.045] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <MessageCircle
                className="h-4 w-4 text-[#22D3EE]"
                strokeWidth={1.8}
              />
              تواصل مع فريق المنصة
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              تواصل معنا
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-[#94A3B8]">
              فريقنا جاهز لمساعدتك في تشغيل الذكاء الاصطناعي داخل متجرك.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <motion.form
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.78, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-cyan-300/22 via-white/[0.04] to-purple-500/20 p-px shadow-[0_30px_105px_rgba(0,0,0,0.34),0_0_70px_rgba(34,211,238,0.1)] backdrop-blur-2xl"
            >
              <div className="absolute -top-28 right-16 h-72 w-72 rounded-full bg-[#00D9FF]/14 blur-2xl" />
              <div className="relative rounded-[calc(2.2rem-1px)] border border-white/10 bg-slate-950/76 p-5 sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "الاسم",
                    "البريد الإلكتروني",
                    "رابط متجر سلة",
                    "نوع الاستفسار",
                  ].map((field) => (
                    <label key={field} className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-300">
                        {field}
                      </span>
                      <input
                        type={field === "البريد الإلكتروني" ? "email" : "text"}
                        placeholder={field}
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none backdrop-blur-xl transition duration-300 placeholder:text-slate-600 focus:border-cyan-300/35 focus:bg-white/[0.065] focus:shadow-[0_0_34px_rgba(34,211,238,0.1)]"
                      />
                    </label>
                  ))}
                </div>

                <label className="mt-4 block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    الرسالة
                  </span>
                  <textarea
                    rows={6}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm leading-7 text-white outline-none backdrop-blur-xl transition duration-300 placeholder:text-slate-600 focus:border-cyan-300/35 focus:bg-white/[0.065] focus:shadow-[0_0_34px_rgba(34,211,238,0.1)]"
                  />
                </label>

                <motion.button
                  type="button"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/contact relative mt-6 inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#00D9FF] px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_0_46px_rgba(0,217,255,0.4)] transition duration-300 hover:shadow-[0_0_70px_rgba(34,211,238,0.6)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-l from-white/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover/contact:opacity-100" />
                  <span className="relative flex items-center gap-2">
                    إرسال الرسالة
                    <Send className="h-4 w-4" strokeWidth={2.1} />
                  </span>
                </motion.button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.78, delay: 0.1, ease: "easeOut" }}
              className="grid gap-5"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#22D3EE]/10 blur-2xl" />
                <div className="relative">
                  <div className="mb-7 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/16 bg-cyan-300/[0.08] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                      <Store className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        ابدأ من هنا
                      </h3>
                      <p className="text-sm text-[#94A3B8]">
                        نرد عادة خلال يوم عمل واحد.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {contactLinks.map((item, index) => {
                      const ContactIcon = item.icon;

                      return (
                        <motion.a
                          key={item.label}
                          href="#"
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.07,
                            ease: "easeOut",
                          }}
                          whileHover={{ x: -4 }}
                          className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition duration-300 hover:border-cyan-300/24 hover:bg-white/[0.065] hover:shadow-[0_0_34px_rgba(34,211,238,0.1)]"
                        >
                          <div className="flex items-center gap-3">
                            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/12 bg-cyan-300/[0.07] text-cyan-100 transition duration-300 group-hover:border-cyan-300/28 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.16)]">
                              <ContactIcon
                                className="h-5 w-5"
                                strokeWidth={1.8}
                              />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {item.label}
                              </p>
                              <p className="mt-1 text-xs text-[#94A3B8]">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-cyan-300/12 bg-cyan-300/[0.045] p-6 shadow-[0_0_54px_rgba(34,211,238,0.09)] backdrop-blur-2xl">
                <p className="text-sm leading-7 text-cyan-50/80">
                  إذا كنت تدير متجرًا عالي الطلب، يمكننا تجهيز إعداد مخصص يتوافق
                  مع حجم منتجاتك وقنوات البيع لديك.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
