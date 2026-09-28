import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ShieldCheck,
  RefreshCw,
  FileCode2,
  FolderTree,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

export const REPO_URL = "https://github.com/coder-nik200/Gfg-Github-Sync";
export const RELEASES_URL = `${REPO_URL}/releases`;

const features = [
  {
    icon: RefreshCw,
    title: "Automatic accepted-submission sync",
    text: 'Watches GeeksforGeeks for the "Problem Solved Successfully" state and starts the sync without another click.',
  },
  {
    icon: FileCode2,
    title: "C++ solution extraction",
    text: "Reads the current C++ solution from the GFG Ace editor and sends the problem data to the background worker.",
  },
  {
    icon: FolderTree,
    title: "Organized GitHub files",
    text: "Creates a predictable C++/difficulty/problem structure so your DSA repository stays readable.",
  },
  {
    icon: BookOpen,
    title: "README per problem",
    text: "Generates a README containing the problem statement, examples, difficulty, source link, and solved status.",
  },
  {
    icon: RefreshCw,
    title: "Create or update",
    text: "Checks whether the solution already exists and updates the existing file instead of creating a duplicate.",
  },
  {
    icon: BarChart3,
    title: "Local solving statistics",
    text: "Tracks total synced problems plus Easy, Medium, and Hard counts, along with the latest synced problem.",
  },
  {
    icon: ShieldCheck,
    title: "Local configuration",
    text: "GitHub username, repository URL, and personal access token are stored in Chrome local extension storage.",
  },
  {
    icon: AlertTriangle,
    title: "Specific sync errors",
    text: "Reports authentication, permission, repository, conflict, validation, network, and extraction failures with clear messages.",
  },
];

export function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/8 bg-white/[.025] p-6 transition hover:-translate-y-0.5 hover:border-[#3fb950]/35 hover:bg-white/[.04]">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#3fb950]/20 bg-[#3fb950]/10 text-[#5bd66c]">
        <Icon size={19} />
      </div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm leading-6 text-white/55">{text}</p>
    </div>
  );
}
