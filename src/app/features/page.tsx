"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  Clock3,
  Gauge,
  Gift,
  LineChart,
  Link2,
  MessageSquareText,
  MousePointerClick,
  RefreshCw,
  Rocket,
  SearchCheck,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserPlus,
  Workflow,
  Zap,
} from "lucide-react";

const productImages = [
  {
    name: "مجموعة قهوة مختصة",
    price: "249 ر.س",
    match: "96%",
    reason: "مناسبة كهدية ضمن الميزانية",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "ساعة ذكية رياضية",
    price: "399 ر.س",
    match: "91%",
    reason: "عميل مهتم باللياقة والتتبع",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "حقيبة جلد عملية",
    price: "320 ر.س",
    match: "88%",
    reason: "طلب منتج فاخر للاستخدام اليومي",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=640&q=80",
  },
];

const capabilityBlocks = [
  {
    icon: RefreshCw,
    eyebrow: "مزامنة المنتجات",
    title: "بيانات متجرك محدثة داخل كل محادثة",
    description:
      "قراءة فورية للمنتجات والأسعار والتوفر والمتغيرات حتى لا يقترح البوت منتجاً غير متاح أو بسعر قديم.",
    details: ["تحديث مباشر عند أي تغيير", "دعم خصائص المنتج والمتغيرات"],
    visual: "catalog",
    className: "lg:col-span-5",
  },
  {
    icon: SearchCheck,
    eyebrow: "بحث ذكي",
    title: "يفهم اللهجة والنية قبل الكلمات",
    description:
      "بحث دلالي يتعامل مع اللهجات العربية والأخطاء الإملائية ويصل سريعاً إلى المنتج الأقرب لاحتياج العميل.",
    details: ["بحث دلالي متقدم", "اقتراحات حسب النية والسلوك"],
    visual: "search",
    className: "lg:col-span-7",
  },
  {
    icon: ShoppingCart,
    eyebrow: "روابط شراء",
    title: "من التوصية إلى الدفع بدون احتكاك",
    description:
      "بطاقات منتجات داخل المحادثة مع روابط شراء مباشرة ووسوم قياس تساعدك على معرفة مصدر كل طلب.",
    details: ["روابط مرجعية قابلة للقياس", "دعم تتبع الحملات UTM"],
    visual: "checkout",
    className: "lg:col-span-7",
  },
  {
    icon: Settings2,
    eyebrow: "شخصية البوت",
    title: "نبرة متوافقة مع هوية متجرك",
    description:
      "خصص الترحيب والردود وسياسات العرض ليبدو الذكاء الاصطناعي جزءاً طبيعياً من تجربة علامتك.",
    details: ["تخصيص الترحيب والردود", "قواعد عرض العرض حسب السياسات"],
    visual: "tone",
    className: "lg:col-span-5",
  },
];

const workflowExamples = [
  {
    label: "نية شراء عالية",
    action: "اعرض كوبون محدود",
    result: "+18% إتمام طلبات",
    message: "العميل يسأل: هل يوجد عرض إذا طلبت الآن؟",
  },
  {
    label: "تردد في السعر",
    action: "اقترح بديل مناسب",
    result: "+24% تفاعل",
    message: "العميل يقول: أبغى خيار قريب بس أقل سعراً.",
  },
  {
    label: "عودة عميل سابق",
    action: "رشح منتجات مكملة",
    result: "+31% متوسط السلة",
    message: "العميل اشترى قهوة سابقاً ويبحث عن إضافة جديدة.",
  },
];

const impactMetrics = [
  { value: "+32%", label: "زيادة التحويل", icon: TrendingUp },
  { value: "+21%", label: "نمو الإيراد", icon: LineChart },
  { value: "94%", label: "رضا العملاء", icon: Star },
  { value: "8س", label: "توفير يومي للفرق", icon: Clock3 },
];

const stories = [
  {
    company: "متجر عناية وجمال",
    quote:
      "أصبح العميل يحصل على توصية واضحة خلال ثوانٍ، وانخفضت الأسئلة المتكررة على فريق الدعم بشكل ملحوظ.",
    metric: "+27%",
    label: "طلبات من المحادثات",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=640&q=80",
  },
  {
    company: "علامة أزياء محلية",
    quote:
      "أفضل ما تغير هو جودة الاقتراحات. البوت يفهم المقاس، المناسبة والميزانية ثم يرسل رابط شراء مباشر.",
    metric: "+34%",
    label: "ارتفاع متوسط السلة",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=640&q=80",
  },
  {
    company: "متجر إلكترونيات",
    quote:
      "لوحة التحليلات أوضحت لنا المنتجات التي يسأل عنها العملاء ولا يشترونها، فعدلنا العروض فوراً.",
    metric: "19%",
    label: "تحسن في إتمام الشراء",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=640&q=80",
  },
];

const faqs = [
  {
    question: "هل يتطلب الربط مع سلة خبرة برمجية؟",
    answer:
      "لا، الربط يتم بسهولة عبر إضافة رابط المنتجات وتثبيت الـ Widget داخل المتجر، ثم تتولى المنصة تنظيم البيانات وتشغيل التجربة.",
  },
  {
    question: "هل يدعم البوت اللهجات العربية؟",
    answer:
      "نعم، الذكاء الاصطناعي يفهم اللهجات العربية المختلفة والأخطاء الإملائية ويستخدم سياق الحديث لتقديم توصيات أدق.",
  },
  {
    question: "هل يمكن تخصيص شخصية البوت؟",
    answer:
      "نعم، يمكنك تخصيص نبرة الردود، نصوص الترحيب، سياسات العروض، وطريقة عرض المنتجات لتتناسب مع هوية متجرك.",
  },
  {
    question: "كيف يتم قياس أداء المحادثات؟",
    answer:
      "توفر المنصة تحليلات للمحادثات، المنتجات الأعلى تحويلاً، متوسط قيمة الطلب، ونقاط الاحتكاك التي تمنع العميل من الشراء.",
  },
];

const particles = [
  { right: "10%", top: "12%", delay: 0 },
  { right: "24%", top: "34%", delay: 0.4 },
  { right: "48%", top: "18%", delay: 0.8 },
  { right: "68%", top: "42%", delay: 0.2 },
  { right: "84%", top: "22%", delay: 1.1 },
  { right: "16%", top: "68%", delay: 0.7 },
  { right: "56%", top: "76%", delay: 0.3 },
  { right: "78%", top: "64%", delay: 1.3 },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const viewport = { once: true, margin: "-90px" } as const;
const baseTransition: Transition = { duration: 0.7, ease: "easeOut" };
const softTransition: Transition = { duration: 0.9, ease: "easeOut" };

function CapabilityVisual({ type }: { type: string }) {
  if (type === "catalog") {
    const [featured, ...rest] = productImages;
    return (
      <div className="rounded-[1.7rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="overflow-hidden rounded-[1.3rem] border border-white/[0.08] bg-[#081426]">
          <img
            src={featured.image}
            alt={featured.name}
            loading="lazy"
            className="h-28 w-full object-cover"
          />
          <div className="p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  {featured.name}
                </p>
                <p className="mt-1 text-[11px] text-[#94A3B8]">
                  {featured.reason}
                </p>
              </div>
              <span className="rounded-full bg-cyan-300/[0.12] px-2.5 py-1 text-[10px] font-semibold text-cyan-100">
                {featured.match}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {rest.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#020617]/70 p-2.5"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-16 w-full rounded-xl object-cover"
              />
              <p className="mt-2 truncate text-[11px] text-white">
                {product.name}
              </p>
              <p className="text-[10px] text-cyan-100">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "search") {
    return (
      <div className="rounded-[1.7rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(0,217,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.045] px-4 py-3 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          أبي هدية قهوة فخمة بحدود 250
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
          {[
            ["النية", "هدية"],
            ["الفئة", "قهوة مختصة"],
            ["الميزانية", "200 - 280 ر.س"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/[0.08] bg-[#020617]/65 px-3 py-2"
            >
              <p className="text-[#94A3B8]">{label}</p>
              <p className="mt-1 font-semibold text-cyan-100">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-2xl border border-white/[0.08] bg-[#020617]/70 p-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold text-white">
              نتيجة البحث الأنسب
            </p>
            <span className="rounded-full bg-cyan-300/[0.12] px-2.5 py-1 text-[10px] font-semibold text-cyan-100">
              تطابق مرتفع
            </span>
          </div>
          <p className="mt-2 text-xs leading-6 text-[#94A3B8]">
            تم فهم اللهجة، الميزانية، وغرض الشراء في نفس الرسالة.
          </p>
        </div>
      </div>
    );
  }

  if (type === "checkout") {
    const product = productImages[0];
    return (
      <div className="overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-3 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-32 w-full rounded-2xl object-cover"
        />
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">{product.name}</p>
            <p className="mt-1 text-xs text-[#94A3B8]">{product.reason}</p>
          </div>
          <p className="text-sm font-semibold text-cyan-100">{product.price}</p>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#020617]/70 px-3 py-2 text-[11px]">
          <span className="text-[#94A3B8]">مصدر الطلب</span>
          <span className="font-semibold text-cyan-100">Chat / UTM</span>
        </div>
        <a
          href="/contact"
          className="group relative mt-3 inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#00D9FF] px-4 py-2.5 text-center text-xs font-bold text-slate-950 shadow-[0_0_28px_rgba(0,217,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
        >
          <span className="absolute inset-0 bg-gradient-to-l from-white/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          <span className="relative">رابط شراء مباشر</span>
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-[1.7rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="space-y-2.5">
        {["ودود ومختصر", "احترافي", "يناسب هوية المتجر"].map((tone, index) => (
          <div
            key={tone}
            className={`rounded-2xl border px-4 py-3 text-sm ${index === 0 ? "border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.08)]" : "border-white/[0.07] bg-white/[0.035] text-slate-300"}`}
          >
            {tone}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-2xl border border-white/[0.08] bg-[#020617]/70 p-3 text-xs leading-6 text-[#94A3B8]">
        أهلًا! حسب اختيارك، أرشح لك منتجًا عمليًا مع عرض واضح ورابط شراء مباشر.
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  const [openFeatureFaq, setOpenFeatureFaq] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? { initial: false as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport,
        transition: baseTransition,
      };
  const heroProduct = productImages[0];

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white selection:bg-cyan-300/25 selection:text-white"
      dir="rtl"
    >
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent shadow-[0_0_22px_rgba(0,217,255,0.75)]" />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <div className="absolute right-[8%] top-[8%] h-64 w-64 rounded-full bg-[#00D9FF]/9 blur-2xl" />
        <div className="absolute left-[5%] top-[30%] hidden h-72 w-72 rounded-full bg-[#7C3AED]/10 blur-2xl md:block" />
        <div className="absolute bottom-[8%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#22D3EE]/7 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,211,238,0.14),transparent_34%),linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.68)_65%,#020617_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.032)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
        {particles.map((particle, index) => (
          <span
            key={`${particle.right}-${particle.top}`}
            className="absolute hidden rounded-full bg-cyan-200/65 md:block"
            style={{
              right: particle.right,
              top: particle.top,
              width: index % 3 === 0 ? "5px" : "4px",
              height: index % 3 === 0 ? "5px" : "4px",
              boxShadow:
                index % 2 === 0
                  ? "0 0 14px rgba(34,211,238,0.75)"
                  : "0 0 10px rgba(34,211,238,0.55)",
              opacity: index % 2 === 0 ? 0.8 : 0.45,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,0.2),transparent_34%),radial-gradient(circle_at_12%_18%,rgba(124,58,237,0.18),transparent_26%),radial-gradient(circle_at_88%_42%,rgba(0,217,255,0.12),transparent_28%),linear-gradient(180deg,#020617_0%,#07111f_48%,#020617_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00D9FF]/14 blur-2xl" />
        <div className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-[#7C3AED]/16 blur-2xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#22D3EE]/10 blur-2xl" />
      </div>

      {/* Features Hero */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-right">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.12)] backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_14px_rgba(34,211,238,0.95)]" />
            مميزات مصممة لتحويل المحادثة إلى طلب
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="text-balance text-[2.45rem] font-semibold leading-[1.15] tracking-[-0.045em] text-white drop-shadow-[0_18px_70px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            تجربة شراء ذكية تبدو وكأنها
            <span className="relative mr-2 inline-block text-[#CFFAFE] drop-shadow-[0_0_24px_rgba(34,211,238,0.85)]">
              جزء طبيعي من متجرك
              <span className="absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent shadow-[0_0_18px_rgba(0,217,255,0.95)]" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-pretty text-lg leading-9 text-[#94A3B8] sm:text-xl"
          >
            مزامنة منتجاتك، فهم نية العميل، اقتراح المنتج الأنسب، وإرسال رابط
            الشراء مباشرة — كل ذلك داخل واجهة محادثة عربية مصممة لرفع التحويل.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#00D9FF] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_42px_rgba(0,217,255,0.38),inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-cyan-100/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_68px_rgba(34,211,238,0.56),0_16px_55px_rgba(0,217,255,0.16)] hover:bg-cyan-300 active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-l from-white/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="relative">اطلب تجربة مجانية</span>
              <ArrowLeft className="relative h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.055] px-6 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.085] hover:text-cyan-50 active:scale-[0.98]"
            >
              شاهد كيف تعمل المنصة
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.32, ease: "easeOut" }}
            className="mt-9 grid max-w-xl grid-cols-3 gap-3"
          >
            {[
              ["+32%", "تحويل أعلى"],
              ["24/7", "مساعد بيع"],
              ["< 3د", "بدء سريع"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/16 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_rgba(0,0,0,0.24),0_0_28px_rgba(34,211,238,0.08)]"
              >
                <p className="text-xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-xs text-[#94A3B8]">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.85, delay: 0.16, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.24),transparent_42%),radial-gradient(circle_at_20%_80%,rgba(124,58,237,0.22),transparent_38%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#071122]/90 p-3 shadow-[0_32px_120px_rgba(0,0,0,0.45),0_0_52px_rgba(34,211,238,0.1)] backdrop-blur-2xl">
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-white/5 to-purple-500/16 opacity-70 blur-sm" />
            <div className="relative rounded-[1.45rem] border border-white/[0.07] bg-[#020617] p-4">
              <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] text-slate-400">
                  mystore.sa
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    مساعد الشراء الذكي
                  </p>
                  <p className="mt-1 text-xs text-[#94A3B8]">
                    متصل بمنتجات المتجر مباشرة
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  مباشر
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                    <p className="text-xs text-[#94A3B8]">سؤال العميل</p>
                    <p className="mt-2 text-sm leading-6 text-white">
                      أحتاج هدية عملية لشخص يحب القهوة، الميزانية حول 250 ريال.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                      <BrainCircuit className="h-4 w-4" strokeWidth={1.8} />
                      تحليل النية
                    </div>
                    <div className="mt-4 space-y-3 text-xs text-[#94A3B8]">
                      <div className="flex items-center justify-between">
                        <span>نوع الطلب</span>
                        <span className="text-white">هدية</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>السعر المناسب</span>
                        <span className="text-white">200 - 280 ريال</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>جاهزية الشراء</span>
                        <span className="text-cyan-100">عالية</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">
                      أفضل توصية
                    </p>
                    <span className="rounded-full bg-[#00D9FF] px-3 py-1 text-xs font-semibold text-slate-950">
                      تطابق {heroProduct.match}
                    </span>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-[#081426] p-4">
                    <img
                      src={heroProduct.image}
                      alt={heroProduct.name}
                      loading="lazy"
                      className="h-36 w-full rounded-xl object-cover"
                    />
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">
                          {heroProduct.name}
                        </p>
                        <p className="mt-1 text-sm text-[#94A3B8]">
                          {heroProduct.reason}
                        </p>
                      </div>
                      <p className="font-semibold text-cyan-100">
                        {heroProduct.price}
                      </p>
                    </div>
                    <a
                      href="/contact"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00D9FF] px-4 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                    >
                      إرسال رابط الشراء
                      <Link2 className="h-4 w-4" strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Product Showcase */}
      <section
        id="showcase"
        className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} {...motionProps} className="max-w-3xl">
            <p className="text-sm font-semibold text-cyan-100">
              Product Showcase
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              لوحة تشغيل واحدة تربط المنتجات، المحادثات، والطلبات
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#94A3B8]">
              بدلاً من أدوات منفصلة، تحصل على مساحة عمل موحدة ترى فيها ما يحدث
              في كل محادثة وتتحكم في التوصيات والعروض من مكان واحد.
            </p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            {...motionProps}
            transition={softTransition}
            className="mt-10 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.36),0_0_40px_rgba(34,211,238,0.06)]"
          >
            <div className="grid rounded-[1.5rem] border border-white/[0.06] bg-[#071122] lg:grid-cols-[260px_1fr]">
              <aside className="border-b border-white/[0.06] p-5 lg:border-b-0 lg:border-l">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#00D9FF] text-slate-950">
                    <Bot className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      AI Commerce
                    </p>
                    <p className="text-xs text-[#94A3B8]">لوحة المتجر</p>
                  </div>
                </div>

                <div className="mt-8 space-y-2 text-sm">
                  {[
                    [MessageSquareText, "المحادثات", "text-cyan-100"],
                    [ShoppingCart, "المنتجات", "text-white"],
                    [Gift, "العروض", "text-white"],
                    [BarChart3, "التحليلات", "text-white"],
                  ].map(([Icon, label, color]) => {
                    const NavIcon = Icon as typeof MessageSquareText;
                    return (
                      <div
                        key={label as string}
                        className={`flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.035] px-4 py-3 ${color}`}
                      >
                        <NavIcon className="h-4 w-4" strokeWidth={1.8} />
                        {label as string}
                      </div>
                    );
                  })}
                </div>
              </aside>

              <div className="p-5 lg:p-7">
                <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
                  <div className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-3">
                      {[
                        ["محادثات نشطة", "128", "+14%"],
                        ["توصيات مرسلة", "842", "+31%"],
                        ["طلبات من البوت", "96", "+22%"],
                      ].map(([label, value, change]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-white/[0.07] bg-[#020617]/70 p-4"
                        >
                          <p className="text-xs text-[#94A3B8]">{label}</p>
                          <div className="mt-3 flex items-end justify-between">
                            <p className="text-2xl font-semibold text-white">
                              {value}
                            </p>
                            <span className="text-xs text-cyan-100">
                              {change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      {productImages.map((product) => (
                        <div
                          key={product.name}
                          className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-[#020617]/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/16 hover:shadow-[0_18px_40px_rgba(0,0,0,0.26),0_0_24px_rgba(34,211,238,0.06)]"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="h-32 w-full object-cover"
                          />
                          <div className="p-4">
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-semibold text-white">
                                {product.name}
                              </p>
                              <span className="rounded-full bg-cyan-300/[0.08] px-2 py-1 text-[10px] font-semibold text-cyan-100">
                                {product.match}
                              </span>
                            </div>
                            <p className="mt-2 text-xs leading-6 text-[#94A3B8]">
                              {product.reason}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-cyan-100">
                              {product.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      [
                        BrainCircuit,
                        "فهم نية العميل",
                        "تصنيف تلقائي للنية، الميزانية، ومرحلة الشراء.",
                      ],
                      [
                        Target,
                        "ترشيح المنتج الأنسب",
                        "توصيات مبنية على السياق، التوفر، وسلوك العميل.",
                      ],
                      [
                        MousePointerClick,
                        "رابط شراء قابل للقياس",
                        "كل توصية تتحول إلى رابط يمكن تتبع مصدره.",
                      ],
                    ].map(([Icon, title, text]) => {
                      const ItemIcon = Icon as typeof BrainCircuit;
                      return (
                        <div
                          key={title as string}
                          className="rounded-2xl border border-white/[0.07] bg-[#020617]/70 p-5"
                        >
                          <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                            <ItemIcon className="h-5 w-5" strokeWidth={1.8} />
                          </div>
                          <p className="font-semibold text-white">
                            {title as string}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                            {text as string}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How The Platform Works */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            {...motionProps}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold text-cyan-100">
              كيف تعمل المنصة
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              مسار واضح من السؤال إلى الشراء
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#94A3B8]">
              كل خطوة مصممة لتقليل الاحتكاك وزيادة ثقة العميل قبل الضغط على رابط
              الدفع.
            </p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            {...motionProps}
            className="mt-12 rounded-[2rem] border border-white/[0.08] bg-[#071122]/82 p-5 lg:p-8"
          >
            <div className="grid gap-4 lg:grid-cols-4">
              {[
                [
                  UserPlus,
                  "العميل",
                  "يسأل بطريقته ولهجته عن منتج أو حل مناسب.",
                ],
                [
                  Bot,
                  "الذكاء الاصطناعي",
                  "يفهم النية، الميزانية، السياق، وسجل التفاعل.",
                ],
                [
                  Sparkles,
                  "التوصية",
                  "يعرض أفضل المنتجات مع سبب واضح للاختيار.",
                ],
                [
                  ShoppingCart,
                  "الشراء",
                  "يرسل رابط دفع مباشر وقابل للقياس داخل المحادثة.",
                ],
              ].map(([Icon, title, text], index) => {
                const FlowIcon = Icon as typeof UserPlus;
                return (
                  <div
                    key={title as string}
                    className="relative rounded-3xl border border-white/[0.07] bg-white/[0.035] p-5"
                  >
                    {index < 3 && (
                      <div className="absolute left-[-26px] top-1/2 hidden h-px w-8 bg-gradient-to-l from-cyan-300/60 to-transparent lg:block" />
                    )}
                    <div className="mb-5 flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                        <FlowIcon className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                      <span className="text-sm text-[#94A3B8]">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="text-xl font-semibold text-white">
                      {title as string}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
                      {text as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} {...motionProps} className="max-w-3xl">
            <p className="text-sm font-semibold text-cyan-100">
              AI Capabilities
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              قدرات ذكية تغطي رحلة البيع بالكامل
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            {capabilityBlocks.map((item, index) => {
              const CapabilityIcon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  {...motionProps}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/18 hover:shadow-[0_28px_90px_rgba(0,0,0,0.3),0_0_42px_rgba(34,211,238,0.08)] ${item.className}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%)] opacity-70" />
                  <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#00D9FF]/10 blur-3xl" />
                  <div className="relative grid gap-8 md:grid-cols-[1fr_240px] md:items-end">
                    <div>
                      <div className="mb-6 grid h-13 w-13 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                        <CapabilityIcon className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                      <p className="text-sm font-semibold text-cyan-100">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
                        {item.description}
                      </p>
                      <div className="mt-4 space-y-3">
                        {item.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-3 text-sm text-slate-200"
                          >
                            <Check
                              className="h-4 w-4 text-cyan-100"
                              strokeWidth={2.2}
                            />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                    <CapabilityVisual type={item.visual} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analytics & Insights */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div variants={fadeUp} {...motionProps}>
            <p className="text-sm font-semibold text-cyan-100">
              Analytics & Insights
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              افهم ما يحدث قبل أن يشتري العميل
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#94A3B8]">
              تقارير ذكية تكشف أداء المحادثات، المنتجات الأعلى تحويلاً، الأسئلة
              المتكررة، ومقاييس متوسط قيمة الطلب والتحويل.
            </p>
            <div className="mt-7 space-y-3">
              {[
                "لوحات قابلة للتخصيص حسب الفريق أو الحملة",
                "تصدير التقارير ومقارنة الفترات",
                "قراءة نقاط الاحتكاك التي تمنع إتمام الشراء",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <Check className="h-4 w-4 text-cyan-100" strokeWidth={2.2} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            {...motionProps}
            className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#071122]/86 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.34),0_0_38px_rgba(34,211,238,0.06)]"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["AOV", "187 ر.س", "+12%"],
                ["Conversion", "8.4%", "+2.1%"],
                ["Top Intent", "هدية", "42%"],
              ].map(([label, value, change]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-[#020617]/70 p-4"
                >
                  <p className="text-xs text-[#94A3B8]">{label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-cyan-100">{change}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_260px]">
              <div className="rounded-2xl border border-white/[0.07] bg-[#020617]/70 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold text-white">مسار التحويل</p>
                  <BarChart3
                    className="h-5 w-5 text-cyan-100"
                    strokeWidth={1.8}
                  />
                </div>
                <div className="space-y-4">
                  {[
                    ["بدأ محادثة", "100%"],
                    ["استلم توصية", "74%"],
                    ["ضغط رابط الشراء", "41%"],
                    ["أكمل الطلب", "18%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-[#94A3B8]">{label}</span>
                        <span className="text-white">{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-[#00D9FF]"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-[#020617]/70 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold text-white">رؤى المحادثات</p>
                  <Gauge className="h-5 w-5 text-cyan-100" strokeWidth={1.8} />
                </div>
                <div className="space-y-3">
                  {[
                    "أسئلة توفر",
                    "مقارنة أسعار",
                    "طلب مقاسات",
                    "استفسار شحن",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl bg-white/[0.035] px-3 py-2 text-sm"
                    >
                      <span className="text-[#94A3B8]">{item}</span>
                      <span className="text-cyan-100">
                        {["19%", "17%", "14%", "11%"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automation & Workflows */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div variants={fadeUp} {...motionProps}>
              <p className="text-sm font-semibold text-cyan-100">
                Automation & Workflows
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                عروض وكوبونات تتحرك حسب نية العميل
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#94A3B8]">
                أنشئ قواعد لتفعيل عروض وكوبونات تلقائياً بناءً على نية العميل
                وسلوكه داخل المحادثة، بدون متابعة يدوية من الفريق.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              {...motionProps}
              className="space-y-4"
            >
              {workflowExamples.map((item, index) => (
                <div
                  key={item.label}
                  className="grid gap-3 rounded-3xl border border-white/[0.07] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(2,6,23,0.72))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/14 hover:shadow-[0_20px_45px_rgba(0,0,0,0.24)] md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center"
                >
                  <div className="md:col-span-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-sm text-[#94A3B8]">
                    {item.message}
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8]">إذا حدث</p>
                    <p className="mt-1 font-semibold text-white">
                      {item.label}
                    </p>
                  </div>
                  <Workflow
                    className="hidden h-5 w-5 text-cyan-100 md:block"
                    strokeWidth={1.8}
                  />
                  <div>
                    <p className="text-xs text-[#94A3B8]">نفّذ</p>
                    <p className="mt-1 font-semibold text-white">
                      {item.action}
                    </p>
                  </div>
                  <Zap
                    className="hidden h-5 w-5 text-cyan-100 md:block"
                    strokeWidth={1.8}
                  />
                  <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-3 text-cyan-100">
                    <p className="text-xs">النتيجة</p>
                    <p className="mt-1 font-semibold">{item.result}</p>
                  </div>
                  <span className="sr-only">مثال سير عمل رقم {index + 1}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            {...motionProps}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold text-cyan-100">
              Business Impact
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              أثر واضح على المبيعات وتجربة العميل
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  variants={fadeUp}
                  {...motionProps}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  className="group rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(7,17,34,0.82))] p-6 text-center shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/16 hover:shadow-[0_24px_55px_rgba(0,0,0,0.26),0_0_28px_rgba(34,211,238,0.08)]"
                >
                  <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                    <MetricIcon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <p className="text-4xl font-semibold tracking-[-0.03em] text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-[#94A3B8]">{metric.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} {...motionProps} className="max-w-3xl">
            <p className="text-sm font-semibold text-cyan-100">
              Customer Success Stories
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              قصص نجاح من متاجر تستخدم المحادثة كقناة بيع
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {stories.map((story, index) => (
              <motion.figure
                key={story.company}
                variants={fadeUp}
                {...motionProps}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/16 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28),0_0_32px_rgba(34,211,238,0.06)]"
              >
                <img
                  src={story.image}
                  alt={story.company}
                  loading="lazy"
                  className="h-44 w-full rounded-[1.4rem] object-cover"
                />
                <div className="p-3">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-100">
                      <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <div className="text-left">
                      <p className="text-3xl font-semibold text-white">
                        {story.metric}
                      </p>
                      <p className="text-xs text-[#94A3B8]">{story.label}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg leading-8 text-slate-200">
                    “{story.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/[0.06] pt-4 text-sm font-semibold text-white">
                    {story.company}
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div variants={fadeUp} {...motionProps}>
            <p className="text-sm font-semibold text-cyan-100">FAQ</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              أسئلة شائعة حول المميزات
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#94A3B8]">
              إجابات مختصرة تساعدك على فهم طريقة تشغيل المنصة وقياس أثرها على
              متجرك.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} {...motionProps} className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFeatureFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] shadow-[0_16px_36px_rgba(0,0,0,0.16)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFeatureFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-cyan-100 transition ${isOpen ? "rotate-180" : ""}`}
                      strokeWidth={1.8}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-7 text-[#94A3B8]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          {...motionProps}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_24%_20%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(124,58,237,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-8 text-center shadow-[0_36px_120px_rgba(0,0,0,0.36),0_0_48px_rgba(34,211,238,0.08)] lg:p-14"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-cyan-100">ابدأ الآن</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              اجعل كل محادثة فرصة بيع قابلة للقياس
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#94A3B8]">
              شغّل مساعد شراء ذكي يفهم منتجاتك وعملاءك، ويقودهم من السؤال إلى
              رابط الدفع بثقة وسرعة.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00D9FF] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(0,217,255,0.34)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                اطلب تجربة مجانية
                <Rocket className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.07]"
              >
                اعرف الباقة المناسبة
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
