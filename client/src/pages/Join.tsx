import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Leaf, Loader2, ShieldCheck, Sprout } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useLocation } from "wouter";

type Role = "buyer" | "supplier" | "logistics";

export default function Join() {
  const [, navigate] = useLocation();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<Role | "">("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let active = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (active && data.session) navigate("/dashboard");
    });
    return () => { active = false; };
  }, [navigate]);

  const changeMode = (nextMode: "signin" | "signup") => {
    setMode(nextMode); setSubmitted(false); setError(""); setNotice("");
  };

  const sendReset = async () => {
    if (!email) { setError("Enter your email first so we know where to send the reset link."); return; }
    setResetLoading(true); setError(""); setNotice("");
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
    if (resetError) setError(resetError.message);
    else setNotice("Password reset instructions are on their way.");
    setResetLoading(false);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setLoading(true); setError("");
    try {
      if (mode === "signup") {
        if (!role) { setError("Choose how you’re joining Fillo."); setLoading(false); return; }
        const { data, error: signUpError } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: fullName, role }, emailRedirectTo: `${window.location.origin}/verify-email` },
        });
        if (signUpError) throw signUpError;
        if (!data.user) throw new Error("We could not create your account. Please try again.");
        setSubmitted(true);
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        navigate("/dashboard");
        return;
      }
    } catch (submissionError) {
      const message = submissionError instanceof Error ? submissionError.message : "Something went wrong. Please try again.";
      setError(message.includes("already registered") ? "An account with this email already exists. Switch to Sign in instead." : message);
    } finally { setLoading(false); }
  };

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17372c]"><div className="grid min-h-screen lg:grid-cols-[.9fr_1.1fr]">
      <section className="relative hidden overflow-hidden bg-[#17372c] p-10 text-white lg:flex lg:flex-col lg:justify-between"><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85)", backgroundSize: "cover", backgroundPosition: "center" }} /><div className="absolute inset-0 bg-[linear-gradient(145deg,#17372c_12%,rgba(23,55,44,.72),#17372c)]" /><a href="/" className="relative flex items-center gap-2 text-xl font-bold tracking-[-.06em]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5bb55] text-[#17372c]"><Sprout size={18} /></span>fillo<span className="text-[#e5bb55]">.</span></a><div className="relative max-w-lg pb-12"><p className="eyebrow text-[#e5bb55]">The trade layer for African agriculture</p><h1 className="mt-5 font-serif text-6xl leading-[.95] tracking-[-.06em]">Better trade<br />starts <em className="text-[#e5bb55]">here.</em></h1><p className="mt-7 max-w-md text-lg leading-8 text-white/65">Join a more trusted way to buy, sell, and move Africa’s food forward.</p><div className="mt-12 space-y-4 text-sm text-white/75"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[#e5bb55]"><ShieldCheck size={17} /></span>Verified people and quality-assured supply</div><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[#e5bb55]"><Leaf size={17} /></span>Tools built around how African trade really works</div></div></div><p className="relative text-xs text-white/40">© 2026 Fillo · Lagos, Nigeria</p></section>
      <section className="flex min-h-screen flex-col px-6 py-7 sm:px-10 lg:px-20 lg:py-10"><div className="flex items-center justify-between"><a href="/" className="flex items-center gap-2 text-lg font-bold tracking-[-.06em] lg:hidden"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5bb55]"><Sprout size={18} /></span>fillo<span className="text-[#367454]">.</span></a><a href="/" className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-[#617168] transition hover:text-[#17372c]"><ArrowLeft size={16} /> Back to home</a></div><div className="m-auto w-full max-w-md py-12"><div className="mb-8"><p className="eyebrow">Your trade journey</p><h2 className="mt-3 font-serif text-5xl leading-none tracking-[-.055em]">{mode === "signup" ? "Let’s grow together." : "Welcome back."}</h2><p className="mt-4 leading-7 text-[#617168]">{mode === "signup" ? "Create your Fillo account and start trading with confidence." : "Sign in to keep your agricultural trade moving."}</p></div><div className="mb-8 flex rounded-2xl bg-[#e9e9df] p-1"><button onClick={() => changeMode("signin")} className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold transition ${mode === "signin" ? "bg-white text-[#17372c] shadow-sm" : "text-[#617168]"}`}>Sign in</button><button onClick={() => changeMode("signup")} className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold transition ${mode === "signup" ? "bg-white text-[#17372c] shadow-sm" : "text-[#617168]"}`}>Create account</button></div>{submitted ? <div className="rounded-3xl border border-[#cfe2d0] bg-[#eaf3e7] p-8 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#367454] text-white"><Check size={28} /></div><h3 className="mt-5 font-serif text-3xl">{mode === "signup" ? "Check your inbox." : "You’re signed in."}</h3><p className="mt-3 text-sm leading-6 text-[#617168]">{mode === "signup" ? "We sent a confirmation link to your email. Your Fillo profile is ready when you are." : "Your Fillo workspace is ready to continue."}</p><a href={mode === "signin" ? "/dashboard" : "/"} className="mt-7 inline-flex rounded-full bg-[#17372c] px-6 py-3 font-bold text-white">{mode === "signin" ? "Open dashboard" : "Return home"} <ArrowRight className="ml-2" size={16} /></a></div> : <form onSubmit={submit} className="space-y-4">{mode === "signup" && <input required type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="auth-input" />}{mode === "signup" && <select required value={role} onChange={(e) => setRole(e.target.value as Role)} className="auth-input"><option value="">I’m joining as…</option><option value="buyer">Buyer / processor</option><option value="supplier">Farmer / supplier</option><option value="logistics">Logistics partner</option></select>}<input required type="email" placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} className="auth-input" /><div className="relative"><input required type={showPassword ? "text" : "password"} placeholder="Password" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="auth-input pr-12" /><button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617168]">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>{mode === "signin" && <div className="flex justify-end"><button type="button" onClick={sendReset} disabled={resetLoading} className="text-sm font-semibold text-[#367454] disabled:opacity-60">{resetLoading ? "Sending reset link…" : "Forgot password?"}</button></div>}{error && <p role="alert" className="rounded-xl bg-[#fff1ed] px-4 py-3 text-sm font-medium text-[#a64b37]">{error}</p>}{notice && <p role="status" className="rounded-xl bg-[#eaf3e7] px-4 py-3 text-sm font-medium text-[#367454]">{notice}</p>}<button disabled={loading} type="submit" className="mt-2 w-full rounded-full bg-[#17372c] px-6 py-4 font-bold text-white shadow-[0_10px_24px_rgba(23,55,44,.16)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70">{loading ? <><Loader2 className="mr-2 inline animate-spin" size={17} />Connecting securely…</> : <>{mode === "signup" ? "Create my account" : "Sign in to Fillo"}<ArrowRight className="ml-2 inline" size={17} /></>}</button><p className="pt-2 text-center text-xs leading-5 text-[#87938c]">By continuing, you agree to Fillo’s terms and acknowledge our privacy policy.</p></form>}</div><p className="text-center text-xs text-[#9aa39e] lg:text-right">Trust · Transparency · Sustainability · Inclusion</p></section>
    </div></main>
  );
}
