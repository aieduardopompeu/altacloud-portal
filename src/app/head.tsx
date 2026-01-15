// src/app/head.tsx
// Head "clássico" (App Router) para garantir que o AdSense carregue no <head>
export default function Head() {
  const ADSENSE_ID = "ca-pub-4436420746304287";

  return (
    <>
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        crossOrigin="anonymous"
      />
    </>
  );
}
