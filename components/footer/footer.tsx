import { siteNavFooter, siteSocialLinks } from "@/config/site";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

const AdditionalLinks = [
  {
    id: 1,
    label: "Site Map",
    url: "/",
  },
  {
    id: 2,
    label: "Terms of Use",
    url: "/",
  },
  {
    id: 3,
    label: "Privacy",
    url: "/",
  },
  {
    id: 4,
    label: "Keamanan",
    url: "/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground px-4 pt-24 text-sm text-white">
      <div className="container flex flex-col gap-12">
        {/* Row */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          {siteNavFooter?.map((item) => (
            <div key={item.id} className="grid gap-4">
              <span className="font-display text-lg font-bold">
                {item.label}
              </span>

              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
                {item.sublinks?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      aria-label={item.label}
                      className="hover:underline hover:underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Row */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <span>Indonesia (Bahasa Indonesia)</span>

          <ul className="flex items-center justify-center gap-4">
            {siteSocialLinks?.map((item) => (
              <li key={item.id}>
                <SocialItem {...item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Row */}
        <div className="-mt-4 flex flex-col-reverse items-center gap-6 border-t border-white/10 py-8 text-xs md:flex-row md:justify-between">
          <span>Copyright © 1996-2023 Garmin Ltd. or its subsidiaries</span>

          <ul className="flex items-center justify-center gap-4">
            {AdditionalLinks?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  aria-label={item.label}
                  className="hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

type SocialItemProps = {
  label: string;
  icon: LucideIcon;
  url: string;
};
const SocialItem = ({ label, icon: Icon, url }: SocialItemProps) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className="grid h-8 w-8 place-content-center rounded bg-background/5"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
};
