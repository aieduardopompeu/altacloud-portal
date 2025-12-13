// src/config/ads.ts

// Todas as posições válidas de anúncio no site
export type AdPosition =
  | "directory_top"
  | "directory_middle"
  | "directory_aws_after"
  | "home_between_sections"
  | "home_tracks_bottom"
  | "home_hero"
  | "track_top"
  | "track_middle"
  | "track_bottom"
  | "article_middle"
  | "article_top"
  | "inscricao_top"
  | "inscricao_bottom"
  | "bottom_sticky";

type AdConfig = {
  enabled: boolean;
  adSlot: string;
  format?: "auto" | "in-article" | "autorelaxed";
  fullWidthResponsive?: boolean;
};

// Configuração central de todos os slots
export const adsConfig: Record<AdPosition, AdConfig> = {
  /* ====== DIRETÓRIO DE PROFISSIONAIS ====== */
  directory_top: {
    enabled: true,
    adSlot: "6664851396", // use aqui o slot real que você já usa
    format: "auto",
    fullWidthResponsive: true,
  },
  directory_middle: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },
  directory_aws_after: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },

  /* ====== HOME ====== */
  home_between_sections: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },
  home_tracks_bottom: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },
  home_hero: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },

  /* ====== TRILHAS ====== */
  track_top: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },
  track_middle: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },
  track_bottom: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },

  /* ====== ARTIGOS ====== */
  article_middle: {
    enabled: true,
    adSlot: "6664851396",
    format: "in-article",
    fullWidthResponsive: true,
  },

    article_top: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },

  /* ====== INSCRIÇÃO DE PROFISSIONAIS ====== */
  inscricao_top: {
    enabled: true,
    adSlot: "6664851396", // pode ser o mesmo slot das outras posições
    format: "auto",
    fullWidthResponsive: true,
  },
  inscricao_bottom: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },

    bottom_sticky: {
    enabled: true,
    adSlot: "6664851396",
    format: "auto",
    fullWidthResponsive: true,
  },
};
