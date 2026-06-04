import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Logo SVG ────────────────────────────────────────────────────────────────
function WishluupLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <path d="M34.2971 0H16.4816C7.37909 0 0 7.37899 0 16.4814V32.9586C0 42.061 7.37909 49.44 16.4816 49.44H34.2971C43.3996 49.44 50.7787 42.061 50.7787 32.9586V16.4814C50.7787 7.37899 43.3996 0 34.2971 0Z" fill="#50109A"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.2739 22.5767C23.8273 22.581 8.50274 12.6456 10.1102 16.5112C10.7351 18.013 19.3346 22.01 21.2739 22.5767Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M20.8879 24.7275C23.047 23.4153 4.80488 22.8637 8.17059 25.3588C9.45913 26.3155 18.9486 25.2489 20.8879 24.7275Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.6441 26.8564C22.7193 24.7405 9.07119 31.9243 13.0553 32.1074C14.4344 32.1699 20.4633 28.0092 21.6441 26.8564Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M23.5537 28.3479C23.2111 25.7277 16.7317 39.6601 19.8453 37.7834C20.9701 37.1046 23.2994 29.9381 23.5537 28.3479Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M25.441 28.9075C24.4067 26.7097 24.4714 38.6015 25.4626 34.2878C25.678 33.344 25.6155 29.959 25.441 28.9075Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M26.9731 28.7784C25.2751 26.8887 28.8261 38.2009 28.5482 33.9475C28.4857 32.9865 27.4406 29.7329 26.9731 28.7784Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M29.3083 26.7725C27.0221 26.8802 39.2438 34.286 40.2242 33.9714C43.8808 32.7971 30.2951 27.059 29.3083 26.7725Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M29.7013 24.652C27.7987 25.9319 42.0286 25.8974 42.7267 25.1152C45.2758 22.2516 30.686 24.3848 29.7013 24.652Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M28.973 22.5322C27.8999 24.6438 41.6494 17.4428 37.6027 17.2488C36.228 17.182 30.1538 21.3773 28.973 22.5322Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M27.085 21.019C27.4189 23.6736 33.8422 9.71746 30.7696 11.6718C29.6362 12.3936 27.3435 19.4158 27.085 21.019Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M25.1934 20.4419C26.2083 22.6398 26.1393 10.9504 25.1848 15.1758C24.965 16.1476 25.021 19.3732 25.1934 20.4419Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M23.6503 20.5599C25.3009 22.4237 21.8404 11.3355 22.1312 15.5243C22.2002 16.5198 23.1784 19.5859 23.6503 20.5599Z" fill="white"/>
      </svg>
      <span className="font-bricolage font-medium text-[2.1rem] leading-none text-wl-dark">Wishluup</span>
    </div>
  );
}

// ─── Gift Icon SVG ────────────────────────────────────────────────────────────
function GiftIcon({ color = "white" }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25C9.634 1.25 7.825 1.25 6.413 1.44C4.969 1.634 3.829 2.04 2.934 2.934C2.039 3.829 1.634 4.969 1.44 6.414C1.25 7.825 1.25 9.634 1.25 11.943V12.057C1.25 14.366 1.25 16.175 1.44 17.587C1.634 19.031 2.04 20.171 2.934 21.066C3.829 21.961 4.969 22.366 6.414 22.56C7.825 22.75 9.634 22.75 11.943 22.75H12.057C14.366 22.75 16.175 22.75 17.587 22.56C19.031 22.366 20.171 21.96 21.066 21.066C21.961 20.171 22.366 19.031 22.56 17.586C22.75 16.175 22.75 14.366 22.75 12.057V11.943C22.75 9.634 22.75 7.825 22.56 6.413C22.366 4.969 21.96 3.829 21.066 2.934C20.171 2.039 19.031 1.634 17.586 1.44C16.175 1.25 14.366 1.25 12.057 1.25H11.943ZM11.25 2.75C9.256 2.752 7.773 2.77 6.614 2.926C5.335 3.098 4.564 3.426 3.994 3.995C3.425 4.565 3.098 5.335 2.926 6.614C2.771 7.773 2.752 9.256 2.75 11.25H6.914C6.55526 10.8012 6.29741 10.2804 6.158 9.723C5.619 7.57 7.57 5.619 9.723 6.158C10.2804 6.29741 10.8012 6.55526 11.25 6.914V2.75ZM2.75 12.75C2.752 14.744 2.77 16.227 2.926 17.386C3.098 18.665 3.426 19.436 3.995 20.006C4.565 20.575 5.335 20.902 6.614 21.074C7.773 21.229 9.256 21.248 11.25 21.25V14.124C10.8554 14.9133 10.2488 15.577 9.49812 16.0409C8.74744 16.5047 7.88241 16.7502 7 16.75C6.80109 16.75 6.61032 16.671 6.46967 16.5303C6.32902 16.3897 6.25 16.1989 6.25 16C6.25 15.8011 6.32902 15.6103 6.46967 15.4697C6.61032 15.329 6.80109 15.25 7 15.25C7.73167 15.2502 8.44199 15.0034 9.016 14.5497C9.59002 14.096 9.99415 13.4619 10.163 12.75H2.75ZM12.75 21.25C14.744 21.248 16.227 21.23 17.386 21.074C18.665 20.902 19.436 20.574 20.006 20.005C20.575 19.435 20.902 18.665 21.074 17.386C21.229 16.227 21.248 14.744 21.25 12.75H13.837C14.0058 13.4619 14.41 14.096 14.984 14.5497C15.558 15.0034 16.2683 15.2502 17 15.25C17.1989 15.25 17.3897 15.329 17.5303 15.4697C17.671 15.6103 17.75 15.8011 17.75 16C17.75 16.1989 17.671 16.3897 17.5303 16.5303C17.3897 16.671 17.1989 16.75 17 16.75C16.1176 16.7502 15.2526 16.5047 14.5019 16.0409C13.7512 15.577 13.1446 14.9133 12.75 14.124V21.25ZM21.25 11.25H17.086C17.4451 10.8013 17.7033 10.2805 17.843 9.723C18.381 7.57 16.43 5.619 14.278 6.158C13.7203 6.29727 13.1991 6.55513 12.75 6.914V2.75C14.744 2.752 16.227 2.77 17.386 2.926C18.665 3.098 19.436 3.426 20.006 3.995C20.575 4.565 20.902 5.335 21.074 6.614C21.229 7.773 21.248 9.256 21.25 11.25ZM12.75 11.25V10.03C12.7517 9.47425 12.9386 8.93492 13.281 8.49721C13.6235 8.0595 14.102 7.74838 14.641 7.613C14.8822 7.55276 15.1349 7.556 15.3745 7.62239C15.614 7.68878 15.8324 7.81607 16.0081 7.99186C16.1839 8.16765 16.3112 8.38596 16.3776 8.62554C16.444 8.86512 16.4472 9.1178 16.387 9.359C16.2517 9.89768 15.9409 10.376 15.5036 10.7184C15.0663 11.0608 14.5274 11.2478 13.972 11.25H12.75ZM11.25 10.027C11.2476 9.47177 11.0605 8.93312 10.7181 8.49602C10.3757 8.05893 9.89752 7.74825 9.359 7.613C9.1178 7.55276 8.86512 7.556 8.62554 7.62239C8.38596 7.68878 8.16765 7.81607 7.99186 7.99186C7.81607 8.16765 7.68878 8.38596 7.62239 8.62554C7.556 8.86512 7.55276 9.1178 7.613 9.359C7.74829 9.89768 8.05912 10.376 8.49642 10.7184C8.93372 11.0608 9.47259 11.2478 10.028 11.25H11.25V10.027Z" fill={color}/>
    </svg>
  );
}

// ─── Star Rating ─────────────────────────────────────────────────────────────
function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4651 4.25926C14.7475 3.14174 16.3353 3.14175 16.6176 4.25926L17.7917 8.90556C17.9612 9.57632 18.6963 9.93032 19.3264 9.64463L23.691 7.66563C24.7408 7.18965 25.7308 8.43102 25.0331 9.34855L22.1325 13.1634C21.7138 13.7141 21.8953 14.5096 22.5116 14.8241L26.7801 17.0026C27.8068 17.5266 27.4535 19.0745 26.3011 19.1012L21.5101 19.2119C20.8184 19.2279 20.3097 19.8658 20.448 20.5436L21.4062 25.2392C21.6366 26.3686 20.2061 27.0575 19.4668 26.1732L16.3931 22.4964C15.9493 21.9656 15.1334 21.9656 14.6897 22.4964L11.6159 26.1732C10.8766 27.0575 9.44611 26.3686 9.67656 25.2392L10.6347 20.5436C10.773 19.8658 10.2643 19.2279 9.57268 19.2119L4.78162 19.1012C3.62928 19.0745 3.27597 17.5266 4.30263 17.0026L8.57119 14.8241C9.18742 14.5096 9.36897 13.7141 8.95022 13.1634L6.04962 9.34855C5.35197 8.43101 6.34193 7.18965 7.39171 7.66563L11.7564 9.64463C12.3864 9.93032 13.1215 9.57632 13.291 8.90556L14.4651 4.25926Z" fill="#622FD8"/>
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 bg-white relative z-50">
      <WishluupLogo />

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8">
        <div className="flex items-center gap-1 flex-col">
          <span className="text-wl-purple font-geist text-lg leading-tight capitalize">home</span>
          <div className="w-8 h-[1px] rounded-full bg-wl-purple" />
        </div>
        <a href="#about" className="text-wl-dark font-geist text-lg leading-tight capitalize hover:text-wl-purple transition-colors">about us</a>
        <a href="#pricing" className="text-wl-dark font-geist text-lg leading-tight capitalize hover:text-wl-purple transition-colors">pricing</a>
        <a href="#features" className="text-wl-dark font-geist text-lg leading-tight capitalize hover:text-wl-purple transition-colors">features</a>
      </div>

      {/* Desktop CTA */}
      <button className="hidden lg:flex items-center gap-2 bg-wl-purple-light text-white font-geist text-base px-6 py-3 rounded-xl capitalize hover:bg-wl-purple transition-colors">
        gift Now
        <GiftIcon />
      </button>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 rounded-lg text-wl-dark"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {menuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          ) : (
            <>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4 z-50">
          <a href="#" className="text-wl-purple font-geist text-lg capitalize border-b border-gray-100 pb-2">home</a>
          <a href="#about" className="text-wl-dark font-geist text-lg capitalize border-b border-gray-100 pb-2 hover:text-wl-purple" onClick={() => setMenuOpen(false)}>about us</a>
          <a href="#pricing" className="text-wl-dark font-geist text-lg capitalize border-b border-gray-100 pb-2 hover:text-wl-purple" onClick={() => setMenuOpen(false)}>pricing</a>
          <a href="#features" className="text-wl-dark font-geist text-lg capitalize hover:text-wl-purple" onClick={() => setMenuOpen(false)}>features</a>
          <button className="flex items-center justify-center gap-2 bg-wl-purple-light text-white font-geist text-base px-6 py-3 rounded-xl capitalize mt-2">
            gift Now <GiftIcon />
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 md:pb-24 lg:pb-32">
      {/* Background decorative circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-full max-w-5xl opacity-30" viewBox="0 0 1447 1456" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <path d="M270.476 401.724C344.921 326.8 455.791 302.646 574.93 324.248C694.066 345.848 821.42 413.199 928.731 521.201C1036.04 629.203 1102.96 757.377 1124.42 877.28C1145.89 997.186 1121.89 1108.77 1047.44 1183.69C972.998 1258.62 862.128 1282.77 742.99 1261.17C623.854 1239.57 496.5 1172.22 389.189 1064.22C281.878 956.216 214.958 828.041 193.495 708.138C172.033 588.232 196.031 476.648 270.476 401.724Z" stroke="#BFBFBF"/>
          <path d="M334.815 336.971C409.26 262.047 520.13 237.893 639.269 259.495C758.405 281.095 885.76 348.446 993.071 456.448C1100.38 564.45 1167.3 692.624 1188.76 812.527C1210.23 932.433 1186.23 1044.02 1111.78 1118.94C1037.34 1193.87 926.468 1218.02 807.329 1196.42C688.193 1174.82 560.839 1107.47 453.528 999.465C346.217 891.463 279.297 763.288 257.835 643.385C236.372 523.479 260.371 411.896 334.815 336.971Z" stroke="#BFBFBF"/>
          <path d="M399.154 272.217C473.599 197.293 584.469 173.14 703.608 194.741C822.744 216.342 950.099 283.692 1057.41 391.694C1164.72 499.696 1231.64 627.87 1253.1 747.773C1274.57 867.679 1250.57 979.263 1176.12 1054.19C1101.68 1129.11 990.806 1153.26 871.668 1131.66C752.532 1110.06 625.178 1042.71 517.867 934.711C410.556 826.709 343.636 698.534 322.174 578.631C300.711 458.725 324.709 347.142 399.154 272.217Z" stroke="#BFBFBF"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-bricolage font-bold text-4xl sm:text-5xl lg:text-[64px] leading-[1] mb-5 max-w-xl">
              <span className="text-wl-dark">Africa's No 1 </span>
              <span className="text-wl-purple">all-in-one{"\n"}</span>
              <span className="text-wl-dark"> gifting app</span>
            </h1>
            <p className="font-geist text-wl-gray text-lg leading-7 capitalize max-w-lg mb-8">
              Celebrate your loved ones with thoughtful gifts and personalized wishes, delivered right on time.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 bg-wl-purple-light text-white font-geist text-lg px-8 py-4 rounded-xl capitalize w-full sm:w-auto hover:bg-wl-purple transition-colors">
                get started
                <GiftIcon />
              </button>
              <button className="flex items-center justify-center gap-3 border border-wl-purple text-wl-purple font-geist text-lg px-8 py-4 rounded-xl capitalize w-full sm:w-auto hover:bg-wl-purple/5 transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-wl-purple">
                  <svg width="12" height="14" viewBox="0 0 14 16" fill="none">
                    <path d="M1 13.5809V4.41913C1 4.02281 1.43886 3.784 1.7716 3.99928L8.8512 8.58022C9.1557 8.77717 9.1557 9.22283 8.8512 9.41978L1.7716 14.0007C1.43886 14.216 1 13.9772 1 13.5809Z" fill="#622FD8" stroke="#622FD8"/>
                  </svg>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Phone mockup + badges */}
          <div className="flex-1 relative flex justify-center items-center min-h-[480px] lg:min-h-[600px]">
            {/* Floating achievement badge */}
            <div className="-rotate-12 absolute top-12 lg:top-8 left-0 sm:left-4 bg-black rounded-3xl px-4 py-3 flex items-center gap-3 shadow-xl z-10 max-w-[260px]">
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg className="absolute inset-0" width="51" height="51" viewBox="0 0 51 51" fill="none">
                  <circle cx="25.3" cy="25.3" r="21" transform="rotate(-11.5 25.3 25.3)" stroke="#622FD8" strokeWidth="0.9"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                    <path d="M13.1825 15.2758C10.2802 15.8662 7.44883 13.992 6.85845 11.0897L5.86866 6.22388C5.79492 5.86141 5.75806 5.68018 5.78136 5.52431C5.82042 5.26302 5.97308 5.03239 6.19834 4.89436C6.33272 4.81202 6.51396 4.77515 6.87642 4.70142L14.8564 3.07816C15.2189 3.00442 15.4001 2.96756 15.556 2.99086C15.8173 3.02992 16.0479 3.18258 16.1859 3.40785C16.2683 3.54222 16.3051 3.72346 16.3789 4.08593L17.3686 8.95176C17.959 11.8541 16.0848 14.6855 13.1825 15.2758ZM13.1825 15.2758L13.717 17.9034" stroke="#622FD8" strokeWidth="1.79" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-white font-bricolage font-bold text-sm leading-tight">Technology</p>
                <p className="text-white font-geist text-xs leading-tight">African Startup of the Year</p>
              </div>
            </div>

            {/* iPhone mockup */}
            <div className="relative z-10" style={{ filter: "drop-shadow(32px 32px 68px rgba(0,0,0,0.20))" }}>
              <div className="relative w-[280px] sm:w-[320px] lg:w-[360px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/73ada244598538767401a90ac6346c13f4de3fe0?width=766"
                  alt="iPhone mockup"
                  className="w-full h-auto"
                />
                <div className="absolute inset-[4%] rounded-[14%] overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6a079b6b882ccedd27eb6e835e62d902b6fa987b?width=690"
                    alt="App screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating achievement badge 2 */}
            <div className="-rotate-12 absolute bottom-12 lg:bottom-8 right-0 sm:right-4 bg-black rounded-3xl px-4 py-3 flex items-center gap-3 shadow-xl z-10 max-w-[280px]">
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg className="absolute inset-0" width="51" height="51" viewBox="0 0 51 51" fill="none">
                  <circle cx="25.3" cy="25.3" r="21" transform="rotate(-11.5 25.3 25.3)" stroke="#622FD8" strokeWidth="0.9"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                    <path d="M13.1825 15.2758C10.2802 15.8662 7.44883 13.992 6.85845 11.0897L5.86866 6.22388C5.79492 5.86141 5.75806 5.68018 5.78136 5.52431C5.82042 5.26302 5.97308 5.03239 6.19834 4.89436C6.33272 4.81202 6.51396 4.77515 6.87642 4.70142L14.8564 3.07816C15.2189 3.00442 15.4001 2.96756 15.556 2.99086C15.8173 3.02992 16.0479 3.18258 16.1859 3.40785C16.2683 3.54222 16.3051 3.72346 16.3789 4.08593L17.3686 8.95176C17.959 11.8541 16.0848 14.6855 13.1825 15.2758ZM13.1825 15.2758L13.717 17.9034" stroke="#622FD8" strokeWidth="1.79" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-white font-bricolage font-bold text-sm leading-tight">Achievement</p>
                <p className="text-white font-geist text-xs leading-tight">Best Gifting app on playstore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Partners Section ─────────────────────────────────────────────────────────
function PartnersSection() {
  const logos = [
    // Chowdeck
    <svg key="chowdeck" width="140" height="30" viewBox="0 0 314 67" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto object-contain">
      <path d="M31.7964 40.0109C30.0229 40.919 27.9796 41.1566 26.0441 40.6798C24.1085 40.203 22.4115 39.0439 21.2665 37.4168C20.1178 35.8566 19.5422 33.9501 19.6364 32.017C19.7305 30.0839 20.4886 28.2419 21.7835 26.7999C23.0897 25.3029 24.8898 24.3208 26.8587 24.0309C28.8277 23.7411 30.8357 24.1626 32.5202 25.2194C35.9685 27.3356 39.8064 28.7432 43.8083 29.3597C46.9794 29.8063 50.2193 29.9438 53.4593 30.2015C53.1024 26.2938 51.8431 22.5215 49.7799 19.1798C47.7167 15.8382 44.9057 13.0179 41.5668 10.9398C38.228 8.86166 34.4519 7.58205 30.5343 7.20114C26.6166 6.82024 22.6637 7.34837 18.985 8.74421C15.3062 10.14 12.0014 12.3657 9.3294 15.2469C6.65735 18.1282 4.69053 21.5868 3.58289 25.3521C2.47526 29.1173 2.25688 33.0871 2.94484 36.9505C3.6328 40.8139 5.20844 44.4662 7.54841 47.6215L7.11756 47.3122L0 66.9999L16.3894 55.1289C19.7147 56.831 23.3734 57.7868 27.1088 57.9291C33.2954 58.1953 39.3653 56.192 44.1703 52.2981C48.9752 48.4043 52.1818 42.8899 53.1835 36.7984L52.7872 36.6609C45.6128 35.7536 38.3279 36.9162 31.7964 40.0109Z" fill="#FFC501"/>
      <path d="M72.6232 32.5208C72.5388 30.1914 72.9307 27.8692 73.7752 25.6956C74.6197 23.522 75.8991 21.5425 77.5355 19.8775C79.1719 18.2125 81.1311 16.8968 83.2938 16.0107C85.4565 15.1245 87.7775 14.6863 90.1156 14.7228C97.6123 14.7228 103.144 18.8459 104.954 23.9482L98.5946 27.0061C96.8198 23.7804 93.7742 21.1675 90.1156 21.2167C83.9803 21.2167 79.7753 25.8036 79.7753 32.5208C79.7753 39.2379 83.9114 43.8764 90.1156 43.8764C93.7742 43.9256 96.8198 41.3127 98.5946 38.0869L104.954 41.2308C103.23 46.3846 97.6123 50.4561 90.1156 50.4561C83.9114 50.4561 78.3 47.0561 75.0 41.0561C72.8 37.1 72.5 34.7 72.6232 32.5208Z" fill="black"/>
      <text fill="black" fontFamily="Arial" fontSize="28" fontWeight="700" x="110" y="42">Chowdeck</text>
    </svg>,
    // Samsung
    <svg key="samsung" width="140" height="30" viewBox="0 0 205 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto object-contain">
      <path d="M7.7891 9.48441C7.63858 8.81295 7.67621 8.14149 7.75147 7.76379C7.93961 6.71463 8.5793 5.58153 10.4231 5.58153C12.154 5.58153 13.1323 6.75659 13.1323 8.56115H20.4323C20.4699 1.13309 14.7127 0 10.5736 0C5.38087 0 1.12885 1.93046 0.338656 7.26019C0.112885 8.72902 0.075257 10.03 0.413913 11.6667C1.69328 18.3393 12.1164 20.2698 13.6215 24.5084C13.9225 25.3058 13.8097 26.3129 13.6968 26.9424C13.471 28.0336 12.7937 29.1667 10.837 29.1667C8.99321 29.1667 7.90198 27.9916 7.90198 26.187H0C0 32.8597 5.1551 35.042 10.6489 35.042C15.9545 35.042 20.2818 33.0276 20.9967 27.5719C21.3354 24.7602 21.072 22.9137 20.9591 22.2422C19.755 15.3177 8.61692 13.3034 7.7891 9.48441Z" fill="#1428A0"/>
      <text fill="#1428A0" fontFamily="Arial" fontSize="26" fontWeight="700" x="28" y="28">SAMSUNG</text>
    </svg>,
    // Visa
    <img key="visa" src="https://api.builder.io/api/v1/image/assets/TEMP/4bbd65e08712b42fcfac58e8ad150cefdaea5e5b?width=216" alt="Visa" className="h-7 w-auto object-contain" />,
    // FedEx
    <svg key="fedex" width="110" height="30" viewBox="0 0 126 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto object-contain">
      <path d="M103.844 33.8043L99.1857 28.5326L94.5812 33.8043H84.8306L94.3645 23.0434L84.8306 12.3369H94.9062L99.619 17.5543L104.115 12.3369H113.812L104.332 23.0434L113.974 33.8043H103.844Z" fill="#FF6200"/>
      <path d="M66.1421 33.8043V0H84.8308V7.55H74.0509V12.337H84.8308V19.565H74.0509V26.25H84.8308V33.8043H66.1421Z" fill="#FF6200"/>
      <path d="M58.233 0V13.8H58.1247C56.3912 11.79 54.1702 11.09 51.6784 11.09C46.4781 11.09 42.5778 14.62 41.2236 19.29C39.6526 14.13 35.644 10.978 29.6311 10.978C24.7558 10.978 20.9639 13.152 18.9596 16.739V12.337H8.93809V7.554H19.8805V0H0V33.804H8.93809V19.565H17.8762C17.6053 20.598 17.4428 21.739 17.4428 22.88C17.4428 29.946 22.8057 34.891 29.6853 34.891C35.4273 34.891 39.2193 32.174 41.2777 27.228H33.5856C32.5563 28.696 31.7438 29.13 29.6853 29.13C27.3018 29.13 25.1892 27.011 25.1892 24.511H40.7902C41.4402 30.109 45.828 34.946 51.7868 34.946C54.3328 34.946 56.7163 33.696 58.1789 31.522H58.2872V33.696H66.196V0H58.233Z" fill="#4D148C"/>
    </svg>,
    // Itel
    <svg key="itel" width="60" height="30" viewBox="0 0 74 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto object-contain">
      <path d="M36.5066 0C20.4732 0 7.3999 6.66 7.3999 16.65C7.3999 23.0633 12.8266 28.7367 20.9666 31.9433L20.1032 36.63C43.9066 38.6033 65.7366 31.08 65.7366 16.8967C65.6132 4.93333 49.5799 0 36.5066 0Z" fill="#FF073C"/>
      <path d="M39.2198 26.1464C42.5498 26.1464 45.2631 24.5431 46.4964 21.5831H42.4264C41.6864 22.5697 40.8231 23.0631 39.4664 23.0631C37.7398 23.0631 36.3831 21.8297 36.2598 20.2264H46.8664C48.4698 15.2931 45.8798 11.4697 40.6998 11.4697C36.5064 11.4697 33.5464 13.8131 32.8064 17.7597C31.9431 22.5697 34.6564 26.1464 39.2198 26.1464Z" fill="white"/>
      <path d="M29.6001 26.1469H30.5868L31.3268 22.5702H30.4635C29.1068 22.5702 28.4901 21.5835 28.7368 20.1035L29.7235 14.9235H32.8068L33.5468 11.3469H30.4635L31.0801 7.89355H27.1335L24.7901 19.9802C24.1735 23.5569 25.6535 26.1469 29.6001 26.1469Z" fill="white"/>
      <path d="M24.6665 13.0732H20.7199L18.1299 26.1466H22.0765L24.6665 13.0732Z" fill="white"/>
      <path d="M25.6532 8.0166H21.7065L21.0898 11.5933H24.9132L25.6532 8.0166Z" fill="white"/>
    </svg>,
  ];

  const allLogos = [...logos, ...logos];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-8">
        <h2 className="font-bricolage font-semibold text-3xl md:text-4xl text-wl-dark text-center capitalize">Our partners</h2>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {allLogos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center mx-10 md:mx-16 flex-shrink-0">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({
  color,
  icon,
  title,
  description,
  phoneScreen,
}: {
  color: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  phoneScreen: string;
}) {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 flex flex-col min-h-[340px] md:min-h-[420px] p-6 md:p-8">
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 542 594" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <path d="M101.458 164.03C129.301 133.516 170.78 123.665 215.381 132.471C259.98 141.276 307.666 168.734 347.851 212.775C388.037 256.816 413.091 309.077 421.126 357.956C429.161 406.836 420.172 452.294 392.33 482.808C364.487 513.321 323.009 523.172 278.408 514.366C233.809 505.561 186.122 478.102 145.937 434.061C105.751 390.02 80.6973 337.76 72.6626 288.881C64.6277 240.001 73.6159 194.544 101.458 164.03Z" stroke={color}/>
          <path d="M125.564 137.611C153.407 107.097 194.886 97.246 239.487 106.052C284.086 114.857 331.772 142.315 371.957 186.356C412.143 230.397 437.197 282.658 445.232 331.537C453.267 380.417 444.278 425.875 416.436 456.389C388.593 486.902 347.115 496.753 302.514 487.947C257.915 479.142 210.228 451.683 170.043 407.642C129.857 363.602 104.803 311.341 96.7686 262.462C88.7337 213.582 97.7218 168.125 125.564 137.611Z" stroke={color}/>
          <path d="M149.67 111.193C177.513 80.6791 218.992 70.8281 263.593 79.6339C308.192 88.4394 355.878 115.897 396.063 159.938C436.249 203.979 461.303 256.24 469.338 305.119C477.373 353.999 468.384 399.457 440.541 429.971C412.699 460.484 371.221 470.335 326.62 461.529C282.02 452.724 234.334 425.265 194.149 381.224C153.963 337.184 128.909 284.923 120.875 236.044C112.84 187.164 121.828 141.707 149.67 111.193Z" stroke={color}/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative flex items-start gap-5 mb-4">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <div>
          <h3 className="font-bricolage font-normal text-3xl md:text-4xl lg:text-5xl leading-[1.1] capitalize mb-3" style={{ color }}>
            {title}
          </h3>
          <p className="font-geist text-base md:text-lg leading-7 capitalize max-w-xs" style={{ color }}>
            {description}
          </p>
        </div>
      </div>

      {/* Phone mockup in corner */}
      <div className="absolute bottom-0 right-4 w-20 md:w-24" style={{ filter: "drop-shadow(16px 16px 34px rgba(0,0,0,0.20))" }}>
        <div className="relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/aa9a3c6b2683b933306d263a2301eaefd956c52f?width=221"
            alt="Phone"
            className="w-full h-auto"
          />
          <div className="absolute inset-[5%] rounded-[12%] overflow-hidden">
            <img
              src={phoneScreen}
              alt="App screen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      color: "#0293E6",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.3332 18.333C28.3332 20.5431 27.4552 22.6628 25.8924 24.2256C24.3296 25.7884 22.21 26.6663 19.9998 26.6663C17.7897 26.6663 15.6701 25.7884 14.1073 24.2256C12.5445 22.6628 11.6665 20.5431 11.6665 18.333V11.6663C11.6665 9.4562 12.5445 7.33659 14.1073 5.77378C15.6701 4.21098 17.7897 3.33301 19.9998 3.33301M33.3332 18.333C33.3332 21.8692 31.9284 25.2606 29.4279 27.7611C26.9274 30.2616 23.5361 31.6663 19.9998 31.6663M19.9998 31.6663C16.4636 31.6663 13.0722 30.2616 10.5717 27.7611C8.07126 25.2606 6.6665 21.8692 6.6665 18.333M19.9998 31.6663V36.6663M23.8882 7.74301C24.8672 7.61889 25.7773 7.17282 26.4751 6.47497C27.173 5.77712 27.619 4.86708 27.7432 3.88801C27.7832 3.58301 28.0265 3.33301 28.3332 3.33301C28.6398 3.33301 28.8848 3.58301 28.9232 3.88801C29.0473 4.86708 29.4934 5.77712 30.1912 6.47497C30.8891 7.17282 31.7991 7.61889 32.7782 7.74301C33.0832 7.78134 33.3332 8.02634 33.3332 8.33301C33.3332 8.63967 33.0832 8.88467 32.7782 8.92301C31.7991 9.04713 30.8891 9.4932 30.1912 10.191C29.4934 10.8889 29.0473 11.7989 28.9232 12.778C28.8832 13.083 28.6398 13.333 28.3332 13.333C28.0265 13.333 27.7815 13.083 27.7432 12.778C27.619 11.7989 27.173 10.8889 26.4751 10.191C25.7773 9.4932 24.8672 9.04713 23.8882 8.92301C23.5832 8.88301 23.3332 8.63967 23.3332 8.33301C23.3332 8.02634 23.5832 7.78134 23.8882 7.74301Z" stroke="#0293E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Wishluup AI",
      description: "Don't know the perfect gift to give your loved ones? The Wishluup AI is here to ease your stress.",
      phoneScreen: "https://api.builder.io/api/v1/image/assets/TEMP/23310f11bed777e4ba62a400bbecab4c028e95d5?width=198",
    },
    {
      color: "#DB0E3F",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0667 22.0662C25.9667 18.1662 25.9667 11.8329 22.0667 7.91621C18.1667 4.01621 11.8334 4.01621 7.9167 7.91621C4.0167 11.8162 4.0167 18.1495 7.9167 22.0662C11.8167 25.9662 18.15 25.9662 22.0667 22.0662Z" stroke="#DB0E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22.5 22.5L35 35" stroke="#DB0E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Gift Discovery",
      description: "Discover thoughtful presents your loved ones will cherish.",
      phoneScreen: "https://api.builder.io/api/v1/image/assets/TEMP/de71fc1d60d7af1564b2d2cddc0fdf887f0611d0?width=198",
    },
    {
      color: "#622FD8",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.5 7.5V40H5V7.83203L27.5 0.800781V7.5H32.5ZM25 4.19922L14.4336 7.5H25V4.19922ZM30 10H7.5V37.5H30V10ZM18.75 17.6172C19.2318 17.1745 19.7721 16.8359 20.3711 16.6016C20.9701 16.3672 21.6081 16.25 22.2852 16.25C23.0013 16.25 23.6784 16.3867 24.3164 16.6602C24.9544 16.9336 25.5078 17.3047 25.9766 17.7734C26.4453 18.2422 26.8164 18.7956 27.0898 19.4336C27.3633 20.0716 27.5 20.7552 27.5 21.4844C27.5 22.1745 27.3698 22.8385 27.1094 23.4766C26.849 24.1146 26.4714 24.681 25.9766 25.1758L18.75 32.3828L11.5234 25.1758C11.0286 24.681 10.651 24.1146 10.3906 23.4766C10.1302 22.8385 10 22.1745 10 21.4844C10 20.7552 10.1367 20.0716 10.4102 19.4336C10.6836 18.7956 11.0547 18.2422 11.5234 17.7734C11.9922 17.3047 12.5391 16.9336 13.1641 16.6602C13.7891 16.3867 14.4727 16.25 15.2148 16.25C15.8789 16.25 16.5104 16.3672 17.1094 16.6016C17.7083 16.8359 18.2552 17.1745 18.75 17.6172Z" fill="#622FD8"/>
        </svg>
      ),
      title: "Seamless Wishcard",
      description: "Still don't have the money to send to your loved one? We've got you covered.",
      phoneScreen: "https://api.builder.io/api/v1/image/assets/TEMP/8618d8e2008a2582ef09cdd82ba06bf665d19996?width=198",
    },
    {
      color: "#10BC83",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0667 22.0662C25.9667 18.1662 25.9667 11.8329 22.0667 7.91621C18.1667 4.01621 11.8334 4.01621 7.9167 7.91621C4.0167 11.8162 4.0167 18.1495 7.9167 22.0662C11.8167 25.9662 18.15 25.9662 22.0667 22.0662Z" stroke="#10BC83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22.5 22.5L35 35" stroke="#10BC83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Anniversary Reminders",
      description: "Work can make remembering birthdays tricky, but with the Wishluup app you'll get reminders ahead of time.",
      phoneScreen: "https://api.builder.io/api/v1/image/assets/TEMP/ed577738698a9c7b5288510232ca9f7fe7b96c6e?width=198",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="font-bricolage font-semibold text-3xl md:text-4xl text-wl-dark text-center mb-12 capitalize">
          Wishluup features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Section ───────────────────────────────────────────────────────
function WhyChooseSection() {
  const points = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8.99998L11 7.49998L15 5.99848L16.5 2L18.0014 5.99848L22 7.49998L18.0014 8.99998L16.5 13L15 8.99998ZM6.99997 17L2 15L6.99997 13L8.99998 8L11 13L16 15L11 17L8.99998 22L6.99997 17Z" fill="white"/>
        </svg>
      ),
      iconBg: "bg-wl-purple",
      title: "First of Its Kind in Africa",
      description: "The very first app dedicated to making birthday gifting effortless across Africa.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2728 2.44825C13.3452 2.38152 13.4302 2.32972 13.5227 2.29581C13.6152 2.26191 13.7134 2.24656 13.8119 2.25065C13.9103 2.25473 14.007 2.27817 14.0964 2.31963C14.1857 2.36108 14.2661 2.41974 14.3328 2.49225C14.9388 3.15025 15.2398 3.93225 15.1258 4.79725C15.0178 5.62325 14.5458 6.41525 13.8518 7.16925L11.4458 9.78425C11.311 9.93065 11.1237 10.0175 10.9249 10.0258C10.7261 10.034 10.5322 9.96298 10.3858 9.82825C10.2394 9.69352 10.1525 9.50615 10.1442 9.30736C10.136 9.10858 10.207 8.91465 10.3418 8.76825L12.7478 6.15325C13.3378 5.51325 13.5878 4.99625 13.6388 4.60225C13.6858 4.24825 13.5858 3.89625 13.2288 3.50825C13.0488 3.31 13.0131 2.98 13.2728 2.44825ZM4.90076 8.98025C5.08788 8.28 5.47906 7.58 6.46663 8.16226L14.7558 16.0333L14.7918 16.0703C15.3918 16.7403 15.1168 17.8053 14.2658 18.1003L3.91976 21.6803C2.94976 22.0163 2.01576 21.1133 2.29976 20.1403L4.88476 9.04025C4.88876 9.02025 4.8941 9.00025 4.90076 8.98025Z" fill="white"/>
        </svg>
      ),
      iconBg: "bg-wl-pink",
      title: "Effortless Planning",
      description: "No stress, no rush—just smooth birthday gifting.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 2V13H10V22L17 10H13L17 2H7Z" fill="white"/>
        </svg>
      ),
      iconBg: "bg-wl-blue",
      title: "Convenient & Reliable",
      description: "Every detail handled, so you can focus on celebrating.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a50853fcb2df4d97b55c5da9ee62e72d4445391b?width=1078"
              alt="Woman opening a gift"
              className="w-full h-auto rounded-2xl object-cover max-h-[470px]"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="font-bricolage font-bold text-3xl md:text-4xl text-wl-dark capitalize">
              why choose Wishluup?
            </h2>
            <div className="flex flex-col gap-8">
              {points.map((p, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 ${p.iconBg}`}>
                      {p.icon}
                    </div>
                    <h3 className="font-bricolage font-semibold text-xl md:text-2xl text-wl-dark capitalize">{p.title}</h3>
                  </div>
                  <p className="font-geist text-wl-dark text-base md:text-lg leading-7 capitalize pl-15">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Femi",
      rating: "4.75",
      review: "Wishluup reminds me before birthdays—no more last-minute rush.",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ab536e2f1a71f99a407097c7bc08571aa0e3289c?width=180",
    },
    {
      name: "Khalid",
      rating: "5.0",
      review: "So easy to send gifts and track delivery.",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ef335c56955d28052c2ddff137c82f697bcafbca?width=180",
    },
    {
      name: "Amina",
      rating: "4.95",
      review: "Finally, an app that helps me find meaningful gifts fast.",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/3c3612719bd56925a594d839797f08697b0abd2f?width=180",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <p className="font-geist text-wl-dark text-base tracking-widest uppercase mb-2">testimonial</p>
          <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl text-wl-dark capitalize">
            what our users say about us?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center gap-4 shadow-[0_12px_12px_0_rgba(0,0,0,0.16)]">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex items-center gap-2">
                <StarIcon />
                <span className="font-manrope font-extrabold text-xl text-[#1E1E1E]">{t.rating}</span>
              </div>
              <p className="font-manrope font-bold text-xl text-[#646464]">{t.name}</p>
              <p className="font-manrope text-[#8C8C8C] text-center text-base leading-7 max-w-xs">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────
function FAQSection() {
  const faqs = [
    {
      q: "How does Wishluup work?",
      a: "Simply add birthdays, choose a gift, personalize it, and we'll deliver it on time.",
    },
    {
      q: "Can I customize gifts?",
      a: "Yes! Add notes, photos, or even a recorded video message.",
    },
    {
      q: "Do you deliver anywhere?",
      a: "We currently deliver within Nigeria, with plans to expand globally.",
    },
    {
      q: "Is there a free version?",
      a: "Yes! Our free plan includes reminders and basic gifting options. Wishluup Premium unlocks curated collections and advanced personalization.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10">
          <h2 className="font-bricolage font-bold text-4xl md:text-5xl text-wl-dark capitalize max-w-sm leading-tight">
            Frequently asked questions
          </h2>
          <div className="relative w-32 h-32 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <path d="M92.3001 29.5555C94.3672 21.6209 105.633 21.6209 107.7 29.5555C109.352 35.8959 117.53 37.6343 121.618 32.5139C126.734 26.1061 137.025 30.6882 135.687 38.7776C134.617 45.2417 141.381 50.1563 147.198 47.1413C154.478 43.3682 162.016 51.7401 157.503 58.5856C153.896 64.0557 158.077 71.2967 164.617 70.9084C172.802 70.4224 176.284 81.1366 169.376 85.5545C163.856 89.0848 164.73 97.4002 170.863 99.7057C178.538 102.591 177.361 113.795 169.254 115.021C162.775 116.001 160.192 123.953 164.857 128.554C170.695 134.311 165.062 144.068 157.157 141.891C150.84 140.151 145.245 146.364 147.636 152.465C150.627 160.099 141.513 166.721 135.177 161.517C130.114 157.358 122.475 160.759 122.178 167.304C121.806 175.495 110.786 177.837 107.115 170.506C104.181 164.648 95.8194 164.648 92.8854 170.506C89.2138 177.837 78.1944 175.495 77.8221 167.304C77.5246 160.759 69.8863 157.358 64.8231 161.517C58.4869 166.721 49.3729 160.099 52.3644 152.465C54.7548 146.364 49.1601 140.151 42.8432 141.891C34.9381 144.068 29.3053 134.311 35.1433 128.554C39.8084 123.953 37.2246 116.001 30.7462 115.021C22.6391 113.795 21.4615 102.591 29.1365 99.7057C35.2696 97.4002 36.1436 89.0848 30.6239 85.5545C23.7164 81.1366 27.1977 70.4224 35.3827 70.9084C41.9233 71.2967 46.1039 64.0557 42.4973 58.5856C37.9839 51.7401 45.522 43.3682 52.8018 47.1413C58.6189 50.1563 65.3833 45.2417 64.3134 38.7776C62.9746 30.6882 73.2661 26.1061 78.3819 32.5139C82.4698 37.6343 90.6482 35.8959 92.3001 29.5555Z" fill="#50109A"/>
            </svg>
            <span className="relative font-bricolage font-normal text-2xl text-white uppercase tracking-widest">faq</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-wl-purple-light rounded-lg p-7 flex flex-col gap-4">
              <h3 className="font-bricolage font-bold text-xl md:text-2xl text-white capitalize">{faq.q}</h3>
              <p className="font-geist text-white text-base md:text-lg leading-7 capitalize text-justify">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-wl-purple rounded-2xl overflow-hidden px-8 md:px-16 py-14 md:py-16">
          {/* Decorative rings */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none hidden md:block">
            <svg width="500" height="500" viewBox="0 0 720 720" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M134.704 198.704C171.655 161.753 226.705 149.822 285.905 160.487C345.103 171.151 408.4 204.407 461.741 257.748C515.082 311.089 548.337 374.386 559.002 433.583C569.667 492.783 557.736 547.833 520.784 584.785C483.833 621.736 428.783 633.667 369.583 623.002C310.385 612.338 247.088 579.082 193.747 525.741C140.406 472.4 107.151 409.104 96.4862 349.906C85.8213 290.706 97.7523 235.656 134.704 198.704Z" stroke="white"/>
              <path d="M166.704 166.704C203.655 129.753 258.705 117.822 317.905 128.487C377.103 139.151 440.4 172.407 493.741 225.748C547.082 279.089 580.337 342.386 591.002 401.583C601.667 460.783 589.736 515.833 552.784 552.785C515.833 589.736 460.783 601.667 401.583 591.002C342.385 580.338 279.088 547.082 225.747 493.741C172.406 440.4 139.151 377.104 128.486 317.906C117.821 258.706 129.752 203.656 166.704 166.704Z" stroke="white"/>
              <path d="M198.704 134.704C235.655 97.7529 290.705 85.8219 349.905 96.4868C409.103 107.151 472.4 140.407 525.741 193.748C579.082 247.089 612.337 310.386 623.002 369.583C633.667 428.783 621.736 483.833 584.784 520.785C547.833 557.736 492.783 569.667 433.583 559.002C374.385 548.338 311.088 515.082 257.747 461.741C204.406 408.4 171.151 345.104 160.486 285.906C149.821 226.706 161.752 171.656 198.704 134.704Z" stroke="white"/>
            </svg>
          </div>

          {/* Decorative woman image */}
          <div className="absolute right-8 top-0 bottom-0 w-64 md:w-80 opacity-20 hidden lg:block pointer-events-none">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8b418334d12ebcff98f73bc8fcd0c6c6b79d9251?width=1288"
              alt=""
              className="w-full h-full object-cover mix-blend-hue"
            />
          </div>

          <div className="relative max-w-lg">
            <h2 className="font-bricolage font-bold text-3xl md:text-4xl text-white leading-tight capitalize mb-4">
              Ready to Celebrate Better? Try Wishluup for free today
            </h2>
            <p className="font-geist text-white text-base md:text-lg leading-7 capitalize mb-8">
              Join thousands making birthdays unforgettable with Wishluup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-black text-white font-geist text-sm px-5 py-3 rounded-2xl capitalize">
                <span>download app</span>
                <svg width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.8164 27.138C21.505 28.4093 20.0731 28.2086 18.6947 27.6064C17.236 26.9908 15.8978 26.9641 14.3589 27.6064C12.4319 28.4361 11.4148 28.1952 10.2639 27.138C3.73345 20.4068 4.69697 10.1561 12.1107 9.78138C13.9173 9.87505 15.1752 10.7717 16.2324 10.852C17.8115 10.5308 19.3237 9.60741 21.0098 9.72785C23.0305 9.88844 24.5561 10.6914 25.5597 12.1366C21.3845 14.6391 22.3748 20.1392 26.2021 21.6781C25.4393 23.6854 24.449 25.6794 22.803 27.1514L22.8164 27.138ZM16.0986 9.70109C15.8978 6.71687 18.32 4.25455 21.1035 4.01367C21.4916 7.46627 17.9721 10.0356 16.0986 9.70109Z" fill="white"/>
                </svg>
              </button>
              <button className="flex items-center justify-center gap-2 bg-black text-white font-geist text-sm px-5 py-3 rounded-2xl capitalize">
                <span>download app</span>
                <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.25861 4.0212L14.4926 14.0573L4.33473 24.1859C4.16854 23.9695 4.03953 23.7269 3.953 23.4681C3.90825 23.1752 3.90825 22.8771 3.953 22.5841V5.34787C3.92255 4.88535 4.02911 4.42283 4.25744 4.0212M18.9012 9.68034L15.5605 12.9894L5.44829 3.04463C5.77615 2.93105 6.12743 2.89944 6.47052 2.9533C7.00915 3.10084 7.52319 3.328 7.99508 3.62425L17.1471 8.68856C17.742 9.00822 18.3216 9.34428 18.9012 9.68034ZM15.5617 15.1404L18.886 18.405L16.4762 19.7469L9.12386 23.8335C8.51498 24.1695 7.90375 24.4904 7.30891 24.8569C7.05438 25.0153 6.76897 25.1177 6.47174 25.1571C6.17451 25.1964 5.8723 25.1719 5.58529 25.0852L15.5617 15.1404ZM24.1798 14.0573C24.1883 14.4668 24.0849 14.8708 23.8806 15.2257C23.6763 15.5806 23.3789 15.873 23.0206 16.0713L20.2735 17.5959L16.6589 14.0573L20.2888 10.4578C21.2197 10.9766 22.1353 11.4953 23.0498 11.9836C23.4146 12.1874 23.7141 12.4904 23.9139 12.8573C24.1136 13.2243 24.2066 13.6403 24.1798 14.0573Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-5 max-w-xs">
            <WishluupLogo />
            <p className="font-geist text-wl-gray text-sm leading-6 capitalize">
              @2025 Wishluup inc Terms of Service | Privacy Policy
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-bricolage font-semibold text-xl text-wl-dark capitalize">Links</p>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">home</a>
              <a href="#about" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">about us</a>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">bookings</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bricolage font-semibold text-xl text-wl-dark capitalize">Legal</p>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">terms of use</a>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">privacy policy</a>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">cookie policy</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bricolage font-semibold text-xl text-wl-dark capitalize">Product</p>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">take tour</a>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">live chat</a>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">reviews</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bricolage font-semibold text-xl text-wl-dark capitalize">Newsletter</p>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">Stay up to date</a>
              <a href="#" className="font-geist text-wl-gray text-sm leading-6 capitalize hover:text-wl-purple transition-colors">blog</a>
            </div>
          </div>
        </div>

        {/* Divider + Social */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-geist text-wl-gray text-sm">© 2025 Wishluup Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* Email */}
            <a href="mailto:hello@Wishluup.com" aria-label="Email" className="text-wl-purple-dark hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4329 1C18.908 1 20.327 1.64778 21.3709 2.81011C22.4159 3.97 23 5.53444 23 7.17222V16.8278C23 20.2378 20.503 23 17.4329 23H6.566C3.4959 23 1 20.2378 1 16.8278V7.17222C1 3.76222 3.4849 1 6.566 1H17.4329ZM18.677 7.35556C18.446 7.34211 18.226 7.42889 18.0599 7.6L13.1 12C12.462 12.5879 11.5479 12.5879 10.9 12L5.95 7.6C5.6079 7.31889 5.1349 7.35556 4.85 7.68556C4.553 8.01556 4.52 8.54111 4.7719 8.90778L4.916 9.06667L9.921 13.4056C10.537 13.9433 11.2839 14.2367 12.066 14.2367C12.8459 14.2367 13.606 13.9433 14.2209 13.4056L19.183 8.99333L19.271 8.89556C19.5339 8.54111 19.5339 8.02778 19.2589 7.67333C19.106 7.49122 18.8959 7.38 18.677 7.35556Z" fill="#50109A"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="X / Twitter" className="text-wl-purple-dark hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V19C1 20.0609 1.42143 21.0783 2.17157 21.8284C2.92172 22.5786 3.93913 23 5 23H19C20.0609 23 21.0783 22.5786 21.8284 21.8284C22.5786 21.0783 23 20.0609 23 19V5C23 3.93913 22.5786 2.92172 21.8284 2.17157C21.0783 1.42143 20.0609 1 19 1H5ZM4.666 4.5C4.55653 4.54068 4.45808 4.60637 4.37848 4.69182C4.29887 4.77727 4.24033 4.88013 4.2075 4.99221C4.17468 5.10428 4.16848 5.22248 4.1894 5.33737C4.21032 5.45227 4.25778 5.56069 4.328 5.654L9.942 13.104L4.027 19.449L3.983 19.5H6.03L10.86 14.321L14.572 19.249C14.6581 19.3631 14.775 19.4502 14.909 19.5H19.331C19.4403 19.4591 19.5386 19.3933 19.6179 19.3077C19.6973 19.2222 19.7556 19.1193 19.7883 19.0072C19.8209 18.8952 19.8269 18.7771 19.8059 18.6623C19.7848 18.5475 19.7373 18.4392 19.667 18.346L14.053 10.896L20.017 4.5H17.967L13.137 9.68L9.423 4.752C9.33702 4.63756 9.22008 4.55012 9.086 4.5H4.666ZM15.546 18.048L6.431 5.952H8.45L17.564 18.047L15.546 18.048Z" fill="#50109A"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-wl-purple-dark hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 12.0276C23 5.94035 18.072 1 12 1C5.928 1 1 5.94035 1 12.0276C1 17.3649 4.784 21.809 9.8 22.8346V15.3358H7.6V12.0276H9.8V9.27068C9.8 7.14236 11.527 5.41103 13.65 5.41103H16.4V8.7193H14.2C13.595 8.7193 13.1 9.21554 13.1 9.82205V12.0276H16.4V15.3358H13.1V23C18.655 22.4486 23 17.7509 23 12.0276Z" fill="#50109A"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
