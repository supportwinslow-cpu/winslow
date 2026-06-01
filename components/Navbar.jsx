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
  Grid3X3,
} from "lucide-react";

import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";

import { useState, useRef, useEffect, useMemo } from "react";

import products from "@/data/products";

const shopItems = [
  {
    name: "Door Visor",
    href: "/shop/door-visor",
    img: "/products/door-visor.png",
    desc: "Premium rain protection",
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
    desc: "Smart storage upgrade",
  },
  {
    name: "Steering Knob",
    href: "/shop/steering-knob",
    img: "/products/steering-knob.png",
    desc: "Smooth driving comfort",
  },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
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

  if (text.includes("door visor")) return `/shop/door-visor/${product.slug}`;
  if (text.includes("door edge guard") || text.includes("door guard")) {
    return `/shop/door-edge-guard/${product.slug}`;
  }
  if (text.includes("parcel tray")) return `/shop/parcel-tray/${product.slug}`;
  if (text.includes("steering knob")) return `/shop/steering-knob/${product.slug}`;

  return `/shop/${product.slug}`;
};

function SearchResultsDropdown({ results, onClose }) {
  return (
    <div className="absolute left-0 top-14.5 z-50 max-h-107.5 w-full overflow-y-auto overflow-x-hidden rounded-[28px] border border-[#2F2FE4]/15 bg-white text-[#111827] shadow-[0_28px_90px_rgba(47,47,228,0.18)]">
      {results.length > 0 ? (
        results.map((item) => (
          <Link
            key={item.id}
            href={item.slug}
            onClick={onClose}
            className="group flex items-center gap-4 border-b border-[#2F2FE4]/8 px-4 py-3 transition last:border-none hover:bg-[#2F2FE4]/5"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#F3F5FF]">
              <Image
                src={item.image}
                fill
                sizes="64px"
                alt={item.name}
                className="object-contain p-2 transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-black uppercase tracking-wide text-[#111827] group-hover:text-[#2F2FE4]">
                {item.name}
              </h4>

              <p className="mt-1 truncate text-xs font-semibold text-gray-500">
                {item.category}
              </p>
            </div>

            <div className="shrink-0 rounded-full bg-[#2F2FE4] px-3 py-1.5 text-xs font-black text-white">
              ₹{item.price}
            </div>
          </Link>
        ))
      ) : (
        <div className="px-5 py-8 text-center">
          <p className="text-sm font-black uppercase text-[#111827]">
            No products found
          </p>
          <p className="mt-1 text-xs font-semibold text-gray-500">
            Try searching door visor, parcel tray, guard...
          </p>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const [shopOpen, setShopOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const shopRef = useRef(null);
  const profileRef = useRef(null);
  const searchRef = useRef(null);

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
      if (shopRef.current && !shopRef.current.contains(e.target)) {
        setShopOpen(false);
      }

      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }

      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
        setSearchOpen(false);
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
    setSearchOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    setProfileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#2F2FE4]/10 bg-white/95 text-[#111827] shadow-[0_10px_35px_rgba(47,47,228,0.08)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="flex h-19 items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-13.5 w-13.5 items-center justify-center overflow-hidden rounded-2xl border border-[#2F2FE4]/15 bg-white p-1.5 shadow-[0_14px_35px_rgba(47,47,228,0.12)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-[#2F2FE4]/45">
              <Image
                src="/logo.png"
                alt="Winslow logo"
                width={54}
                height={54}
                priority
                className="object-contain"
              />
            </div>

            <div>
              <p className="text-base font-black uppercase leading-none tracking-tight text-[#111827]">
                Winslow
              </p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#2F2FE4]">
                Premium Accessories
              </p>
            </div>
          </Link>

          {/* CENTER NAV */}
          <div className="hidden items-center rounded-2xl border border-[#2F2FE4]/10 bg-[#F7F8FF] p-1.5 lg:flex">
            <Link
              href="/"
              className="rounded-xl px-5 py-3 text-sm font-black uppercase tracking-wide text-[#111827] transition hover:bg-white hover:text-[#2F2FE4] hover:shadow-sm"
            >
              Home
            </Link>

            <div className="relative" ref={shopRef}>
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="flex items-center gap-2 rounded-xl bg-[#2F2FE4] px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_30px_rgba(47,47,228,0.25)] transition hover:bg-[#2424c9]"
              >
                Shop
                <ChevronDown
                  size={16}
                  className={`transition duration-300 ${shopOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {shopOpen && (
                <div className="absolute left-1/2 top-15.5 z-50 w-190 -translate-x-1/2 overflow-hidden rounded-[34px] border border-[#2F2FE4]/15 bg-white p-4 shadow-[0_35px_110px_rgba(47,47,228,0.20)] animate-fadeIn">
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2F2FE4]/10 blur-3xl" />
                  <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#2F2FE4]/6 blur-3xl" />

                  <div className="relative grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
                    {/* LEFT PROMO */}
                    <div className="overflow-hidden rounded-[28px] bg-[#2F2FE4] p-6 text-white">
                      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2">
                        <Sparkles size={15} />
                        <span className="text-xs font-black uppercase tracking-[0.18em]">
                          Collection
                        </span>
                      </div>

                      <h3 className="text-3xl font-black uppercase leading-tight">
                        Premium Car
                        <span className="block text-white/80">
                          Accessories
                        </span>
                      </h3>

                      <p className="mt-4 text-sm font-medium leading-7 text-white/75">
                        Explore best quality accessories made for perfect fit,
                        style and daily protection.
                      </p>

                      <Link
                        href="/shop"
                        onClick={() => setShopOpen(false)}
                        className="group mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#2F2FE4]"
                      >
                        View All Products
                        <ArrowRight
                          size={15}
                          className="ml-2 transition group-hover:translate-x-1"
                        />
                      </Link>
                    </div>

                    {/* PRODUCT LINKS */}
                    <div className="grid grid-cols-2 gap-3">
                      {shopItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setShopOpen(false)}
                          className="group relative overflow-hidden rounded-3xl border border-[#2F2FE4]/10 bg-white p-3 transition hover:-translate-y-1 hover:border-[#2F2FE4]/40 hover:bg-[#F7F8FF] hover:shadow-[0_18px_45px_rgba(47,47,228,0.12)]"
                        >
                          <div className="relative h-26.25 overflow-hidden rounded-[20px] bg-[#EEF0FF]">
                            <Image
                              src={item.img}
                              fill
                              sizes="160px"
                              className="object-contain p-3 transition duration-500 group-hover:scale-110"
                              alt={item.name}
                            />
                          </div>

                          <div className="mt-3 flex items-end justify-between gap-2">
                            <div>
                              <h4 className="text-sm font-black uppercase tracking-tight text-[#111827] group-hover:text-[#2F2FE4]">
                                {item.name}
                              </h4>
                              <p className="mt-1 text-xs font-semibold text-gray-500">
                                {item.desc}
                              </p>
                            </div>

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2F2FE4] text-white">
                              <ArrowRight size={15} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-xl px-5 py-3 text-sm font-black uppercase tracking-wide text-[#111827] transition hover:bg-white hover:text-[#2F2FE4] hover:shadow-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* EXPAND SEARCH */}
            <div className="relative hidden md:block" ref={searchRef}>
              {searchOpen ? (
                <div className="flex h-12 w-90 items-center rounded-2xl border border-[#2F2FE4]/20 bg-[#F7F8FF] px-4 shadow-[0_14px_38px_rgba(47,47,228,0.12)]">
                  <Search size={18} className="text-[#2F2FE4]" />

                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="flex-1 bg-transparent px-3 text-sm font-semibold text-[#111827] outline-none placeholder:text-gray-400"
                  />

                  <button
                    onClick={closeSearch}
                    className="text-gray-400 transition hover:text-[#2F2FE4]"
                  >
                    <X size={17} />
                  </button>

                  {showDropdown && (
                    <SearchResultsDropdown
                      results={results}
                      onClose={closeSearch}
                    />
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2F2FE4]/12 bg-white text-[#111827] shadow-sm transition hover:border-[#2F2FE4]/45 hover:bg-[#2F2FE4] hover:text-white"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* USER */}
            <div className="relative" ref={profileRef}>
              {user ? (
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex h-12 items-center gap-2 rounded-2xl border border-[#2F2FE4]/12 bg-white px-2 shadow-sm transition hover:border-[#2F2FE4]/45 hover:bg-[#2F2FE4]/5"
                >
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="user"
                      width={38}
                      height={38}
                      className="rounded-xl"
                    />
                  ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F2FE4] text-sm font-black uppercase text-white">
                      {user.displayName?.charAt(0) ||
                        user.email?.charAt(0) ||
                        "U"}
                    </div>
                  )}

                  <span className="hidden pr-2 text-sm font-bold text-[#111827] xl:block">
                    {user.displayName || "User"}
                  </span>
                </button>
              ) : (
                <Link
                  href="/login"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2F2FE4]/12 bg-white text-[#111827] shadow-sm transition hover:border-[#2F2FE4]/45 hover:bg-[#2F2FE4] hover:text-white"
                >
                  <User size={20} />
                </Link>
              )}

              {profileOpen && (
                <div className="absolute right-0 top-15 z-50 w-72 overflow-hidden rounded-[28px] border border-[#2F2FE4]/15 bg-white text-[#111827] shadow-[0_25px_80px_rgba(47,47,228,0.16)] animate-fadeIn">
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
                      onClick={handleLogout}
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
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2F2FE4]/12 bg-white text-[#111827] shadow-sm transition hover:border-[#2F2FE4]/45 hover:bg-[#2F2FE4] hover:text-white"
            >
              <ShoppingCart size={20} />

              {totalCartItems > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#2F2FE4] text-[11px] font-black text-white shadow-[0_0_16px_rgba(47,47,228,0.55)]">
                  {totalCartItems}
                </span>
              )}
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2F2FE4]/12 bg-white text-[#111827] shadow-sm transition hover:border-[#2F2FE4]/45 hover:bg-[#2F2FE4] hover:text-white lg:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-[#2F2FE4]/10 pb-5 pt-4 lg:hidden animate-fadeIn">
            <div className="relative mb-4" ref={searchRef}>
              <div className="flex h-12 items-center rounded-2xl border border-[#2F2FE4]/12 bg-[#F7F8FF] px-4">
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

            <div className="grid gap-2 rounded-[26px] bg-[#F7F8FF] p-3">
              {[
                { name: "Home", href: "/" },
                { name: "Shop", href: "/shop" },
                { name: "Door Visor", href: "/shop/door-visor" },
                { name: "Door Guard", href: "/shop/door-edge-guard" },
                { name: "Parcel Tray", href: "/shop/parcel-tray" },
                { name: "Steering Knob", href: "/shop/steering-knob" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] transition hover:text-[#2F2FE4]"
                >
                  {item.name}
                  <ArrowRight size={15} className="text-[#2F2FE4]" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.22s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </nav>
  );
}