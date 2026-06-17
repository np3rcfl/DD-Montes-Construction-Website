"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="mb-10 bg-white rounded-xl px-6 py-4">
        <Image
          src="/images/logo.png"
          alt="DD Montes Construction"
          width={120}
          height={60}
          className="object-contain"
        />
      </div>

      <div className="w-full max-w-sm">
        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/40 text-center mb-3">
          Private Preview
        </p>
        <h1 className="heading-display text-3xl text-white text-center tracking-tight mb-8">
          Enter Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            required
            className="w-full px-5 py-3.5 rounded-full bg-white/8 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors"
          />

          {error && (
            <p className="text-red-400 text-xs text-center">
              Incorrect password. Try again.
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-[#111111] text-sm font-bold rounded-full hover:bg-[#F0EDE8] transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Checking..." : "View Site"}
            {!loading && <ArrowRight size={14} weight="bold" />}
          </button>
        </form>

        <p className="text-white/20 text-xs text-center mt-8">
          DD Montes Construction &nbsp;·&nbsp; Hawthorne, CA
        </p>
      </div>
    </div>
  );
}
