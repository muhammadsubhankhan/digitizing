# Custom Patch House — Logo Files Guide

## Files included

| File | Size | Use case |
|------|------|----------|
| `logo.svg` | Scalable | Navbar, Footer, anywhere |
| `CustomPatchHouseLogo.jsx` | React Component | Next.js / React apps |
| `favicon-16x16.png` | 16×16 | Browser tab favicon |
| `favicon-32x32.png` | 32×32 | Browser tab favicon (HiDPI) |
| `logo-48x48.png` | 48×48 | Navbar fallback (w-12 h-12) |
| `apple-touch-icon.png` | 180×180 | iOS home screen icon |
| `logo-192x192.png` | 192×192 | Android PWA icon |
| `logo-512x512.png` | 512×512 | PWA splash screen |
| `og-image-1200x630.png` | 1200×630 | Open Graph / Social preview |

---

## Next.js Setup

### 1. Navbar — React Component (recommended)
```jsx
// app/components/Navbar.jsx
import Logo from '@/components/CustomPatchHouseLogo'

export default function Navbar() {
  return (
    <nav>
      <Logo size={48} className="w-12 h-12" />
      {/* or with next/link */}
      <Link href="/"><Logo size={48} /></Link>
    </nav>
  )
}
```

### 2. Navbar — using SVG file with next/image
```jsx
import Image from 'next/image'

<Image src="/logo.svg" width={48} height={48} alt="Custom Patch House" />
```
Place `logo.svg` in `/public/` folder.

### 3. Favicon — app/layout.jsx (Next.js 13+)
```jsx
// app/layout.jsx
export const metadata = {
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}
```
Place PNG files in `/public/` folder.

### 4. Open Graph Image
```jsx
// app/layout.jsx
export const metadata = {
  openGraph: {
    images: [{ url: '/og-image-1200x630.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image-1200x630.png'],
  },
}
```

### 5. PWA Icons — public/manifest.json
```json
{
  "name": "Custom Patch House",
  "icons": [
    { "src": "/logo-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/logo-512x512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## Quick copy: all files go in `/public/` folder
```
public/
  logo.svg
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png
  logo-192x192.png
  logo-512x512.png
  og-image-1200x630.png

components/
  CustomPatchHouseLogo.jsx
```
