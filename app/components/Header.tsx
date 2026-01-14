"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const phoneDisplay = "(786) 275-7826";
const phoneHref = "tel:+17862757826";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  function closeAll() {
    setMenuOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }

  return (
    <div className="navWrap">
      <div className="container">
        <div className="navInner">
          <Link href="/" className="brand" aria-label="Miami Air Duct Solution home" onClick={closeAll}>
            <Image
              src="/logo.jpeg"
              alt="Miami Air Duct Solution logo"
              width={44}
              height={44}
              style={{ objectFit: "contain" }}
              priority
            />
            <div>
              <div className="brandTitle">Miami Air Duct Solution</div>
              <div className="brandSub">Air Quality • Safety • Performance</div>
            </div>
          </Link>

          {/* Desktop nav (kept for desktop) */}
          <nav className="navLinks" aria-label="Main navigation">
            <Link className="navItem" href="/">Home</Link>

            <div className="navItem" role="button" aria-haspopup="true">
              Services ▾
              <div className="dropdown" aria-label="Services menu">
                <Link href="/services/air-duct-cleaning">Air Duct Cleaning</Link>
                <Link href="/services/dryer-vent-cleaning">Dryer Vent Cleaning</Link>
                <Link href="/services/chimney-sweep-and-repair">Chimney Sweep And Repair</Link>
                <Link href="/services/attic-insulation-services">Attic Insulation Services</Link>
                <Link href="/services/commercial-duct-cleaning">Commercial Duct Cleaning</Link>
              </div>
            </div>

            <Link className="navItem" href="/contact">Contact</Link>

            <div className="navItem" role="button" aria-haspopup="true">
              Locations ▾
              <div className="dropdown" aria-label="Locations menu">
                <Link href="/locations/sunny-isles-air-duct-solution">
                  Sunny Isles Air Duct Cleaning
                </Link>
                <Link href="/locations/dania-beach-air-duct-solution">
                  Dania Beach Air Duct Cleaning
                </Link>
              </div>
            </div>

            <Link className="navItem" href="/blog">Blog</Link>
            <Link className="navItem" href="/faqs">FAQ&apos;S</Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="menuBtn"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰ Menu
          </button>

          <a className="phoneBtn" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
            📞 <strong>{phoneDisplay}</strong>
          </a>

          {/* Mobile panel */}
          <div className={`mobilePanel ${menuOpen ? "open" : ""}`} role="dialog" aria-label="Mobile menu">
            <div className="mobileRow">
              <Link className="mobileLink" href="/" onClick={closeAll}>Home</Link>
              <Link className="mobileLink" href="/contact" onClick={closeAll}>Contact</Link>
              <Link className="mobileLink" href="/blog" onClick={closeAll}>Blog</Link>
              <Link className="mobileLink" href="/faqs" onClick={closeAll}>FAQ&apos;S</Link>

              {/* Services dropdown */}
              <div className="mobileDrop">
                <button
                  type="button"
                  className="mobileDropBtn"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  Services <span>{servicesOpen ? "▴" : "▾"}</span>
                </button>

                {servicesOpen && (
                  <div>
                    <Link href="/services/air-duct-cleaning" onClick={closeAll}>Air Duct Cleaning</Link>
                    <Link href="/services/dryer-vent-cleaning" onClick={closeAll}>Dryer Vent Cleaning</Link>
                    <Link href="/services/chimney-sweep-and-repair" onClick={closeAll}>Chimney Sweep And Repair</Link>
                    <Link href="/services/attic-insulation-services" onClick={closeAll}>Attic Insulation Services</Link>
                    <Link href="/services/commercial-duct-cleaning" onClick={closeAll}>Commercial Duct Cleaning</Link>
                  </div>
                )}
              </div>

              {/* Locations dropdown */}
              <div className="mobileDrop">
                <button
                  type="button"
                  className="mobileDropBtn"
                  onClick={() => setLocationsOpen((v) => !v)}
                  aria-expanded={locationsOpen}
                >
                  Locations <span>{locationsOpen ? "▴" : "▾"}</span>
                </button>

                {locationsOpen && (
                  <div>
                    <Link href="/locations/sunny-isles-air-duct-solution" onClick={closeAll}>
                      Sunny Isles Air Duct Cleaning
                    </Link>
                    <Link href="/locations/dania-beach-air-duct-solution" onClick={closeAll}>
                      Dania Beach Air Duct Cleaning
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
