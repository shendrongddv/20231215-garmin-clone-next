import { Icons } from "@/components/ui/icons";
import { fakeBlogs } from "@/config/faker";
import Link from "next/link";

const Section_Blogs = () => {
  return (
    <section className="px-6 pt-24">
      <div className="container flex flex-col items-center gap-12">
        <h2 className="text-center font-display text-3xl uppercase text-foreground">
          Berita Terbaru
        </h2>

        {/* Row */}
        <ul className="grid w-full gap-12 sm:grid-cols-2 md:grid-cols-3">
          {fakeBlogs?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col items-center gap-3 text-center font-body md:items-start md:text-start"
            >
              <span className="rounded bg-foreground p-1 px-2 text-xs leading-none text-white">
                {item.tag}
              </span>

              <h3>{item.title}</h3>

              <Link
                href={item.url}
                aria-label={item.title}
                className="mt-2 text-sm text-blue-600 underline underline-offset-4 transition-transform"
              >
                Pelajari Lebih Lanjut{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section_Blogs;
