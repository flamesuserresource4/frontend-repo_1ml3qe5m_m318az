import { Rocket, Settings, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Settings,
    title: 'Connect your Meta Ad account',
    desc: 'Securely link your account in minutes — no complex setup required.',
  },
  {
    icon: BarChart3,
    title: 'Get personalized optimization insights',
    desc: 'AI scans your campaigns and surfaces quick wins to reduce CPA.',
  },
  {
    icon: Rocket,
    title: 'Scale smarter with AI guidance',
    desc: 'Step-by-step playbooks to confidently increase spend and ROAS.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0B0F19] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            How It Works
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/60">
          Three simple steps to turn confusion into clarity.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] transition hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
