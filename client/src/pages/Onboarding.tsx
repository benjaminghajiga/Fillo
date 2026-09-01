import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, Loader2, MapPin, Package, Sprout, Truck, UserRound } from "lucide-react";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabase";

type Role = "buyer" | "supplier" | "logistics";
const roleCopy: Record<Role, { eyebrow: string; title: string; description: string; icon: typeof Sprout; options: string[]; field: string }> = {
  buyer: { eyebrow: "Buyer setup", title: "Build your buying brief.", description: "Tell us what you source so Fillo can surface the right verified supply.", icon: Package, options: ["Staples & grains", "Fresh produce", "Processed ingredients", "Export supply"], field: "What do you source most?" },
  supplier: { eyebrow: "Farmer setup", title: "Put your harvest on the map.", description: "Help buyers understand your supply, location, and readiness to trade.", icon: Sprout, options: ["Available now", "Harvesting soon", "Planning next season", "Looking for offtake"], field: "What best describes your supply?" },
  logistics: { eyebrow: "Logistics setup", title: "Move trade with confidence.", description: "Share your operating footprint so Fillo can connect you to the right routes.", icon: Truck, options: ["Last-mile delivery", "Inter-city haulage", "Cold-chain transport", "Warehousing"], field: "What do you handle?" },
};

export default function Onboarding() {
  const [, navigate] = useLocation();
  const [role, setRole] = useState<Role | null>(null);
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [choice, setChoice] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    void supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      const user = data.user;
      if (!user) { navigate("/join"); return; }
      const userRole = user.user_metadata?.role as Role | undefined;
      if (!userRole || !roleCopy[userRole]) { navigate("/dashboard"); return; }
      if (user.user_metadata?.onboarding_complete) { navigate("/dashboard"); return; }
      setRole(userRole); setFullName(user.user_metadata?.full_name || ""); setLoading(false);
    });
    return () => { active = false; };
  }, [navigate]);

  const copy = useMemo(() => role ? roleCopy[role] : null, [role]);
  const Icon = copy?.icon || UserRound;
  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!role || !choice || !location.trim()) { setError("Choose an option and add your operating location to continue."); return; }
    setSaving(true); setError("");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { navigate("/join"); return; }
    const { error: updateError } = await supabase.auth.updateUser({ data: { ...user.user_metadata, onboarding_complete: true, onboarding_completed_at: new Date().toISOString(), onboarding: { focus: choice, location: location.trim() } } });
    if (updateError) setError(updateError.message); else navigate("/dashboard");
    setSaving(false);
  };

  if (loading || !copy) return <div className="grid min-h-screen place-items-center bg-[#f7f5ef] text-[#17372c]"><Loader2 className="animate-spin text-[#367454]" size={26} /></div>;

  return <main className="min-h-screen bg-[#f7f5ef] text-[#17372c]"><div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-7 sm:px-10 lg:px-12"><header className="flex items-center justify-between"><a href="/" className="flex items-center gap-2 text-xl font-bold tracking-[-.06em]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5bb55]"><Sprout size={18} /></span>fillo<span className="text-[#367454]">.</span></a><button onClick={() => navigate("/dashboard")} className="text-sm font-semibold text-[#617168]">Skip for now</button></header><div className="m-auto grid w-full gap-12 py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-24"><div><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e5bb55] text-[#17372c]"><Icon size={26} /></span><p className="eyebrow mt-8">{copy.eyebrow}</p><h1 className="mt-3 max-w-lg font-serif text-5xl leading-[.95] tracking-[-.055em] sm:text-6xl">{copy.title}</h1><p className="mt-6 max-w-md text-lg leading-8 text-[#617168]">{copy.description}</p><div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#367454]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#eaf3e7]"><Check size={15} /></span>Personalized to your Fillo role</div></div><form onSubmit={save} className="rounded-3xl border border-[#dfe5dd] bg-white p-6 shadow-[0_18px_50px_rgba(23,55,44,.06)] sm:p-8"><p className="text-sm font-bold text-[#17372c]">Welcome, {fullName.split(" ")[0] || "there"}.</p><label className="mt-7 block text-sm font-bold">{copy.field}</label><div className="mt-3 grid gap-3 sm:grid-cols-2">{copy.options.map((option) => <button type="button" key={option} onClick={() => setChoice(option)} className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${choice === option ? "border-[#367454] bg-[#eaf3e7] text-[#17372c]" : "border-[#dfe5dd] text-[#617168] hover:border-[#9bb7a2]"}`}>{option}</button>)}</div><label className="mt-7 block text-sm font-bold" htmlFor="location">Operating location</label><div className="relative mt-3"><MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87938c]" size={17} /><input id="location" required value={location} onChange={(event) => setLocation(event.target.value)} placeholder="City, state or region" className="auth-input pl-11" /></div>{error && <p role="alert" className="mt-4 rounded-xl bg-[#fff1ed] px-4 py-3 text-sm font-medium text-[#a64b37]">{error}</p>}<button disabled={saving} className="mt-7 w-full rounded-full bg-[#17372c] px-6 py-4 font-bold text-white disabled:opacity-60">{saving ? <><Loader2 className="mr-2 inline animate-spin" size={17} />Saving your setup…</> : <>Continue to workspace <ArrowRight className="ml-2 inline" size={17} /></>}</button><p className="mt-4 text-center text-xs leading-5 text-[#87938c]">You can update these details later from your profile settings.</p></form></div></div></main>;
}
