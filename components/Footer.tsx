import { Github, Globe, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const REPO_URL = "https://github.com/coder-nik200/Gfg-Github-Sync";
export const RELEASES_URL = `${REPO_URL}/releases`;

export function Footer() {
  const socialLinks = [
    {
      name: "Portfolio",
      href: "https://nitish-portfolio17.netlify.app/",
      icon: Globe,
    },
    {
      name: "Email",
      href: "mailto:codesnippet17@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nitish-kumar-bharti-631a37359/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/coder-nik200",
      icon: Github,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/wohh.nitish",
      icon: Instagram,
    },
  ];

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10">
        {/* Top Section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <div className="mb-1 font-semibold text-white/80">
              GFG → GitHub Sync
            </div>

            <div className="text-sm text-white/40">
              Sync your solved problems automatically.
            </div>
          </div>

          {/* Website Links */}
          <div className="flex flex-wrap gap-5 text-sm text-white/45">
            <Link href="/docs" className="transition-colors hover:text-white">
              Documentation
            </Link>

            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>

            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Releases
            </a>
          </div>
        </div>

        {/* Social Section */}
        <div className="border-t border-white/5 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Label */}
            <div>
              <p className="text-sm font-medium text-white/60">
                Connect with Nitish
              </p>
              <p className="mt-1 text-xs text-white/30">
                Find me across the web
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              {[
                {
                  name: "Portfolio",
                  href: "https://nitish-portfolio17.netlify.app/",
                  icon: Globe,
                },
                {
                  name: "Email",
                  href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
                  icon: Mail,
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/nitish-kumar-bharti-631a37359/",
                  icon: Linkedin,
                },
                {
                  name: "GitHub",
                  href: "https://github.com/coder-nik200",
                  icon: Github,
                },
                {
                  name: "Instagram",
                  href: "https://instagram.com/wohh.nitish",
                  icon: Instagram,
                },
              ].map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="group flex h-9 w-9 items-center justify-center rounded-lg text-white/35 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Email */}
          <a
            href="mailto:codesnippet17@gmail.com"
            className="mt-4 inline-flex items-center gap-2 text-xs text-white/30 transition-colors hover:text-white/60"
          >
            <Mail size={13} strokeWidth={1.7} />
            codesnippet17@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-5 text-xs text-white/25">
          © {new Date().getFullYear()} Nitish Bharti. Built with Next.js.
        </div>
      </div>
    </footer>
  );
}
