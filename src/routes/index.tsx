import { createFileRoute } from "@tanstack/react-router";
import { Pause } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaestrings | Official Site" },
      { name: "description", content: "Worship anthems born in prayer, carried across nations by mercy." },
      { property: "og:title", content: "Kaestrings | Official Site" },
      { property: "og:description", content: "Worship anthems born in prayer, carried across nations by mercy." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: App,
});

/* Icons */
type IconName =
  | "search" | "user" | "menu" | "x" | "star" | "clock" | "calendar"
  | "play" | "chevronLeft" | "chevronRight" | "arrowRight" | "check"
  | "plus" | "monitor" | "download" | "zap" | "volume" | "spotify";

function Icon({ name, size = 24, fill = "none", className = "", strokeWidth = 2 }: {
  name: IconName; size?: number; fill?: string; className?: string; strokeWidth?: number;
}) {
  const paths: Record<IconName, ReactNode> = {
    search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
    user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
    menu: <><path d="M4 12h16" /><path d="M4 6h16" /><path d="M4 18h16" /></>,
    x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
    star: <path d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 4.32a.56.56 0 0 0 .42.3l4.77.7a.56.56 0 0 1 .31.95l-3.45 3.36a.56.56 0 0 0-.16.5l.81 4.75a.56.56 0 0 1-.81.59l-4.27-2.24a.56.56 0 0 0-.52 0l-4.27 2.24a.56.56 0 0 1-.81-.59l.81-4.75a.56.56 0 0 0-.16-.5L3.68 9.77a.56.56 0 0 1 .31-.95l4.77-.7a.56.56 0 0 0 .42-.3Z" />,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    calendar: <><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></>,
    play: <path d="M6 3.5v17a.5.5 0 0 0 .77.42l13-8.5a.5.5 0 0 0 0-.84l-13-8.5A.5.5 0 0 0 6 3.5Z" />,
    chevronLeft: <path d="m15 18-6-6 6-6" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    check: <path d="M20 6 9 17l-5-5" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    monitor: <><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>,
    zap: <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />,
    volume: <><path d="M11 4.7 6.4 8.3H3v7.4h3.4l4.6 3.6z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.4 6a9 9 0 0 1 0 12" /></>,
    spotify: <path fill="currentColor" stroke="none" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill={fill} stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}

function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: {
  children: ReactNode; delay?: number; className?: string; as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reveal as soon as any part of the element enters the viewport.
    // threshold:0 + a top-anticipation rootMargin (never a negative bottom margin) keeps this
    // reliable during fast mobile momentum scrolling, where the browser coalesces IO callbacks —
    // a negative bottom margin lets a flick overshoot the trigger zone, then flush several
    // reveals at once on the next reflow (e.g. when the mobile address bar shows/hides).
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px 10% 0px" }
    );
    io.observe(el);
    // Fallback: if the element is already within/above the trigger zone at mount (matching the
    // 10% anticipation margin above), reveal it so nothing stays stuck hidden before IO's first
    // async callback — important on mobile where that first callback can lag after a reflow.
    if (el.getBoundingClientRect().top < window.innerHeight * 1.1) setShown(true);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as any;
  return (
    <Comp ref={ref}
      className={`${className} ${shown ? "animate-blur-fade-up" : ""}`}
      style={{ animationDelay: `${delay}ms`, opacity: shown ? undefined : 0 }}>
      {children}
    </Comp>
  );
}

function SectionHead({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
      <div>
        {eyebrow && (
          <Reveal as="div" className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
            <span className="inline-block w-6 h-px bg-white/30" />
            {eyebrow}
          </Reveal>
        )}
        <Reveal as="h2" delay={80} className="text-2xl sm:text-3xl md:text-4xl font-normal">
          <span style={{ letterSpacing: "-0.04em" }}>{title}</span>
        </Reveal>
      </div>
      {action && (
        <Reveal as="div" delay={120} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}

function Button({ children, className = "", type = "button", disabled = false, onClick }: {
  children: ReactNode; className?: string; type?: "button" | "submit"; disabled?: boolean; onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium px-8 py-3 transition-colors hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white ${className}`}
    >
      {children}
    </button>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

const YOUTUBE_AUDIO_VIDEO_ID = "KsRQqmzzOAc"; // Kaestrings - Rahama | Live

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<void> | null = null;

function loadYouTubeIframeApi(): Promise<void> {
  if (youtubeApiPromise) return youtubeApiPromise;
  youtubeApiPromise = new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve();
    };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  });
  return youtubeApiPromise;
}

function useYouTubeAudioPlayer(videoId: string) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadYouTubeIframeApi().then(() => {
      if (cancelled || !containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: { autoplay: 0, controls: 0, disablekb: 1 },
        events: {
          onReady: () => { if (!cancelled) setIsReady(true); },
          onStateChange: (e: { data: number }) => {
            if (cancelled) return;
            setIsPlaying(e.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    });
    return () => {
      cancelled = true;
      playerRef.current?.stopVideo?.();
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [videoId]);

  const toggle = useCallback(() => {
    if (!isReady || !playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  }, [isReady, isPlaying]);

  return { containerRef, isReady, isPlaying, toggle };
}

const EXPLORE_LINKS: { label: string; sectionId: string }[] = [
  { label: "The Catalog", sectionId: "the-catalog" },
  { label: "The Man", sectionId: "the-man" },
  { label: "The Visuals", sectionId: "the-visuals" },
  { label: "The Translation", sectionId: "the-translation" },
];

function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (fn: (o: boolean) => boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();
  const { containerRef: youtubeContainerRef, isReady: audioReady, isPlaying, toggle: toggleAudio } = useYouTubeAudioPlayer(YOUTUBE_AUDIO_VIDEO_ID);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    setMenuOpen(() => false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10" : "border-b border-transparent"
      }`}>
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-5">
          <a href="#top" className="animate-blur-fade-up flex items-center h-8 md:h-10" style={{ animationDelay: "0ms" }}>
            <span className="text-xl md:text-2xl font-semibold tracking-[0.2em]">KAESTRINGS</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {EXPLORE_LINKS.map((link, i) => (
              <a key={link.sectionId} href={`#${link.sectionId}`} onClick={(e) => scrollToSection(e, link.sectionId)}
                className="animate-blur-fade-up text-sm text-white/90 hover:text-gray-300 transition-colors"
                style={{ animationDelay: `${100 + i * 50}ms` }}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div ref={youtubeContainerRef} className="fixed -bottom-full -right-full h-px w-px overflow-hidden opacity-0" aria-hidden="true" />
            <button
              onClick={toggleAudio}
              disabled={!audioReady}
              className="animate-blur-fade-up hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white text-black transition-transform active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
              style={{ animationDelay: "375ms" }}
              aria-label={isPlaying ? "Pause Rahama (Live)" : "Play Rahama (Live)"}
            >
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Icon name="play" size={18} fill="#000" />}
            </button>
            <button className="liquid-glass animate-blur-fade-up hidden sm:flex items-center justify-center w-10 h-10 rounded-full overflow-hidden text-white transition-transform active:scale-95"
              style={{ animationDelay: "400ms" }} aria-label="Kaestrings">
              <img src="/biography/kaestrings-portrait.png" alt="" className="h-full w-full object-cover" draggable={false} />
            </button>
            <button onClick={() => setMenuOpen((o) => !o)}
              className="liquid-glass animate-blur-fade-up lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full text-white"
              style={{ animationDelay: "350ms" }} aria-label="Menu">
              <span className={`absolute transition-all duration-500 ease-out ${menuOpen ? "rotate-180 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"}`}>
                <Icon name="menu" size={18} />
              </span>
              <span className={`absolute transition-all duration-500 ease-out ${menuOpen ? "rotate-0 opacity-100 scale-100" : "rotate-180 opacity-0 scale-50"}`}>
                <Icon name="x" size={18} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`lg:hidden fixed left-0 right-0 top-[68px] z-40 mx-4 sm:mx-6 rounded-2xl bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl transition-all duration-500 ease-out ${
        menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col p-3">
          {EXPLORE_LINKS.map((link, i) => (
            <a key={link.sectionId} href={`#${link.sectionId}`} onClick={(e) => scrollToSection(e, link.sectionId)}
              className={`py-3 px-3 rounded-lg text-sm text-white/90 hover:bg-gray-800/50 transition-all duration-500 ease-out ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="sm:hidden flex items-center gap-3 p-3 border-t border-gray-800">
          <button className="liquid-glass flex-1 flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm text-white" aria-label="Profile">
            <Icon name="user" size={18} />
          </button>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[900px] flex flex-col overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        draggable={false}
        autoPlay loop muted playsInline preload="metadata"
        width={1920}
        height={1080}
        poster="https://res.cloudinary.com/rsuqakrp/image/upload/v1783507041/hero-poster_faqbgh.jpg"
        src="https://res.cloudinary.com/rsuqakrp/video/upload/v1783506976/hero-web_kbhgru.mp4"
      />
      <div className="bottom-blur absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />

      <div className="relative z-10 flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 pt-28">
        <div className="flex flex-col md:flex-row items-end gap-8">
          <div className="flex-1 w-full">
            <h1 className="animate-blur-fade-up text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4 md:mb-6"
              style={{ animationDelay: "400ms", letterSpacing: "-0.04em" }}>
              Rahama: Sounds of Mercy.
            </h1>
            <p className="animate-blur-fade-up text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl" style={{ animationDelay: "500ms" }}>
              Worship anthems born in prayer, carried across nations by mercy.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="https://open.spotify.com/artist/7eEP4TA1RioDH3OBKPcQEC?si=YKilQLlIQTK7N8mwLOzPVQ" target="_blank" rel="noopener noreferrer" className="animate-blur-fade-up flex items-center gap-2 rounded-full bg-white text-black font-medium px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-gray-200 transition-colors" style={{ animationDelay: "600ms" }}>
                <Icon name="spotify" size={18} />Listen on Spotify
              </a>
              <button className="liquid-glass animate-blur-fade-up rounded-full font-medium text-white px-6 sm:px-8 py-2.5 sm:py-3 transition-transform active:scale-95" style={{ animationDelay: "700ms" }}>
                Biography
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SONGS = [
  { title: "Rahama (Live)", type: "Album", year: "2026", url: "https://open.spotify.com/album/4kQttyy3r4QbpxPwL3ImZl", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02db597246fe771f1b9ed6151f" },
  { title: "Rahama - Live", type: "Track", year: "2026", url: "https://open.spotify.com/track/01N3aeicp3qq3ui4gYpYym", art: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02aa58a7bb79c19d92f43f02a7" },
  { title: "Tare (Live)", type: "Single", year: "2025", url: "https://open.spotify.com/track/4KtT8dN9QaCPNwxtJwhKmB", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02db597246fe771f1b9ed6151f" },
  { title: "Do A Work In Me - Live", type: "Single", year: "2025", url: "https://open.spotify.com/track/5ts4pT5MBeNDv4FxzkcOxc", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02857d5fda636d09beb969c971" },
  { title: "Desire - Live", type: "Single", year: "2025", url: "https://open.spotify.com/track/1yOW7Wm9TMN0O8bp4576gd", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e5eee306a1db958170d3d2c5" },
  { title: "Let It Show - Live", type: "Single", year: "2025", url: "https://open.spotify.com/track/6JDT1EgtZHi79bLmUJ0dI6", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024be74bba1521873b55850a3b" },
  { title: "He Is Enough", type: "Track", year: "", url: "https://open.spotify.com/track/4qEjiYIeD60K7dXcFYYkLS", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02595f3eadd636e0945d0b2f5a" },
  { title: "He Is Here - Live", type: "Track", year: "", url: "https://open.spotify.com/track/1XYRFkUAXqTkCaqWpvlVCi", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d867bec81518b6c9a6cdca00" },
  { title: "Walk On Water - Live", type: "Track", year: "", url: "https://open.spotify.com/track/7fZfxFBVBko3TfSSQvgFTX", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ac6df70105590a7dff84dedf" },
];

function Songs() {
  const rail = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: number) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : 260;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    // Arrows are the only way to move this rail: block wheel and touch/drag panning.
    const blockWheel = (e: WheelEvent) => { if (Math.abs(e.deltaX) > 0) e.preventDefault(); };
    const blockTouchMove = (e: TouchEvent) => e.preventDefault();
    el.addEventListener("wheel", blockWheel, { passive: false });
    el.addEventListener("touchmove", blockTouchMove, { passive: false });
    return () => {
      el.removeEventListener("wheel", blockWheel);
      el.removeEventListener("touchmove", blockTouchMove);
    };
  }, []);

  return (
    <section id="the-catalog" className="scroll-mt-24 px-4 sm:px-6 md:px-12 py-10 md:py-14 border-t border-white/5">
      <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
        <div>
          <Reveal as="div" className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
            <span className="inline-block w-6 h-px bg-white/30" />
            The Catalog
          </Reveal>
          <Reveal as="h2" delay={80} className="text-2xl sm:text-3xl md:text-4xl font-normal">
            <span style={{ letterSpacing: "-0.04em" }}>Songs From the Secret Place</span>
          </Reveal>
        </div>
        <Reveal as="div" delay={120} className="shrink-0 flex items-center gap-2">
          <button onClick={() => scrollBy(-1)} className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 transition-colors" aria-label="Scroll left"><Icon name="chevronLeft" size={18} /></button>
          <button onClick={() => scrollBy(1)} className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 transition-colors" aria-label="Scroll right"><Icon name="chevronRight" size={18} /></button>
        </Reveal>
      </div>
      <Reveal>
        <div ref={rail} className="rail flex gap-5 overflow-x-hidden pb-2 -mx-1 px-1">
          {SONGS.map((s) => (
            <a href={s.url} target="_blank" rel="noopener noreferrer" key={s.url} data-card
              className="group shrink-0 w-[calc((100%-20px)/2)] sm:w-[calc((100%-2*20px)/3)] md:w-[240px]">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <img src={s.art} alt={s.title} width={240} height={240} loading="lazy" draggable={false} className="no-drag w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="liquid-glass flex items-center justify-center w-14 h-14 rounded-full text-white">
                    <Icon name="play" size={22} fill="#fff" />
                  </div>
                </div>
              </div>
              <div className="mt-[10px]">
                <h3 className="text-sm sm:text-base font-medium text-white group-hover:text-gray-300 transition-colors truncate">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#99a1af]">{s.type}{s.year ? ` · ${s.year}` : ""}</p>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const BIO_LEAD = `Kingsley Innocent, known to the world as Kaestrings, is an annoited minister of God whose calling flows through song. He first captured hearts with the phenomenal "He is Here," widely chanted as "Ga Shi Nan," `;

const BIO_LINES = [
  "a sound that has crossed borders and drawn many into praise.",
  `Since then, he has continued to release music birthed from the secret place, songs like "Love," "Haske," and "Nasara,"`,
  "culminating in his debut album, Rahama, meaning mercy.",
  `His latest release, "Broken," has become an anthem of surrender for many.`,
  "Beyond the music, Kaestrings is a husband and father, serving faithfully within the Koinonia Eternity Network International under Apostle Joshua Selman,",
  "and remains devoted to blessing lives daily through worship.",
];

function Biography() {
  const scrubRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) { setProgress(1); return; }
    const el = scrubRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) { setProgress(1); return; }
      const p = (-rect.top) / total;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);

  // Each line lights up over an equal slice of the scroll progress, in order.
  const step = 1 / BIO_LINES.length;

  return (
    <section id="the-man" className="scroll-mt-24 border-t border-white/5 px-4 sm:px-6 md:px-12 py-10 md:py-14">
      <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
        <div>
          <Reveal as="div" className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
            <span className="inline-block w-6 h-px bg-white/30" />
            The man
          </Reveal>
          <Reveal as="h2" delay={80} className="text-2xl sm:text-3xl md:text-4xl font-normal">
            <span style={{ letterSpacing: "-0.04em" }}>Introducing Kaestrings</span>
          </Reveal>
        </div>
        <Reveal delay={120} className="shrink-0">
          <a href="#" className="hidden sm:flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            More <Icon name="arrowRight" size={16} />
          </a>
        </Reveal>
      </div>

      <div ref={scrubRef} className="md:h-[220vh]">
        <div className="md:sticky md:top-24 flex flex-col md:flex-row items-start gap-8 md:gap-10">
          <div className="relative w-full max-w-[413px] md:w-[413px] aspect-[413/484] shrink-0 rounded-[20px] border-2 border-[#373737] overflow-hidden bg-gradient-to-b from-[#252525] to-[#1f1f1f]">
            <img
              src="/biography/kaestrings-portrait.png"
              alt="Kaestrings"
              width={624}
              height={626}
              draggable={false}
              className="no-drag absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <p className="flex-1 font-['Lato',_sans-serif] font-semibold text-2xl sm:text-3xl md:text-[32px] leading-[1.35] md:leading-[48px]" style={{ letterSpacing: "-0.04em" }}>
            <span className="text-white">{BIO_LEAD}</span>
            {BIO_LINES.map((line, i) => {
              const lineProgress = Math.min(1, Math.max(0, (progress - i * step) / step));
              return (
                <span key={i} style={{ color: `rgb(${109 + (255 - 109) * lineProgress}, ${109 + (255 - 109) * lineProgress}, ${109 + (255 - 109) * lineProgress})` }}>
                  {" " + line}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}


const PLATFORM_LOGOS: { name: string; src: string; width: number; height: number }[] = [
  { name: "YouTube", src: "/platforms/youtube.svg", width: 188.13, height: 42 },
  { name: "Audiomack", src: "/platforms/audiomack.svg", width: 240.97, height: 32.86 },
  { name: "Spotify", src: "/platforms/spotify.png", width: 153, height: 41.91 },
  { name: "Apple Music", src: "/platforms/apple-music.svg", width: 174.3, height: 42 },
  { name: "Deezer", src: "/platforms/deezer.svg", width: 149.33, height: 42 },
  { name: "Boomplay", src: "/platforms/boomplay.svg", width: 202.2, height: 42 },
];

function DividerLine({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative h-[2px] w-16 sm:w-24 md:w-[160px] shrink-0 ${flip ? "-scale-x-100" : ""}`}>
      <div className="absolute inset-0 rounded-full bg-white/25" />
      <div className="absolute left-0 top-0 h-full w-3 rounded-full bg-[#c83fff] blur-[1px]" />
      <div className="absolute left-0 top-0 h-full w-3 rounded-full bg-white blur-[1px]" style={{ mixBlendMode: "plus-lighter" }} />
    </div>
  );
}

function Platforms() {
  const logos = [...PLATFORM_LOGOS, ...PLATFORM_LOGOS];
  return (
    <section className="py-8 md:py-10 overflow-hidden">
      <Reveal className="flex flex-col items-center gap-4 sm:gap-[18px]">
        <div className="flex items-center gap-3 sm:gap-5 md:gap-7 px-4">
          <DividerLine />
          <p className="shrink-0 text-center text-[13px] sm:text-[15px] font-normal text-white whitespace-nowrap" style={{ letterSpacing: "-0.6px" }}>
            Find Kaestrings on Your Platform
          </p>
          <DividerLine flip />
        </div>
        <div className="platforms-fade relative w-full">
          <div className="platforms-track flex w-max items-center gap-8 sm:gap-10 md:gap-[31px]">
            {logos.map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                draggable={false}
                className={`no-drag h-6 sm:h-8 md:h-[42px] w-auto shrink-0 object-contain ${logo.name === "YouTube" ? "-scale-y-100" : ""}`}
                style={{ aspectRatio: `${logo.width} / ${logo.height}` }}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const MOMENTS = [
  { title: "Fear of God (Live)", id: "AyvNaEQDn1M" },
  { title: "Let It Show (Live)", id: "3KW-yllyK60" },
  { title: "Desire (Live)", id: "ymmqGPugx2c" },
  { title: "Tare (Live)", id: "OxkQbbnCNrU" },
  { title: "Do A Work In Me (Live)", id: "JdwnjYWvfB4" },
  { title: "More (Live)", id: "mvd8GpkyW2o" },
];

function VideoThumb({ id, title }: { id: string; title: string }) {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);
  return (
    <img
      src={src}
      alt={title}
      width={480}
      height={360}
      loading="lazy"
      draggable={false}
      onError={() => setSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)}
      className="no-drag absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
    />
  );
}

function MomentsGrid() {
  return (
    <section id="the-visuals" className="scroll-mt-24 px-4 sm:px-6 md:px-12 py-10 md:py-14 border-t border-white/5">
      <SectionHead eyebrow="The Visuals" title="Moments Worth Watching" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MOMENTS.map((m, i) => (
          <Reveal key={m.id} delay={(i % 3) * 90}>
            <a href={`https://youtu.be/${m.id}`} target="_blank" rel="noopener noreferrer" className="group block relative">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/5">
                <VideoThumb id={m.id} title={m.title} />
                <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)" }} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between">
                <span className="text-base sm:text-lg font-medium">{m.title}</span>
                <span className="liquid-glass flex items-center justify-center w-9 h-9 rounded-full opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <Icon name="play" size={16} fill="#fff" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

type Lang = "hausa" | "english";
type LyricLine = { text: string; annotation?: string };
type Song = {
  id: string;
  tab: string;
  songName: string;
  subtitle?: string;
  art: string;
  lines: Record<Lang, LyricLine[]>;
  story: string;
};

const SONGS_LYRICS: Song[] = [
  {
    id: "ga-shi-nan",
    tab: "Ga Shi Nan",
    songName: "Ga Shi Nan",
    subtitle: "(he is here)",
    art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d867bec81518b6c9a6cdca00",
    lines: {
      hausa: [
        { text: "Ga shi nan, Ga shi nan", annotation: "Sung as a declaration, not a request. The moment worship shifts from asking to recognizing." },
        { text: "Allah na nan tare da mu", annotation: "The core confession of the song. Presence, not distance." },
        { text: "Ga shi nan cikin daukaka" },
      ],
      english: [
        { text: "He is here, He is here", annotation: "Sung as a declaration, not a request. The moment worship shifts from asking to recognizing." },
        { text: "God is here with us", annotation: "The core confession of the song. Presence, not distance." },
        { text: "He is here in glory" },
      ],
    },
    story: `Kaestrings' debut and defining song. "Ga Shi Nan" was born from a simple realization in prayer: that worship is not summoning God's presence, but recognizing it. That single declaration became a global chant, carrying the same weight in a Lagos auditorium as it does in a living room anywhere in the world.`,
  },
  {
    id: "haske",
    tab: "Haske",
    songName: "Haske",
    subtitle: "(light)",
    art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bb4b0737c4ec212f3567505a",
    lines: {
      hausa: [
        { text: "Haske ya zo duniya", annotation: "Light entering the world — the song opens with arrival, not searching." },
        { text: "Duhu ya wuce yanzu", annotation: "Darkness named and dismissed in the same breath it's mentioned." },
      ],
      english: [
        { text: "Light has come into the world", annotation: "Light entering the world — the song opens with arrival, not searching." },
        { text: "Darkness has now passed", annotation: "Darkness named and dismissed in the same breath it's mentioned." },
      ],
    },
    story: `"Haske" carries the image of light breaking into darkness, a picture Kaestrings returns to often in his writing. It's less a song about finding light and more a declaration that the light has already arrived — sung as present tense, not future hope.`,
  },
  {
    id: "nasara",
    tab: "Nasara",
    songName: "Nasara",
    subtitle: "(victory)",
    art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02db597246fe771f1b9ed6151f",
    lines: {
      hausa: [
        { text: "Nasara, Nasara ta tabbata", annotation: "\"Nasara\" means victory — sung as settled fact, not a plea for one." },
      ],
      english: [
        { text: "Victory, victory is secured", annotation: "\"Nasara\" means victory — sung as settled fact, not a plea for one." },
      ],
    },
    story: `"Nasara" means "Victory" in Hausa. Released as both an acoustic single and a staple of his live worship sets, the song treats victory as already won rather than something still being fought for — a shift from petition to praise that runs through much of Kaestrings' catalog.`,
  },
  {
    id: "yesu-mai-rahama",
    tab: "Yesu, Mai Rahama",
    songName: "Rahama (Acoustic/Live)",
    subtitle: "(jesus, the merciful one)",
    art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02aa58a7bb79c19d92f43f02a7",
    lines: {
      hausa: [
        { text: "Yesu, Mai Rahama", annotation: "Naming God by attribute rather than title — mercy as identity, not just action." },
        { text: "Ji addua ta", annotation: "A direct, personal plea, in contrast to the declarations elsewhere on the record." },
      ],
      english: [
        { text: "Jesus, the merciful one", annotation: "Naming God by attribute rather than title — mercy as identity, not just action." },
        { text: "Please hear my prayer", annotation: "A direct, personal plea, in contrast to the declarations elsewhere on the record." },
      ],
    },
    story: `Taken from the acoustic and live sets around Kaestrings' debut album Rahama, meaning mercy. "Yesu, Mai Rahama" is the record's most intimate moment, trading the anthem-scale declarations of songs like "Ga Shi Nan" for a quiet, personal prayer.`,
  },
  {
    id: "gyara-ni",
    tab: "Gyara Ni Ya Yesu Na",
    songName: "Broken",
    subtitle: "(please fix me, lord)",
    art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027d4dba9a5d700f4b0f4a0aac",
    lines: {
      hausa: [
        { text: "Gyara ni Ya Yesu na", annotation: "A prayer of surrender rather than repair on one's own terms." },
        { text: "In zama kamar da kai", annotation: "The goal isn't fixed, it's formed — becoming like Him, not just restored." },
      ],
      english: [
        { text: "Please fix me, Lord", annotation: "A prayer of surrender rather than repair on one's own terms." },
        { text: "That I may become more like you", annotation: "The goal isn't fixed, it's formed — becoming like Him, not just restored." },
      ],
    },
    story: `"Broken" sits with the honest admission that precedes surrender. Its central line, "Gyara Ni Ya Yesu Na," asks not to be patched up but reshaped — an anthem of surrender that has resonated with listeners who found in it language for their own unfinished seasons.`,
  },
  {
    id: "rayuwa-ta",
    tab: "Rayuwa ta na baka",
    songName: "Love (Me Na Yi Da Ka So Ni Haka)",
    subtitle: "(i offer my life)",
    art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029c17c75079af313890dc91de",
    lines: {
      hausa: [
        { text: "Rayuwa, Rayuwa ta na baka", annotation: "From the bridge — an offering repeated until it becomes a vow." },
        { text: "Sujada, sujada ta na baka", annotation: "Life and worship offered in the same breath, as one gift rather than two." },
      ],
      english: [
        { text: "I offer my life, I give you my life", annotation: "From the bridge — an offering repeated until it becomes a vow." },
        { text: "I offer my worship", annotation: "Life and worship offered in the same breath, as one gift rather than two." },
      ],
    },
    story: `From the bridge of "Love (Me Na Yi Da Ka So Ni Haka)," this refrain turns the song from a statement about being loved into a response of surrender. "Rayuwa ta na baka" is less a lyric than a repeated offering, building until the whole of one's life and worship are given over.`,
  },
  {
    id: "tare-da-yesu",
    tab: "Tare da Yesu",
    songName: "Tare (Live)",
    subtitle: "(together with jesus)",
    art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02db597246fe771f1b9ed6151f",
    lines: {
      hausa: [
        { text: "Taré", annotation: "\"Tare\" means Together — the whole song rests on this one word." },
        { text: "Taré da Yesu", annotation: "The chorus completes the thought: together, specifically, with Jesus." },
      ],
      english: [
        { text: "Together", annotation: "\"Tare\" means Together — the whole song rests on this one word." },
        { text: "Together with Jesus", annotation: "The chorus completes the thought: together, specifically, with Jesus." },
      ],
    },
    story: `"Tare" means "Together" — a word simple enough to become the entire chorus. Recorded live, the song leans on repetition and communal singing, the kind of chorus a room finishes without needing to be taught it first: together, together with Jesus.`,
  },
];

const SONG_ROWS = [SONGS_LYRICS.slice(0, 4), SONGS_LYRICS.slice(4, 7)];

function handleTabListKeyDown(
  e: React.KeyboardEvent,
  rows: number[][],
  activeIndex: number,
  setIndex: (i: number) => void
) {
  const flat = rows.flat();
  let rowIdx = 0, colIdx = 0;
  for (let r = 0; r < rows.length; r++) {
    const c = rows[r].indexOf(activeIndex);
    if (c !== -1) { rowIdx = r; colIdx = c; break; }
  }
  let next: number | null = null;
  if (e.key === "ArrowRight") next = flat[(flat.indexOf(activeIndex) + 1) % flat.length];
  else if (e.key === "ArrowLeft") next = flat[(flat.indexOf(activeIndex) - 1 + flat.length) % flat.length];
  else if (e.key === "ArrowDown") { const r = rows[(rowIdx + 1) % rows.length]; next = r[Math.min(colIdx, r.length - 1)]; }
  else if (e.key === "ArrowUp") { const r = rows[(rowIdx - 1 + rows.length) % rows.length]; next = r[Math.min(colIdx, r.length - 1)]; }
  else if (e.key === "Home") next = flat[0];
  else if (e.key === "End") next = flat[flat.length - 1];
  if (next === null) return;
  e.preventDefault();
  setIndex(next);
  const list = e.currentTarget as HTMLElement;
  const tabs = list.querySelectorAll<HTMLElement>("[role=tab]");
  tabs[flat.indexOf(next)]?.focus();
}

function handleToggleKeyDown(e: React.KeyboardEvent, count: number, activeIndex: number, setIndex: (i: number) => void) {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  e.preventDefault();
  const next = e.key === "ArrowRight" ? (activeIndex + 1) % count : (activeIndex - 1 + count) % count;
  setIndex(next);
  const list = e.currentTarget as HTMLElement;
  const tabs = list.querySelectorAll<HTMLElement>("[role=tab]");
  tabs[next]?.focus();
}

function Translation() {
  const [activeSong, setActiveSong] = useState(0);
  const [lang, setLang] = useState<Lang>("hausa");
  const song = SONGS_LYRICS[activeSong];
  const lines = song.lines[lang];
  const langIndex = lang === "hausa" ? 0 : 1;

  return (
    <section id="the-translation" className="scroll-mt-24 px-4 sm:px-6 md:px-12 py-10 md:py-14 border-t border-white/5">
      <SectionHead eyebrow="The Translation" title="Behind The Meaning of the Lyrics" />

      <div className="bg-[#141414] rounded-3xl p-1 border-[5px] border-[rgba(61,61,61,0.5)] shadow-[0_2px_4px_rgba(108,113,128,0.08),0_7px_7px_rgba(108,113,128,0.07),0_17px_10px_rgba(108,113,128,0.04),0_29px_12px_rgba(108,113,128,0.01)]">
        <div className="relative rounded-[20px] flex flex-col lg:flex-row">
          <div className="flex-1 min-w-0 flex flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:pl-6 lg:pr-4 lg:pt-8 lg:pb-4 order-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div
                role="tablist"
                aria-label="Song"
                className="flex flex-col rounded-xl overflow-hidden w-full sm:w-auto"
                onKeyDown={(e) => {
                  const rows = SONG_ROWS.map((row) => row.map((s) => SONGS_LYRICS.indexOf(s)));
                  handleTabListKeyDown(e, rows, activeSong, setActiveSong);
                }}
              >
                {SONG_ROWS.map((row, rowI) => (
                  <div key={rowI} className="flex flex-wrap lg:flex-nowrap items-center bg-[#242424] p-0.5">
                    {row.map((s) => {
                      const i = SONGS_LYRICS.indexOf(s);
                      const isActive = i === activeSong;
                      return (
                        <button
                          key={s.id}
                          role="tab"
                          aria-selected={isActive}
                          aria-controls="lyric-panel"
                          tabIndex={isActive ? 0 : -1}
                          onClick={() => setActiveSong(i)}
                          className={`min-h-[44px] lg:min-h-[40px] px-4 sm:px-5 rounded-[10px] text-sm sm:text-[18px] font-medium leading-[28px] whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
                            isActive ? "bg-black text-white" : "text-[#b0b0b0] hover:text-white"
                          }`}
                        >
                          {s.tab}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div
                role="tablist"
                aria-label="Language"
                className="inline-flex rounded-xl bg-[#242424] p-0.5 shrink-0"
                onKeyDown={(e) => handleToggleKeyDown(e, 2, langIndex, (i) => setLang(i === 0 ? "hausa" : "english"))}
              >
                {(["hausa", "english"] as const).map((l) => {
                  const isActive = lang === l;
                  return (
                    <button
                      key={l}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="lyric-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setLang(l)}
                      className={`min-h-[44px] lg:min-h-[40px] px-5 rounded-[10px] text-sm sm:text-[18px] font-medium leading-[28px] capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
                        isActive ? "bg-black text-white" : "text-[#b0b0b0] hover:text-white"
                      }`}
                    >
                      {l}
                    </button>
                  );
                })}
              </div>
            </div>

            <div id="lyric-panel" role="tabpanel" aria-live="polite" className="flex flex-col gap-6">
              <div className="flex items-end gap-2 flex-wrap">
                <h3 className="text-3xl sm:text-4xl font-semibold text-white" style={{ letterSpacing: "-0.06em" }}>{song.songName}</h3>
                {song.subtitle && <span className="text-base sm:text-xl text-[#b0b0b0] uppercase leading-[1.7]">{song.subtitle}</span>}
              </div>

              <div className="flex flex-col gap-[18px]">
                {lines.map((line, i) => (
                  <div key={i} className="flex flex-col gap-[18px]">
                    <p className="text-lg sm:text-xl font-medium text-white" style={{ letterSpacing: "-0.03em" }}>{line.text}</p>
                    {line.annotation && (
                      <div className="flex items-start gap-[23px] pr-4">
                        <span className="w-[3px] self-stretch rounded-full bg-white/20 shrink-0" aria-hidden="true" />
                        <p className="text-base sm:text-lg font-medium text-[#b0b0b0]" style={{ letterSpacing: "-0.03em" }}>{line.annotation}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-[23px] pr-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-6 h-px bg-white" />
                  <span className="text-xs uppercase tracking-[0.25em] text-white">The story behind it</span>
                </div>
                <p className="text-base sm:text-lg font-medium text-[#b0b0b0]" style={{ letterSpacing: "-0.03em" }}>{song.story}</p>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[420px] xl:w-[480px] shrink-0 order-2 p-2 lg:p-2">
            <img
              src={song.art}
              alt={song.songName}
              width={568}
              height={427}
              draggable={false}
              className="no-drag w-full h-48 sm:h-64 lg:h-full object-cover rounded-2xl lg:rounded-tl-2xl lg:rounded-bl-none lg:rounded-tr-2xl lg:rounded-br-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-2 bottom-2 h-48 lg:h-64 rounded-b-2xl lg:rounded-bl-none lg:rounded-br-2xl pointer-events-none"
              style={{ background: "linear-gradient(to bottom, rgba(20,20,20,0) 0%, #141414 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const isValid = contact.trim().length > 0 && message.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    // TODO: wire up real submission (email service / API endpoint) once backend is decided.
    console.log("Contact form submitted:", { contact, message });
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setContact("");
      setMessage("");
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 md:px-12 py-10 md:py-14 border-t border-white/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[400px] sm:max-w-[500px] lg:max-w-[596px] aspect-square"
        style={{ backgroundImage: "url(/contact/guitar-doodle.svg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}
      />

      <div className="relative mx-auto flex max-w-[768px] flex-col items-center gap-5">
        <Reveal as="h2" className="text-3xl sm:text-5xl md:text-[60px] font-normal text-white text-center">
          <span style={{ letterSpacing: "-2.4px", lineHeight: "1" }}>Connect With Kaestrings</span>
        </Reveal>
        <Reveal as="p" delay={80} className="max-w-[576px] text-base sm:text-lg text-[#99a1af] text-center">
          <span style={{ lineHeight: "28px" }}>For bookings, ministration invites, or just to say the music blessed you.</span>
        </Reveal>

        <Reveal delay={140} className="w-full">
          <form onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-5">
            <div className="w-full max-w-[588px]">
              <label htmlFor="contact-field" className="sr-only">Your Email / Phone number</label>
              <div className="rounded-2xl border border-[rgba(61,61,61,0.5)] bg-[#141414] px-[30px] py-[15px]">
                <input
                  id="contact-field"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Your Email / Phone number"
                  className="w-full bg-transparent text-lg text-white placeholder:text-[#99a1af] focus:outline-none"
                  style={{ lineHeight: "28px" }}
                />
              </div>
            </div>

            <div className="w-full max-w-[588px]">
              <label htmlFor="contact-message" className="sr-only">Tell us what's on your heart</label>
              <div className="rounded-2xl border border-[rgba(61,61,61,0.5)] bg-[#141414] px-[30px] py-[15px]">
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your heart..."
                  rows={3}
                  className="w-full resize-none bg-transparent text-lg text-white placeholder:text-[#99a1af] focus:outline-none"
                  style={{ lineHeight: "28px" }}
                />
              </div>
            </div>

            <Button type="submit" disabled={!isValid} className="mt-1">
              {status === "sent" ? "Message Sent" : "Send Message"}
            </Button>

            {status === "sent" && (
              <p role="status" className="text-sm text-[#99a1af] text-center">
                Thank you — your message has been received.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://www.instagram.com/kaestrings/?hl=en" },
  { label: "TikTok", href: "https://www.tiktok.com/@officialkaestrings" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCRcFzNorSvQQ9wckhicB5cg" },
  { label: "Facebook", href: "https://www.facebook.com/Kaestrings/" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const reducedMotion = useReducedMotion();

  const isValidEmail = EMAIL_RE.test(email.trim());

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    // TODO: wire up real newsletter/email service integration once one is chosen.
    console.log("Newsletter subscribe:", { email });
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-4 sm:px-6 md:px-12 pt-16 pb-10">
      <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14 lg:gap-8">
        <div className="flex max-w-[384px] flex-col items-start gap-4">
          <span className="text-xl font-semibold text-white" style={{ letterSpacing: "4px" }}>KAESTRINGS</span>

          <form onSubmit={handleSubscribe} className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address.."
                className="h-12 w-[240px] rounded-xl border border-[#3d3d3d] bg-[rgba(61,61,61,0.2)] px-5 text-sm text-white placeholder:text-[#888] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              />
              <Button type="submit" disabled={!isValidEmail} className="px-4 py-3 text-sm shadow-[inset_0_0_16px_0_rgba(255,255,255,0.4)]">
                {subscribed ? "Subscribed" : "Subscribe"}
              </Button>
            </div>
            <p className="w-[237px] text-sm text-[#b0b0b0]" role={subscribed ? "status" : undefined}>
              {subscribed ? "Thanks — you're on the list." : "No weekly emails. Just thoughtful updates, when they matter."}
            </p>
          </form>

          <p className="text-sm text-[#b0b0b0]">© {new Date().getFullYear()} Kaestrings. All rights reserved.</p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-xs uppercase tracking-[2.4px] text-white/40">Explore</h4>
            <ul className="flex flex-col items-start gap-3">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.sectionId}>
                  <a
                    href={`#${l.sectionId}`}
                    onClick={(e) => scrollToSection(e, l.sectionId)}
                    className="text-sm text-[#d1d5dc] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h4 className="text-xs uppercase tracking-[2.4px] text-white/40">Social media</h4>
            <ul className="flex flex-col items-start gap-3">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#d1d5dc] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative w-full overflow-x-clip bg-black text-white">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen as any} />
      <Hero />
      <Platforms />
      <Songs />
      <Biography />
      <MomentsGrid />
      <Translation />
      <Contact />
      <Footer />
    </div>
  );
}
