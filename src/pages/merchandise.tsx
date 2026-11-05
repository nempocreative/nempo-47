import { useState } from "react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Link } from "@/lib/wouter";
import rompiImage from "@/assets/merch-rompi-nempo-kalamuda-v5.jpg";
import rompiLapanganImage from "@/assets/merch-rompi-lapangan-nempo-v2.jpg";

const products = [
  {
    name: "Rompi Lapangan Nempo",
    image: rompiLapanganImage,
    desc: "Rompi crew lapangan dengan webbing modular di depan, aksen gradasi biru-ungu Kala Muda dan strip reflektif. Semua alat penting di lapangan punya tempatnya sendiri.",
    features: [
      "Holster HT di dada + kantong HP",
      "Slot pulpen/spidol, gantungan lakban dan D-ring karabiner",
      "Kantong kargo besar + kantong botol jaring di samping",
      "Webbing modular di depan, punggung polos dengan logo besar",
      "Strip reflektif buat kerja malam",
    ],
  },
  {
    name: "Rompi Nempo",
    image: rompiImage,
    desc: "Rompi utility warna navy dengan aksen gradasi biru-ungu khas Kala Muda, logo nempo di dada dan lambang \"n\" besar di punggung, ditemani logo kecil KALA MUDA.",
    features: ["Kantong depan + saku ritsleting", "Strap samping bisa disesuaikan", "Lapisan dalam jaring, adem dipakai"],
  },
];

function VestSpinner({ image, name }: { image: string; name: string }) {
  const [paused, setPaused] = useState(false);
  const face = (side: "front" | "back") => (
    <div
      className={`merch-face merch-${side}`}
      role="img"
      aria-label={`${name} tampak ${side === "front" ? "depan" : "belakang"}`}
      style={{ backgroundImage: `url(${image})`, backgroundPosition: side === "front" ? "0% 50%" : "100% 50%" }}
    />
  );
  return (
    <div className="relative flex flex-col items-center bg-gradient-to-b from-[#d8d8d8] to-[#e1e1e1] px-6 pb-5 pt-8">
      <button
        type="button"
        onClick={() => setPaused((v) => !v)}
        className="merch-stage"
        aria-label={paused ? "Putar lagi rompi" : "Hentikan putaran rompi"}
      >
        <div className={`merch-spin ${paused ? "is-paused" : ""}`}>
          {face("front")}
          {face("back")}
        </div>
        <span aria-hidden className="merch-shadow" />
      </button>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b7280]">
        {paused ? "Ketuk untuk memutar" : "Ketuk untuk berhenti"}
      </p>
    </div>
  );
}

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

        {products.map((p) => (
        <article key={p.name} className="mt-8 overflow-hidden rounded-3xl border border-[#dce4fb] bg-white shadow-sm md:grid md:grid-cols-[1fr_1fr] md:items-center">
          <VestSpinner image={p.image} name={p.name} />
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <span className="w-fit rounded-full bg-[#182b39] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">Segera hadir</span>
            <h2 className="text-2xl font-black text-[#182b39]">{p.name}</h2>
            <p className="text-sm leading-6 text-[#5f6b6f]">{p.desc}</p>
            <ul className="space-y-1.5 text-sm text-[#182b39]">
              {p.features.map((f) => <li key={f}>• {f}</li>)}
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
        ))}
      </section>
      <style>{`
        .merch-stage { perspective: 1400px; width: min(78vw, 300px); aspect-ratio: 2 / 3; position: relative; cursor: pointer; background: none; border: 0; padding: 0; }
        .merch-spin { position: absolute; inset: 0; transform-style: preserve-3d; animation: merch-rotate 7s cubic-bezier(.45,0,.55,1) infinite; }
        .merch-spin.is-paused { animation-play-state: paused; }
        .merch-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; background-size: 200% auto; background-repeat: no-repeat; }
        .merch-back { transform: rotateY(180deg); }
        .merch-shadow { position: absolute; left: 18%; right: 18%; bottom: -10px; height: 14px; border-radius: 50%; background: rgba(24,43,57,.22); filter: blur(6px); animation: merch-shadow 3.5s ease-in-out infinite; }
        @keyframes merch-rotate { 0%,18% { transform: rotateY(0deg); } 50%,68% { transform: rotateY(180deg); } 100% { transform: rotateY(360deg); } }
        @keyframes merch-shadow { 0%,100% { transform: scaleX(1); } 50% { transform: scaleX(.6); opacity:.6; } }
        @media (prefers-reduced-motion: reduce) { .merch-spin, .merch-shadow { animation: none; } }
      `}</style>
    </Layout>
  );
}
