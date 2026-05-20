"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ShoppingCart,
  Search,
  User,
  ChevronDown,
  LogOut,
  Menu,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";

import { useState, useRef, useEffect, useMemo } from "react";

// CHANGE THIS PATH ACCORDING TO YOUR PROJECT
import products from "@/data/products";

const shopItems = [
  {
    name: "Door Visor",
    href: "/shop/door-visor",
    img: "/products/door-visor.png",
    desc: "Rain protection",
  },
  {
    name: "Door Guard",
    href: "/shop/door-edge-guard",
    img: "/products/door-guard.png",
    desc: "Scratch protection",
  },
  {
    name: "Parcel Tray",
    href: "/shop/parcel-tray",
    img: "/products/parcel-tray.png",
    desc: "Storage solution",
  },
  {
    name: "Steering Knob",
    href: "/shop/steering-knob",
    img: "/products/steering-knob.png",
    desc: "Smooth driving",
  },
];

const toArray = (value) => {
  if (Array.isArray(value)) return value;
  if (value) return [value];
  return [];
};

const getProductHref = (product) => {
  const text = [
    product.name,
    product.category,
    product.series,
    product.brand,
    ...toArray(product.tags),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (text.includes("door visor")) {
    return `/shop/door-visor/${product.slug}`;
  }

  if (text.includes("door edge guard") || text.includes("door guard")) {
    return `/shop/door-edge-guard/${product.slug}`;
  }

  if (text.includes("parcel tray")) {
    return `/shop/parcel-tray/${product.slug}`;
  }

  if (text.includes("steering knob")) {
    return `/shop/steering-knob/${product.slug}`;
  }

  return `/shop/${product.slug}`;
};

function SearchResultsDropdown({ results, onClose }) {
  return (
    <div className="absolute left-0 top-14 z-50 max-h-105 w-full overflow-y-auto overflow-x-hidden rounded-3xl border border-[#2F2FE4]/15 bg-white text-[#111827] shadow-[0_25px_80px_rgba(47,47,228,0.16)] backdrop-blur-2xl animate-fadeIn">
      {results.length > 0 ? (
        results.map((item) => (
          <Link
            key={item.id}
            href={item.slug}
            onClick={onClose}
            className="group flex items-center gap-4 border-b border-gray-100 px-4 py-3 transition last:border-none hover:bg-[#2F2FE4]/5"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#F5F6FF]">
              <Image
                src={item.image}
                fill
                sizes="56px"
                alt={item.name}
                className="object-contain p-2 transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-black uppercase tracking-wide text-[#111827] group-hover:text-[#2F2FE4]">
                {item.name}
              </h4>

              <p className="mt-1 truncate text-xs font-medium text-gray-500">
                {item.category}
              </p>
            </div>

            <div className="shrink-0 text-sm font-black text-[#2F2FE4]">
              ₹{item.price}
            </div>
          </Link>
        ))
      ) : (
        <div className="px-4 py-5 text-sm font-medium text-gray-500">
          No products found
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const searchData = useMemo(() => {
    return products.map((product) => {
      const carBrands = toArray(product.carBrand);
      const carModels = toArray(product.carModel);
      const tags = toArray(product.tags);
      const features = toArray(product.features);

      const categoryLabel =
        product.series || product.category?.replaceAll("-", " ") || "Product";

      const searchText = [
        product.name,
        product.slug,
        product.sku,
        product.brand,
        product.series,
        product.category,
        product.description,
        ...carBrands,
        ...carModels,
        ...tags,
        ...features,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return {
        id: product.id || product.slug,
        name: product.name,
        slug: getProductHref(product),
        image: product.images?.[0] || "/products/placeholder.png",
        price: product.price || product.variants?.[0]?.price || 0,
        category: categoryLabel,
        searchText,
      };
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }

      const clickedInsideDesktopSearch =
        desktopSearchRef.current &&
        desktopSearchRef.current.contains(e.target);

      const clickedInsideMobileSearch =
        mobileSearchRef.current && mobileSearchRef.current.contains(e.target);

      if (!clickedInsideDesktopSearch && !clickedInsideMobileSearch) {
        setShowDropdown(false);
      }

      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const words = query.toLowerCase().trim().split(/\s+/);

    const filtered = searchData
      .filter((item) => words.every((word) => item.searchText.includes(word)))
      .slice(0, 8);

    setResults(filtered);
    setShowDropdown(true);
  }, [query, searchData]);

  const totalCartItems = cartItems?.length || 0;

  const closeSearch = () => {
    setQuery("");
    setResults([]);
    setShowDropdown(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 px-3 py-3 text-[#111827] backdrop-blur-2xl">
      <div className="relative mx-auto max-w-7xl overflow-visible rounded-[1.7rem] border border-[#2F2FE4]/10 bg-white/95 shadow-[0_14px_45px_rgba(47,47,228,0.10)]">
        <div className="absolute left-1/2 top-0 h-px w-[88%] -translate-x-1/2 bg-linear-to-r from-transparent via-[#2F2FE4]/55 to-transparent" />

        <div className="flex h-18 items-center justify-between px-4 sm:px-5 lg:px-6">
          {/* LOGO */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl border border-[#2F2FE4]/15 bg-white p-1.5 shadow-[0_14px_35px_rgba(47,47,228,0.12)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#2F2FE4]/45 group-hover:shadow-[0_18px_45px_rgba(47,47,228,0.20)]">
              <Image
                src="/logo.png"
                alt="Winslow logo"
                width={52}
                height={52}
                priority
                className="object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-black uppercase tracking-wide text-[#111827]">
                Winslow
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2F2FE4]">
                Premium Accessories
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-[#F7F8FF] p-1 text-sm font-black uppercase tracking-wide text-gray-600 lg:flex">
            <Link
              href="/"
              className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#2F2FE4] hover:shadow-sm"
            >
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1.5 rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#2F2FE4] hover:shadow-sm"
              >
                Shop
                <ChevronDown
                  size={16}
                  className={`transition duration-300 ${open ? "rotate-180" : ""
                    }`}
                />
              </button>

              {open && (
                <div className="absolute left-1/2 top-14 z-50 w-155 -translate-x-1/2 overflow-hidden rounded-4xl border border-[#2F2FE4]/15 bg-white p-4 shadow-[0_30px_90px_rgba(47,47,228,0.18)] backdrop-blur-2xl animate-fadeIn">
                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#2F2FE4]/10 blur-3xl" />
                  <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-[#2F2FE4]/45 to-transparent" />

                  <div className="relative mb-4 flex items-center justify-between rounded-[1.4rem] bg-[#F7F8FF] p-4">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#2F2FE4] shadow-sm">
                        <Sparkles size={13} />
                        Shop Collection
                      </div>

                      <p className="text-xs font-medium normal-case tracking-normal text-gray-500">
                        Premium accessories made for better car upgrades
                      </p>
                    </div>

                    <Link
                      href="/shop"
                      onClick={() => setOpen(false)}
                      className="group flex items-center rounded-full bg-[#2F2FE4] px-4 py-2 text-[11px] font-black uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(47,47,228,0.25)] transition hover:bg-[#2424c9]"
                    >
                      View All
                      <ArrowRight
                        size={14}
                        className="ml-1.5 transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                  <div className="relative grid grid-cols-2 gap-3">
                    {shopItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group/item relative overflow-hidden rounded-3xl border border-[#2F2FE4]/10 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F2FE4]/40 hover:bg-[#F7F8FF] hover:shadow-[0_18px_45px_rgba(47,47,228,0.12)]"
                      >
                        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2F2FE4]/0 blur-2xl transition group-hover/item:bg-[#2F2FE4]/12" />

                        <div className="relative flex items-center gap-4">
                          <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-2xl bg-[#EEF0FF]">
                            <Image
                              src={item.img}
                              fill
                              sizes="72px"
                              className="object-contain p-2 transition duration-300 group-hover/item:scale-110"
                              alt={item.name}
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wide text-[#111827] group-hover/item:text-[#2F2FE4]">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-xs font-medium normal-case tracking-normal text-gray-500">
                              {item.desc}
                            </p>

                            <p className="mt-2 text-[10px] font-black uppercase tracking-wide text-[#2F2FE4]">
                              Explore →
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#2F2FE4] hover:shadow-sm"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#2F2FE4] hover:shadow-sm"
            >
              Contact
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* DESKTOP SEARCH */}
            <div className="relative hidden xl:block" ref={desktopSearchRef}>
              <div className="flex h-12 w-82.5 items-center rounded-full border border-[#2F2FE4]/12 bg-[#F7F8FF] px-4 shadow-sm transition-all duration-300 focus-within:border-[#2F2FE4]/55 focus-within:bg-white focus-within:shadow-[0_16px_38px_rgba(47,47,228,0.14)]">
                <Search size={18} className="text-[#2F2FE4]" />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search accessories..."
                  className="flex-1 bg-transparent px-3 text-sm font-semibold text-[#111827] outline-none placeholder:text-gray-400"
                />

                {query && (
                  <button
                    onClick={closeSearch}
                    className="text-gray-400 transition hover:text-[#2F2FE4]"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {showDropdown && (
                <SearchResultsDropdown results={results} onClose={closeSearch} />
              )}
            </div>

            {/* USER */}
            <div className="relative" ref={profileRef}>
              {user ? (
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 rounded-full border border-[#2F2FE4]/12 bg-white px-1.5 py-1 shadow-sm transition hover:border-[#2F2FE4]/45 hover:bg-[#2F2FE4]/5"
                >
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="user"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2F2FE4] text-sm font-black uppercase text-white">
                      {user.displayName?.charAt(0) ||
                        user.email?.charAt(0) ||
                        "U"}
                    </div>
                  )}

                  <span className="hidden pr-2 text-sm font-bold text-[#111827] md:block">
                    {user.displayName || "User"}
                  </span>
                </button>
              ) : (
                <Link
                  href="/login"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2F2FE4]/12 bg-white text-[#111827] shadow-sm transition hover:border-[#2F2FE4]/45 hover:bg-[#2F2FE4] hover:text-white"
                >
                  <User size={20} />
                </Link>
              )}

              {profileOpen && (
                <div className="absolute right-0 top-14 z-50 w-72 overflow-hidden rounded-3xl border border-[#2F2FE4]/15 bg-white text-[#111827] shadow-[0_25px_80px_rgba(47,47,228,0.16)] backdrop-blur-2xl animate-fadeIn">
                  <div className="bg-[#F7F8FF] p-5">
                    <p className="font-black uppercase tracking-wide">
                      {user?.displayName || "User"}
                    </p>

                    <p className="mt-1 truncate text-sm text-gray-500">
                      {user?.email}
                    </p>
                  </div>

                  <div className="p-2">
                    <Link
                      href="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-[#2F2FE4]/5 hover:text-[#2F2FE4]"
                    >
                      <User size={18} />
                      My Profile
                    </Link>

                    <button
                      onClick={logout}
                      className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-red-500 transition hover:bg-red-50"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CART */}
            <Link
              href="/cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#2F2FE4]/12 bg-white text-[#111827] shadow-sm transition hover:border-[#2F2FE4]/45 hover:bg-[#2F2FE4] hover:text-white"
            >
              <ShoppingCart size={20} />

              {totalCartItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2F2FE4] text-[11px] font-black text-white shadow-[0_0_16px_rgba(47,47,228,0.55)]">
                  {totalCartItems}
                </span>
              )}
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2F2FE4]/12 bg-white text-[#111827] shadow-sm transition hover:border-[#2F2FE4]/45 hover:bg-[#2F2FE4] hover:text-white lg:hidden"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-gray-100 px-4 pb-4 lg:hidden animate-fadeIn">
            {/* MOBILE SEARCH */}
            <div className="relative mt-4" ref={mobileSearchRef}>
              <div className="flex h-12 items-center rounded-full border border-[#2F2FE4]/12 bg-[#F7F8FF] px-4 shadow-sm transition-all duration-300 focus-within:border-[#2F2FE4]/55 focus-within:bg-white">
                <Search size={18} className="text-[#2F2FE4]" />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search accessories..."
                  className="flex-1 bg-transparent px-3 text-sm font-semibold text-[#111827] outline-none placeholder:text-gray-400"
                />

                {query && (
                  <button
                    onClick={closeSearch}
                    className="text-gray-400 transition hover:text-[#2F2FE4]"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {showDropdown && (
                <SearchResultsDropdown
                  results={results}
                  onClose={() => {
                    closeSearch();
                    setMobileOpen(false);
                  }}
                />
              )}
            </div>

            <div className="mt-4 rounded-3xl bg-[#F7F8FF] p-3">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] hover:bg-white hover:text-[#2F2FE4]"
              >
                Home
              </Link>

              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] hover:bg-white hover:text-[#2F2FE4]"
              >
                Shop
              </Link>

              <Link
                href="/shop/door-visor"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] hover:bg-white hover:text-[#2F2FE4]"
              >
                Door Visor
              </Link>

              <Link
                href="/shop/door-edge-guard"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] hover:bg-white hover:text-[#2F2FE4]"
              >
                Door Guard
              </Link>

              <Link
                href="/shop/parcel-tray"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] hover:bg-white hover:text-[#2F2FE4]"
              >
                Parcel Tray
              </Link>

              <Link
                href="/shop/steering-knob"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] hover:bg-white hover:text-[#2F2FE4]"
              >
                Steering Knob
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] hover:bg-white hover:text-[#2F2FE4]"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] hover:bg-white hover:text-[#2F2FE4]"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}