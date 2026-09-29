import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import angel from "./angel.webp";
import Bio from "@/content/bio.mdx";
import ResearchIntro from "@/content/research-intro.mdx";
import ResearchOutro from "@/content/research-outro.mdx";
import Code from "@/content/code.mdx";
import FooterNote from "@/content/footer-note.mdx";

// Copy imported from the Hugo-based site at ../worldofnic-2026 (content/_index.md,
// content/about, content/research, content/code) and lightly adapted to this layout.
const tags = [
  "Grandad",
  "Dad",
  "Husband",
  "Former road cyclist",
  "Terrible guitarist",
  "Geek",
  "Record collector",
  "Audiophile",
  "“Mad Cat Lady”",
  "Catholic convert",
];

const degrees = [
  "BSc (hons) Mathematics, 1992",
  "MSc Symbolic Computation, 1993",
  "PhD Order Sorted Computer Algebra, 1997",
];

const publications = [
  {
    title:
      "The implementation of various algorithms for permutation groups in the computer algebra system: Axiom",
    dek: "MSc thesis",
    date: "1993",
    href: "https://static.worldofnic.org/cdn/ps/research/msc.ps",
  },
  {
    title: "Order sorted computer algebra and coercions",
    dek: "PhD thesis",
    date: "1997",
    href: "https://static.worldofnic.org/cdn/ps/research/phd.ps",
  },
  {
    title: "Automated coercion for Axiom",
    dek: "ISSAC paper",
    date: "1999",
    href: "https://dl.acm.org/doi/10.1145/309831.309944",
  },
];

// Font Awesome Free brand icons (CC BY 4.0, fontawesome.com), inlined as SVG paths.
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/nicdoye",
    viewBox: "0 0 496 512",
    path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/nicdoye",
    viewBox: "0 0 512 512",
    path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nicdoye",
    viewBox: "0 0 448 512",
    path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/nicdoye",
    viewBox: "0 0 320 512",
    path: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
  },
];

function SectionHeading({
  label,
  gradient,
  children,
  invert = false,
}: {
  label: string;
  gradient: string;
  children: ReactNode;
  invert?: boolean;
}) {
  return (
    <div>
      <span
        className="font-mono inline-block rounded-full px-3.5 py-1.5 text-xs font-medium tracking-[0.08em] text-white uppercase"
        style={{ backgroundImage: gradient }}
      >
        {label}
      </span>
      <h2
        className={`font-display mt-4 text-[44.8px] leading-[47.04px] font-semibold tracking-[-1.344px] ${invert ? "text-white" : ""}`}
      >
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      <header className="border-line bg-paper/90 sticky top-0 z-10 border-b px-6 py-5 backdrop-blur sm:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight"
          >
            Nic Doye
          </a>
          <ul className="hidden gap-8 text-sm sm:flex">
            <li>
              <a className={styles.navLink} href="#about">
                About
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#research">
                Research
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#code">
                Code
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 sm:px-10 sm:pt-28">
            <h1 className="font-display text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
              Nicolas (Nic) Doye
            </h1>
            <p className="text-ink-soft mt-6 max-w-xl text-lg">
              AI native cloud engineer, accidental Linux sysadmin, and
              programmer in too many languages. Operations engineer at Hyland
              (Alfresco).
            </p>
            <ul className="mt-6 flex max-w-xl flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-card border-line text-ink font-mono rounded border px-3 py-1 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-6 pb-[22.5px] sm:px-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              <Image
                src={angel}
                alt=""
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="mx-auto max-w-7xl px-6 py-[22.5px] sm:px-10">
            <SectionHeading
              label="Bio"
              gradient="linear-gradient(90deg, var(--color-accent), #52585d)"
            >
              A bit about me.
            </SectionHeading>
            <div className="text-ink-soft mt-6 max-w-2xl">
              <Bio />
            </div>
          </div>
        </section>

        {/* Research */}
        <section id="research">
          <div className="mx-auto max-w-7xl px-6 py-[22.5px] sm:px-10">
            <SectionHeading
              label="Research"
              gradient="linear-gradient(90deg, #52585d, var(--color-accent))"
            >
              My former academic life.
            </SectionHeading>
            <div className="text-ink-soft mt-3 max-w-2xl">
              <ResearchIntro />
            </div>
            <div className={`${styles.card} mt-10 max-w-3xl`}>
              <ul className="border-line text-ink-soft space-y-2 border-b p-6 text-sm sm:p-6">
                {degrees.map((degree) => (
                  <li key={degree}>{degree}</li>
                ))}
              </ul>
              <div className="divide-line divide-y p-2 sm:p-3">
                {publications.map((pub) => (
                  <a
                    key={pub.href}
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.noteRow} flex flex-col gap-1 rounded px-4 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-6`}
                  >
                    <span>
                      <span className="block text-base font-medium">
                        {pub.title}
                      </span>
                      <span className="text-ink-soft mt-1 block text-sm">
                        {pub.dek}
                      </span>
                    </span>
                    <span className="text-ink-soft font-mono shrink-0 text-sm">
                      {pub.date}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="text-ink-soft mt-6 max-w-2xl text-sm">
              <ResearchOutro />
            </div>
          </div>
        </section>

        {/* Code */}
        <section id="code" className="bg-panel">
          <div className="mx-auto max-w-7xl px-6 pt-[22.5px] pb-16 sm:px-10">
            <SectionHeading
              label="Code"
              gradient="linear-gradient(90deg, var(--color-accent), #0a0a0a)"
              invert
            >
              Open-source code
              <br />
              I&rsquo;ve written over the years
            </SectionHeading>
            <div
              className={`${styles.card} text-ink-soft mt-10 max-w-3xl p-8 sm:p-10`}
            >
              <Code />
            </div>
          </div>
        </section>
      </main>

      <footer className={`${styles.footer} px-6 py-10 sm:px-10`}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 text-sm sm:flex-row sm:items-center">
          <span className="font-display font-bold">World of Nic</span>
          <ul className="flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={styles.socialLink}
                >
                  <svg
                    viewBox={s.viewBox}
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <a href="#top" className={styles.navLink}>
            Back to top
          </a>
        </div>
        <div className="mx-auto mt-6 max-w-7xl text-left text-xs opacity-70">
          <FooterNote />
        </div>
      </footer>
    </div>
  );
}
