import React, { useState, useEffect, useRef } from 'react';

// --- Komponen Icon ---
const CheckCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
  </svg>
);
const ExternalLink = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const Github = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const Mail = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const Linkedin = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const Palette = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);
const ChevronRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const ArrowUp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

// --- Project Modal ---
const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const semesterColor = project.semester.includes('Semester 3') ? 'emerald' : project.semester.includes('Semester 4') ? 'blue' : project.semester.includes('Semester 5') ? 'violet' : 'rose';
  const semesterBg = { emerald: '#ecfdf5', blue: '#eff6ff', violet: '#f5f3ff', rose: '#fff1f2' };
  const semesterText = { emerald: '#065f46', blue: '#1e40af', violet: '#5b21b6', rose: '#9f1239' };

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}
      onClick={onClose}
    >
      <div
        style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.3)', maxWidth: '56rem', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ position: 'relative' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '18rem', objectFit: 'cover', borderRadius: '1.5rem 1.5rem 0 0' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)', borderRadius: '1.5rem 1.5rem 0 0' }} />
          <button onClick={onClose} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: '50%', padding: '0.625rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', transition: 'all 0.2s' }}>
            <XIcon style={{ width: '1.25rem', height: '1.25rem', color: '#374151' }} />
          </button>
        </div>
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '0.375rem 1rem', borderRadius: '999px', background: semesterBg[semesterColor], color: semesterText[semesterColor] }}>{project.semester}</span>
            <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>{project.type}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, color: '#111827', marginBottom: '1rem', lineHeight: 1.2, fontFamily: 'Georgia, serif' }}>{project.title}</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1rem', whiteSpace: 'pre-line' }}>{project.fullDescription}</p>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '0.2rem', height: '1.2rem', background: '#3b82f6', borderRadius: '4px' }}></span>Teknologi yang Digunakan
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{ padding: '0.35rem 0.85rem', background: '#eff6ff', color: '#1d4ed8', borderRadius: '0.5rem', fontSize: '0.8rem', fontWeight: 600, border: '1px solid #bfdbfe' }}>{tech}</span>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '0.2rem', height: '1.2rem', background: '#10b981', borderRadius: '4px' }}></span>Fitur Utama
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ flexShrink: 0, width: '1.25rem', height: '1.25rem', borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.1rem' }}>
                    <CheckCircle style={{ width: '0.7rem', height: '0.7rem', color: '#059669' }} />
                  </div>
                  <span style={{ color: '#374151', lineHeight: 1.6 }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid #f3f4f6' }}>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', background: '#fff', color: '#111827', border: '2px solid #e5e7eb', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s', gap: '0.5rem' }}>
                <ExternalLink style={{ width: '1rem', height: '1rem' }} />Live Demo
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', background: '#1f2937', color: '#fff', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s', gap: '0.5rem', border: '2px solid transparent' }}>
                <Github style={{ width: '1rem', height: '1rem' }} />Source Code
              </a>
            )}
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', background: '#7c3aed', color: '#fff', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s', gap: '0.5rem', border: '2px solid transparent' }}>
                <Palette style={{ width: '1rem', height: '1rem' }} />Figma Design
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Portfolio ---
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const navItems = ['Home', 'Projects', 'Tech Stack', 'About', 'Contact'];

  const projects = {
    semester3: [
      {
        id: 1,
        title: "Sistem Bebas Tanggungan POLINEMA",
        description: "Sistem berbasis web untuk memantau dan menyelesaikan tanggungan administratif mahasiswa.",
        image: "/assets/BebasTanggungan.png",
        semester: "Semester 3",
        type: "Full Stack Application",
        technologies: ["PHP", "MySQL", "Bootstrap"],
        features: ["Mengunggah Tugas Akhir (TA)", "Bebas Kompen", "Bebas Pembayaran UKT", "Bebas Peminjaman Buku Perpustakaan", "SKKM (Satuan Kredit Kegiatan Mahasiswa)"],
        fullDescription: `Aplikasi manajemen tanggungan mahasiswa berbasis web yang dikembangkan untuk mendukung digitalisasi proses administrasi di lingkungan kampus.\n\nDalam proses akademik, mahasiswa memiliki berbagai kewajiban administratif yang harus dipenuhi, seperti pelunasan biaya UKT, pengembalian buku perpustakaan, penyelesaian tugas akhir, pengumpulan poin SKKM, serta pencapaian skor TOEIC.\n\nSistem ini hadir sebagai solusi dengan menyediakan platform yang mudah diakses secara online, baik oleh mahasiswa maupun pihak administrasi. Mahasiswa dapat melihat status tanggungan secara real-time, mengunggah dokumen yang dibutuhkan, serta mendapatkan notifikasi otomatis terkait verifikasi data.\n\nPihak admin dari berbagai unit seperti akademik, keuangan, dan perpustakaan dapat memverifikasi tanggungan secara langsung melalui dashboard admin yang sudah disediakan.\n\nPada proyek ini, saya terlibat dalam pengembangan full stack serta implementasi fitur berbasis web sesuai kebutuhan sistem. Proyek dikerjakan secara kolaboratif dalam tim. Melalui proyek ini, saya memperoleh pengalaman dalam membangun sistem administrasi kampus yang berorientasi pada efisiensi dan kemudahan pengguna.`,
        githubLink: "https://github.com/hifnazwa/PBL-Sistem-Tanggungan.git",
        demoLink: "/assets/Bebas Tanggungan.mp4"
      }
    ],
    semester4: [
      {
        id: 2,
        title: "TOEICLY",
        description: "Sistem informasi berbasis web untuk pengelolaan ujian TOEIC di lingkungan kampus.",
        image: "/assets/Toeic.png",
        semester: "Semester 4",
        type: "Full Stack Application",
        technologies: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
        features: ["Pendaftaran Online Mahasiswa", "Verifikasi Data oleh Admin Jurusan", "Manajemen Jadwal Ujian", "Pengelolaan Data Peserta", "Manajemen Hasil Ujian", "Manajemen Sertifikat TOEIC", "Dashboard Admin & Mahasiswa", "Notifikasi & Pelaporan"],
        fullDescription: `Proyek ini berupa sistem manajemen ujian TOEIC berbasis web yang bertujuan untuk menggantikan proses manual menjadi sistem yang lebih terstruktur, efisien, dan mudah diakses oleh mahasiswa maupun pihak administrasi.\n\nPada sistem ini, mahasiswa dapat melakukan pendaftaran ujian TOEIC secara online, mengunggah dokumen pendukung, melihat jadwal ujian, serta mengakses informasi hasil ujian dan sertifikat. Sementara itu, admin memiliki fitur untuk mengelola data peserta, jadwal ujian, hasil ujian, serta manajemen pengguna.\n\nProyek ini dikerjakan secara tim dengan pembagian peran yang jelas, dan dikembangkan menggunakan pendekatan pengembangan sistem yang terstruktur. Saya terlibat dalam proses perancangan antarmuka (UI), pengembangan fitur frontend, database mysql, serta penyusunan dokumentasi sistem seperti SKPL (Spesifikasi Kebutuhan Perangkat Lunak).\n\nMelalui proyek TOEICLY, saya memperoleh pengalaman nyata dalam membangun sistem informasi berbasis web yang sesuai dengan kebutuhan pengguna, meningkatkan kemampuan kerja tim, serta memahami alur pengembangan sistem dari tahap analisis hingga implementasi.`,
        githubLink: "https://github.com/SuryaRf/TOEICLY.git",
        demoLink: "/assets/TOEIC.mp4"
      }
    ],
    semester5: [
      {
        id: 3,
        title: "Website Manajemen Keselamatan dan Kesehatan Kerja (K3)",
        description: "Website sistem informasi K3 untuk mendukung pencatatan, pemantauan, dan pengelolaan data K3 di perusahaan.",
        image: "/assets/K3.png",
        semester: "Semester 5",
        type: "Full Stack Application",
        technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST API"],
        features: ["Dashboard interaktif untuk monitoring K3", "Sistem pelaporan pelanggaran anonim", "Modul edukasi dan pelatihan K3", "Manajemen APD (Alat Pelindung Diri)", "Prosedur tanggap darurat interaktif", "Responsive design untuk semua device"],
        fullDescription: `Sistem Informasi Kesehatan dan Keselamatan Kerja (K3) PT. Siantar Top merupakan proyek tugas perkuliahan yang dikembangkan sebagai studi kasus penerapan sistem informasi pada perusahaan manufaktur. Proyek ini bertujuan untuk membantu perusahaan dalam mengelola aspek K3 secara lebih terstruktur dan terdokumentasi dengan baik.\n\nPada proyek ini, sistem dirancang untuk mendukung proses pencatatan data potensi bahaya, pengelolaan risiko kerja, pelaporan insiden, serta pemantauan penerapan prosedur K3 di lingkungan kerja. Pengembangan sistem dilakukan secara tim dengan pembagian tugas yang jelas, mulai dari analisis kebutuhan, perancangan sistem, hingga implementasi antarmuka dan fitur.\n\nSaya berkontribusi dalam perancangan antarmuka pengguna (UI), pengembangan fitur berbasis web, serta penyusunan dokumentasi sistem. Proyek ini memberikan pengalaman berharga dalam memahami alur sistem K3, kebutuhan pengguna di lingkungan industri, serta penerapan konsep sistem informasi untuk mendukung keselamatan dan kesehatan kerja.\n\nMelalui proyek ini, saya semakin terbiasa bekerja secara terstruktur, memahami kebutuhan bisnis, dan mengembangkan sistem yang berorientasi pada keamanan, kenyamanan, dan kepatuhan prosedur kerja.`,
        githubLink: "https://github.com/farelmaryamlailahajiri/K3.git",
        demoLink: "/assets/K3.mp4"
      }
    ]
  };

  const testCaseProjects = [
    {
      id: 4,
      title: "Website Pembelian Paket Internet",
      description: "Website frontend untuk pembelian paket internet dengan React.js dan mock API.",
      image: "/assets/Website Tes Intern PT. DWP.png",
      semester: "Technical Test – PT. Dutakom Wibawa Putra",
      type: "Frontend Focus",
      technologies: ["React.js", "Ant Design", "Mock Server API", "JSON Server", "CSS Modules"],
      features: ["Pemilihan paket internet dengan berbagai pilihan kuota, masa aktif, dan harga", "Pemilihan metode pembayaran (Bank Transfer, E-Wallet, Pulsa, dan lain-lain)", "Simulasi proses pembelian paket internet secara frontend", "Penerapan kode promo untuk mendapatkan potongan harga saat pembelian", "Notifikasi status transaksi (berhasil, promo diterapkan, dll)", "Manajemen data pengguna (edit data user)"],
      fullDescription: `Website ini merupakan tugas tes magang dari PT. Dutakom Wibawa Putra (DWP Group) yang dikerjakan sebagai bagian dari proses seleksi magang. Proyek ini diberi waktu 2 hari, dengan fokus utama pada frontend sesuai dengan posisi yang saya lamar.\n\nPada proyek ini, saya membangun website pembelian paket internet menggunakan React.js, dengan pendekatan component-based dan pengelolaan state menggunakan React Hooks. Data paket internet disimulasikan menggunakan JSON (db.json) sebagai mock API untuk menampilkan daftar paket, harga, dan informasi detail lainnya.\n\nProyek ini berhasil membawa saya melanjutkan ke tahap interview di PT. Dutakom Wibawa Putra, dan menjadi pengalaman berharga dalam mengerjakan studi kasus nyata dengan batas waktu yang ketat. Melalui proyek ini, saya semakin terbiasa mengembangkan aplikasi frontend secara mandiri, terstruktur, dan sesuai kebutuhan pengguna.`,
      demoLink: "/assets/Website Tes Intern PT. DWP.mp4"
    }
  ];

  const ProjectCard = ({ project, badgeColor, badgeBg, badgeText }) => (
    <div
      onClick={() => handleProjectClick(project)}
      style={{
        background: '#fff',
        borderRadius: '1.25rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        border: '1px solid #f1f5f9',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.13)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'; }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', width: '40%', minWidth: '240px', flexShrink: 0 }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', minHeight: '280px' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)' }} />
        <div style={{ position: 'absolute', top: '0.875rem', left: '0.875rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '999px', background: badgeBg, color: badgeText, backdropFilter: 'blur(8px)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>{project.semester}</span>
        </div>
      </div>
      
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500 }}>{project.type}</span>
          </div>
          <h4 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 800, color: '#111827', marginBottom: '0.75rem', lineHeight: 1.3, fontFamily: 'Georgia, serif' }}>{project.title}</h4>
          <p style={{ color: '#6b7280', marginBottom: '1.25rem', fontSize: '0.9rem', lineHeight: 1.7 }}>{project.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span key={i} style={{ fontSize: '0.72rem', background: '#f8fafc', color: '#475569', padding: '0.25rem 0.6rem', borderRadius: '0.375rem', fontWeight: 600, border: '1px solid #e2e8f0' }}>{tech}</span>
            ))}
            {project.technologies.length > 4 && (
              <span style={{ fontSize: '0.72rem', background: '#f8fafc', color: '#475569', padding: '0.25rem 0.6rem', borderRadius: '0.375rem', fontWeight: 600, border: '1px solid #e2e8f0' }}>+{project.technologies.length - 4}</span>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: badgeColor, fontWeight: 700, fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            Detail Projek <ChevronRight style={{ width: '1rem', height: '1rem' }} />
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ color: '#9ca3af', padding: '0.35rem', borderRadius: '0.5rem', display: 'flex', transition: 'all 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#374151'; e.currentTarget.style.background = '#f9fafb'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.background = 'transparent'; }}>
                <Github style={{ width: '1rem', height: '1rem' }} />
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ color: '#9ca3af', padding: '0.35rem', borderRadius: '0.5rem', display: 'flex', transition: 'all 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = badgeColor; e.currentTarget.style.background = `${badgeColor}15`; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.background = 'transparent'; }}>
                <ExternalLink style={{ width: '1rem', height: '1rem' }} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const styles = {
    page: { minHeight: '100vh', background: '#fafafa', fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: '#111827' },
    nav: { position: 'sticky', top: 0, zIndex: 100, background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent', boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none', transition: 'all 0.35s ease' },
    navInner: { maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' },
    logo: { fontSize: '1.35rem', fontWeight: 800, color: '#0ea5e9', fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' },
    navLinks: { display: 'flex', gap: '0.25rem', alignItems: 'center' },
    navLink: { fontSize: '0.875rem', fontWeight: 600, color: '#374151', textDecoration: 'none', padding: '0.5rem 0.875rem', borderRadius: '0.5rem', transition: 'all 0.2s', letterSpacing: '0.01em' },
    hero: { background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f0f9ff 100%)', padding: 'clamp(4rem, 10vw, 8rem) 1.25rem clamp(3rem, 8vw, 6rem)', position: 'relative', overflow: 'hidden' },
    heroInner: { maxWidth: '48rem', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 },
    section: { padding: 'clamp(4rem, 8vw, 6rem) 1.25rem' },
    sectionInner: { maxWidth: '72rem', margin: '0 auto' },
    sectionHeader: { textAlign: 'center', marginBottom: 'clamp(2.5rem, 6vw, 4rem)' },
  };

  return (
    <div id="top-of-page" style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root { scroll-behavior: smooth; }
        ::selection { background: #bae6fd; color: #0c4a6e; }
        .mobile-nav-link { display: none; }
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns a { text-align: center !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .tools-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .tools-grid { grid-template-columns: 1fr 1fr !important; }
          .skill-items-grid { grid-template-columns: 1fr !important; }
        }
        .nav-link-hover:hover { background: #f0f9ff !important; color: #0ea5e9 !important; }
        .btn-primary:hover { background: #0284c7 !important; transform: translateY(-2px) !important; box-shadow: 0 8px 24px rgba(14,165,233,0.3) !important; }
        .btn-outline:hover { border-color: #0ea5e9 !important; color: #0ea5e9 !important; transform: translateY(-2px) !important; box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important; }
        .contact-item:hover { background: #f0f9ff !important; border-color: #bae6fd !important; }
        .contact-item:hover .contact-icon { background: #0ea5e9 !important; }
        .contact-item:hover .contact-icon svg { color: #fff !important; stroke: #fff; }
        .skill-tag:hover { background: #dbeafe !important; border-color: #93c5fd !important; }
        .mobile-menu-open { display: flex !important; }
        .fade-in { opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s ease forwards; }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
        .blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.35; pointer-events: none; }
        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 64rem;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .projects-container {
            gap: 1.5rem;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <header style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo}>Portfolio</div>
          <nav className="desktop-nav" style={styles.navLinks}>
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link-hover" style={styles.navLink}>{item}</a>
            ))}
          </nav>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '0.5rem', color: '#374151', alignItems: 'center', justifyContent: 'center' }}>
            {isMenuOpen ? <XIcon style={{ width: '1.5rem', height: '1.5rem' }} /> : <MenuIcon style={{ width: '1.5rem', height: '1.5rem' }} />}
          </button>
        </div>
        {isMenuOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #f1f5f9', padding: '0.75rem 1.25rem 1.25rem' }}>
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}
                style={{ display: 'block', padding: '0.875rem 1rem', color: '#374151', textDecoration: 'none', fontSize: '1rem', fontWeight: 600, borderRadius: '0.625rem', transition: 'all 0.2s' }}
                onMouseEnter={e => e.target.style.background = '#f0f9ff'}
                onMouseLeave={e => e.target.style.background = 'transparent'}
              >{item}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <div className="blob" style={{ width: '28rem', height: '28rem', background: '#bae6fd', top: '-8rem', right: '-8rem' }} />
        <div className="blob" style={{ width: '20rem', height: '20rem', background: '#ddd6fe', bottom: '-4rem', left: '-6rem' }} />
        <div style={styles.heroInner}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ position: 'absolute', inset: '-6px', borderRadius: '50%', background: 'linear-gradient(135deg, #38bdf8, #818cf8)', zIndex: 0, opacity: 0.7 }} />
              <img
                src="/assets/profile.jpeg"
                alt="Josephine Antonia"
                style={{ position: 'relative', zIndex: 1, width: 'clamp(7rem, 20vw, 10rem)', height: 'clamp(7rem, 20vw, 10rem)', borderRadius: '50%', objectFit: 'cover', border: '4px solid #fff', boxShadow: '0 16px 40px rgba(14,165,233,0.2)' }}
              />
              <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.25rem', zIndex: 2, width: '1.25rem', height: '1.25rem', borderRadius: '50%', background: '#10b981', border: '2px solid #fff', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }} />
            </div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '0.4rem 1rem', borderRadius: '999px', marginBottom: '1.25rem' }}>
            <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: '#3b82f6', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Full-Stack Developer</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif', lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            Josephine Antonia
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: '#475569', lineHeight: 1.8, marginBottom: '0.875rem', maxWidth: '38rem', margin: '0 auto 1.75rem' }}>
            Mengembangkan aplikasi web dari frontend hingga backend, dengan fokus pada kualitas kode, fungsionalitas, dan pengalaman pengguna.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 4vw, 3rem)', marginBottom: '2.25rem', flexWrap: 'wrap' }}>
            {[{ n: '3+', l: 'Projek' }, { n: '10+', l: 'Teknologi' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: '#0ea5e9', fontFamily: 'Georgia, serif', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600, marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div className="hero-btns" style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: '#0ea5e9', color: '#fff', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', transition: 'all 0.25s', boxShadow: '0 4px 14px rgba(14,165,233,0.25)', border: '2px solid transparent' }}>
              Lihat Projek <ChevronRight style={{ width: '1.1rem', height: '1.1rem' }} />
            </a>
            <a href="#contact" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: '#fff', color: '#374151', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', transition: 'all 0.25s', border: '2px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ ...styles.section, background: '#f8fafc' }}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeader}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: '#eff6ff', marginBottom: '1.25rem' }}>
              <CodeIcon style={{ width: '1.5rem', height: '1.5rem', color: '#0ea5e9' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif', marginBottom: '0.875rem' }}>Portofolio Projek</h2>
            <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: '#64748b', maxWidth: '36rem', margin: '0 auto' }}>Pengembangan web dari fundamental hingga implementasi kompleks</p>
          </div>
          <div className="projects-container">
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '0.25rem', height: '2.5rem', background: '#10b981', borderRadius: '4px', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif' }}>Semester 3</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>Membangun foundational skills dalam pengembangan web full-stack dasar</p>
                </div>
              </div>
              {projects.semester3.map(project => (
                <ProjectCard key={project.id} project={project} badgeColor="#10b981" badgeBg="#ecfdf5" badgeText="#065f46" />
              ))}
            </div>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '0.25rem', height: '2.5rem', background: '#3b82f6', borderRadius: '4px', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif' }}>Semester 4</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>Mengembangkan sistem informasi kompleks dengan database design</p>
                </div>
              </div>
              {projects.semester4.map(project => (
                <ProjectCard key={project.id} project={project} badgeColor="#3b82f6" badgeBg="#eff6ff" badgeText="#1e40af" />
              ))}
            </div>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '0.25rem', height: '2.5rem', background: '#8b5cf6', borderRadius: '4px', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif' }}>Semester 5</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>Menerapkan arsitektur modern dengan React.js dan component-based design</p>
                </div>
              </div>
              {projects.semester5.map(project => (
                <ProjectCard key={project.id} project={project} badgeColor="#8b5cf6" badgeBg="#f5f3ff" badgeText="#5b21b6" />
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '0.25rem', height: '2.5rem', background: '#f43f5e', borderRadius: '4px', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif' }}>Technical Test Intern – PT. Dutakom Wibawa Putra</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>Pengalaman mengerjakan studi kasus nyata dengan batas waktu ketat</p>
                </div>
              </div>
              {testCaseProjects.map(project => (
                <ProjectCard key={project.id} project={project} badgeColor="#f43f5e" badgeBg="#fff1f2" badgeText="#9f1239" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech stack" style={{ ...styles.section, background: '#fff' }}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeader}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: '#eff6ff', marginBottom: '1.25rem' }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: '#0ea5e9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif', marginBottom: '0.875rem' }}>Tech Stack & Skills</h2>
            <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: '#64748b', maxWidth: '36rem', margin: '0 auto' }}>Teknologi dan tools yang saya kuasai dalam pengembangan web</p>
          </div>
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '60rem', margin: '0 auto' }}>
            <div style={{ background: 'linear-gradient(135deg, #fff, #eff6ff)', borderRadius: '1.25rem', padding: 'clamp(1.5rem, 3vw, 2rem)', boxShadow: '0 4px 20px rgba(59,130,246,0.08)', border: '1px solid #dbeafe' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif' }}>Frontend</h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.1rem' }}>UI/UX implementation</p>
                </div>
              </div>
              <div className="skill-items-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS', 'Responsive Design', 'Component Architecture', 'State Management'].map(skill => (
                  <div key={skill} className="skill-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: '#fff', borderRadius: '0.625rem', border: '1px solid #e2e8f0', transition: 'all 0.2s', cursor: 'default' }}>
                    <div style={{ width: '0.4rem', height: '0.4rem', borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #fff, #ecfdf5)', borderRadius: '1.25rem', padding: 'clamp(1.5rem, 3vw, 2rem)', boxShadow: '0 4px 20px rgba(16,185,129,0.08)', border: '1px solid #d1fae5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif' }}>Backend</h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.1rem' }}>Server-side & database</p>
                </div>
              </div>
              <div className="skill-items-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {['Laravel', 'PHP', 'REST APIs', 'MySQL', 'Python', 'Database Design', 'API Integration'].map(skill => (
                  <div key={skill} className="skill-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: '#fff', borderRadius: '0.625rem', border: '1px solid #e2e8f0', transition: 'all 0.2s', cursor: 'default' }}>
                    <div style={{ width: '0.4rem', height: '0.4rem', borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#374151' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ gridColumn: '1 / -1', background: 'linear-gradient(135deg, #fafafa, #f5f3ff)', borderRadius: '1.25rem', padding: 'clamp(1.5rem, 3vw, 2rem)', boxShadow: '0 4px 20px rgba(139,92,246,0.06)', border: '1px solid #ede9fe' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#7c3aed' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif' }}>Tools & Additional Skills</h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.1rem' }}>Development workflow & collaboration</p>
                </div>
              </div>
              <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {[
                  { name: 'Git & GitHub', color: '#f97316', bg: '#fff7ed' },
                  { name: 'Figma', color: '#ec4899', bg: '#fdf2f8' },
                  { name: 'VS Code', color: '#3b82f6', bg: '#eff6ff' },
                  { name: 'Power BI', color: '#8b5cf6', bg: '#f5f3ff' },
                  { name: 'UI/UX Design', color: '#f43f5e', bg: '#fff1f2' },
                  { name: 'Agile/Scrum', color: '#10b981', bg: '#ecfdf5' },
                  { name: 'Testing/Debug', color: '#eab308', bg: '#fefce8' },
                  { name: 'Documentation', color: '#6366f1', bg: '#eef2ff' }
                ].map(s => (
                  <div key={s.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.125rem 0.75rem', background: '#fff', borderRadius: '0.875rem', border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.2s', cursor: 'default', textAlign: 'center' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
                  >
                    <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.625rem', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.625rem' }}>
                      <div style={{ width: '0.875rem', height: '0.875rem', borderRadius: '50%', background: s.color }} />
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#374151', lineHeight: 1.3 }}>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - DIUBAH: Tanpa foto, teks memanjang, soft skills 2x2 grid */}
      <section id="about" style={{ ...styles.section, background: '#f8fafc' }}>
        <div style={{ ...styles.sectionInner, maxWidth: '64rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
              <div style={{ width: '2.5rem', height: '2px', background: '#0ea5e9' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0ea5e9', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tentang Saya</span>
              <div style={{ width: '2.5rem', height: '2px', background: '#0ea5e9' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0f172a', fontFamily: 'Georgia, serif', marginBottom: '1rem' }}>
              Full-Stack Developer dengan Passion untuk Inovasi Digital
            </h2>
          </div>

          {/* Teks Deskripsi - Memanjang full width */}
          <div style={{ maxWidth: '56rem', margin: '0 auto 2.5rem auto' }}>
            <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', color: '#475569', lineHeight: 1.85, marginBottom: '1.5rem', textAlign: 'center' }}>
              Sebagai seorang Full-Stack Developer, saya mengembangkan aplikasi web secara menyeluruh, mulai dari perancangan antarmuka hingga pengelolaan logika backend dan database. Saya mengutamakan kualitas kode, struktur sistem yang rapi, serta pengalaman pengguna yang intuitif.
            </p>
            <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', color: '#475569', lineHeight: 1.85, textAlign: 'center' }}>
              Perjalanan saya di dunia pengembangan web dimulai dari mempelajari dasar-dasar pemrograman, kemudian berkembang melalui berbagai proyek akademik dan studi kasus nyata, membangun sistem dengan arsitektur modern dan best practices.
            </p>
          </div>

          {/* Soft Skills - Grid 2x2 di tengah */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '1.5rem', 
            maxWidth: '52rem', 
            margin: '0 auto'
          }}>
            {[
              { icon: '💬', title: 'Komunikasi', desc: 'Jelas dan efektif dalam tim' },
              { icon: '🤝', title: 'Kerja Tim', desc: 'Kolaborasi aktif & adaptif' },
              { icon: '⏱️', title: 'Manajemen Waktu', desc: 'Prioritas & deadline tepat' },
              { icon: '🎯', title: 'Problem Solving', desc: 'Pendekatan analitis & kreatif' }
            ].map(s => (
              <div 
                key={s.title} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  padding: '1.25rem 1.5rem', 
                  background: '#fff', 
                  borderRadius: '1rem', 
                  border: '1px solid #f1f5f9', 
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)', 
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.borderColor = '#bae6fd'; 
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(14,165,233,0.1)'; 
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.borderColor = '#f1f5f9'; 
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; 
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>{s.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.4 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...styles.section, background: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #075985 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: '24rem', height: '24rem', background: '#0ea5e9', top: '-8rem', right: '-4rem', opacity: 0.2 }} />
        <div className="blob" style={{ width: '18rem', height: '18rem', background: '#818cf8', bottom: '-6rem', left: '-3rem', opacity: 0.15 }} />
        <div style={{ ...styles.sectionInner, maxWidth: '42rem', position: 'relative', zIndex: 1 }}>
          <div style={styles.sectionHeader}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.15)', marginBottom: '1.25rem', backdropFilter: 'blur(8px)' }}>
              <Mail style={{ width: '1.5rem', height: '1.5rem', color: '#fff' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: '#fff', fontFamily: 'Georgia, serif', marginBottom: '0.875rem' }}>Let's Build Something Amazing</h2>
            <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'rgba(255,255,255,0.75)' }}>Tertarik berkolaborasi atau punya proyek menarik? Mari terhubung!</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '1.5rem', padding: 'clamp(1.5rem, 4vw, 2.25rem)', boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { href: 'mailto:joseephineez@gmail.com', icon: Mail, label: 'Email', value: 'joseephineez@gmail.com' },
                { href: 'https://www.linkedin.com/in/josephine-antonia-01277038a/', icon: Linkedin, label: 'LinkedIn', value: 'Josephine Antonia', external: true },
                { href: 'https://github.com/Josephinnnes', icon: Github, label: 'GitHub', value: '@Josephinnnes', external: true }
              ].map(item => (
                <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className="contact-item"
                  style={{ display: 'flex', alignItems: 'center', padding: '1.125rem 1.25rem', background: '#f8fafc', borderRadius: '1rem', border: '1.5px solid #f1f5f9', textDecoration: 'none', transition: 'all 0.25s', gap: '1rem' }}>
                  <div className="contact-icon" style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s' }}>
                    <item.icon style={{ width: '1.1rem', height: '1.1rem', color: '#475569' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '0.2rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.88rem', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.value}</div>
                  </div>
                  <ExternalLink style={{ width: '0.9rem', height: '0.9rem', color: '#cbd5e1', flexShrink: 0 }} />
                </a>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Responsif dalam 24 jam untuk diskusi proyek atau peluang kolaborasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '3rem 1.25rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', fontFamily: 'Georgia, serif', marginBottom: '0.75rem' }}>Josephine Antonia</div>
          <p style={{ fontSize: '0.875rem', maxWidth: '28rem', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Full-Stack Developer yang passionate tentang menciptakan pengalaman digital yang meaningful dan impactful.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            {[
              { href: 'mailto:joseephineez@gmail.com', icon: Mail },
              { href: 'https://linkedin.com/in/josephine-antonia-01277038a/', icon: Linkedin },
              { href: 'https://github.com/Josephinnnes', icon: Github }
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0ea5e9'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1e293b'; e.currentTarget.style.color = '#94a3b8'; }}>
                <s.icon style={{ width: '1rem', height: '1rem' }} />
              </a>
            ))}
          </div>
          <p style={{ fontSize: '0.78rem', color: '#475569' }}>© {new Date().getFullYear()} Josephine Antonia. All rights reserved. · Built with React.js & ❤️</p>
        </div>
      </footer>

      {/* BACK TO TOP - DIPERBAIKI dengan ID */}
<button
  onClick={() => {
    const topElement = document.getElementById('top-of-page');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }}
  style={{ position: 'fixed', bottom: '1.75rem', right: '1.75rem', width: '3rem', height: '3rem', borderRadius: '50%', background: '#0ea5e9', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(14,165,233,0.35)', transition: 'all 0.25s', zIndex: 999 }}
  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(14,165,233,0.45)'; }}
  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,165,233,0.35)'; }}
>
  <ArrowUp style={{ width: '1.1rem', height: '1.1rem', color: '#fff' }} />
</button>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </div>
  );
};

export default Portfolio;