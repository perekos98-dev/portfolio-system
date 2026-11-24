"use client";

import { Button } from "@/components/Button";

// Button is a real <button>, so the jump to a section is done on click.
// Sections #cases and #contact do not exist yet: the page just stays in place.
function goTo(hash: string) {
  window.location.hash = hash;
}

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => goTo("#cases")}>
        View My Work
      </Button>
      <Button variant="soft" onClick={() => goTo("#contact")}>
        Contact Me
      </Button>
    </div>
  );
}
