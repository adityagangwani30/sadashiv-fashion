const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.NODE_ENV === 'production' ? '/sadashiv-fashions' : '');

export default function imageLoader({ src }: { src: string; width?: number; quality?: number }) {
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src;
  }
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  if (basePath && cleanSrc.startsWith(basePath)) {
    return cleanSrc;
  }
  return `${basePath}${cleanSrc}`;
}
