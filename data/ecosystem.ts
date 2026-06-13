// Danh sách các dự án trong hệ sinh thái Ethereum.
// Thêm dự án mới bằng cách thêm một object vào mảng `ecosystem` bên dưới.
//
//   {
//     name: "Tên dự án",
//     url: "vidu.com",                 // không cần https://
//     categories: ["DeFi", "Ví"],      // chọn từ CATEGORIES bên dưới
//     logo: "/logos/vidu.svg",         // (tuỳ chọn) ảnh trong /public hoặc URL
//   }
//
// Nếu không có `logo`, danh sách sẽ tự hiển thị chữ cái đầu của tên.

export const CATEGORIES = [
  "DeFi",
  "Ví",
  "Stablecoin",
  "NFT",
  "Trò chơi",
  "Layer 2",
  "Cầu nối",
  "Hạ tầng",
  "Công cụ phát triển",
  "DAO",
] as const

export type Category = (typeof CATEGORIES)[number]

export interface EcosystemProject {
  name: string
  url: string
  categories: Category[]
  logo?: string
  description?: string
}

export const ecosystem: EcosystemProject[] = [
  { name: "1inch", url: "1inch.io", categories: ["DeFi"] },
  { name: "Aave", url: "aave.com", categories: ["DeFi"] },
  { name: "Alchemy", url: "alchemy.com", categories: ["Hạ tầng", "Công cụ phát triển"] },
  { name: "Arbitrum", url: "arbitrum.io", categories: ["Layer 2", "Hạ tầng"] },
  { name: "Base", url: "base.org", categories: ["Layer 2", "Hạ tầng"] },
  { name: "Chainlink", url: "chain.link", categories: ["Hạ tầng"] },
  { name: "Curve", url: "curve.fi", categories: ["DeFi", "Stablecoin"] },
  { name: "ENS", url: "ens.domains", categories: ["Hạ tầng"] },
  { name: "Etherscan", url: "etherscan.io", categories: ["Công cụ phát triển"] },
  { name: "Lido", url: "lido.fi", categories: ["DeFi"] },
  { name: "MetaMask", url: "metamask.io", categories: ["Ví"] },
  { name: "OpenSea", url: "opensea.io", categories: ["NFT"] },
  { name: "Optimism", url: "optimism.io", categories: ["Layer 2", "Hạ tầng"] },
  { name: "Polygon", url: "polygon.technology", categories: ["Layer 2", "Hạ tầng"] },
  { name: "Safe", url: "safe.global", categories: ["Ví", "DAO"] },
  { name: "Sky (MakerDAO)", url: "sky.money", categories: ["DeFi", "Stablecoin"] },
  { name: "The Graph", url: "thegraph.com", categories: ["Hạ tầng", "Công cụ phát triển"] },
  { name: "Uniswap", url: "uniswap.org", categories: ["DeFi"] },
]
