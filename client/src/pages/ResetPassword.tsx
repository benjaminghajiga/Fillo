import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Loader2, LockKeyhole, Sprout } from "lucide-react";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabase";

export default function ResetPassword() {
  const [, navigate] = useLocation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [hasRecoverySession, setHasRecoverySession] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const inspectSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      setCheckingSession(false);
      if (data.session) setHasRecoverySession(true);
      else setError("This reset link is invalid or has expired.");
    };
    void inspectSession();
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (!active) return;
      if (event === "PASSWORD_RECOVERY") {
        setCheckingSession(false);
        setHasRecoverySession(true);
        setError("");
      }
    });
    return () => { active = false; listener.subscription.unsubscribe(); };
  }, []);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (newPassword.length < 6) { setError("Your new password must be at least 6 characters."); return; }
    if (newPassword !== confirmPassword) { setError("Your passwords do not match."); return; }
    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
    if (updateError) setError(updateError.message);
    else { setComplete(true); await supabase.auth.signOut(); }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17372c]">
      <div className="grid min-h-screen lg:grid-cols-[.9fr_1.1fr]">
        <section className="relative hidden overflow-hidden bg-[#17372c] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85)", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#17372c_12%,rgba(23,55,44,.72),#17372c)]" />
          <a href="/" className="relative flex items-center gap-2 text-xl font-bold tracking-[-.06em]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5bb55] text-[#17372c]"><Sprout size={18} /></span>fillo<span className="text-[#e5bb55]">.</span></a>
          <div className="relative max-w-lg pb-12"><p className="eyebrow text-[#e5bb55]">A safer way to trade</p><h1 className="mt-5 font-serif text-6xl leading-[.95] tracking-[-.06em]">Keep your<br />account <em className="text-[#e5bb55]">secure.</em></h1><p className="mt-7 max-w-md text-lg leading-8 text-white/65">Choose a password you’ll remember. Fillo will keep your trade workspace protected.</p></div>
          <p className="relative text-xs text-white/40">© 2026 Fillo · Lagos, Nigeria</p>
        </section>
        <section className="flex min-h-screen flex-col px-6 py-7 sm:px-10 lg:px-20 lg:py-10">
          <div className="flex items-center justify-between"><a href="/" className="flex items-center gap-2 text-lg font-bold tracking-[-.06em] lg:hidden"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5bb55]"><Sprout size={18} /></span>fillo<span className="text-[#367454]">.</span></a><a href="/join" className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-[#617168]"><ArrowLeft size={16} /> Back to sign in</a></div>
          <div className="m-auto w-full max-w-md py-12">
            <div className="mb-8"><p className="eyebrow">Account security</p><h2 className="mt-3 font-serif text-5xl leading-none tracking-[-.055em]">Set a new password.</h2><p className="mt-4 leading-7 text-[#617168]">Use at least 6 characters, then you’ll be ready to sign in again.</p></div>
            {checkingSession && <div className="flex items-center gap-2 rounded-2xl bg-white p-5 text-sm text-[#617168]"><Loader2 className="animate-spin text-[#367454]" size={18} />Verifying your reset link…</div>}
            {!checkingSession && complete && <div className="rounded-3xl border border-[#cfe2d0] bg-[#eaf3e7] p-8 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#367454] text-white"><Check size={28} /></div><h3 className="mt-5 font-serif text-3xl">Password updated.</h3><p className="mt-3 text-sm leading-6 text-[#617168]">Your account is secure. Sign in with your new password to continue trading.</p><button onClick={() => navigate("/join")} className="mt-7 rounded-full bg-[#17372c] px-6 py-3 font-bold text-white">Return to sign in <ArrowRight className="ml-2 inline" size={16} /></button></div>}
            {!checkingSession && !complete && hasRecoverySession && <form onSubmit={submit} className="space-y-4"><PasswordField label="New password" value={newPassword} onChange={setNewPassword} visible={showPassword} onToggle={() => setShowPassword(!showPassword)} /><PasswordField label="Confirm new password" value={confirmPassword} onChange={setConfirmPassword} visible={showConfirm} onToggle={() => setShowConfirm(!showConfirm)} />{error && <p role="alert" className="rounded-xl bg-[#fff1ed] px-4 py-3 text-sm font-medium leading-5 text-[#a64b37]">{error}</p>}<button disabled={loading} type="submit" className="mt-2 w-full rounded-full bg-[#17372c] px-6 py-4 font-bold text-white disabled:opacity-70">{loading ? <><Loader2 className="mr-2 inline animate-spin" size={17} />Updating securely…</> : <>Update password <ArrowRight className="ml-2 inline" size={17} /></>}</button><p className="pt-2 text-center text-xs leading-5 text-[#87938c]">Your reset link is single-use and expires for your protection.</p></form>}
            {!checkingSession && !complete && !hasRecoverySession && <div className="rounded-3xl border border-[#f1d2c9] bg-[#fff1ed] p-7 text-center"><p className="text-sm leading-6 text-[#a64b37]">{error}</p><button onClick={() => navigate("/join")} className="mt-6 rounded-full bg-[#17372c] px-6 py-3 font-bold text-white">Request a new link <ArrowRight className="ml-2 inline" size={16} /></button></div>}
          </div><p className="text-center text-xs text-[#9aa39e] lg:text-right">Trust · Transparency · Sustainability · Inclusion</p>
        </section>
      </div>
    </main>
  );
}

function PasswordField({ label, value, onChange, visible, onToggle }: { label: string; value: string; onChange: (value: string) => void; visible: boolean; onToggle: () => void }) {
  return <div className="relative"><LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87938c]" size={17} /><input required minLength={6} type={visible ? "text" : "password"} placeholder={label} value={value} onChange={(event) => onChange(event.target.value)} style={{ paddingLeft: "2.75rem", paddingRight: "3rem" }} className="auth-input" /><button type="button" aria-label={visible ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`} onClick={onToggle} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617168]">{visible ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>;
}
