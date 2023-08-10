import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />

      <p className="text-center">Some Graphics for XYZ Company</p>
      <Showcase />
      <Footer />
    </main>
  );
}
