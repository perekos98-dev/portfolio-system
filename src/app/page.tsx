import Image from "next/image";
import { LabelList } from "@/components/LabelList";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Navigation } from "@/components/Navigation";
import { HeroActions } from "./HeroActions";
import orbits from "@/assets/hero-orbits.png";
import orbitsCropped from "@/assets/hero-orbits-cropped.png";

const menu = [
  { label: "Works", href: "#cases" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UA" },
  { code: "es", label: "ES" },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip">
      <main
        id="top"
        className="mx-auto flex min-h-screen w-full max-w-page flex-col px-4 md:px-8 lg:justify-center"
      >
        {/* From 768 px: the original image, pinned to the right edge of the screen.
            From 1024 px it has no `top`: main is a centring flex column there, so the figure sits at its
            static position, the vertical centre of main. The visible part of the picture is a little
            smaller than its box and the buttons sit on the baseline of the heading, so a small shift
            (mb-6 / mb-8 and a fraction of the figure's own height) centres the visible figure exactly
            between the language switcher and the buttons. */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden aspect-hero md:absolute md:-right-8 md:top-6 md:-z-10 md:block md:w-figure lg:top-auto lg:mb-6 lg:-translate-y-1/120 xl:mb-8"
        >
          <Image
            src={orbits}
            alt=""
            fill
            sizes="53vw"
            className="object-contain"
          />
        </div>
        <header className="relative flex flex-wrap items-center justify-between gap-2 py-4 md:grid md:grid-cols-3 md:gap-4 md:py-6">
          <a
            href="#top"
            className="origin-left justify-self-start rounded-control text-lead font-semibold text-ink outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink motion-safe:transition-transform motion-safe:hover:scale-105"
          >
            .perekos <span className="tracking-logo">T.</span>
          </a>
          <div className="md:justify-self-center">
            <Navigation
              items={menu}
              label="Main"
              menuLabel="Menu"
              closeLabel="Close"
            />
          </div>
          <div className="md:justify-self-end">
            <LanguageSwitcher languages={languages} defaultValue="en" />
          </div>
        </header>

        <section className="flex flex-1 flex-col gap-4 pb-4 pt-2 md:gap-8 md:pb-8 md:pt-8">
          <div className="relative z-10 my-auto flex flex-col gap-4 md:gap-8">
            <p className="max-w-lead text-lead text-ink-muted">
              I design intuitive websites and mobile experiences that connect
              user needs with business goals.
            </p>
            <LabelList
              items={["WEBSITES", "WEB SERVICES", "MOBILE APPS"]}
              label="What I design"
            />
          </div>

          {/* Narrow screens: the figure cropped to its own bounds fills the container. */}
          <div
            aria-hidden="true"
            className="pointer-events-none relative aspect-hero w-full md:hidden"
          >
            <Image
              src={orbitsCropped}
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* From 1024 px: a two-row grid. The heading spans both rows, so each row is exactly one
              line of the heading, and the buttons sit in the second row, on the baseline of its last line. */}
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 md:gap-8 lg:grid lg:grid-flow-col lg:grid-rows-2 lg:items-stretch lg:gap-y-0">
            <h1 className="text-heading max-md:font-semibold md:font-bold lg:row-span-2 lg:self-baseline-last xl:text-display">
              WEB &amp; MOBILE
              <br />
              <span className="text-accent">UI/UX</span> DESIGNER.
            </h1>
            {/* The inner box is inline-block with overflow hidden, so its baseline is its bottom edge:
                the grid then puts the bottom of the buttons on the baseline of the heading letters.
                p-2 with -m-2 keeps room for the focus outline and the hover scale. */}
            <div className="lg:row-start-2 lg:self-baseline-last lg:leading-0">
              <div className="lg:-m-2 lg:inline-block lg:overflow-hidden lg:p-2">
                <HeroActions />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
