import { motion } from 'framer-motion';

const items = [
  {
    icon: '⚙️',
    title: 'Simplified Optimization',
    desc: 'Cut through the noise with focused, actionable suggestions.',
  },
  {
    icon: '📊',
    title: 'Data-Driven Insights',
    desc: 'See what matters with clear, prioritized recommendations.',
  },
  {
    icon: '🚀',
    title: 'Built by Marketers',
    desc: 'Practical features designed by practitioners who run ads daily.',
  },
];

export default function WhyLove() {
  return (
    <section className="relative bg-[#0B0F19] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Why Marketers Love AdPilot
          </span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
