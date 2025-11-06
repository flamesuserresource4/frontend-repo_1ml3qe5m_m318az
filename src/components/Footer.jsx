import { Twitter, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-white/60">Made by CargoFit Team.</p>
        <div className="flex items-center gap-4">
          <a href="https://x.com" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:bg-white/10">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:bg-white/10">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://cargofit.ai" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:bg-white/10">
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
