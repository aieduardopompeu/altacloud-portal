export {};

declare global {
  interface Window {
    adsbygoogle?: any[];
    __adsensePushedKeys?: Set<string>;
  }
}
