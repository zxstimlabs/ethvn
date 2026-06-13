import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Code2,
  Compass,
  Globe,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"

const FEATURES = [
  {
    icon: BookOpen,
    title: "Kiến thức",
    desc: "Tìm hiểu Ethereum từ cơ bản đến chuyên sâu, bằng tiếng Việt.",
    highlighted: false,
  },
  {
    icon: Users,
    title: "Cộng đồng",
    desc: "Kết nối với những người đang xây dựng Ethereum tại Việt Nam.",
    highlighted: true,
  },
  {
    icon: Compass,
    title: "Tài nguyên",
    desc: "Công cụ, hướng dẫn và điểm khởi đầu cho nhà phát triển.",
    highlighted: false,
  },
]

const STATS = [
  { value: "$400 tỷ+", label: "Vốn hóa Ethereum" },
  { value: "1Tr+", label: "Trình xác thực" },
  { value: "11 năm", label: "Vận hành liên tục" },
  { value: "$80 tỷ+", label: "Tổng giá trị khóa" },
]

const PILLARS = [
  {
    icon: Globe,
    title: "Phi tập trung toàn cầu",
    desc: "Hàng nghìn nút mạng trên khắp thế giới cùng vận hành Ethereum — không một cá nhân hay tổ chức nào kiểm soát.",
  },
  {
    icon: Code2,
    title: "Hợp đồng thông minh",
    desc: "Ứng dụng và logic tài chính chạy chính xác như được lập trình, không cần bên trung gian.",
  },
  {
    icon: ShieldCheck,
    title: "An toàn & đáng tin cậy",
    desc: "Được bảo vệ bởi hàng triệu trình xác thực và hơn một thập kỷ vận hành liên tục.",
  },
  {
    icon: Network,
    title: "Cầu nối, không phải ốc đảo",
    desc: "Tương thích với các mạng Layer 2 và hệ sinh thái khác — giá trị di chuyển tự do, liền mạch.",
  },
]

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Hero viewport */}
      <div className="flex min-h-svh flex-col">
        {/* Nav */}
        <Header />

        {/* Upper half: hero image */}
        <div className="relative h-[45svh] w-full overflow-hidden md:h-[50svh]">
          <Image
            src="/ethereum-hero.png"
            alt="Minh hoạ hệ sinh thái Ethereum"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Lower half: text */}
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center">
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Kỷ nguyên Internet</span>
            <span className="block">thuộc về bạn</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg md:text-xl">
            Tài nguyên, điểm khởi đầu và những người đang định hình tương lai của
            Ethereum tại Việt Nam.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <Button className="h-12 w-full px-7 text-sm font-semibold sm:w-auto">
              Khám phá ngay
            </Button>
            <Button
              variant="secondary"
              className="h-12 w-full px-7 text-sm font-semibold sm:w-auto"
            >
              Đóng góp
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Dự án cộng đồng, phi lợi nhuận và mã nguồn mở.
          </p>
        </main>
      </div>

      {/* Feature cards */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc, highlighted }) => (
            <Link
              key={title}
              href="#"
              className={cn(
                "group flex min-h-[240px] flex-col justify-between p-7 transition-colors",
                highlighted
                  ? "bg-muted hover:bg-muted/70"
                  : "border border-border bg-background hover:border-foreground/20"
              )}
            >
              <div className="flex items-start justify-between">
                <Icon className="size-7 text-foreground" strokeWidth={2} />
                {highlighted ? (
                  <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                ) : (
                  <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-24 text-center md:pb-32">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Nơi cả thế giới giao dịch onchain.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          Ethereum dẫn đầu ở những chỉ số quan trọng nhất.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={cn(
                "flex flex-col items-center px-4",
                i > 0 && "md:border-l md:border-border"
              )}
            >
              <span className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {value}
              </span>
              <span className="mt-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Ethereum */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            <span className="text-foreground">Ethereum</span>{" "}
            <span className="text-muted-foreground">
              là nền tảng cho tài chính mở ở quy mô toàn cầu.
            </span>
          </h2>
          <Link
            href="/he-sinh-thai"
            className={buttonVariants({ variant: "secondary", size: "default" })}
          >
            Khám phá hệ sinh thái
            <ChevronRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col">
              <div className="flex aspect-[16/10] items-center justify-center border border-border bg-muted/40">
                <Icon className="size-16 text-foreground" strokeWidth={1.25} />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 max-w-md text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
        <div className="relative overflow-hidden bg-foreground px-8 py-16 md:px-16 md:py-20">
          <div className="relative max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl md:text-5xl">
              Bắt đầu xây dựng trên Ethereum.
            </h2>
            <p className="mt-4 max-w-md text-base text-background/70 sm:text-lg">
              Xây dựng trên nền kinh tế mở. Nhanh, thanh khoản và luôn hoạt động.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 bg-background px-7 text-sm font-semibold text-foreground hover:bg-background/90">
                Bắt đầu xây dựng
              </Button>
              <Button className="h-12 bg-background/15 px-7 text-sm font-semibold text-background hover:bg-background/25">
                Liên hệ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
