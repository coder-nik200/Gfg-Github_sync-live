import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

export const REPO_URL = "https://github.com/coder-nik200/Gfg-Github-Sync";
export const RELEASES_URL = `${REPO_URL}/releases`;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between rounded-2xl border border-white/[0.08] bg-[#070b0a]/80 px-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:h-16 sm:px-4">
          {/* Logo */}
          <Link href="/" className="group flex min-w-0 items-center gap-2.5">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-lg bg-[#3fb950]/20 blur-md transition group-hover:bg-[#3fb950]/35" />
              <Image
                src="/icon.png"
                width={31}
                height={31}
                alt="GFG GitHub Sync"
                className="relative rounded-lg"
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-tight text-white">
                GFG <span className="text-white/30">→</span> GitHub Sync
              </div>
              <div className="text-[10px] text-white/35">
                Automate your GFG submissions
              </div>
            </div>

            <span className="text-sm font-semibold text-white sm:hidden">
              GFG <span className="text-white/30">→</span> GitHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            <a
              href="/#features"
              className="rounded-lg px-3 py-2 text-sm text-white/55 transition hover:bg-white/[0.05] hover:text-white"
            >
              Features
            </a>

            <a
              href="/#how-it-works"
              className="rounded-lg px-3 py-2 text-sm text-white/55 transition hover:bg-white/[0.05] hover:text-white"
            >
              How it works
            </a>

            <Link
              href="/docs"
              className="rounded-lg px-3 py-2 text-sm text-white/55 transition hover:bg-white/[0.05] hover:text-white"
            >
              Docs
            </Link>

            <Link
              href="/privacy"
              className="rounded-lg px-3 py-2 text-sm text-white/55 transition hover:bg-white/[0.05] hover:text-white"
            >
              Privacy
            </Link>

            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-white/55 transition hover:bg-white/[0.05] hover:text-white"
            >
              GitHub
              <ArrowUpRight size={13} />
            </a>
          </nav>

          {/* Download */}
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#3fb950] px-3 py-2 text-xs font-bold text-[#071008] shadow-lg shadow-[#3fb950]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#56c968] hover:shadow-[#3fb950]/20 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <Download
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
            />
            <span>Download</span>
          </a>
        </div>

        {/* Mobile Navigation */}
        <nav className="mt-2 flex items-center gap-1 overflow-x-auto rounded-xl border border-white/[0.06] bg-[#070b0a]/70 px-2 py-1.5 backdrop-blur-xl md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a
            href="/#features"
            className="shrink-0 rounded-lg px-3 py-1.5 text-xs text-white/50 transition hover:bg-white/[0.05] hover:text-white"
          >
            Features
          </a>

          <a
            href="/#how-it-works"
            className="shrink-0 rounded-lg px-3 py-1.5 text-xs text-white/50 transition hover:bg-white/[0.05] hover:text-white"
          >
            How it works
          </a>

          <Link
            href="/docs"
            className="shrink-0 rounded-lg px-3 py-1.5 text-xs text-white/50 transition hover:bg-white/[0.05] hover:text-white"
          >
            Docs
          </Link>

          <Link
            href="/privacy"
            className="shrink-0 rounded-lg px-3 py-1.5 text-xs text-white/50 transition hover:bg-white/[0.05] hover:text-white"
          >
            Privacy
          </Link>

          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1 rounded-lg px-3 py-1.5 text-xs text-white/50 transition hover:bg-white/[0.05] hover:text-white"
          >
            GitHub
            <ArrowUpRight size={11} />
          </a>
        </nav>
      </div>
    </header>
  );
}
