// src/config/ads.ts

// Todas as posições válidas de anúncio no site
export type AdPosition =
  | "directory_top"
  | "directory_middle"
  | "directory_aws_after"
  | "home_between_sections"
  | "home_tracks_bottom"
  | "track_middle"
  | "track_bottom"
  | "article_middle"
  | "inscricao_top"
  | "inscricao_bottom";

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
    adSlot: "6684581396", // use aqui o slot real que você já usa
    format: "auto",
    fullWidthResponsive: true,
  },
  directory_middle: {
    enabled: true,
    adSlot: "6684581396",
    format: "auto",
    fullWidthResponsive: true,
  },
  directory_aws_after: {
    enabled: true,
    adSlot: "6684581396",
    format: "auto",
    fullWidthResponsive: true,
  },

  /* ====== HOME ====== */
  home_between_sections: {
    enabled: true,
    adSlot: "6684581396",
    format: "auto",
    fullWidthResponsive: true,
  },
  home_tracks_bottom: {
    enabled: true,
    adSlot: "6684581396",
    format: "auto",
    fullWidthResponsive: true,
  },

  /* ====== TRILHAS ====== */
  track_middle: {
    enabled: true,
    adSlot: "6684581396",
    format: "auto",
    fullWidthResponsive: true,
  },
  track_bottom: {
    enabled: true,
    adSlot: "6684581396",
    format: "auto",
    fullWidthResponsive: true,
  },

  /* ====== ARTIGOS ====== */
  article_middle: {
    enabled: true,
    adSlot: "6684581396",
    format: "in-article",
    fullWidthResponsive: true,
  },

  /* ====== INSCRIÇÃO DE PROFISSIONAIS ====== */
  inscricao_top: {
    enabled: true,
    adSlot: "6684581396", // pode ser o mesmo slot das outras posições
    format: "auto",
    fullWidthResponsive: true,
  },
  inscricao_bottom: {
    enabled: true,
    adSlot: "6684581396",
    format: "auto",
    fullWidthResponsive: true,
  },
};
