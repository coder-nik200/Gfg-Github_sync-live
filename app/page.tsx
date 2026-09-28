import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  Chrome,
  CircleAlert,
  Code2,
  Download,
  FileText,
  FolderGit2,
  Github,
  LockKeyhole,
  RefreshCw,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";
import { FeatureCard, REPO_URL, RELEASES_URL } from "@/components/site";

const features = [
  {
    title: "Accepted Only",
    text: "Only sync solutions after GeeksforGeeks confirms the problem is solved.",
    icon: CheckCircle2,
  },
  {
    title: "C++ Extraction",
    text: "Automatically extracts your submitted C++17 solution from the GFG editor.",
    icon: Code2,
  },
  {
    title: "GitHub Organization",
    text: "Keeps your accepted solutions organized inside your GitHub repository.",
    icon: FolderGit2,
  },
  {
    title: "README Generation",
    text: "Creates a README for each synced problem with useful submission details.",
    icon: FileText,
  },
  {
    title: "Create or Update",
    text: "Creates new solution files and updates existing ones when needed.",
    icon: RefreshCw,
  },
  {
    title: "Local Statistics",
    text: "Track total synced problems and Easy, Medium, and Hard counts.",
    icon: BarChart3,
  },
  {
    title: "Local Configuration",
    text: "Your GitHub configuration is stored locally in Chrome.",
    icon: Settings2,
  },
  {
    title: "Sync Status",
    text: "See successful uploads and useful error information directly in the extension.",
    icon: CircleAlert,
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#3fb950]/20 bg-[#3fb950]/8 px-3.5 py-1.5 text-xs text-[#77dc84]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3fb950]" />
              Chrome Extension · Manifest V3 · Open Source
            </div>
            <h1 className="fade-up text-5xl font-semibold tracking-[-.045em] md:text-7xl">
              Solve on GFG.
              <br />
              <span className="text-[#4dcc5d]">Keep it on GitHub.</span>
            </h1>
            <p className="fade-up mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
              GFG GitHub Sync detects successful GeeksforGeeks submissions and
              backs up your solution to a GitHub repository, with organized
              files and a README for every synced problem.
            </p>
            <div className="fade-up mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3fb950] px-5 py-3 text-sm font-semibold text-[#071008] hover:bg-[#56c968]"
              >
                <Download size={17} /> Download Extension{" "}
                <ArrowRight size={16} />
              </a>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[.035] px-5 py-3 text-sm font-semibold hover:bg-white/[.07]"
              >
                <Github size={17} /> View Source
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-[#0b100e] p-4 shadow-glow md:p-6">
            <div className="rounded-2xl border border-white/8 bg-[#080d0b] p-5 md:p-8">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <span className="code text-[11px] text-white/30">
                  sync-flow
                </span>
              </div>
              <div className="grid items-center gap-3 md:grid-cols-5">
                {[
                  ["01", "GeeksforGeeks", "Solve + submit"],
                  ["02", "Accepted", "Success detected"],
                  ["03", "Extract", "Code + metadata"],
                  ["04", "GitHub API", "Create / update"],
                  ["05", "Repository", "Solution + README"],
                ].map(([n, title, sub], i) => (
                  <div key={n} className="relative">
                    <div className="rounded-xl border border-white/8 bg-white/[.025] p-4">
                      <div className="code mb-3 text-[10px] text-[#4dcc5d]">
                        {n}
                      </div>
                      <div className="text-sm font-semibold">{title}</div>
                      <div className="mt-1 text-xs text-white/40">{sub}</div>
                    </div>
                    {i < 4 && (
                      <ArrowRight
                        className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#3fb950]/60 md:block"
                        size={16}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 code text-xs uppercase tracking-[.18em] text-[#4dcc5d]">
              What it actually does
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Built around the workflow, not another dashboard.
            </h2>
            <p className="mt-4 leading-7 text-white/50">
              The website documents the features implemented in the current
              extension: accepted-submission detection, C++ extraction, GitHub
              uploads, README generation, local stats, and explicit error
              handling.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-y border-white/5 bg-white/[.012]"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-3 code text-xs uppercase tracking-[.18em] text-[#4dcc5d]">
                How it works
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                The sync happens after a successful submission.
              </h2>
              <p className="mt-5 leading-7 text-white/50">
                The extension runs on GeeksforGeeks, watches DOM changes for the
                successful submission message, extracts the problem metadata and
                C++ code, then hands it to the background worker for GitHub
                synchronization.
              </p>
              <Link
                href="/docs"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#61d56d] hover:text-white"
              >
                Read the documentation <ArrowRight size={15} />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                [
                  "01",
                  "Detect",
                  "The content script looks for “Problem Solved Successfully”.",
                ],
                [
                  "02",
                  "Extract",
                  "Title, URL, difficulty, statement, language, and current Ace-editor code are collected.",
                ],
                [
                  "03",
                  "Validate",
                  "The background worker checks GitHub configuration and repository access.",
                ],
                [
                  "04",
                  "Sync",
                  "The solution file and generated README are created or updated on the main branch.",
                ],
                [
                  "05",
                  "Track",
                  "Local stats and the latest sync status are updated in the popup.",
                ],
              ].map(([n, t, d]) => (
                <div
                  key={n}
                  className="flex gap-4 rounded-2xl border border-white/8 bg-[#0d1311] p-5"
                >
                  <div className="code pt-0.5 text-xs text-[#4dcc5d]">{n}</div>
                  <div>
                    <div className="font-semibold">{t}</div>
                    <p className="mt-1 text-sm leading-6 text-white/45">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="rounded-3xl border border-[#3fb950]/20 bg-[#0b120e] p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-3 code text-xs uppercase tracking-[.18em] text-[#4dcc5d]">
                Repository output
              </div>
              <h2 className="text-3xl font-semibold">
                A predictable place for every solution.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/50">
                For the current implementation, C++ solutions are stored by
                difficulty and problem title. A README is created alongside each
                solution.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/8 bg-black/20 px-3 py-2 text-xs text-white/55">
                <Check size={14} className="text-[#4dcc5d]" /> Main branch
              </div>
            </div>
            <pre className="code overflow-x-auto rounded-2xl border border-white/8 bg-[#070a09] p-5 text-xs leading-7 text-white/65">
              <code>{`C++/
├── Easy/
│   └── Largest-in-Array/
│       ├── Largest-in-Array.cpp
│       └── README.md
├── Medium/
│   └── Two-Sum-Pair-with-Given-Sum/
│       ├── Two-Sum-Pair-with-Given-Sum.cpp
│       └── README.md
└── Hard/`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                Chrome,
                "Chrome extension",
                "Manifest V3, content script, page bridge, background service worker, and popup.",
              ],
              [
                LockKeyhole,
                "Local configuration",
                "The extension stores GitHub configuration in Chrome local storage.",
              ],
              [
                ShieldCheck,
                "Clear failure states",
                "Authentication, permissions, repository, network, conflict, validation, and extraction errors are surfaced.",
              ],
            ].map(([Icon, title, text]) => {
              const I = Icon as any;
              return (
                <div
                  key={title as string}
                  className="rounded-2xl border border-white/8 bg-white/[.025] p-6"
                >
                  <I size={20} className="mb-5 text-[#55d666]" />
                  <h3 className="font-semibold">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {text as string}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3fb950]/20 bg-[#3fb950]/10 text-[#55d666]">
            <Download size={21} />
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ready to try it?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Download the latest release, load the extracted folder as an
            unpacked Chrome extension, then connect your GitHub repository from
            the popup.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3fb950] px-5 py-3 text-sm font-semibold text-[#071008] hover:bg-[#56c968]"
            >
              <Download size={16} /> Download release
            </a>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/[.05]"
            >
              <BookOpen size={16} /> Installation guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
