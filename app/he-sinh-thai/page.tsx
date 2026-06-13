"use client"

import { useMemo, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CATEGORIES, ecosystem, type Category } from "@/data/ecosystem"

type Filter = Category | "all"

export default function EcosystemPage() {
  const [filter, setFilter] = useState<Filter>("all")
  const [query, setQuery] = useState("")

  const projects = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ecosystem
      .filter((p) => filter === "all" || p.categories.includes(filter))
      .filter(
        (p) =>
          q === "" ||
          p.name.toLowerCase().includes(q) ||
          p.url.toLowerCase().includes(q)
      )
      .sort((a, b) => a.name.localeCompare(b.name, "vi"))
  }, [filter, query])

  return (
    <div className="flex min-h-svh flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/ethvn.svg" alt="ETH.vn" width={32} height={32} priority className="h-8 w-8" />
          <span className="text-base tracking-tight">ETH.vn</span>
        </Link>
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Trang chủ
        </Link>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10 md:pt-16">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Hệ sinh thái
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            Khám phá {ecosystem.length}+ dự án đang xây dựng trên Ethereum.
          </p>
        </div>

        {/* Filters + search */}
        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
              Tất cả
            </FilterPill>
            {CATEGORIES.map((c) => (
              <FilterPill key={c} active={filter === c} onClick={() => setFilter(c)}>
                {c}
              </FilterPill>
            ))}
          </div>

          <div className="relative w-full lg:w-64 lg:shrink-0">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm kiếm"
              className="h-10 w-full border border-border bg-background pr-4 pl-9 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-foreground/40 focus-visible:ring-2 focus-visible:ring-ring/30"
            />
          </div>
        </div>

        {/* List */}
        <div className="mt-6 overflow-hidden border border-border">
          {projects.length === 0 ? (
            <p className="px-6 py-16 text-center text-sm text-muted-foreground">
              Không tìm thấy dự án nào.
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {projects.map((p) => (
                <li key={p.name}>
                  <a
                    href={`https://${p.url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 px-4 py-4 transition-colors hover:bg-muted/40 sm:px-6"
                  >
                    {/* Logo / fallback */}
                    {p.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="size-10 shrink-0 object-contain"
                      />
                    ) : (
                      <div className="flex size-10 shrink-0 items-center justify-center bg-muted text-base font-bold text-foreground">
                        {p.name.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="font-semibold text-foreground">{p.name}</div>
                      <div className="truncate text-sm text-muted-foreground">{p.url}</div>
                    </div>

                    <div className="ml-auto hidden flex-wrap items-center justify-end gap-2 sm:flex">
                      {p.categories.map((c) => (
                        <Badge
                          key={c}
                          variant="secondary"
                          className="tracking-wide uppercase"
                        >
                          {c}
                        </Badge>
                      ))}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  )
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-foreground hover:bg-muted"
      )}
    >
      {children}
    </button>
  )
}
