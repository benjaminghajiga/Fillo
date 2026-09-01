import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronDown,
  CircleDollarSign,
  Droplets,
  MapPin,
  Menu,
  MoveUpRight,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Sprout,
  Truck,
  Users,
  Waves,
  X,
} from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85";
const produceImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85";

const features = [
  { icon: Sparkles, title: "Smart matching", text: "AI-powered matches based on location, price, quality and availability." },
  { icon: ShieldCheck, title: "Quality assured", text: "Verified sellers, field photos and third-party inspection when it matters." },
  { icon: CircleDollarSign, title: "Payments protected", text: "Escrow and Farm-to-Invoice financing keep every trade moving." },
  { icon: Truck, title: "Logistics, coordinated", text: "Reliable delivery partners and transparent tracking from farm to warehouse." },
];

const innovations = [
  ["01", "Farm-to-Invoice financing", "Release 70% of a confirmed invoice upfront, so good harvests do not wait on cash."],
  ["02", "WhatsApp-native trading", "List, negotiate and track payment from the channel farmers already use every day."],
  ["03", "Weather-linked pricing", "Forward-looking market intelligence shaped by weather and seasonal supply."],
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"buyers" | "sellers">("buyers");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openSignup = () => { setSubmitted(false); setModalOpen(true); };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#17372c]">
      <nav className="absolute left-0 right-0 top-0 z-20 border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center gap-2 text-xl font-bold tracking-[-0.06em]">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5bb55] text-[#17372c]"><Sprout size={18} strokeWidth={2.5} /></span>
            fillo<span className="text-[#e5bb55]">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#how-it-works" className="transition hover:text-white">How it works</a>
            <a href="#why-fillo" className="transition hover:text-white">Why Fillo</a>
            <a href="#innovations" className="transition hover:text-white">Innovations</a>
            <a href="#about" className="transition hover:text-white">About us</a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="/join" className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">Sign in</a>
            <a href="/join" className="rounded-full bg-[#e5bb55] px-5 py-2.5 text-sm font-bold text-[#17372c] shadow-[0_8px_24px_rgba(229,187,85,.2)] transition hover:-translate-y-0.5">Join the network <ArrowRight className="ml-1 inline" size={15} /></a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/15 bg-[#17372c] px-6 py-5 md:hidden"><div className="flex flex-col gap-4 text-sm"><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#why-fillo" onClick={() => setMenuOpen(false)}>Why Fillo</a><a href="#innovations" onClick={() => setMenuOpen(false)}>Innovations</a><a href="/join" className="w-fit rounded-full bg-[#e5bb55] px-4 py-2 font-bold text-[#17372c]">Join the network</a></div></div>}
      </nav>

      <section id="top" className="relative min-h-[720px] overflow-hidden bg-[#17372c] pt-32 text-white lg:min-h-[780px] lg:pt-40">
        <img src={heroImage} alt="Farmland at golden hour" className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(229,187,85,.26),transparent_28%),linear-gradient(90deg,#17372c_8%,rgba(23,55,44,.84)_48%,rgba(23,55,44,.25))]" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.17em] text-[#e5bb55]"><span className="h-1.5 w-1.5 rounded-full bg-[#e5bb55]" /> The trade layer for African agriculture</div>
            <h1 className="font-serif text-6xl leading-[.95] tracking-[-.065em] sm:text-7xl lg:text-[7.1rem]">Good food<br /><em className="font-normal text-[#e5bb55]">starts</em> with<br />good trade.</h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-white/75">Fillo connects the people who grow Africa’s food with the businesses that move it forward—simply, fairly, and with trust built in.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="/join" className="rounded-full bg-[#e5bb55] px-6 py-3.5 font-bold text-[#17372c] transition hover:-translate-y-0.5">Start trading <ArrowRight className="ml-2 inline" size={17} /></a><a href="#how-it-works" className="rounded-full border border-white/35 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">See how it works</a></div>
          </div>
          <div className="relative ml-auto hidden w-full max-w-sm lg:block"><div className="rounded-[2rem] border border-white/20 bg-[#f7f5ef]/95 p-6 text-[#17372c] shadow-2xl backdrop-blur"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#74827a]">Today’s market pulse</p><p className="mt-1 text-2xl font-serif">Maize · Kano</p></div><div className="rounded-full bg-[#dcebd9] p-2 text-[#367454]"><BarChart3 size={19} /></div></div><div className="mt-7 flex items-end gap-3"><span className="text-5xl font-bold tracking-[-.08em]">₦485k</span><span className="mb-2 rounded-full bg-[#dcebd9] px-2 py-1 text-xs font-bold text-[#367454]">+8.4%</span></div><div className="mt-6 flex h-16 items-end gap-1.5">{[25,38,31,44,40,57,49,68,63,78,72,92].map((h, i) => <span key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-sm ${i > 8 ? "bg-[#e5bb55]" : "bg-[#b5cdb7]"}`} />)}</div><div className="mt-3 flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#74827a]"><span>14 days ago</span><span>Today</span></div></div><div className="absolute -bottom-7 -left-9 rounded-2xl bg-[#e5bb55] p-4 text-sm font-bold shadow-xl"><Check className="mr-1 inline" size={16} /> Verified supply chain</div></div>
        </div>
        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[.24em] text-white/50 lg:block">Scroll to explore <ChevronDown className="ml-2 inline" size={14} /></div>
      </section>

      <section className="border-b border-[#dfe5dd] bg-[#f7f5ef] py-8"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 text-sm text-[#617168] lg:px-10"><span className="font-semibold text-[#17372c]">Built for every link in the chain</span><div className="flex flex-wrap gap-x-7 gap-y-3"><span className="flex items-center gap-2"><Users size={16} /> Farmers & cooperatives</span><span className="flex items-center gap-2"><PackageCheck size={16} /> Processors & exporters</span><span className="flex items-center gap-2"><Truck size={16} /> Logistics partners</span><span className="flex items-center gap-2"><Waves size={16} /> Food manufacturers</span></div></div></section>

      <section id="why-fillo" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="eyebrow">Why Fillo</p><h2 className="section-title mt-4">The shortest distance between harvest and <em>opportunity.</em></h2><p className="mt-6 max-w-md leading-7 text-[#617168]">Agricultural trade should not be a guessing game. We bring the visibility, tools, and confidence that help both sides make better deals.</p><a href="#how-it-works" className="mt-8 inline-flex items-center gap-2 font-bold text-[#367454]">Explore the platform <MoveUpRight size={17} /></a></div><div className="grid gap-4 sm:grid-cols-2">{features.map(({ icon: Icon, title, text }, i) => <div key={title} className={`rounded-3xl p-6 ${i === 0 ? "bg-[#dcebd9]" : "border border-[#dfe5dd] bg-white/45"}`}><div className="mb-8 grid h-11 w-11 place-items-center rounded-2xl bg-[#17372c] text-[#e5bb55]"><Icon size={21} /></div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#617168]">{text}</p></div>)}</div></div></section>

      <section id="how-it-works" className="bg-[#e9e9df] py-24 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow">One platform. Two perspectives.</p><h2 className="section-title mt-4 max-w-xl">Trade that works for <em>both sides.</em></h2></div><div className="flex rounded-full bg-[#d6dbd1] p-1"><button onClick={() => setActiveTab("buyers")} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${activeTab === "buyers" ? "bg-[#17372c] text-white shadow" : "text-[#617168]"}`}>I’m a buyer</button><button onClick={() => setActiveTab("sellers")} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${activeTab === "sellers" ? "bg-[#17372c] text-white shadow" : "text-[#617168]"}`}>I’m a seller</button></div></div><div className="mt-14 grid items-center gap-12 lg:grid-cols-2"><div className="relative overflow-hidden rounded-[2rem]"><img src={produceImage} alt="Fresh produce ready for trade" className="h-[360px] w-full object-cover lg:h-[430px]" /><div className="absolute inset-0 bg-gradient-to-t from-[#17372c]/70 to-transparent" /><div className="absolute bottom-6 left-6 text-white"><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e5bb55]"><MapPin size={14} /> Oyo, Nigeria</div><p className="font-serif text-3xl">Trade with confidence.</p></div></div><div>{activeTab === "buyers" ? <div><span className="number-chip">01</span><h3 className="mt-5 text-3xl font-bold tracking-tight">Find the right supply, without the runaround.</h3><p className="mt-4 max-w-lg leading-7 text-[#617168]">Post an RFQ, discover verified sellers, lock in quality, and track every order from farm to warehouse. Your next reliable supplier is closer than you think.</p><ul className="mt-7 space-y-3 text-sm font-semibold"><li><Check className="mr-2 inline text-[#367454]" size={17} /> Broadcast requirements in seconds</li><li><Check className="mr-2 inline text-[#367454]" size={17} /> See quality ratings and traceability</li><li><Check className="mr-2 inline text-[#367454]" size={17} /> Protect bulk orders with escrow</li></ul></div> : <div><span className="number-chip">01</span><h3 className="mt-5 text-3xl font-bold tracking-tight">Your harvest deserves a better market.</h3><p className="mt-4 max-w-lg leading-7 text-[#617168]">List your produce by voice, reach serious buyers, and get paid with less waiting. Fillo helps you build a trusted trade record that opens more doors.</p><ul className="mt-7 space-y-3 text-sm font-semibold"><li><Check className="mr-2 inline text-[#367454]" size={17} /> List by WhatsApp or voice in your language</li><li><Check className="mr-2 inline text-[#367454]" size={17} /> Get transparent price benchmarks</li><li><Check className="mr-2 inline text-[#367454]" size={17} /> Access financing against confirmed orders</li></ul></div>}<a href="/join" className="mt-9 inline-block rounded-full bg-[#17372c] px-6 py-3.5 font-bold text-white transition hover:bg-[#2e5b47]">Join Fillo <ArrowRight className="ml-2 inline" size={16} /></a></div></div></div></section>

      <section id="innovations" className="bg-[#17372c] py-24 text-white lg:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-[#e5bb55]">What makes us different</p><h2 className="section-title mt-4 text-white">Built for the realities of <em className="text-[#e5bb55]">African trade.</em></h2><p className="mt-6 max-w-sm leading-7 text-white/60">Not another listing board. Fillo is the infrastructure layer that makes agricultural trade more visible, more reliable, and more human.</p></div><div className="divide-y divide-white/15">{innovations.map(([num, title, text]) => <div key={num} className="grid gap-5 py-7 sm:grid-cols-[64px_1fr] sm:gap-8"><span className="font-mono text-sm text-[#e5bb55]">{num}</span><div><h3 className="text-2xl font-bold">{title}</h3><p className="mt-2 max-w-lg leading-7 text-white/60">{text}</p></div></div>)}</div></div><div className="mt-16 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3"><div><p className="text-4xl font-bold tracking-tight text-[#e5bb55]">70%</p><p className="mt-1 text-sm text-white/60">upfront invoice financing</p></div><div><p className="text-4xl font-bold tracking-tight text-[#e5bb55]">48hr</p><p className="mt-1 text-sm text-white/60">dispute resolution SLA</p></div><div><p className="text-4xl font-bold tracking-tight text-[#e5bb55]">4</p><p className="mt-1 text-sm text-white/60">languages at launch</p></div></div></div></section>

      <section id="about" className="bg-[#e5bb55] px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-end"><div><p className="eyebrow text-[#17372c]/65">Ready when you are</p><h2 className="mt-4 max-w-2xl font-serif text-5xl leading-none tracking-[-.05em] text-[#17372c] sm:text-6xl">Let’s move good food<br /><em>forward.</em></h2></div><a href="/join" className="rounded-full bg-[#17372c] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5">Join the network <ArrowRight className="ml-2 inline" size={17} /></a></div></section>

      <footer className="bg-[#17372c] px-6 py-10 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><div className="flex items-center gap-2 text-xl font-bold tracking-[-.06em]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5bb55] text-[#17372c]"><Sprout size={18} /></span>fillo<span className="text-[#e5bb55]">.</span></div><p className="mt-3 max-w-xs text-sm leading-6 text-white/50">Connecting agricultural buyers and sellers across Africa.</p></div><div className="text-left text-sm text-white/50 sm:text-right"><p>Lagos, Nigeria</p><a href="mailto:hello@fillo.ag" className="transition hover:text-[#e5bb55]">hello@fillo.ag</a><p className="mt-5 text-xs">© 2026 Fillo. Trade better. Grow together.</p></div></div></footer>

      {modalOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-[#17372c]/70 px-5 backdrop-blur-sm" onClick={() => setModalOpen(false)}><div className="w-full max-w-md rounded-[2rem] bg-[#f7f5ef] p-7 text-[#17372c] shadow-2xl" onClick={(e) => e.stopPropagation()}>{submitted ? <div className="py-8 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#dcebd9] text-[#367454]"><Check size={28} /></div><h3 className="mt-5 font-serif text-3xl">You’re on the list.</h3><p className="mt-3 text-sm leading-6 text-[#617168]">We’ll be in touch soon with the next steps for joining Fillo.</p><button onClick={() => setModalOpen(false)} className="mt-7 rounded-full bg-[#17372c] px-6 py-3 font-bold text-white">Done</button></div> : <><div className="flex items-start justify-between"><div><p className="eyebrow">Join the network</p><h3 className="mt-2 font-serif text-3xl">Let’s grow together.</h3></div><button onClick={() => setModalOpen(false)} aria-label="Close"><X size={20} /></button></div><form onSubmit={handleSubmit} className="mt-7 space-y-4"><input required type="text" placeholder="Full name" className="w-full rounded-xl border border-[#dfe5dd] bg-white px-4 py-3 outline-none focus:border-[#367454]" /><input required type="email" placeholder="Work email" className="w-full rounded-xl border border-[#dfe5dd] bg-white px-4 py-3 outline-none focus:border-[#367454]" /><select className="w-full rounded-xl border border-[#dfe5dd] bg-white px-4 py-3 outline-none focus:border-[#367454]"><option>I’m a buyer</option><option>I’m a farmer or supplier</option><option>I’m a logistics partner</option></select><button type="submit" className="w-full rounded-full bg-[#17372c] px-6 py-3.5 font-bold text-white">Request access <ArrowRight className="ml-2 inline" size={16} /></button></form></>}</div></div>}
    </main>
  );
}
