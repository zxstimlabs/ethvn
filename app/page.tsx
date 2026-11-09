import Image from "next/image"

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-10 bg-background px-4">
      <Image
        src="/logo.svg"
        alt="ETH Việt Nam"
        width={439}
        height={176}
        loading="eager"
        fetchPriority="high"
        className="h-auto w-56 sm:w-72 dark:invert"
      />
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Sắp ra mắt
      </h1>
    </main>
  )
}
