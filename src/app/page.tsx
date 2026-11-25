import { ThemeSwitch } from "@/components/theme-switch";

const PANGRAM = "The quick brown fox jumps over the lazy dog";

const WEIGHTS = [
  { name: "Thin", value: 100, className: "font-thin" },
  { name: "ExtraLight", value: 200, className: "font-extralight" },
  { name: "Light", value: 300, className: "font-light" },
  { name: "Regular", value: 400, className: "font-normal" },
  { name: "Medium", value: 500, className: "font-medium" },
  { name: "SemiBold", value: 600, className: "font-semibold" },
  { name: "Bold", value: 700, className: "font-bold" },
  { name: "ExtraBold", value: 800, className: "font-extrabold" },
  { name: "Black", value: 900, className: "font-black" },
] as const;

const SIZES = [
  { name: "xs", px: 12, className: "text-xs" },
  { name: "sm", px: 14, className: "text-sm" },
  { name: "base", px: 16, className: "text-base" },
  { name: "xl", px: 20, className: "text-xl" },
  { name: "3xl", px: 30, className: "text-3xl" },
  { name: "5xl", px: 48, className: "text-5xl" },
  { name: "7xl", px: 72, className: "text-7xl" },
] as const;

const FEATURES = [
  {
    tag: "ss01",
    name: "Single-story a",
    sample: "A banana and a papaya",
    off: "",
    on: "font-features-['ss01']",
  },
  {
    tag: "ss02",
    name: "Disambiguation",
    sample: "Il1 O0 Illegal 1010",
    off: "",
    on: "font-features-['ss02']",
  },
  {
    tag: "ss03",
    name: "Open figures",
    sample: "4 6 9 — 1469",
    off: "",
    on: "font-features-['ss03']",
  },
  {
    tag: "frac",
    name: "Fractions",
    sample: "1/2 cup, 3/4 tsp, 7/8 in",
    off: "",
    on: "font-features-['frac']",
  },
  {
    tag: "case",
    name: "Case-sensitive forms",
    sample: "(HELLO) [WORLD] {A-Z} @ALLO",
    off: "",
    on: "font-features-['case']",
  },
  {
    tag: "clig",
    name: "Typed arrows",
    sample: "a -> b => c <-> d",
    off: "font-features-['clig'_0]",
    on: "",
  },
] as const;

const NUMBER_STYLES = [
  { label: "Proportional", className: "proportional-nums" },
  { label: "Tabular", className: "tabular-nums" },
] as const;

const PRICES = [
  { item: "Coffee", amount: "$4.11" },
  { item: "Croissant", amount: "$3.80" },
  { item: "Orange juice", amount: "$11.90" },
  { item: "Total", amount: "$19.81" },
] as const;

const CODE_SAMPLE = `const allo = localFont({
  src: "AlloVariableFriendly.woff2",
  weight: "100 900",
  variable: "--font-allo",
});`;

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 text-sm font-medium tracking-widest text-muted-foreground uppercase">
    {children}
  </h2>
);

const Home = () => (
  <main className="mx-auto w-full max-w-5xl space-y-24 px-6 py-20">
    <header className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Typeface specimen
        </p>
        <ThemeSwitch />
      </div>
      <h1 className="text-8xl leading-none font-semibold tracking-tight sm:text-9xl">
        Allo
      </h1>
      <p className="max-w-2xl text-2xl leading-snug text-muted-foreground">
        Your friendly neighborhood typeface. Warm without being too cute, clear
        without being too cold.
      </p>
    </header>

    <section>
      <SectionHeading>Weights</SectionHeading>
      <ul className="divide-y divide-border">
        {WEIGHTS.map((weight) => (
          <li
            className="flex items-baseline justify-between gap-6 py-3"
            key={weight.value}
          >
            <span className={`truncate text-4xl ${weight.className}`}>
              {weight.name}
            </span>
            <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
              {weight.value}
            </span>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <SectionHeading>Sizes</SectionHeading>
      <p className="mb-8 max-w-prose text-muted-foreground">
        Optical size follows font size automatically: small text gets looser
        spacing, display sizes get tighter.
      </p>
      <ul className="space-y-6">
        {SIZES.map((size) => (
          <li className="flex items-baseline gap-6" key={size.name}>
            <span className="w-12 shrink-0 text-xs text-muted-foreground tabular-nums">
              {size.px}px
            </span>
            <span className={`truncate ${size.className}`}>{PANGRAM}</span>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <SectionHeading>Prose</SectionHeading>
      <article className="max-w-prose space-y-5 text-lg leading-relaxed">
        <h3 className="text-3xl font-bold tracking-tight">
          A letter from the neighborhood
        </h3>
        <p>
          Good type gets out of the way. It carries the words to the reader
          without asking for attention, and only when you look closely do you
          notice the <strong>care in the curves</strong>, the rhythm of the
          spacing, and the way each letter sits comfortably beside the next.
        </p>
        <p>
          Allo was drawn for screens and interfaces. Its proportions are
          generous, its counters open, and its details are tuned so that a label
          at 12 pixels reads just as clearly as a headline at 96. Some things
          are worth <em>emphasizing</em>, and some are better left as{" "}
          <a
            className="underline decoration-muted-foreground underline-offset-4 hover:decoration-current"
            href="https://allo.joshpuckett.me"
            rel="noopener noreferrer"
            target="_blank"
          >
            a quiet link
          </a>
          .
        </p>
        <blockquote className="border-l-4 border-border pl-5 text-xl text-muted-foreground">
          “Typography exists to honor content.” — Robert Bringhurst
        </blockquote>
        <ul className="list-disc space-y-1 pl-6">
          <li>Three variable axes: optical size, weight, and roundness</li>
          <li>Tabular figures, fractions, and case-sensitive punctuation</li>
          <li>Arrows that appear as you type them -&gt; like this</li>
        </ul>
      </article>
    </section>

    <section>
      <SectionHeading>OpenType features</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <div
            className="space-y-3 rounded-2xl border border-border bg-card p-5 text-card-foreground"
            key={feature.tag}
          >
            <div className="flex items-baseline justify-between">
              <span className="font-medium">{feature.name}</span>
              <code className="font-mono text-xs text-muted-foreground">
                {feature.tag}
              </code>
            </div>
            <p className={`text-2xl text-muted-foreground ${feature.off}`}>
              {feature.sample}
            </p>
            <p className={`text-2xl ${feature.on}`}>{feature.sample}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <SectionHeading>Tabular figures</SectionHeading>
      <div className="grid max-w-2xl gap-8 sm:grid-cols-2">
        {NUMBER_STYLES.map((variant) => (
          <div key={variant.label}>
            <p className="mb-3 text-sm text-muted-foreground">
              {variant.label}
            </p>
            <dl className="space-y-1 text-xl">
              {PRICES.map((row) => (
                <div className="flex justify-between" key={row.item}>
                  <dt>{row.item}</dt>
                  <dd className={variant.className}>{row.amount}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>

    <section>
      <SectionHeading>Paired with Geist Mono</SectionHeading>
      <pre className="overflow-x-auto rounded-2xl bg-muted p-6 font-mono text-sm leading-relaxed">
        <code>{CODE_SAMPLE}</code>
      </pre>
    </section>
  </main>
);

export default Home;
