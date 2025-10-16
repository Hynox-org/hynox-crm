"use client";

import Image from "next/image"; // Import the Image component
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Icon as IconifyIcon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";
import { motion } from "framer-motion"; // Added for smooth animations
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [showCountryMenu, setShowCountryMenu] = useState(false);
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const mounted = useIsMounted();

  useEffect(() => {
    if (mounted) {
      const storedCode = localStorage.getItem("countryCode");
      if (storedCode) {
        setCountryCode(storedCode);
      } else {
        fetch(process.env.NEXT_COUNTRYCODE_API)
          .then((res) => res.json())
          .then((data) => {
            const code = `EN-${data.country_code}`;
            setCountryCode(code);
            localStorage.setItem("countryCode", code);
          })
          .catch(() => setCountryCode("EN-IN"));
      }
    }
  }, [mounted]);

  // Modern color palette inspired by 2025 trends: deep midnight blue, burning red accents, aquamarine for highlights, cream neutrals
  // Using Tailwind classes with custom variables or extend in config

  const countryFlags = {
    "EN-IN": "twemoji:flag-india",
    "EN-US": "twemoji:flag-united-states",
    "EN-UK": "twemoji:flag-united-kingdom",
    "EN-AU": "twemoji:flag-australia",
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
          className="flex items-center space-x-2"
        >
          <Image
            src="/hynox_logo.jpg"
            alt="HYNOX Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-2xl font-bold text-foreground hover:text-red-600 transition-colors">
            CRM
          </div>
          <div className="flex space-x-1">
            <motion.div
              className="w-2 h-2 rounded-full bg-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
            ></motion.div>
            <motion.div
              className="w-2 h-2 rounded-full bg-blue-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            ></motion.div>
            <motion.div
              className="w-2 h-2 rounded-full bg-green-800"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
            ></motion.div>
            <motion.div
              className="w-2 h-2 rounded-full bg-yellow-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.9 }}
            ></motion.div>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          <motion.a
            href="/"
            className="text-foreground hover:text-red-600 transition-colors relative group"
            whileHover={{ y: -2 }}
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </motion.a>
          <motion.a
            href="https://www.hynox.in/about"
            target="_blank"
            className="text-foreground hover:text-blue-600 transition-colors relative group"
            whileHover={{ y: -2 }}
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </motion.a>
          <motion.a
            href="https://www.hynox.in/#services"
            target="_blank"
            className="text-foreground hover:text-teal-400 transition-colors relative group"
            whileHover={{ y: -2 }}
          >
            Services
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </motion.a>
        </nav>

        <div className="flex items-center space-x-4">
          {mounted && (
            <div className="hidden md:flex items-center space-x-4">
              {/* 🌐 Country Code Display */}
              <div className="relative">
                <button
                  onClick={() => setShowCountryMenu(!showCountryMenu)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition"
                >
                  <div className="relative w-5 h-5">
                    <IconifyIcon
                      icon={
                        countryFlags[countryCode] ||
                        "twemoji:globe-showing-asia-australia"
                      }
                      className="absolute inset-0 w-4 h-4 translate-x-0.5 translate-y-0.5"
                    />
                  </div>
                  <span>{countryCode}</span>
                </button>

                {/* Dropdown menu   */}
                {showCountryMenu && (
                  <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg py-2 w-36 z-50">
                    {Object.entries(countryFlags).map(([code, flagIcon]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setCountryCode(code);
                          localStorage.setItem("countryCode", code);
                          setShowCountryMenu(false);
                        }}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <div className="relative w-5 h-5">
                          <IconifyIcon
                            icon="solar:globe-bold-duotone"
                            className="absolute inset-0 w-5 h-5 opacity-70"
                          />
                          <IconifyIcon
                            icon={flagIcon}
                            className="absolute inset-0 w-4 h-4 translate-x-0.5 translate-y-0.5"
                          />
                        </div>
                        <span>{code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {isAuthenticated ? (
                <Button
                  onClick={() => {
                    logout();
                    router.push("/");
                  }}
                  className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <button
                    onClick={() => router.push("/auth/login")}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 border hover:border-black px-4 py-2 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <span>Login</span>
                  </button>
                  <Link
                    href="/auth/signup"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <Button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-red-500/50 transition-all">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          )}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-red-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
        >
          <nav className="flex flex-col space-y-4 p-4 text-center">
            <a
              href="#"
              className="text-foreground hover:text-red-600 transition-colors py-2"
            >
              Home
            </a>
            <a
              href="https://www.hynox.in/about"
              target="_blank"
              className="text-foreground hover:text-blue-600 transition-colors py-2"
            >
              About
            </a>
            <a
              href="https://www.hynox.in/#services"
              target="_blank"
              className="text-foreground hover:text-teal-400 transition-colors py-2"
            >
              Services
            </a>
            {mounted && (
              <>
                {/* 🌐 Country Code Display */}
                <div className="relative mx-auto">
                  <button
                    onClick={() => setShowCountryMenu(!showCountryMenu)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition py-2"
                  >
                    <div className="relative w-5 h-5">
                      <IconifyIcon
                        icon={
                          countryFlags[countryCode] ||
                          "twemoji:globe-showing-asia-australia"
                        }
                        className="absolute inset-0 w-4 h-4 translate-x-0.5 translate-y-0.5"
                      />
                    </div>
                    <span>{countryCode}</span>
                  </button>

                  {/* Dropdown menu   */}
                  {showCountryMenu && (
                    <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg py-2 w-36 z-50">
                      {Object.entries(countryFlags).map(([code, flagIcon]) => (
                        <button
                          key={code}
                          onClick={() => {
                            setCountryCode(code);
                            localStorage.setItem("countryCode", code);
                            setShowCountryMenu(false);
                          }}
                          className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          <div className="relative w-5 h-5">
                            <IconifyIcon
                              icon="solar:globe-bold-duotone"
                              className="absolute inset-0 w-5 h-5 opacity-70"
                            />
                            <IconifyIcon
                              icon={flagIcon}
                              className="absolute inset-0 w-4 h-4 translate-x-0.5 translate-y-0.5"
                            />
                          </div>
                          <span>{code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {isAuthenticated ? (
                  <Button
                    onClick={() => {
                      logout();
                      router.push("/");
                    }}
                    className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-red-500/50 transition-all"
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <button
                      onClick={() => router.push("/auth/login")}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 border hover:border-black px-4 py-2 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      <span>Login</span>
                    </button>
                    <Link
                      href="/auth/signup"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      <Button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-red-500/50 transition-all">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
