"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const NAV = [
  {
    label: "Khám phá",
    items: [
      {
        title: "Hệ sinh thái",
        href: "/he-sinh-thai",
        desc: "Các dự án đang xây dựng trên Ethereum.",
      },
      { title: "Bắt đầu", href: "#", desc: "Những bước đầu tiên với Ethereum." },
      {
        title: "Câu hỏi thường gặp",
        href: "#",
        desc: "Giải đáp các thắc mắc phổ biến.",
      },
    ],
  },
  {
    label: "Tài liệu",
    items: [
      {
        title: "Hợp đồng thông minh",
        href: "#",
        desc: "Lập trình ứng dụng phi tập trung.",
      },
      { title: "Ví & bảo mật", href: "#", desc: "Quản lý tài sản an toàn." },
      { title: "Layer 2", href: "#", desc: "Mở rộng quy mô cho Ethereum." },
    ],
  },
  {
    label: "Cộng đồng",
    items: [
      { title: "Sự kiện", href: "#", desc: "Gặp gỡ cộng đồng Ethereum Việt Nam." },
      { title: "Đóng góp", href: "#", desc: "Cùng xây dựng nội dung mở." },
      { title: "Thảo luận", href: "#", desc: "Tham gia các kênh trao đổi." },
    ],
  },
  {
    label: "Tài nguyên",
    items: [
      {
        title: "Công cụ nhà phát triển",
        href: "#",
        desc: "SDK, API và hạ tầng.",
      },
      { title: "Bảng thuật ngữ", href: "#", desc: "Hiểu các khái niệm cốt lõi." },
      { title: "Liên kết hữu ích", href: "#", desc: "Tổng hợp tài nguyên chọn lọc." },
    ],
  },
]

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5 md:px-10">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Image
          src="/ethvn.svg"
          alt="ETH.vn"
          width={32}
          height={32}
          priority
          className="h-8 w-8"
        />
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-1">
          {NAV.map((group) => (
            <NavigationMenuItem key={group.label}>
              <NavigationMenuTrigger className="text-sm font-medium">
                {group.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-1 p-2">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink
                        render={<Link href={item.href} />}
                        className="flex-col items-start gap-1 p-3"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {item.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.desc}
                        </span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="h-10 px-5 text-sm font-semibold">
        Bắt đầu
        <ChevronRight className="size-4" />
      </Button>
    </header>
  )
}
