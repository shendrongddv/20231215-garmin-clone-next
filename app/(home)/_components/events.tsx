import { fakeEvents } from "@/config/faker";
import Image from "next/image";

const Section_Events = () => {
  return (
    <section className="px-6 pt-24">
      <div className="container flex flex-col items-center gap-12">
        <h2 className="text-center font-display text-3xl uppercase text-foreground">
          Acara & Tautan Terkait
        </h2>

        {/* Row */}
        <ul className="grid w-full gap-12 sm:grid-cols-2 md:grid-cols-3">
          {fakeEvents?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-md border shadow-lg"
            >
              {/* # */}
              <figure className="aspect-h-3 aspect-w-4 overflow-hidden">
                <Image
                  src={`/${item.image}`}
                  alt={item.title}
                  width={800}
                  height={576}
                  className="h-full w-auto object-cover transition duration-500 group-hover:scale-105"
                />
              </figure>

              {/* # */}
              <div className="grid gap-4 p-6">
                <h3 className="font-display text-xl text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section_Events;
