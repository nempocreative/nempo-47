import { useState } from "react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Link } from "@/lib/wouter";
import rompiImage from "@/assets/merch-rompi-nempo-kalamuda-v5.jpg";
import lapDepan from "@/assets/rompi-manekin-lapangan-depan.webp";
import lapBelakang from "@/assets/rompi-manekin-lapangan-belakang.webp";
import nmpDepan from "@/assets/rompi-manekin-nempo-depan.webp";
import nmpBelakang from "@/assets/rompi-manekin-nempo-belakang.webp";
import rompiLapanganImage from "@/assets/merch-rompi-lapangan-nempo-v2.jpg";

const products = [
  {
    name: "Rompi Lapangan Nempo",
    image: rompiLapanganImage,
    front: lapDepan,
    back: lapBelakang,
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
    front: nmpDepan,
    back: nmpBelakang,
    desc: "Rompi utility warna navy dengan aksen gradasi biru-ungu khas Kala Muda, logo nempo di dada dan lambang \"n\" besar di punggung, ditemani logo kecil KALA MUDA.",
    features: ["Kantong depan + saku ritsleting", "Strap samping bisa disesuaikan", "Lapisan dalam jaring, adem dipakai"],
  },
];

// Lapisan siluet berbentuk lonjong (bukan balok) supaya badan manekin terlihat bulat saat berputar.
const DEPTH = 26;
const LAYERS = Array.from({ length: 14 }, (_, i) => {
  const z = -DEPTH + (i * (2 * DEPTH)) / 13;
  const round = Math.sqrt(Math.max(0, 1 - (z / (DEPTH + 4)) ** 2));
  return { z, scale: 0.6 + 0.4 * round };
});

function VestSpinner({ front, back, name }: { front: string; back: string; name: string }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="merch-scene relative flex flex-col items-center overflow-hidden px-6 pb-6 pt-14">
      <span aria-hidden className="merch-glow" />
      <button
        type="button"
        onClick={() => setPaused((v) => !v)}
        className="merch-stage"
        aria-label={paused ? `Putar lagi ${name}` : `Hentikan putaran ${name}`}
      >
        <div className="merch-float">
          <div className={`merch-spin ${paused ? "is-paused" : ""}`}>
            {LAYERS.map(({ z, scale }) => (
              <img key={z} src={front} alt="" aria-hidden className="merch-face merch-edge" style={{ transform: `translateZ(${z}px) scaleX(${scale})` }} />
            ))}
            <img src={front} alt={`${name} tampak depan`} className="merch-face merch-front" />
            <img src={back} alt={`${name} tampak belakang`} className="merch-face merch-back" />
          </div>
        </div>
        <span aria-hidden className="merch-shadow" />
      </button>
      <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c7cdf5]">
        360° · {paused ? "Ketuk untuk memutar" : "Ketuk untuk berhenti"}
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
        <article key={p.name} className="mt-8 overflow-hidden rounded-3xl border border-[#dce4fb] bg-white shadow-sm md:grid md:grid-cols-[1fr_1fr] md:items-stretch">
          <VestSpinner front={p.front} back={p.back} name={p.name} />
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
        .merch-scene { background: radial-gradient(120% 90% at 50% 20%, #2b2f8f 0%, #1a1c55 45%, #0f1030 100%); align-self: stretch; justify-content: center; }
        .merch-glow { position: absolute; top: 18%; left: 50%; width: 70%; aspect-ratio: 1; transform: translateX(-50%); border-radius: 50%; background: radial-gradient(circle, rgba(110,75,180,.55), rgba(37,99,235,.25) 45%, transparent 70%); filter: blur(10px); animation: merch-pulse 4s ease-in-out infinite; }
        .merch-stage { perspective: 1100px; width: min(70vw, 290px); aspect-ratio: 3 / 4; position: relative; cursor: pointer; background: none; border: 0; padding: 0; }
        .merch-float { position: absolute; inset: 0; transform-style: preserve-3d; animation: merch-float 4s ease-in-out infinite; }
        .merch-spin { position: absolute; inset: 0; transform-style: preserve-3d; animation: merch-rotate 9s linear infinite; }
        .merch-spin.is-paused, .merch-scene:has(.is-paused) .merch-float { animation-play-state: paused; }
        .merch-face { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
        .merch-edge { filter: brightness(.16) saturate(.5); }
        .merch-front { transform: translateZ(28px); backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .merch-back { transform: rotateY(180deg) translateZ(28px); backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .merch-shadow { position: absolute; left: 20%; right: 20%; bottom: -14px; height: 16px; border-radius: 50%; background: rgba(0,0,0,.55); filter: blur(8px); animation: merch-shadow 4s ease-in-out infinite; }
        @keyframes merch-rotate { from { transform: rotateX(-6deg) rotateY(0deg); } to { transform: rotateX(-6deg) rotateY(360deg); } }
        @keyframes merch-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes merch-shadow { 0%,100% { transform: scaleX(1); opacity: .9; } 50% { transform: scaleX(.8); opacity: .55; } }
        @keyframes merch-pulse { 0%,100% { opacity: .8; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .merch-spin, .merch-float, .merch-shadow, .merch-glow { animation: none; } }
      `}</style>
    </Layout>
  );
}
