export function setCamScale(k: any) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1));
  } else {
    k.camScale(k.vec2(1));
  }
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  return lang || 'en';
}