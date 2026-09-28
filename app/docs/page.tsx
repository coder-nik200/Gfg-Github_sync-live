import Link from "next/link";
import {
  Download,
  Github,
  KeyRound,
  Wrench,
} from "lucide-react";
import { RELEASES_URL, REPO_URL } from "@/components/site";

const steps = [
  [
    "01",
    "Download the latest release",
    "Open the GitHub Releases page and download the ZIP attached to the latest release.",
  ],
  [
    "02",
    "Extract the ZIP",
    "Unzip the downloaded file. The folder you select later must contain manifest.json at its root.",
  ],
  ["03", "Open Chrome extensions", "Go to chrome://extensions in Chrome."],
  [
    "04",
    "Enable Developer mode",
    "Turn on Developer mode in the top-right corner.",
  ],
  [
    "05",
    "Load unpacked",
    "Click Load unpacked and select the extracted folder containing manifest.json.",
  ],
  [
    "06",
    "Open GFG GitHub Sync",
    "Pin the extension if you want quick access to its popup.",
  ],
];

export default function Docs() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <div className="max-w-3xl">
        <div className="mb-3 code text-xs uppercase tracking-[.18em] text-[#4dcc5d]">
          Documentation
        </div>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Install and configure GFG GitHub Sync.
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/50">
          This guide matches the current extension implementation. It is
          distributed as an unpacked Manifest V3 extension through GitHub
          Releases.
        </p>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="mt-6 grid gap-3">
          {steps.map(([n, t, d]) => (
            <div
              key={n}
              className="flex gap-5 rounded-2xl border border-white/8 bg-white/[.02] p-5"
            >
              <div className="code text-xs text-[#4dcc5d]">{n}</div>
              <div>
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1 text-sm leading-6 text-white/45">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href={RELEASES_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#3fb950] px-5 py-3 text-sm font-semibold text-[#071008]"
        >
          <Download size={16} /> Open releases
        </a>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Connect GitHub</h2>
        <p className="mt-3 text-white/50">
          Open the extension popup and provide the GitHub username, repository
          URL, and a personal access token. The extension verifies repository
          access before uploading.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [Github, "Username", "Your GitHub account name."],
            [
              Github,
              "Repository URL",
              "A URL such as https://github.com/you/repository.",
            ],
            [
              KeyRound,
              "Personal access token",
              "A token used by the extension to call the GitHub API.",
            ],
          ].map(([Icon, t, d]) => {
            const I = Icon as any;
            return (
              <div
                key={t as string}
                className="rounded-2xl border border-white/8 bg-white/[.02] p-5"
              >
                <I size={18} className="text-[#55d666]" />
                <h3 className="mt-4 font-semibold">{t as string}</h3>
                <p className="mt-1 text-sm leading-6 text-white/45">
                  {d as string}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/[.05] p-4 text-sm leading-6 text-yellow-100/70">
          <strong className="text-yellow-100">Security note:</strong> the
          current extension stores the token in Chrome local extension storage.
          Only use a token with the minimum GitHub permissions required for the
          repository you intend to update.
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">What gets synced?</h2>
        <div className="mt-5 rounded-2xl border border-white/8 bg-[#0b100e] p-6">
          <p className="text-sm leading-7 text-white/55">
            The current implementation detects the GFG success message, extracts
            the problem title, URL, difficulty, problem statement, and C++ code
            from the Ace editor. It then creates or updates a solution file and
            a README on the repository's{" "}
            <span className="code text-white/75">main</span> branch.
          </p>
          <pre className="code mt-5 overflow-x-auto rounded-xl border border-white/8 bg-black/20 p-5 text-xs leading-7 text-white/60">
            <code>{`C++/<Difficulty>/<Problem>/<Problem>.cpp
C++/<Difficulty>/<Problem>/README.md`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Popup dashboard</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            [
              "Connection",
              "Shows the configured repository and lets you edit the GitHub connection.",
            ],
            [
              "Statistics",
              "Shows total synced problems and Easy, Medium, Hard counts.",
            ],
            [
              "Last sync",
              "Shows the latest problem and how long ago it was synced.",
            ],
            ["Status", "Shows syncing, uploaded, updated, or error states."],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-white/8 bg-white/[.02] p-5"
            >
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-white/45">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        <div className="mt-5 space-y-3">
          {[
            [
              "GitHub connection is not configured",
              "Open the popup and provide all required GitHub fields.",
            ],
            [
              "Authentication failed",
              "Check that the personal access token is valid and has permission to access the target repository.",
            ],
            [
              "Repository not found",
              "Check the owner/repository URL and make sure the token can see that repository.",
            ],
            [
              "Submission not detected",
              'The current detector looks for the exact GFG success state containing "Problem Solved Successfully".',
            ],
            [
              "Solution code could not be extracted",
              "Make sure the GFG code editor is present and the solution is available in the Ace editor.",
            ],
            [
              "Upload conflict or validation error",
              "Check the repository state and the error message shown in the extension popup.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-white/8 bg-white/[.02] p-5"
            >
              <div className="flex gap-3">
                <Wrench size={17} className="mt-0.5 text-[#55d666]" />
                <div>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/45">{d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-white/8 bg-white/[.02] p-6">
        <h2 className="font-semibold">Source code</h2>
        <p className="mt-2 text-sm text-white/45">
          The extension source and releases are available on GitHub.
        </p>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm text-[#61d56d] hover:text-white"
        >
          <Github size={15} /> Open repository
        </a>
      </section>
    </main>
  );
}
