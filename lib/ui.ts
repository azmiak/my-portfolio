/*
  Shared class strings. Defined once so every button and link has the same
  hover, active and focus behavior. Hover changes fill and text together,
  never color alone.
*/

const buttonBase =
  "inline-flex min-h-11 items-center justify-center rounded-sharp border px-5 py-2 font-medium transition-colors duration-150 active:translate-y-px";

export const btnPrimary = `${buttonBase} border-accent-fill bg-accent-fill text-on-accent hover:border-fg hover:bg-fg hover:text-canvas`;

export const btnSecondary = `${buttonBase} border-fg text-fg hover:bg-fg hover:text-canvas`;

export const textLink =
  "inline-flex min-h-11 items-center rounded-sharp px-1 -mx-1 text-accent underline underline-offset-4 transition-colors duration-150 hover:bg-accent-fill hover:text-on-accent hover:no-underline";
