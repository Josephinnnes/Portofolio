import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// --- Theme Colors ---
const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  success: {
    500: '#10b981',
  },
  warning: {
    500: '#f59e0b',
  },
  error: {
    500: '#ef4444',
  }
};

// --- Komponen Icon ---
const CheckCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

const ExternalLink = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Github = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Mail = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Linkedin = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Menu = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const Palette = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const ChevronRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// --- Komponen Project Modal ---
const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-neutral-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-72 object-cover rounded-t-2xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg"
          >
            <X className="w-5 h-5 text-neutral-700" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-sm font-semibold px-4 py-2 rounded-full ${project.semester.includes('Semester 3') ? 'bg-emerald-100 text-emerald-700' : project.semester.includes('Semester 4') ? 'bg-blue-100 text-blue-700' : project.semester.includes('Semester 5') ? 'bg-violet-100 text-violet-700' : 'bg-rose-100 text-rose-700'}`}>
              {project.semester}
            </span>
            <span className="text-sm text-neutral-500 font-medium">{project.type}</span>
          </div>

          <h2 className="text-4xl font-bold text-neutral-800 mb-6 font-playfair leading-tight">{project.title}</h2>
          
          <p className="text-neutral-600 mb-8 leading-relaxed text-lg font-inter" style={{ whiteSpace: "pre-line" }}>
            {project.fullDescription}
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-800 mb-4 font-inter flex items-center gap-2">
              <div className="w-2 h-6 bg-primary-500 rounded-full"></div>
              Teknologi yang Digunakan
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-semibold font-inter border border-primary-100 hover:bg-primary-100 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-800 mb-4 font-inter flex items-center gap-2">
              <div className="w-2 h-6 bg-emerald-500 rounded-full"></div>
              Fitur Utama
            </h3>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                    </div>
                  </div>
                  <span className="text-neutral-700 font-inter text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-6 border-t border-neutral-200">
            {project.demoLink && (
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-4 bg-white text-black border-2 border-neutral-300 rounded-xl hover:bg-neutral-50 hover:border-black transition-all duration-300 font-inter font-semibold hover:shadow-lg hover:-translate-y-1"
              >
                <ExternalLink className="w-5 h-5 mr-3 text-black" />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-4 bg-neutral-800 text-white rounded-xl hover:bg-neutral-900 transition-all duration-300 font-inter font-semibold hover:shadow-lg hover:-translate-y-1"
              >
                <Github className="w-5 h-5 mr-3" />
                Source Code
              </a>
            )}
            {project.figmaLink && (
              <a 
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 font-inter font-semibold hover:shadow-lg hover:-translate-y-1"
              >
                <Palette className="w-5 h-5 mr-3" />
                Figma Design
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Komponen Container ---
const Container = ({ children, className = "", size = "default" }) => {
  const maxWidth = size === "small" ? "max-w-4xl" : "max-w-7xl";
  return (
    <div className={`${maxWidth} mx-auto px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
};

// --- Main Portfolio Component ---
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Projects
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
        features: [
          "Mengunggah Tugas Akhir (TA)",
          "Bebas Kompen",
          "Bebas Pembayaran UKT",
          "Bebas Peminjaman Buku Perpustakaan",
          "SKKM (Satuan Kredit Kegiatan Mahasiswa)",
        ],
        fullDescription: `Aplikasi manajemen tanggungan mahasiswa berbasis web yang dikembangkan untuk mendukung digitalisasi proses administrasi di lingkungan kampus. 
        
        Dalam proses akademik, mahasiswa memiliki berbagai kewajiban administratif yang harus dipenuhi, seperti pelunasan biaya UKT, pengembalian buku perpustakaan, penyelesaian tugas akhir, pengumpulan poin SKKM, serta pencapaian skor TOEIC. 
        
        Sistem ini hadir sebagai solusi dengan menyediakan platform yang mudah diakses secara online, baik oleh mahasiswa maupun pihak administrasi. Mahasiswa dapat melihat status tanggungan secara real-time, mengunggah dokumen yang dibutuhkan, serta mendapatkan notifikasi otomatis terkait verifikasi data. 
        
        Pihak admin dari berbagai unit seperti akademik, keuangan, dan perpustakaan dapat memverifikasi tanggungan secara langsung melalui dashboard admin yang sudah disediakan.
        
        Pada proyek ini, saya terlibat dalam pengembangan full stack serta implementasi fitur berbasis web sesuai kebutuhan sistem. Proyek dikerjakan secara kolaboratif dalam tim. Melalui proyek ini, saya memperoleh pengalaman dalam membangun sistem administrasi kampus yang berorientasi pada efisiensi dan kemudahan pengguna.`,
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
        features: [
          "Pendaftaran Online Mahasiswa",
          "Verifikasi Data oleh Admin Jurusan",
          "Manajemen Jadwal Ujian",
          "Pengelolaan Data Peserta",
          "Manajemen Hasil Ujian",
          "Manajemen Sertifikat TOEIC",
          "Dashboard Admin & Mahasiswa",
          "Notifikasi & Pelaporan"
        ],
        fullDescription: `Proyek ini berupa sistem manajemen ujian TOEIC berbasis web yang bertujuan untuk menggantikan proses manual menjadi sistem yang lebih terstruktur, efisien, dan mudah diakses oleh mahasiswa maupun pihak administrasi.
        
        Pada sistem ini, mahasiswa dapat melakukan pendaftaran ujian TOEIC secara online, mengunggah dokumen pendukung, melihat jadwal ujian, serta mengakses informasi hasil ujian dan sertifikat. Sementara itu, admin memiliki fitur untuk mengelola data peserta, jadwal ujian, hasil ujian, serta manajemen pengguna.
        
        Proyek ini dikerjakan secara tim dengan pembagian peran yang jelas, dan dikembangkan menggunakan pendekatan pengembangan sistem yang terstruktur. Saya terlibat dalam proses perancangan antarmuka (UI), pengembangan fitur frontend, database mysql, serta penyusunan dokumentasi sistem seperti SKPL (Spesifikasi Kebutuhan Perangkat Lunak).
        
        Melalui proyek TOEICLY, saya memperoleh pengalaman nyata dalam membangun sistem informasi berbasis web yang sesuai dengan kebutuhan pengguna, meningkatkan kemampuan kerja tim, serta memahami alur pengembangan sistem dari tahap analisis hingga implementasi.`,
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
        features: [
          "Dashboard interaktif untuk monitoring K3",
          "Sistem pelaporan pelanggaran anonim",
          "Modul edukasi dan pelatihan K3",
          "Manajemen APD (Alat Pelindung Diri)",
          "Prosedur tanggap darurat interaktif",
          "Responsive design untuk semua device"
        ],
        fullDescription: `Sistem Informasi Kesehatan dan Keselamatan Kerja (K3) PT. Siantar Top merupakan proyek tugas perkuliahan yang dikembangkan sebagai studi kasus penerapan sistem informasi pada perusahaan manufaktur. Proyek ini bertujuan untuk membantu perusahaan dalam mengelola aspek K3 secara lebih terstruktur dan terdokumentasi dengan baik.
        
        Pada proyek ini, sistem dirancang untuk mendukung proses pencatatan data potensi bahaya, pengelolaan risiko kerja, pelaporan insiden, serta pemantauan penerapan prosedur K3 di lingkungan kerja. Pengembangan sistem dilakukan secara tim dengan pembagian tugas yang jelas, mulai dari analisis kebutuhan, perancangan sistem, hingga implementasi antarmuka dan fitur.
        
        Saya berkontribusi dalam perancangan antarmuka pengguna (UI), pengembangan fitur berbasis web, serta penyusunan dokumentasi sistem. Proyek ini memberikan pengalaman berharga dalam memahami alur sistem K3, kebutuhan pengguna di lingkungan industri, serta penerapan konsep sistem informasi untuk mendukung keselamatan dan kesehatan kerja.
        
        Melalui proyek ini, saya semakin terbiasa bekerja secara terstruktur, memahami kebutuhan bisnis, dan mengembangkan sistem yang berorientasi pada keamanan, kenyamanan, dan kepatuhan prosedur kerja.`,
        githubLink: "https://github.com/farelmaryamlailahajiri/K3.git",
        demoLink: "/assets/K3.mp4"
      }
    ]
  };

  // Data untuk Projek Test Case
  const testCaseProjects = [
    {
      id: 4,
      title: "Website Pembelian Paket Internet",
      description: "Website frontend untuk pembelian paket internet dengan React.js dan mock API.",
      image: "/assets/Website Tes Intern PT. DWP.png",
      semester: "Case Study Intern – PT. Dutakom Wibawa Putra",
      type: "Frontend Focus",
      technologies: ["React.js", "Ant Design", "Mock Server API", "JSON Server", "CSS Modules"],
      features: [
        "Pemilihan paket internet dengan berbagai pilihan kuota, masa aktif, dan harga",
        "Pemilihan metode pembayaran (Bank Transfer, E-Wallet, Pulsa, dan lain-lain)",
        "Simulasi proses pembelian paket internet secara frontend",
        "Penerapan kode promo untuk mendapatkan potongan harga saat pembelian",
        "Notifikasi status transaksi (berhasil, promo diterapkan, dll)",
        "Manajemen data pengguna (edit data user)"
      ],
      fullDescription: `Website ini merupakan tugas tes magang dari PT. Dutakom Wibawa Putra (DWP Group) yang dikerjakan sebagai bagian dari proses seleksi magang. Proyek ini diberi waktu waktu 2 hari, dengan fokus utama pada frontend sesuai dengan posisi yang saya lamar.
      
      Pada proyek ini, saya membangun website pembelian paket internet menggunakan React.js, dengan pendekatan component-based dan pengelolaan state menggunakan React Hooks. Data paket internet disimulasikan menggunakan JSON (db.json) sebagai mock API untuk menampilkan daftar paket, harga, dan informasi detail lainnya.
      
      Proyek ini berhasil membawa saya melanjutkan ke tahap interview di PT. Dutakom Wibawa Putra, dan menjadi pengalaman berharga dalam mengerjakan studi kasus nyata dengan batas waktu yang ketat. Melalui proyek ini, saya semakin terbiasa mengembangkan aplikasi frontend secara mandiri, terstruktur, dan sesuai kebutuhan pengguna.`,
      demoLink: "/assets/Website Tes Intern PT. DWP.mp4"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-inter selection:bg-primary-100 selection:text-primary-900">
      {/* Header - Diubah: Hanya Portfolio saja */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100">
        <Container>
          <div className="py-5 flex justify-between items-center">
            <div className="text-3xl font-bold text-primary-700 font-playfair tracking-tight">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-10">
              {['Home', 'Projects', 'Tech Stack', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 font-medium font-inter text-lg relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-neutral-700 p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-neutral-100 animate-slideDown">
              <div className="flex flex-col space-y-1 py-6 px-6">
                {['Home', 'Projects', 'Tech Stack', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-300 font-medium font-inter py-4 px-4 rounded-lg text-lg"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <Container size="small">
          <div className="text-center max-w-4xl mx-auto">
            {/* Foto Profile */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src="/assets/profile.jpeg" 
                  alt="Josephine Antonia"
                  className="relative w-60 h-60 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
            </div>
            
            {/* Nama - Dipindah ke bawah foto */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-800 font-playfair leading-tight">
              <span className="black">
                Josephine Antonia
              </span>
            </h1>
            
            {/* Title */}
            <p className="text-2xl text-neutral-600 mb-6 leading-relaxed font-inter max-w-3xl mx-auto font-light">
              Full-Stack Developer yang mengembangkan aplikasi web dari frontend hingga backend, dengan fokus pada fungsionalitas, kualitas kode, dan pengalaman pengguna.
              </p>
            
            <p className="text-lg text-neutral-500 mb-10 leading-relaxed font-inter max-w-2xl mx-auto">
              Mengembangkan aplikasi web secara end-to-end dengan perhatian pada kualitas kode, kenyamanan pengguna, dan solusi teknis yang dapat dikembangkan.
            </p>
            
            {/* Buttons - DIPERBAIKI: "Hubungi Saya" di tengah */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full mt-8">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-black border-2 border-gray-300 font-semibold rounded-xl hover:bg-gray-50 hover:border-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-inter text-lg w-full sm:w-auto"
                >
                <span>Lihat Projek</span>
                <ChevronRight className="w-5 h-5 ml-2 text-black" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-black border-2 border-gray-300 font-semibold rounded-xl hover:bg-gray-50 hover:border-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-inter text-lg w-full sm:w-auto"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-neutral-50">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
              <CodeIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 font-playfair leading-tight">
              Portofolio Projek
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-inter font-light">
              Pengembangan web dari fundamental hingga implementasi kompleks
            </p>
          </div>

          {/* Semester Sections */}
          {[
            { 
              title: "Semester 3", 
              projects: projects.semester3, 
              color: "emerald",
              description: "Membangun foundational skills dalam pengembangan web full-stack dasar"
            },
            { 
              title: "Semester 4", 
              projects: projects.semester4, 
              color: "blue",
              description: "Mengembangkan sistem informasi kompleks dengan database design"
            },
            { 
              title: "Semester 5", 
              projects: projects.semester5, 
              color: "violet",
              description: "Menerapkan arsitektur modern dengan React.js dan component-based design"
            }
          ].map((section) => (
            <div key={section.title} className="mb-16">
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-3 h-12 bg-${section.color}-500 rounded-full`}></div>
                <div>
                  <h3 className="text-3xl font-bold text-neutral-800 font-playfair">{section.title}</h3>
                  <p className="text-neutral-600 font-inter mt-2">{section.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {section.projects.map(project => (
                  <div 
                    key={project.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-neutral-100"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5 relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <div className="md:w-3/5 p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <span className={`text-sm font-semibold px-4 py-2 rounded-full bg-${section.color}-100 text-${section.color}-700`}>
                            {project.semester}
                          </span>
                          <span className="text-sm text-neutral-500 font-medium">{project.type}</span>
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-800 mb-4 font-playfair group-hover:text-primary-600 transition-colors duration-300">
                          {project.title}
                        </h4>
                        <p className="text-neutral-600 mb-6 font-inter text-lg leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <span 
                              key={index}
                              className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-lg font-medium font-inter"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-lg font-medium font-inter">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center pt-6 border-t border-neutral-100">
                          <button className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 font-inter text-lg group/btn">
                            <span>Detail Projek</span>
                            <ChevronRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                          <div className="flex gap-4">
                            {project.githubLink && (
                              <a 
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-neutral-700 transition-colors duration-300 p-2 hover:bg-neutral-100 rounded-lg"
                                onClick={e => e.stopPropagation()}
                              >
                                <Github className="w-5 h-5" />
                              </a>
                            )}
                            {project.demoLink && (
                              <a 
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-primary-600 transition-colors duration-300 p-2 hover:bg-primary-50 rounded-lg"
                                onClick={e => e.stopPropagation()}
                              >
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Case Study Intern - Dipindah ke bawah Semester 5 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-3 h-12 bg-rose-500 rounded-full"></div>
              <div>
                <h3 className="text-3xl font-bold text-neutral-800 font-playfair">Case Study Intern – PT. Dutakom Wibawa Putra</h3>
                <p className="text-neutral-600 font-inter mt-2">Pengalaman mengerjakan studi kasus nyata dengan batas waktu ketat</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {testCaseProjects.map(project => (
                <div 
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-neutral-100"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="md:w-3/5 p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-sm font-semibold px-4 py-2 rounded-full bg-rose-100 text-rose-700">
                          {project.semester}
                        </span>
                        <span className="text-sm text-neutral-500 font-medium">{project.type}</span>
                      </div>
                      <h4 className="text-2xl font-bold text-neutral-800 mb-4 font-playfair group-hover:text-primary-600 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-neutral-600 mb-6 font-inter text-lg leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span 
                            key={index}
                            className="text-sm bg-rose-50 text-rose-700 px-3 py-1.5 rounded-lg font-medium font-inter border border-rose-100"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-sm bg-rose-50 text-rose-700 px-3 py-1.5 rounded-lg font-medium font-inter border border-rose-100">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center pt-6 border-t border-neutral-100">
                        <button className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 font-inter text-lg group/btn">
                          <span>Detail Projek</span>
                          <ChevronRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                        <div className="flex gap-4">
                          {project.demoLink && (
                            <a 
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-400 hover:text-rose-600 transition-colors duration-300 p-2 hover:bg-rose-50 rounded-lg"
                              onClick={e => e.stopPropagation()}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 font-playfair leading-tight">
              Tech Stack & Skills
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-inter font-light">
              Teknologi dan tools yang saya kuasai dalam pengembangan web
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Frontend Skills */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 font-playfair">Frontend Development</h3>
                  <p className="text-neutral-600">UI/UX implementation</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS', 'Responsive Design', 'Component Architecture', 'State Management'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-neutral-100 hover:border-blue-200 transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-neutral-700 font-medium font-inter">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 font-playfair">Backend Development</h3>
                  <p className="text-neutral-600">Server-side & database management</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Laravel', 'PHP', 'REST APIs', 'MySQL', 'Python', 'Database Design', 'API Integration'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-neutral-100 hover:border-emerald-200 transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-neutral-700 font-medium font-inter">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="lg:col-span-2 bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 shadow-lg border border-neutral-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 font-playfair">Tools & Additional Skills</h3>
                  <p className="text-neutral-600">Development workflow & collaboration</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Git & GitHub', color: 'orange' },
                  { name: 'Figma', color: 'pink' },
                  { name: 'VS Code', color: 'blue' },
                  { name: 'Power BI', color: 'purple' },
                  { name: 'UI/UX Design', color: 'rose' },
                  { name: 'Agile/Scrum', color: 'green' },
                  { name: 'Testing/Debugging', color: 'yellow' },
                  { name: 'Documentation', color: 'indigo' }
                ].map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center p-6 bg-white rounded-xl border border-neutral-100 hover:border-neutral-200 transition-all duration-300 hover:shadow-md">
                    <div className={`w-10 h-10 rounded-lg bg-${skill.color}-100 flex items-center justify-center mb-4`}>
                      <div className={`w-4 h-4 rounded-full bg-${skill.color}-500`}></div>
                    </div>
                    <span className="text-neutral-700 font-semibold font-inter text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl blur-2xl opacity-20"></div>
                <img 
                  src="/assets/profile.jpeg"
                  alt="Josephine Antonia"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-primary-600"></div>
                <span className="text-primary-600 font-semibold font-inter tracking-wider">TENTANG SAYA</span>
              </div>
              <h2 className="text-4xl font-bold text-neutral-800 mb-8 font-playfair leading-tight">
                Full-Stack Developer dengan Passion untuk Inovasi Digital
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-neutral-600 leading-relaxed font-inter">
                  Sebagai seorang Full-Stack Developer, saya mengembangkan aplikasi web secara menyeluruh, mulai dari perancangan antarmuka hingga pengelolaan logika backend dan database. Saya mengutamakan kualitas kode, struktur sistem yang rapi, serta pengalaman pengguna yang intuitif agar solusi yang dibangun tidak hanya berfungsi dengan baik, tetapi juga nyaman digunakan.
                </p>
                
                <p className="text-lg text-neutral-600 leading-relaxed font-inter">
                  Perjalanan saya di dunia pengembangan web dimulai dari mempelajari dasar-dasar pemrograman, kemudian berkembang melalui berbagai proyek akademik dan studi kasus nyata. Melalui proses tersebut, saya terbiasa membangun sistem dengan arsitektur modern, menerapkan best practices, serta bekerja secara terstruktur. Setiap proyek menjadi sarana bagi saya untuk terus belajar, meningkatkan kualitas teknis, dan menghasilkan solusi digital yang relevan serta berkelanjutan.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-8">
                  {[
                    { icon: '💬', title: 'Komunikasi', desc: 'Komunikasi yang jelas dan efektif' },
                    { icon: '🤝', title: 'Kerja Tim', desc: 'Kolaborasi aktif dalam tim' },
                    { icon: '⏱️', title: 'Manajemen Waktu', desc: 'Mampu mengatur prioritas dan deadline' },
                    { icon: '🎨', title: 'Pemecahan Masalah', desc: 'Pendekatan pemecahan masalah' }
                  ].map((skill) => (
                    <div key={skill.title} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 hover:border-primary-200 transition-colors duration-300">
                      <div className="text-2xl">{skill.icon}</div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 font-inter mb-1">{skill.title}</h4>
                        <p className="text-sm text-neutral-600">{skill.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-900 to-primary-800">
        <Container size="small">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 mb-6 shadow-md">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair leading-tight text-black">
              Let's Build Something Amazing
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter font-light">
              Tertarik berkolaborasi atau punya proyek menarik? Mari terhubung!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Kartu tetap putih solid agar semua isi teks hitam terlihat jelas */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
              <div className="space-y-8">
                {/* Email */}
                <a 
                  href="mailto:joseephineez@gmail.com"
                  className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group border border-transparent hover:border-gray-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg font-inter text-black">Email</div>
                    <div className="text-gray-600 font-inter">joseephineez@gmail.com</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/josephine-antonia-01277038a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group border border-transparent hover:border-gray-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg font-inter text-black">LinkedIn</div>
                    <div className="text-gray-600 font-inter">Josephine Antonia</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/Josephinnnes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group border border-transparent hover:border-gray-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg font-inter text-black">GitHub</div>
                    <div className="text-gray-600 font-inter">@Josephinnnes</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-center text-gray-500 font-inter">
                  Responsif dalam 24 jam untuk diskusi proyek atau peluang kolaborasi
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-12">
        <Container>
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-playfair mb-4">
              Josephine Antonia
            </div>
            <p className="font-inter mb-8 max-w-md mx-auto">
              Full-Stack Developer yang passionate tentang menciptakan pengalaman digital yang meaningful dan impactful.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:joseephineez@gmail.com" className="text-neutral-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/josephine-antonia-01277038a/" className="text-neutral-400 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Josephinnnes" className="text-neutral-400 hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="font-inter text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} Josephine Antonia. All rights reserved.
            </p>
            <p className="font-inter text-sm text-neutral-500 mt-2">
              Built with React.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </Container>
      </footer>

      {/* Back to Top Button - DIPERBAIKI */}
      <button
  onClick={() => {
    // Mencoba scroll window
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Cadangan: Jika window gagal, paksa elemen dokumen paling atas
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }}
  className="fixed bottom-8 right-8 w-14 h-14 bg-white text-black border-2 border-gray-300 rounded-full shadow-2xl hover:border-black transition-all duration-300 hover:-translate-y-2 z-[9999] flex items-center justify-center group"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
</button>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />

      {/* Custom CSS untuk animasi */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;