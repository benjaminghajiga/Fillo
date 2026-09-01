import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2, MailCheck, Sprout } from "lucide-react";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabase";

export default function VerifyEmail() {
  const [, navigate] = useLocation();
  const [checking, setChecking] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const inspect = async () => {
      const { data, error: authError } = await supabase.auth.getUser();
      if (!active) return;
      if (authError || !data.user) setError("We couldn’t verify this link. It may have expired or already been used.");
      else if (data.user.email_confirmed_at) setVerified(true);
      else setError("Your email is not verified yet. Check your inbox for the confirmation link.");
      setChecking(false);
    };
    void inspect();
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "USER_UPDATED") void inspect();
    });
    return () => { active = false; listener.subscription.unsubscribe(); };
  }, []);

  return <main className="min-h-screen bg-[#f7f5ef] text-[#17372c]"><div className="grid min-h-screen lg:grid-cols-[.9fr_1.1fr]"><section className="relative hidden overflow-hidden bg-[#17372c] p-10 text-white lg:flex lg:flex-col lg:justify-between"><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85)", backgroundSize: "cover", backgroundPosition: "center" }} /><div className="absolute inset-0 bg-[linear-gradient(145deg,#17372c_12%,rgba(23,55,44,.72),#17372c)]" /><a href="/" className="relative flex items-center gap-2 text-xl font-bold tracking-[-.06em]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5bb55] text-[#17372c]"><Sprout size={18} /></span>fillo<span className="text-[#e5bb55]">.</span></a><div className="relative max-w-lg pb-12"><p className="eyebrow text-[#e5bb55]">One more step</p><h1 className="mt-5 font-serif text-6xl leading-[.95] tracking-[-.06em]">Trust starts<br /><em className="text-[#e5bb55]">with a real inbox.</em></h1><p className="mt-7 max-w-md text-lg leading-8 text-white/65">Verified people make better trade partners. Confirm your email to enter the Fillo network.</p></div><p className="relative text-xs text-white/40">© 2026 Fillo · Lagos, Nigeria</p></section><section className="flex min-h-screen flex-col px-6 py-7 sm:px-10 lg:px-20 lg:py-10"><div className="flex items-center justify-between"><a href="/" className="flex items-center gap-2 text-lg font-bold tracking-[-.06em] lg:hidden"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5bb55]"><Sprout size={18} /></span>fillo<span className="text-[#367454]">.</span></a><a href="/join" className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-[#617168] transition hover:text-[#17372c]"><ArrowLeft size={16} /> Back to sign in</a></div><div className="m-auto w-full max-w-md py-12 text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e5bb55] text-[#17372c]"><MailCheck size={28} /></span><p className="eyebrow mt-8">Email verification</p><h2 className="mt-3 font-serif text-5xl leading-none tracking-[-.055em]">{verified ? "You’re verified." : "Confirm your email."}</h2>{checking ? <p className="mt-5 flex items-center justify-center gap-2 text-[#617168]"><Loader2 className="animate-spin" size={17} />Checking your verification link…</p> : verified ? <><p className="mt-5 leading-7 text-[#617168]">Your Fillo account is ready. Step into your workspace and start trading with confidence.</p><button onClick={() => navigate("/dashboard")} className="mt-8 rounded-full bg-[#17372c] px-6 py-3 font-bold text-white">Open dashboard <ArrowRight className="ml-2 inline" size={16} /></button></> : <><p className="mt-5 leading-7 text-[#a64b37]">{error}</p><a href="/join" className="mt-8 inline-flex rounded-full bg-[#17372c] px-6 py-3 font-bold text-white">Request a new link <ArrowRight className="ml-2 inline" size={16} /></a></>}</div><p className="text-center text-xs text-[#9aa39e] lg:text-right">Trust · Transparency · Sustainability · Inclusion</p></section></div></main>;
}
