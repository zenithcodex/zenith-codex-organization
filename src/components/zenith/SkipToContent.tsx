export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-zenith-cyan focus:text-zenith-base font-mono text-sm"
    >
      Skip to main content
    </a>
  );
}
