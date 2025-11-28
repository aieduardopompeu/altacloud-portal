param(
    [Parameter(Mandatory = $true)]
    [string]$Title,

    [Parameter(Mandatory = $true)]
    [string]$Category,  # Ex: AWS, Azure, GCP, DevOps, Fundamentos

    [Parameter(Mandatory = $true)]
    [ValidateSet("aws", "azure", "gcp", "devops", "fundamentos", "geral")]
    [string]$Track,     # Ex: aws | azure | gcp | devops | fundamentos | geral

    [Parameter(Mandatory = $true)]
    [string]$Description,

    [Parameter(Mandatory = $true)]
    [string]$Reading    # Ex: "8 min"
)

function New-Slug {
    param([string]$Text)

    $normalized = $Text.ToLowerInvariant().Normalize([Text.NormalizationForm]::FormD)
    $sb = New-Object System.Text.StringBuilder

    foreach ($ch in $normalized.ToCharArray()) {
        $code = [int][char]$ch

        # a-z ou 0-9
        if (($code -ge 97 -and $code -le 122) -or ($code -ge 48 -and $code -le 57)) {
            [void]$sb.Append($ch)
        }
        elseif ($ch -eq ' ' -or $ch -eq '-' -or $ch -eq '_') {
            [void]$sb.Append('-')
        }
        # ignora acentos e caracteres estranhos
    }

    $slug = $sb.ToString()
    $slug = $slug -replace '-+', '-'
    $slug = $slug.Trim('-')
    return $slug
}

$Slug = New-Slug $Title

# Datas
$TodayISO = Get-Date -Format "yyyy-MM-dd"

# Caminhos baseando no local do script
$RootPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$AppPath = Join-Path $RootPath "src\app"
$ArticlesRouteDir = Join-Path $AppPath ("artigos\" + $Slug)

if (Test-Path $ArticlesRouteDir) {
    Write-Error "Já existe uma rota em src/app/artigos/$Slug"
    exit 1
}

New-Item -ItemType Directory -Path $ArticlesRouteDir -Force | Out-Null
$PagePath = Join-Path $ArticlesRouteDir "page.tsx"

# Template da página do artigo com SEO + JSON-LD
$PageContent = @"
import type { Metadata } from "next";
import Script from "next/script";
import { ArticleLayout } from "../../../components/layout/ArticleLayout";
import { siteConfig, buildCanonical } from "../../../lib/seo";

const slug = "$Slug";
const title = "$Title";
const description = "$Description";
const datePublished = "$TodayISO";
const url = buildCanonical("/artigos/$Slug");

export const metadata: Metadata = {
  title: title + " · " + siteConfig.name,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: title + " · " + siteConfig.name,
    description,
    url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: "article",
  },
};

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.url + "/logo.png",
      },
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artigos",
        item: buildCanonical("/artigos"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <ArticleLayout
        category="$Category"
        title={title}
        description={description}
        readingTime="$Reading"
      >
        <p className="text-slate-300">
          {/* TODO: escreva o conteúdo do artigo "$Title" aqui. */}
        </p>
      </ArticleLayout>
    </>
  );
}
"@

$PageContent | Set-Content -Path $PagePath -Encoding UTF8

# Atualizar src/data/articles.ts
$DataFile = Join-Path $RootPath "src\data\articles.ts"

if (-not (Test-Path $DataFile)) {
    Write-Error "Não encontrei src/data/articles.ts para atualizar a lista de artigos."
    exit 1
}

$Content = Get-Content $DataFile -Raw

$NewBlock = @"

  {
    slug: "$Slug",
    title: "$Title",
    description: "$Description",
    category: "$Category",
    track: "$Track",
    readingTime: "$Reading",
    date: "$TodayISO",
  },
"@

if ($Content -match "\]\s*;\s*$") {
    $Content = $Content -replace "\]\s*;\s*$", "$NewBlock];"
    $Content | Set-Content -Path $DataFile -Encoding UTF8
} else {
    Write-Warning "Não consegui encontrar o final do array em src/data/articles.ts. Atualize manualmente esse arquivo."
}

Write-Host ""
Write-Host "Artigo criado com sucesso!" -ForegroundColor Green
Write-Host "Slug: $Slug" -ForegroundColor Cyan
Write-Host "Rota: /artigos/$Slug" -ForegroundColor Cyan
Write-Host "Arquivo: $PagePath" -ForegroundColor Cyan
