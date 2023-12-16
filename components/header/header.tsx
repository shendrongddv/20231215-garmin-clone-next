import Link from "next/link";
import { Icons } from "../ui/icons";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-background px-6">
      <div className="container flex h-14 items-center justify-between gap-4 md:h-16">
        {/* SiteLogo */}
        <Link href="/" aria-label="Garmin">
          <Icons.Garmin className="h-5 w-auto" />
        </Link>

        {/* NavDesktop */}

        {/* Search */}
        <div className="flex items-center justify-center gap-4">
          <Search className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
