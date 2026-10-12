import type { IconName } from "@/content/site";

/** Inline SVG icons — no icon library needed (Blogger-friendly). */
const paths: Record<IconName, string> = {
  agent: "M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4zM9 13h.01M15 13h.01M9 17h6",
  process: "M4 6h6v6H4zM14 12h6v6h-6zM10 9h4v6",
  rag: "M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM14 3v5h5M8 13h8M8 17h5",
  support: "M4 12a8 8 0 1 1 16 0v4a2 2 0 0 1-2 2h-2v-6h4M4 12v4a2 2 0 0 0 2 2h2v-6H4",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  flow: "M5 5h4v4H5zM15 15h4v4h-4zM15 5h4v4h-4zM9 7h6M17 9v6M7 9v8h8",
  chat: "M4 5h16v10H8l-4 4z",
  send: "M3 11l18-8-8 18-2-8z",
  saas: "M3 4h18v12H3zM8 20h8M12 16v4",
};

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
