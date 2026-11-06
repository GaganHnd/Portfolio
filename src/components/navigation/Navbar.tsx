"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { personalInfo } from "@/data/social-links";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { Menu, X, Mail, ChevronDown } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/animations/SmoothScrollProvider";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [mobileContactExpanded, setMobileContactExpanded] = useState(false);
  const contactDropdownRef = useRef<HTMLDivElement>(null);
  const contactButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { lenis, scrollTo } = useLenis();

  // Desktop hover handlers with touch check and debounce bridge
  const handleContactMouseEnter = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setContactDropdownOpen(true);
    }
  };

  const handleContactMouseLeave = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      closeTimeoutRef.current = setTimeout(() => {
        setContactDropdownOpen(false);
      }, 150);
    }
  };

  const handleContactButtonClick = (e: React.MouseEvent) => {
    // Touch screens: preserve tap-to-toggle behaviour
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) {
      setContactDropdownOpen((prev) => !prev);
    } else {
      // Desktop: remove click-to-toggle behaviour as requested
      e.preventDefault();
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Handle outside click & Escape key to close desktop contact dropdown
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        contactDropdownRef.current &&
        !contactDropdownRef.current.contains(e.target as Node)
      ) {
        setContactDropdownOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setContactDropdownOpen(false);
        contactButtonRef.current?.focus();
      }
    };

    if (contactDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [contactDropdownOpen]);

  // Reset mobile expanded state when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileContactExpanded(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const currentPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentPos >= top && currentPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape and manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen, lenis]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        scrollTo(targetElement, { offset: -70, duration: 1.25 });
        setMobileMenuOpen(false);
      } else if (pathname !== "/") {
        e.preventDefault();
        setMobileMenuOpen(false);
        router.push(`/${href}`);
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 lg:px-20",
          scrolled
            ? "py-3.5 sm:py-4 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "py-5 sm:py-7 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Wordmark: GAGAN. */}
          <MagneticWrapper strength={0.2}>
            <Link
              href="/"
              className="text-base sm:text-lg md:text-xl font-heading font-extrabold tracking-tight text-white uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white group flex items-center gap-1.5 sm:gap-2 flex-shrink-0"
              aria-label="Gagan Handral Homepage"
            >
              <span>{personalInfo.wordmark}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            </Link>
          </MagneticWrapper>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              if (item.label === "CONTACT") {
                return (
                  <div
                    key="CONTACT"
                    className="relative"
                    ref={contactDropdownRef}
                    onMouseEnter={handleContactMouseEnter}
                    onMouseLeave={handleContactMouseLeave}
                    onBlur={(e) => {
                      if (!contactDropdownRef.current?.contains(e.relatedTarget as Node)) {
                        setContactDropdownOpen(false);
                      }
                    }}
                  >
                    <MagneticWrapper strength={0.15}>
                      <button
                        ref={contactButtonRef}
                        type="button"
                        onClick={handleContactButtonClick}
                        onFocus={() => {
                          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                          setContactDropdownOpen(true);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") {
                            setContactDropdownOpen(false);
                          } else if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setContactDropdownOpen(true);
                          }
                        }}
                        aria-haspopup="true"
                        aria-expanded={contactDropdownOpen}
                        aria-controls="contact-dropdown-menu"
                        className={cn(
                          "font-mono text-xs uppercase tracking-widest transition-colors py-1 relative flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white group cursor-pointer",
                          contactDropdownOpen || activeSection === "contact"
                            ? "text-white font-semibold"
                            : "text-neutral-400 hover:text-white"
                        )}
                      >
                        <span>CONTACT</span>
                        <ChevronDown
                          className={cn(
                            "w-3 h-3 text-neutral-400 transition-transform duration-200 group-hover:text-white",
                            contactDropdownOpen && "rotate-180 text-[#B7FF00]"
                          )}
                          aria-hidden="true"
                        />
                        {(contactDropdownOpen || activeSection === "contact") && (
                          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transition-all" />
                        )}
                      </button>
                    </MagneticWrapper>

                    {/* Dropdown Menu */}
                    <div
                      id="contact-dropdown-menu"
                      role="menu"
                      aria-orientation="horizontal"
                      className={cn(
                        "absolute right-0 top-full mt-3 flex items-center justify-center gap-3.5 border border-white/15 bg-[#050505]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(183,255,0,0.06)] p-3 transition-all duration-200 ease-out z-50 before:absolute before:-top-3.5 before:left-0 before:right-0 before:h-3.5 before:content-['']",
                        contactDropdownOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      {/* 1. LinkedIn Tile */}
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        aria-label="LinkedIn Profile"
                        onClick={() => setContactDropdownOpen(false)}
                        className="w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-[#B7FF00] hover:border-[#B7FF00]/50 hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white group cursor-pointer"
                      >
                        <LinkedInIcon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
                      </a>

                      {/* 2. Email Tile */}
                      <a
                        href={`mailto:${personalInfo.email}`}
                        role="menuitem"
                        aria-label="Send Email"
                        onClick={() => setContactDropdownOpen(false)}
                        className="w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-[#B7FF00] hover:border-[#B7FF00]/50 hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white group cursor-pointer"
                      >
                        <Mail className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
                      </a>
                    </div>
                  </div>
                );
              }

              const isActive = activeSection === item.href.substring(1);
              const navHref = pathname === "/" ? item.href : `/${item.href}`;
              return (
                <MagneticWrapper key={item.label} strength={0.15}>
                  <a
                    href={navHref}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "font-mono text-xs uppercase tracking-widest transition-colors py-1 relative",
                      isActive
                        ? "text-white font-semibold"
                        : "text-neutral-400 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transition-all" />
                    )}
                  </a>
                </MagneticWrapper>
              );
            })}

            {/* Availability Badge */}
            <div className="pl-4 border-l border-white/10">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 border border-white/10 px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span>AVAILABLE</span>
              </span>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white border border-white/10 hover:border-white/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white flex-shrink-0"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-between px-6 sm:px-8 py-24 sm:py-28 md:hidden overflow-y-auto"
        >
          <div className="space-y-4">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4 sm:mb-6">
              Navigation Menu
            </span>
            {navItems.map((item, index) => (
              <div key={item.label} className="border-b border-white/10 pb-4">
                {item.label === "CONTACT" ? (
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setMobileContactExpanded((prev) => !prev)}
                      aria-expanded={mobileContactExpanded}
                      aria-controls="mobile-contact-options"
                      className="w-full flex items-baseline justify-between text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-tight hover:text-neutral-300 transition-colors text-left focus-visible:outline-none"
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-neutral-400 transition-transform duration-300",
                            mobileContactExpanded && "rotate-180 text-[#B7FF00]"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
                    </button>

                    {mobileContactExpanded && (
                      <div
                        id="mobile-contact-options"
                        className="pt-3 pl-1 flex items-center gap-3.5 transition-all duration-200"
                      >
                        {/* 1. LinkedIn */}
                        <a
                          href={personalInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileContactExpanded(false);
                          }}
                          className="w-14 h-14 border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-[#B7FF00] hover:border-[#B7FF00]/50 hover:bg-white/10 transition-all duration-200 group"
                        >
                          <LinkedInIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                        </a>

                        {/* 2. Email */}
                        <a
                          href={`mailto:${personalInfo.email}`}
                          aria-label="Send Email"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileContactExpanded(false);
                          }}
                          className="w-14 h-14 border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-[#B7FF00] hover:border-[#B7FF00]/50 hover:bg-white/10 transition-all duration-200 group"
                        >
                          <Mail className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={pathname === "/" ? item.href : `/${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-baseline justify-between text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-tight hover:text-neutral-300 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-6 sm:pt-8 border-t border-white/10 mt-8">
            <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Gagan Handral
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Graphic Designer · UI/UX Designer
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Available for select projects
            </div>
          </div>
        </div>
      )}
    </>
  );
}
