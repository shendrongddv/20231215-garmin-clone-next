import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
