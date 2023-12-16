import { fakeProducts } from "@/config/faker";
import Image from "next/image";

const Section_Products = () => {
  return (
    <section className="px-6 pt-24">
      <div className="container grid gap-8 md:grid-cols-3">
        {fakeProducts?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-6 overflow-hidden rounded-md border p-6"
          >
            {/* # */}
            <figure className="mx-auto aspect-1 w-1/2 overflow-hidden md:w-3/4">
              <Image
                src={`/products/${item.media}`}
                alt={item.title}
                width={480}
                height={480}
                className="h-full w-auto object-cover"
              />
            </figure>

            {/* # */}
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="font-display text-2xl text-foreground">
                {item.title}
              </h3>

              <p className="pb-4 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_Products;
