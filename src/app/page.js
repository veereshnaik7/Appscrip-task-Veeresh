import Image from "next/image";
import styles from "./page.module.css";
import ProductsSection from "@/components/products/ProductsSection";
import HeadSection from "@/components/headSection/HeadSection";

export default function Home() {
  return (
    <main className={`${styles.main} mainDiv`}  style={{width:"100%"}}>
      <HeadSection />
      <ProductsSection />
    </main>
  );
}
