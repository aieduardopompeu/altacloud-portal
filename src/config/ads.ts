// src/config/ads.ts

// Todas as posições mapeadas onde o <AdsBanner /> pode aparecer
export type AdPosition =
  | "home_top"
  | "home_between_tracks"
  | "home_bottom"
  | "track_top"      // topo da trilha (DevOps, etc.)
  | "track_middle"   // meio da trilha
  | "track_bottom"   // final da trilha
  | "trail_inline"
  | "directory_top"
  | "directory_aws_after"
  | "directory_middle"
  | "bottom_sticky"
  | "article_top";

type AdConfig = {
  slot: string;
  enabled: boolean;
};

// Mapeamento posição -> slot do AdSense (ou outro ad provider)
export const adsConfig: Record<AdPosition, AdConfig> = {
  // Home – logo abaixo do hero
  home_top: {
    slot: "6664851396",
    enabled: true,
  },

  // Home – entre o destaque de profissionais e a sessão de trilhas
  home_between_tracks: {
    slot: "6664851396",
    enabled: true,
  },

  // Home – rodapé da página
  home_bottom: {
    slot: "6664851396",
    enabled: true,
  },

  // Topo de trilhas específicas (ex: DevOps)
  track_top: {
    slot: "7666231438",
    enabled: true,
  },

  // Meio de trilhas específicas (ex: DevOps)
  track_middle: {
    slot: "7666231438",
    enabled: true,
  },

  // Final de trilhas específicas (ex: DevOps)
  track_bottom: {
    slot: "7666231438",
    enabled: true,
  },

  // Trilhas IAM/S3/EC2/VPC – anúncio dentro do conteúdo
  trail_inline: {
    slot: "7666231438",
    enabled: true,
  },

  // Diretório de profissionais – topo da página
  directory_top: {
    slot: "6664851396",
    enabled: true,
  },

  // Diretório – depois da seção AWS
  directory_aws_after: {
    slot: "9227543350",
    enabled: true,
  },

  // Diretório – mais para o meio (entre seções)
  directory_middle: {
    slot: "76666231438",
    enabled: true,
  },

  // Banner fixo no rodapé (BottomStickyAd)
  bottom_sticky: {
    slot: "9227543350",
    enabled: true,
  },

  // Topo dos artigos
  article_top: {
    slot: "ARTIGO_TOPO",
    enabled: true,
  },
};
