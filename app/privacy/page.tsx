import Link from "next/link";

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <div className="mb-3 code text-xs uppercase tracking-[.18em] text-[#4dcc5d]">
        Privacy
      </div>
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-5 text-white/45">
        This policy describes the data handling implemented by the current GFG
        GitHub Sync extension.
      </p>

      <div className="mt-12 space-y-10 text-sm leading-7 text-white/55">
        <section>
          <h2 className="text-xl font-semibold text-white">
            What the extension accesses
          </h2>
          <p className="mt-3">
            The extension runs on GeeksforGeeks pages and reads information
            needed to detect a successful submission and extract the current
            solution. It also makes requests to the GitHub API when syncing a
            solution.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">What is stored</h2>
          <p className="mt-3">
            The current implementation stores GitHub configuration,
            synchronization statistics, and the latest sync status in Chrome
            local extension storage. GitHub configuration includes the username,
            repository URL, and personal access token supplied by the user.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">
            Where solution data goes
          </h2>
          <p className="mt-3">
            When a successful submission is detected, the extension sends the
            solution and generated README content to the GitHub repository
            configured by the user through the GitHub API. The website itself
            does not receive the solution code.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">
            No advertising or analytics in the extension
          </h2>
          <p className="mt-3">
            The supplied extension code does not contain an advertising SDK or
            an analytics service. This website likewise does not require
            analytics to operate.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">
            Third-party services
          </h2>
          <p className="mt-3">
            The extension interacts with GeeksforGeeks and GitHub because those
            services are necessary for its core functionality. Their own terms
            and privacy policies also apply to your use of those services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">Security note</h2>
          <p className="mt-3">
            The extension uses the GitHub token supplied by the user to
            authenticate API requests. The current code stores that token in
            Chrome local extension storage. Users should create a narrowly
            scoped token and avoid sharing it with anyone.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">Changes</h2>
          <p className="mt-3">
            If the extension's data handling changes materially, this policy
            should be updated to match the new implementation.
          </p>
        </section>
      </div>
    </main>
  );
}
