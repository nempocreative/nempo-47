import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Link } from "@/lib/wouter";
import rompiImage from "@/assets/merch-rompi-nempo-kalamuda-v3.jpg";

export default function MerchandisePage() {
  return (
    <Layout>
      <SEO title="Merchandise Komunitas Kala Muda" noIndex />
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <span className="inline-flex rounded-full border border-[#a62f78]/25 bg-[#fce7f3] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#a62f78]">
          Merchandise Komunitas
        </span>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-[#182b39] sm:text-4xl">
          Merch resmi Kala Muda × Nempo
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#5f6b6f] sm:text-base">
          Pakai bareng anggota dan pendukung komunitas — di event, kegiatan, atau nongkrong sehari-hari.
        </p>

        <article className="mt-8 overflow-hidden rounded-3xl border border-[#dce4fb] bg-white shadow-sm md:grid md:grid-cols-[1.4fr_1fr]">
          <img src={rompiImage} alt="Rompi Nempo tampak depan dan belakang" width={1280} height={960} loading="lazy" className="h-full w-full bg-[#eef0f3] object-cover" />
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <span className="w-fit rounded-full bg-[#182b39] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">Segera hadir</span>
            <h2 className="text-2xl font-black text-[#182b39]">Rompi Nempo</h2>
            <p className="text-sm leading-6 text-[#5f6b6f]">
              Rompi utility warna navy dengan aksen gradasi biru-ungu khas Kala Muda, logo nempo di dada dan lambang "n" besar di punggung, ditemani logo kecil KALA MUDA. Banyak kantong, pas buat crew dan anggota komunitas.
            </p>
            <ul className="space-y-1.5 text-sm text-[#182b39]">
              <li>• Kantong depan + saku ritsleting</li>
              <li>• Strap samping bisa disesuaikan</li>
              <li>• Lapisan dalam jaring, adem dipakai</li>
            </ul>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <Link href="/komunitas" className="inline-flex justify-center rounded-full bg-[#a62f78] px-5 py-3 text-sm font-bold text-white hover:bg-[#862761]">
                Gabung Komunitas
              </Link>
              <Link href="/recruitment" className="inline-flex justify-center rounded-full border border-[#c8c8e7] px-5 py-3 text-sm font-bold text-[#49346e] hover:border-[#a62f78]/50">
                Daftar Recruitment
              </Link>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}
