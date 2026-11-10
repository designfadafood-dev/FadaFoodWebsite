
interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

// DATA ANGGOTA TIM
// Ubah nama, jabatan, dan foto sesuai data resmi perusahaan.
const teamMembers: TeamMember[] = [
  {
    id: 'team-01',
    name: 'Nama Lengkap Anggota 1',
    position: 'Jabatan Anggota 1',
    image: '/images/team/tim-01.webp',
  },
  {
    id: 'team-02',
    name: 'Nama Lengkap Anggota 2',
    position: 'Jabatan Anggota 2',
    image: '/images/team/tim-02.webp',
  },
  {
    id: 'team-03',
    name: 'Nama Lengkap Anggota 3',
    position: 'Jabatan Anggota 3',
    image: '/images/team/tim-03.webp',
  },
];

export function FadaTeamSection() {
  return (
    <section
      id="tim-fadafood"
      className="w-full py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Judul */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-widest text-red-700 mb-3">
            SUMBER DAYA MANUSIA
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-3">
            Tim FadaFood
          </h2>

          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Mengenal orang-orang di balik CV. Fada Food
            yang berkontribusi dalam kegiatan dan
            pelayanan perusahaan.
          </p>
        </div>

        {/* Grid Anggota Tim */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >

              {/* Foto Anggota */}
              <div className="aspect-[4/5] bg-slate-100 overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`Foto ${member.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    Foto belum tersedia
                  </div>
                )}
              </div>

              {/* Identitas Anggota */}
              <div className="p-5 text-center">

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {member.name}
                </h3>

                <div className="w-12 h-1 bg-red-700 rounded-full mx-auto my-3" />

                <p className="text-sm font-medium text-slate-600">
                  {member.position}
                </p>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
