
interface FadaActivity {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
}

// DATA GALERI: Ubah informasi dan foto di bagian ini.
const activities: FadaActivity[] = [
  {
    id: 'kegiatan-01',
    title: 'FAMILY GATHERING 2025 | BROMO',
    description:
      'Dokumentasi family gathering Fadafood X Giza Signature ke Gunung Bromo pada tahun 2025.',
    year: '',
    image: '/images/gallery/kegiatan-01.webp',
  },
  {
    id: 'kegiatan-02',
    title: 'VISITASI SARAN IRT -P DINAS KESEHATAN KAB. MOJOKERTO',
    description:
      'Dokumentasi vitiasi saran IRT -P dari Dinas Kesehatan Kabupaten Mojokerto.',
    year: '',
    image: '/images/gallery/kegiatan-02.webp',
  },
  {
    id: 'kegiatan-03',
    title: 'FAMILY GATHERING 2024 | MALANG',
    description:
      'Dokumentasi kebersamaan dalam family gathering Fadafood X Giza Signature ke Malang pada tahun 2024.',
    year: '',
    image: '/images/gallery/kegiatan-03.webp',
  },
  {
    id: 'kegiatan-04',
    title: 'KUNJUNGAN & PENERIMAAN MAHASISWA MAGANG',
    description:
      'Dokumentasi penerimaan dan kunjungan dari mahasiswa Universitas .... pada program Magang tahun ......',
    year: '',
    image: '/images/gallery/kegiatan-04.webp',
  },
];

export function FadaActivitiesGallery() {
  return (
    <section
      id="kegiatan"
      className="scroll-mt-24 bg-[#fffaf3] border-t border-amber-100 py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading galeri */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold tracking-widest text-red-700 mb-3">
            GALERI PERUSAHAAN
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4">
            Kegiatan Kami
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mengenal lebih dekat CV. Fada Food melalui
            dokumentasi kegiatan, aktivitas operasional,
            dan kebersamaan tim perusahaan.
          </p>
        </div>

        {/* Grid foto kegiatan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="overflow-hidden rounded-2xl bg-white border border-amber-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] bg-amber-50 overflow-hidden">
                {activity.image ? (
                  <a
                    href={activity.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Lihat foto ${activity.title}`}
                    className="block w-full h-full"
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-slate-400">
                    Foto kegiatan belum tersedia
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="text-lg font-bold text-slate-900">
                  {activity.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {activity.description}
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center rounded-full bg-amber-50 text-amber-900 px-3 py-1 text-xs font-semibold">
                    Tahun: {activity.year || 'Belum diisi'}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




