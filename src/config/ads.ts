// src/config/ads.ts

export type AdPosition =
  | "home_top"
  | "home_between_tracks" // 👈 nome usado na home
  | "home_bottom"
  | "directory_top"
  | "directory_aws_after"
  | "directory_middle"
  | "track_top"
  | "track_middle"
  | "track_bottom"
  | "article_top"
  | "article_middle"
  | "article_bottom"
  | "bottom_sticky";

type AdSlotConfig = {
  client: string;
  slot: string;
  format?: "auto" | "autorelaxed" | "fluid";
  layout?: "in-article";
  fullWidthResponsive?: boolean;
  enabled?: boolean;
  styleDisplay?: "block" | "inline-block";
  debugLabel?: string;
};

const ADSENSE_CLIENT = "ca-pub-4436420746304287";

export const adsConfig: Record<AdPosition, AdSlotConfig> = {
  // ================= HOME =================

  home_top: {
    client: ADSENSE_CLIENT,
    slot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Home – topo",
  },

  home_between_tracks: {
    client: ADSENSE_CLIENT,
    slot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Home – entre diretório e trilhas",
  },

  home_bottom: {
    client: ADSENSE_CLIENT,
    slot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Home – rodapé",
  },

  // ============== DIRETÓRIO ==============

  directory_top: {
    client: ADSENSE_CLIENT,
    slot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Diretório – topo",
  },

  directory_aws_after: {
    client: ADSENSE_CLIENT,
    slot: "9227543350",
    format: "autorelaxed",
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Diretório – depois de AWS",
  },

  directory_middle: {
    client: ADSENSE_CLIENT,
    slot: "9227543350",
    format: "autorelaxed",
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Diretório – meio",
  },

  // ============== TRILHAS / MÓDULOS ==============

  track_top: {
    client: ADSENSE_CLIENT,
    slot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Trilha – topo",
  },

  track_middle: {
    client: ADSENSE_CLIENT,
    slot: "7666231438",
    format: "fluid",
    layout: "in-article",
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Trilha – meio (in-article)",
  },

  track_bottom: {
    client: ADSENSE_CLIENT,
    slot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Trilha – rodapé",
  },

  // ============== ARTIGOS ==============

  article_top: {
    client: ADSENSE_CLIENT,
    slot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Artigo – topo",
  },

  article_middle: {
    client: ADSENSE_CLIENT,
    slot: "7666231438",
    format: "fluid",
    layout: "in-article",
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Artigo – meio (in-article)",
  },

  article_bottom: {
    client: ADSENSE_CLIENT,
    slot: "9227543350",
    format: "autorelaxed",
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Artigo – final (lista relaxada)",
  },

  // ============== STICKY INFERIOR ==============

  bottom_sticky: {
    client: ADSENSE_CLIENT,
    slot: "9227543350",
    format: "autorelaxed",
    enabled: true,
    styleDisplay: "block",
    debugLabel: "Sticky inferior (mobile/desktop)",
  },
};
