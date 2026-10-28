export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-Q9X7Q3VQ7B";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Log custom GA4 event
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// Track when a user launches/plays a game
export function trackGamePlay(gameId: string, gameName: string, source: string = "direct") {
  trackEvent("play_game", {
    game_id: gameId,
    game_name: gameName,
    source: source,
    timestamp: new Date().toISOString(),
  });
}

// Track when a user explores culture information of a game
export function trackCultureView(gameId: string, gameName: string, source: string = "direct") {
  trackEvent("view_culture", {
    game_id: gameId,
    game_name: gameName,
    source: source,
    timestamp: new Date().toISOString(),
  });
}

// Track section exploration in the portal
export function trackPortalSection(sectionId: string) {
  trackEvent("explore_portal_section", {
    section_id: sectionId,
  });
}
