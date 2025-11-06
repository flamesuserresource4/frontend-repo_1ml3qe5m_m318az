import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { motion } from 'framer-motion';

export default function FAQ() {
  return (
    <section className="relative bg-[#0B0F19] py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">FAQ</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-white/10 py-3">
              <AccordionTrigger className="flex w-full items-center justify-between text-left text-sm font-medium text-white">
                When will AdPilot launch?
              </AccordionTrigger>
              <AccordionContent className="pt-2 text-sm text-white/70">
                We’re inviting early testers soon! Join the waitlist for early access.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="py-3">
              <AccordionTrigger className="flex w-full items-center justify-between text-left text-sm font-medium text-white">
                Is it free to join?
              </AccordionTrigger>
              <AccordionContent className="pt-2 text-sm text-white/70">
                Yes — it’s free to sign up and get early access before the public launch.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
