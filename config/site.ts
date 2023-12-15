import { Box, Facebook, Instagram, Youtube } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Garmin Indonesia",
  description:
    "Menghadirkan teknologi GPS inovatif di berbagai pasar, termasuk penerbangan, kelautan, kebugaran, rekreasi luar ruangan, pelacakan, dan aplikasi seluler.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};

// SocialLinks
export const siteSocialLinks = [
  {
    id: 1,
    label: "Facebook",
    icon: Facebook,
    url: "/",
  },
  {
    id: 2,
    label: "YouTube",
    icon: Youtube,
    url: "/",
  },
  {
    id: 3,
    label: "Instagram",
    icon: Instagram,
    url: "/",
  },
];

// NavHeader
export const siteNavHeader = [
  {
    id: 1,
    label: "Products",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Live Chat",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Chat Pages",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Contacts",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Knowledge Base",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 5,
        label: "AI Assist",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: true,
      },
    ],
  },
  {
    id: 2,
    label: "Services",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Hire Chat Agents",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Hire a Virtual Assistant",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Virtual Assistant Use Cases",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Customers",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
    ],
  },
  {
    id: 3,
    label: "Partners",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Become a Partner",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Partner Directory",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
    ],
  },
  {
    id: 4,
    label: "Resources",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Help Center",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Academy",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Developers",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Blog",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 5,
        label: "Community",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
    ],
  },
  {
    id: 4,
    label: "Why Free?",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: false,
  },
];

// NavFooter
export const siteNavFooter = [
  {
    id: 1,
    label: "LAYANAN PELANGGAN",
    sublinks: [
      {
        id: 1,
        label: "Pusat Dukungan",
        url: "/",
      },
      {
        id: 2,
        label: "Service Center",
        url: "/",
      },
      {
        id: 3,
        label: "Hubungi Kami",
        url: "/",
      },
      {
        id: 4,
        label: "Garmin Brand Store",
        url: "/",
      },
      {
        id: 5,
        label: "Pencari Toko",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    label: "PERUSAHAAN",
    sublinks: [
      {
        id: 1,
        label: "Tentang Garmin",
        url: "/",
      },
      {
        id: 2,
        label: "Ruang Wartawan",
        url: "/",
      },
      {
        id: 3,
        label: "Investors",
        url: "/",
      },
      {
        id: 4,
        label: "Corporate Sustainability",
        url: "/",
      },
      {
        id: 5,
        label: "Garmin Blog",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    label: "APLIKASI",
    sublinks: [
      {
        id: 1,
        label: "Garmin Connect",
        url: "/",
      },
      {
        id: 2,
        label: "Garmin Express",
        url: "/",
      },
      {
        id: 3,
        label: "Garmin Explore",
        url: "/",
      },
      {
        id: 4,
        label: "Connect IQ",
        url: "/",
      },
      {
        id: 5,
        label: "Garmin Sports",
        url: "/",
      },
    ],
  },
  {
    id: 4,
    label: "KEMITRAAN",
    sublinks: [
      {
        id: 1,
        label: "Garmin Health",
        url: "/",
      },
      {
        id: 2,
        label: "OEM Otomotif",
        url: "/",
      },
      {
        id: 3,
        label: "Developers",
        url: "/",
      },
      {
        id: 4,
        label: "Partnership Contact",
        url: "/",
      },
    ],
  },
];
