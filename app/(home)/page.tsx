import Section_Banners from "./_components/banners";
import Section_Blogs from "./_components/blogs";
import Section_Events from "./_components/events";
import Section_Products from "./_components/products";
import Section_Subscribe from "./_components/subscribe";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section_Banners />

      {/* Products */}
      <Section_Products />

      {/* Events */}
      <Section_Events />

      {/* Blogs */}
      <Section_Blogs />

      {/* Subscrivbe */}
      <Section_Subscribe />
    </>
  );
}
