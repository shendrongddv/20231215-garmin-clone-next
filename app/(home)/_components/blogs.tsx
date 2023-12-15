import { fakeBlogs } from "@/config/faker";
import Link from "next/link";

const Section_Blogs = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-center font-display text-3xl font-bold uppercase">
          Berita Terbaru
        </h2>

        {/* Row */}
        <ul className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3">
          {fakeBlogs?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col items-center gap-2 text-center md:items-start md:text-start"
            >
              <span className="rounded bg-foreground p-1 px-2 text-xs leading-none text-white">
                {item.tag}
              </span>

              <h3 className="text-lg font-medium">{item.title}</h3>

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
