// CustomPatchHouseLogo.jsx
// Usage:
//   import Logo from '@/components/CustomPatchHouseLogo'
//
//   <Logo />                        // default 48x48 (Navbar w-12 h-12)
//   <Logo size={32} />              // favicon fallback
//   <Logo size={180} />             // large
//   <Logo className="w-12 h-12" />  // Tailwind class override

export default function CustomPatchHouseLogo({ size = 48, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={className}
      aria-label="Custom Patch House Logo"
      role="img"
      {...props}
    >
      {/* Outer navy circle */}
      <circle cx="200" cy="200" r="196" fill="#1d3557" />

      {/* Gold dashed stitching ring */}
      <circle
        cx="200" cy="200" r="183"
        fill="none"
        stroke="#f4a261"
        strokeWidth="2.5"
        strokeDasharray="7 5"
      />

      {/* Inner navy fill */}
      <circle cx="200" cy="200" r="173" fill="#1d3557" />

      {/* Clip mask for red band */}
      <defs>
        <clipPath id="badge-clip">
          <circle cx="200" cy="200" r="173" />
        </clipPath>
      </defs>

      {/* Red center banner */}
      <rect
        x="27" y="162" width="346" height="76"
        fill="#e63946"
        clipPath="url(#badge-clip)"
      />

      {/* Gold framing lines */}
      <line x1="30"  y1="160" x2="370" y2="160" stroke="#f4a261" strokeWidth="1.5" />
      <line x1="30"  y1="240" x2="370" y2="240" stroke="#f4a261" strokeWidth="1.5" />

      {/* Top: CUSTOM text */}
      <text
        x="200" y="128"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="22"
        fontWeight="bold"
        fill="#f4a261"
        textAnchor="middle"
        letterSpacing="7"
      >
        CUSTOM
      </text>

      {/* Needle icon */}
      <line x1="168" y1="100" x2="184" y2="118" stroke="#f4a261" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse
        cx="169" cy="101" rx="4" ry="2.5"
        fill="none" stroke="#f4a261" strokeWidth="1.5"
        transform="rotate(-45,169,101)"
      />
      <path
        d="M184,118 Q192,130 178,140 Q168,148 174,158"
        fill="none" stroke="#f4a261" strokeWidth="1.5" strokeLinecap="round"
      />

      {/* Stars */}
      <text x="108" y="115" fontFamily="Georgia,serif" fontSize="14" fill="#f4a261" textAnchor="middle">✦</text>
      <text x="292" y="110" fontFamily="Georgia,serif" fontSize="12" fill="#f4a261" textAnchor="middle">✦</text>
      <text x="80"  y="148" fontFamily="Georgia,serif" fontSize="10" fill="#f4a261" textAnchor="middle">✦</text>
      <text x="320" y="145" fontFamily="Georgia,serif" fontSize="10" fill="#f4a261" textAnchor="middle">✦</text>

      {/* PATCH HOUSE text */}
      <text
        x="200" y="196"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="36" fontWeight="bold"
        fill="#ffffff" textAnchor="middle" letterSpacing="3"
      >
        PATCH
      </text>
      <text
        x="200" y="234"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="36" fontWeight="bold"
        fill="#ffffff" textAnchor="middle" letterSpacing="2"
      >
        HOUSE
      </text>

      {/* Patch icon */}
      <rect x="182" y="262" width="36" height="26" rx="5" fill="none" stroke="#f4a261" strokeWidth="1.8" />
      <rect x="188" y="267" width="24" height="16" rx="2" fill="none" stroke="#f4a261" strokeWidth="1.2" strokeDasharray="3 2" />

      {/* Bottom divider */}
      <line x1="148" y1="302" x2="184" y2="302" stroke="#f4a261" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="200" cy="302" r="3.5" fill="#f4a261" />
      <line x1="216" y1="302" x2="252" y2="302" stroke="#f4a261" strokeWidth="1.2" strokeLinecap="round" />

      {/* Outer gold border */}
      <circle cx="200" cy="200" r="196" fill="none" stroke="#f4a261" strokeWidth="2" />
    </svg>
  )
}
