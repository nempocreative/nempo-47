import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { SedangDipersiapkan } from "@/components/sedang-dipersiapkan";
import { Shirt } from "lucide-react";

export default function MerchandisePage() {
  return (
    <Layout>
      <SEO title="Merchandise Komunitas Kala Muda" noIndex />
      <SedangDipersiapkan
        icon={Shirt}
        iconGradient="linear-gradient(135deg, #0172B1, #1BA0E2)"
        dotColor1="#0194f3"
        dotColor2="#7DD3FC"
        title="Sedang Dipersiapkan"
        titleHighlight="Penuh Semangat"
        description="Merchandise resmi komunitas Kala Muda × Nempo — kaos, topi, tumbler, dan aksesoris kece buat anggota dan pendukung komunitas. Segera hadir."
        btn1Label="Gabung Komunitas"
        btn1Href="/komunitas"
        btn2Label="Daftar Recruitment"
        btn2Href="/recruitment"
      />
    </Layout>
  );
}
