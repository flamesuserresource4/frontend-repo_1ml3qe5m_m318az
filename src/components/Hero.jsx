import { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function classNames(...c) {
  return c.filter(Boolean).join(' ');
}

export default function Hero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setToast({ type: 'error', message: 'Please enter a valid email.' });
      return;
    }
    setLoading(true);
    try {
      const base = import.meta.env.VITE_BACKEND_URL;
      if (base) {
        await fetch(`${base}/waitlist`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setToast({ type: 'success', message: 'You are on the list! We’ll be in touch soon.' });
      setEmail('');
    } catch (err) {
      setToast({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3500);
    }
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0F19] text-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Animated gradient aura overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[90px]" style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.6) 0deg, rgba(168,85,247,0.6) 90deg, rgba(236,72,153,0.6) 180deg, rgba(56,189,248,0.6) 360deg)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm"
        >
          AdPilot — AI co‑pilot for Meta Ads
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-extrabold leading-tight sm:text-6xl"
        >
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Stop Guessing. Start Growing.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/70"
        >
          Tired of complex dashboards and wasted ad spend? AdPilot is your AI co‑pilot for Meta Ads, turning
          confusion into clarity and clicks into customers. We guide you step‑by‑step to optimize campaigns,
          slash costs, and achieve predictable, profitable growth.
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10 flex w-full max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="h-12 flex-1 rounded-xl bg-transparent px-4 text-white placeholder-white/40 outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={loading}
            className={classNames(
              'group relative h-12 min-w-[160px] overflow-hidden rounded-xl px-5 font-semibold text-white transition',
              'bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.35)]',
              'hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50',
              loading ? 'opacity-80' : ''
            )}
          >
            <span className="relative z-10">{loading ? 'Joining…' : 'Get Early Access'}</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition group-hover:translate-x-0" />
          </button>
        </motion.form>
        <p className="mt-3 text-center text-xs text-white/50">We’ll never spam you.</p>

        {/* Toast */}
        {toast && (
          <div
            role="status"
            className={classNames(
              'pointer-events-none fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-xl px-4 py-2 text-sm shadow-xl backdrop-blur',
              toast.type === 'success' ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200'
            )}
          >
            {toast.message}
          </div>
        )}
      </div>
    </section>
  );
}
