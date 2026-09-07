"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Mail, Phone, MapPin, Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import { services } from "@/data/services";
import { brands } from "@/data/brands";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  const handleMoreMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setMoreDropdown(true);
  };

  const handleMoreMouseLeave = () => {
    const timeout = setTimeout(() => {
      setMoreDropdown(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleServicesMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdown(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleBrandsMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setBrandsDropdown(true);
  };

  const handleBrandsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setBrandsDropdown(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  return (
    <header className="w-full text-white relative z-50">
      {/* ================= TOP BAR ================= */}
      <div className="bg-gradient-to-r from-orange-900 to-orange-700 text-xs text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex justify-between items-center">
          {/* LEFT */}
          <div className="flex flex-wrap gap-6 items-center"> 
  {/* Email */}
  <Link href="mailto:germanfitness@email.com" className="group">
    <span className="flex items-center gap-2 cursor-pointer transition-all duration-300 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1">
      <Mail size={16} className="text-orange-500" />
      <span className="text-sm font-medium">germanfitness@email.com</span>
    </span>
  </Link>

  {/* Phone */}
  <Link href="tel:+923001234567" className="group">
    <span className="flex items-center gap-2 cursor-pointer transition-all duration-300 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1">
      <Phone size={16} className="text-orange-500" />
      <span className="text-sm font-medium">+92 300 1234567</span>
    </span>
  </Link>

  {/* Address */}
  <Link href="https://google.com" className="group">
    <span className="flex items-center gap-2 cursor-pointer transition-all duration-300 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1">
      <MapPin size={16} className="text-orange-500" />
      <span className="text-sm font-medium">68-A, Main Fateh Sher Road, Sahiwal</span>
    </span>
  </Link>
</div>


          {/* RIGHT */}
          <div className="flex gap-4 items-center">
            <FaFacebookF className="cursor-pointer text-lg transition-all duration-200 hover:text-blue-400 hover:scale-110" />
            <FaTwitter className="cursor-pointer text-lg transition-all duration-200 hover:text-sky-400 hover:scale-110" />
            <FaGooglePlusG className="cursor-pointer text-lg transition-all duration-200 hover:text-red-400 hover:scale-110" />
            <FaInstagram className="cursor-pointer text-lg transition-all duration-200 hover:text-pink-400 hover:scale-110" />
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="text-orange-500 font-extrabold text-xl tracking-wide">
            <Link href="/">
              <Image
                src="/images/german-and-fitness.png"
                alt="Gym-logo"
                width={200}
                height={200}
                className="h-20 w-auto md:h-[6rem] lg:h-[10rem] transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 text-sm text-gray-600 font-bold uppercase">
            <Link
              href="classes"
              className="hover:text-orange-500 transition"
            >
              Classes
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesDropdown && (
                <div
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                  className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-700 rounded-lg shadow-lg z-50"
                >
                  <div className="py-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-600 hover:text-white transition font-semibold"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-gray-400 hover:bg-orange-600 hover:text-white transition"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="about"
              className="hover:text-orange-500 transition"
            >
              About
            </Link>

            <Link
              href="contact"
              className="hover:text-orange-500 transition"
            >
              Contact
            </Link>

            {/* Brands Mega Menu */}
            <div className="relative">
              <button
                onMouseEnter={handleBrandsMouseEnter}
                onMouseLeave={handleBrandsMouseLeave}
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                Brands
                <ChevronDown className="w-4 h-4" />
              </button>

              {brandsDropdown && (
                <div
                  onMouseEnter={handleBrandsMouseEnter}
                  onMouseLeave={handleBrandsMouseLeave}
                  className="absolute top-full left-0 mt-2 w-[800px] bg-black border border-gray-700 rounded-lg shadow-lg z-50"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-4 gap-4">
                      {brands.slice(0, 12).map((brand) => (
                        <Link
                          key={brand.id}
                          href={`/brands/${brand.slug}`}
                          className="block p-3 rounded-lg hover:bg-gray-800 transition"
                        >
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                            {brand.name.charAt(0)}
                          </div>
                          <p className="text-sm text-gray-300 font-semibold">{brand.name}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <Link
                        href="/brands"
                        className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition"
                      >
                        View All Brands →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleMoreMouseEnter}
                onMouseLeave={handleMoreMouseLeave}
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                More
                <ChevronDown className="w-4 h-4" />
              </button>

              {moreDropdown && (
                <div
                  onMouseEnter={handleMoreMouseEnter}
                  onMouseLeave={handleMoreMouseLeave}
                  className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-lg"
                >
                  <div className="py-2">
                    <Link
                      href="/shop"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-600 hover:text-white transition"
                    >
                      Shop
                    </Link>
                    <Link
                      href="team"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-600 hover:text-white transition"
                    >
                      Team
                    </Link>
                    <Link
                      href="/pricing"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-600 hover:text-white transition"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-600 hover:text-white transition"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/bmi-calculater"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-600 hover:text-white transition"
                    >
                      BMI Calculater
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {session?.user ? (
              <div className="hidden lg:flex items-center gap-3">
                <Link href="/dashboard" className="bg-orange-500 px-4 py-2 text-sm font-bold text-white uppercase hover:bg-orange-400 transition">
                  Dashboard
                </Link>
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-300">{session.user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-orange-500 px-4 py-2 text-sm font-bold text-white uppercase hover:bg-orange-400 transition"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="hidden lg:block bg-orange-500 px-6 py-3 text-sm font-bold text-white uppercase hover:bg-orange-400 transition">
                Dashboard
              </Link>
            )}

            {/* Mobile Toggle */}
            <button
              className="lg:hidden bg-orange-500 p-3"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden absolute left-0 w-full bg-black/95 backdrop-blur transition-all duration-300 ${
            open ? "top-20 opacity-100" : "top-14 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 py-8 text-sm font-semibold uppercase">
            <Link
              href="classes"
              className="hover:text-orange-500 transition"
              onClick={() => setOpen(false)}
            >
              Classes
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="flex flex-col items-center gap-2 w-full px-8">
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {servicesDropdown && (
                <div className="flex flex-col items-center gap-2 mt-2 w-full">
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-orange-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="text-sm text-gray-400 hover:text-orange-500 transition"
                      onClick={() => setOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="about"
              className="hover:text-orange-500 transition"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              href="contact"
              className="hover:text-orange-500 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Brands Dropdown */}
            <div className="flex flex-col items-center gap-2 w-full px-8">
              <button
                onClick={() => setBrandsDropdown(!brandsDropdown)}
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                Brands
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${brandsDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {brandsDropdown && (
                <div className="flex flex-col items-center gap-2 mt-2 w-full max-h-60 overflow-y-auto">
                  <Link
                    href="/brands"
                    className="text-sm text-gray-400 hover:text-orange-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    All Brands
                  </Link>
                  {brands.slice(0, 10).map((brand) => (
                    <Link
                      key={brand.id}
                      href={`/brands/${brand.slug}`}
                      className="text-sm text-gray-400 hover:text-orange-500 transition"
                      onClick={() => setOpen(false)}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile More Dropdown */}
            <div className="flex flex-col items-center gap-2 w-full px-8">
              <button
                onClick={() => setMoreDropdown(!moreDropdown)}
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                More
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${moreDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {moreDropdown && (
                <div className="flex flex-col items-center gap-2 mt-2">
                  <Link
                    href="/shop"
                    className="text-sm text-gray-400 hover:text-orange-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    href="team"
                    className="text-sm text-gray-400 hover:text-orange-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    Team
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-sm text-gray-400 hover:text-orange-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-400 hover:text-orange-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/bmi-calculater"
                    className="text-sm text-gray-400 hover:text-orange-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    BMI Calculator
                  </Link>
                </div>
              )}
            </div>

            {session?.user ? (
              <div className="mt-4 flex flex-col items-center gap-3">
                <Link
                  href="/dashboard"
                  className="bg-orange-500 px-8 py-3 text-white text-sm font-bold uppercase"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-300">{session.user.name}</span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 bg-orange-500 px-6 py-3 text-white text-sm font-bold uppercase"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="mt-4 bg-orange-500 px-8 py-3 text-white text-sm font-bold uppercase"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
