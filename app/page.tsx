import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center gap-8 px-6 py-20 text-center sm:gap-10">
      {/* Logo */}
      <Image
        src="/ethvn.svg"
        alt="ETH.vn"
        width={160}
        height={160}
        priority
        className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32"
      />

      <div className="flex max-w-3xl flex-col items-center gap-5 sm:gap-6">
        {/* Heading */}
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Bách khoa toàn thư mở về{" "}
          <span className="whitespace-nowrap">
            <span className="bg-[linear-gradient(110deg,#1d4ed8_0%,#7c3aed_38%,#db2777_68%,#ea580c_100%)] bg-clip-text pr-0.5 font-serif italic text-transparent">
              Ethereum
            </span>
            <span aria-hidden>.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          Bản đồ các tài nguyên hữu ích, điểm khởi đầu và những người đang định
          hình tương lai của Ethereum.
        </p>

        <Button className="mt-1">Sắp ra mắt!</Button>
      </div>

      {/* Dark mode hint */}
      <div className="absolute bottom-6 font-mono text-xs text-muted-foreground">
        (Nhấn <kbd>d</kbd> để chuyển đổi chế độ tối)
      </div>
    </main>
  )
}
