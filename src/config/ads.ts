// src/config/ads.ts

// Slots reais do AdSense (se quiser mudar depois, é aqui)
const SLOT_FEED_AUTORELAXED = "9227543350"; // auto-relaxed
const SLOT_IN_ARTICLE = "7666231438";       // in-article / fluid
const SLOT_DISPLAY_AUTO = "6664851396";     // display topo / auto responsivo

export type AdFormat = "auto" | "in-article" | "autorelaxed";

// Todos os positions que o projeto usa hoje
export type AdPosition =
  | "home_top"
  | "home_hero"
  | "home_directory"
  | "home_between_sections"
  | "home_tracks_bottom"
  | "directory_top"
  | "directory_aws_after"
  | "directory_middle"
  | "track_top"
  | "track_middle"
  | "track_bottom"
  | "article_top"
  | "article_middle"
  | "bottom_sticky";

export interface AdConfigItem {
  adSlot: string;
  format: AdFormat;
  enabled: boolean;
  /**
   * Se `false`, não adiciona data-full-width-responsive="true"
   * nos formatos "auto". Se undefined, considera como true.
   */
  fullWidthResponsive?: boolean;
}

// Mapa central de todos os blocos
export const adsConfig: Record<AdPosition, AdConfigItem> = {
  // ===== HOME =====
  home_top: {
    adSlot: SLOT_DISPLAY_AUTO,
    format: "auto",
    enabled: true,
  },
  home_hero: {
    adSlot: SLOT_DISPLAY_AUTO,
    format: "auto",
    enabled: true,
  },
  home_directory: {
    adSlot: SLOT_IN_ARTICLE,
    format: "in-article",
    enabled: true,
  },
  home_between_sections: {
    adSlot: SLOT_IN_ARTICLE,
    format: "in-article",
    enabled: true,
  },
  home_tracks_bottom: {
    adSlot: SLOT_FEED_AUTORELAXED,
    format: "autorelaxed",
    enabled: true,
  },

  // ===== DIRETÓRIO DE PROFISSIONAIS =====
  directory_top: {
    adSlot: SLOT_DISPLAY_AUTO,
    format: "auto",
    enabled: true,
  },
  directory_aws_after: {
    adSlot: SLOT_IN_ARTICLE,
    format: "in-article",
    enabled: true,
  },
  directory_middle: {
    adSlot: SLOT_FEED_AUTORELAXED,
    format: "autorelaxed",
    enabled: true,
  },

  // ===== TRILHAS (Fundamentos, IAM, S3, EC2, VPC, DevOps) =====
  track_top: {
    adSlot: SLOT_DISPLAY_AUTO,
    format: "auto",
    enabled: true,
  },
  track_middle: {
    adSlot: SLOT_IN_ARTICLE,
    format: "in-article",
    enabled: true,
  },
  track_bottom: {
    adSlot: SLOT_FEED_AUTORELAXED,
    format: "autorelaxed",
    enabled: true,
  },

  // ===== ARTIGOS =====
  article_top: {
    adSlot: SLOT_IN_ARTICLE,
    format: "in-article",
    enabled: true,
  },
  article_middle: {
    adSlot: SLOT_FEED_AUTORELAXED,
    format: "autorelaxed",
    enabled: true,
  },

  // ===== STICKY BOTTOM (MOBILE) =====
  bottom_sticky: {
    adSlot: SLOT_DISPLAY_AUTO,
    format: "auto",
    enabled: true,
  },
};
