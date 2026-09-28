import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";

export const REPO_URL = "https://github.com/coder-nik200/Gfg-Github-Sync";
export const RELEASES_URL = `${REPO_URL}/releases`;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070b0a]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5 font-semibold">
          <Image
            src="/icon.png"
            width={30}
            height={30}
            alt="GFG GitHub Sync"
            className="rounded-md"
          />
          <span>
            GFG <span className="text-white/45">→</span> GitHub Sync
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
          <a href="/#features" className="hover:text-white">
            Features
          </a>
          <a href="/#how-it-works" className="hover:text-white">
            How it works
          </a>
          <Link href="/docs" className="hover:text-white">
            Docs
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            GitHub <ExternalLink size={13} />
          </a>
        </nav>
        <a
          href={RELEASES_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#3fb950] px-4 py-2 text-sm font-semibold text-[#071008] transition hover:bg-[#56c968]"
        >
          <Download size={15} /> Download
        </a>
      </div>
    </header>
  );
}
