"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { fakeBanners } from "@/config/faker";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Section_Banners = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <section ref={sliderRef} className="keen-slider">
      {fakeBanners?.map((item) => (
        <div key={item.id} className="keen-slider__slide number-slide1">
          {/* # Desktop */}
          <div className="relative hidden w-full md:flex md:items-center md:justify-center">
            <figure className="aspect-h-3 aspect-w-10 z-0 w-full">
              <Image
                src={`/banners/${item.media.desktop}`}
                alt={item.title}
                width={1024}
                height={291}
                className="h-full w-auto object-cover"
              />
            </figure>

            <div className="container absolute z-10">
              <div className="flex flex-col items-center gap-4 px-6 py-12 text-center text-white md:items-start md:px-0">
                <h2 className="font-display text-3xl uppercase md:text-4xl">
                  {item.title}
                </h2>
                <p className="md:text-xl">{item.subtitle}</p>

                <Button
                  asChild
                  variant="outline"
                  className="mt-4 rounded-none bg-transparent"
                >
                  <Link href={item.link.url} aria-label={item.link.label}>
                    {item.link.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* # Mobile */}
          <div className="flex flex-col md:hidden">
            <figure className="aspect-1">
              <Image
                src={`/banners/${item.media.mobile}`}
                alt={item.title}
                width={480}
                height={480}
                className="h-full w-auto object-cover"
              />
            </figure>

            <div className="flex flex-col items-center gap-4 bg-black px-6 py-12 text-center text-white">
              <h2 className="font-display text-3xl uppercase md:text-4xl">
                {item.title}
              </h2>
              <p className="md:text-xl">{item.subtitle}</p>

              <Button
                asChild
                variant="outline"
                className="mt-4 rounded-none bg-transparent"
              >
                <Link href={item.link.url} aria-label={item.link.label}>
                  {item.link.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section_Banners;
