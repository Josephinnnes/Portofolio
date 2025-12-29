import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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

// --- Komponen Project Modal ---
const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition duration-200"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
              project.semester === 'Semester 3' ? 'bg-green-100 text-green-700' : 
              project.semester === 'Semester 4' ? 'bg-blue-100 text-blue-700' : 
              'bg-purple-100 text-purple-700'
            }`}>
              {project.semester}
            </span>
            <span className="text-sm text-gray-500">{project.type}</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">{project.title}</h2>
          <p
  className="text-gray-600 mb-6 leading-relaxed font-inter"
  style={{ whiteSpace: "pre-line" }}
>
  {project.fullDescription}
</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 font-inter">Teknologi yang Digunakan</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium font-inter"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 font-inter">Fitur Utama</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-inter">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.challenges && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-inter">Tantangan & Solusi</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-gray-700 font-inter">{project.challenges}</p>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {project.demoLink && (
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-200 font-inter"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200 font-inter"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            )}
            {project.figmaLink && (
              <a 
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200 font-inter"
              >
                <Palette className="w-4 h-4 mr-2" />
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
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// --- Main Portfolio Component ---
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Projects berdasarkan repository Anda - DIPERBARUI
  const projects = {
    semester3: [
      {
        id: 1,
        title: "Sistem Bebas Tanggungan POLINEMA",
        description: "Sistem berbasis web yang dirancang untuk mempermudah mahasiswa dalam memantau dan menyelesaikan tanggungan administratif seperti tugas akhir, kompen, pembayaran UKT, peminjaman buku, SKKM, dan TOEIC.",
        image: "/assets/BebasTanggungan.png",
        semester: "Semester 3", 
        type: "Full Stack Application",
        technologies: ["PHP"],
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
        description: "TOEICLY merupakan sistem informasi berbasis web yang dikembangkan untuk mendukung proses pendaftaran, pengelolaan jadwal, dan pengumuman hasil ujian TOEIC di lingkungan kampus. Sistem ini dirancang untuk mempermudah mahasiswa dan admin dalam mengelola seluruh proses ujian secara terintegrasi.",
        image: "/assets/Toeic.png",
        semester: "Semester 4",
        type: "Full Stack Application",
        technologies: ["Laravel", "Bootstrap", "Database"],
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
        
        Proyek ini dikerjakan secara tim dengan pembagian peran yang jelas, dan dikembangkan menggunakan pendekatan pengembangan sistem yang terstruktur. Saya terlibat dalam proses perancangan antarmuka (UI),pengembangan fitur frontend, database mysql, serta penyusunan dokumentasi sistem seperti SKPL (Spesifikasi Kebutuhan Perangkat Lunak).
        
        Melalui proyek TOEICLY, saya memperoleh pengalaman nyata dalam membangun sistem informasi berbasis web yang sesuai dengan kebutuhan pengguna, meningkatkan kemampuan kerja tim, serta memahami alur pengembangan sistem dari tahap analisis hingga implementasi.`,
        githubLink: "https://github.com/SuryaRf/TOEICLY.git",
        demoLink: "/assets/TOEIC.mp4"
      }
    ],
    semester5: [
      {
        id: 3,
        title: "Website Manajemen Keselamatan dan Kesehatan Kerja (K3)",
        description: "Website sistem informasi Kesehatan dan Keselamatan Kerja (K3) yang dikembangkan sebagai proyek perkuliahan untuk mendukung pencatatan, pemantauan, dan pengelolaan data K3 di lingkungan perusahaan manufaktur.",
        image: "/assets/K3.png",
        semester: "Semester 5",
        type: "Full Stack Application",
        technologies: ["React"],
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
      title: "Website Pembelian Paket Internet (Frontend Project)",
      description: "Website pembelian paket internet yang dikembangkan sebagai project frontend menggunakan React. Fokus pada tampilan UI, pengelolaan data paket menggunakan JSON, serta interaksi pengguna yang sederhana dan responsif.",
      image: "/assets/Website Tes Intern PT. DWP.png",
      semester: "Case Study Intern – PT. Dutakom Wibawa Putra",
      type: "Frontend Focus",
      technologies: ["React.js", "ant design", "mock server API", "db.json"],
      features: [
        "Pemilihan paket internet dengan berbagai pilihan kuota, masa aktif, dan harga",
        "Pemilihan metode pembayaran (Bank Transfer, E-Wallet, Pulsa, dan lain-lain)",
        "Simulasi proses pembelian paket internet secara frontend",
        "Penerapan kode promo untuk mendapatkan potongan harga saat pembelian",
        "Notifikasi status transaksi (berhasil, promo diterapkan, dll)",
        "Manajemen data pengguna (edit data user)"
      ],
      fullDescription: `Website ini merupakan tugas tes magang dari PT. Dutakom Wibawa Putra (DWP Group) yang dikerjakan sebagai bagian dari proses seleksi magang. Proyek ini diselesaikan dalam waktu 2 hari, dengan fokus utama pada frontend sesuai dengan posisi yang saya lamar.
      
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
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <Container>
          <div className="py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 font-playfair">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">Home</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">Tech Stack</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">About</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
              <div className="flex flex-col space-y-4 py-6 px-4">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">Home</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">Projects</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">Tech Stack</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">About</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium font-inter">Contact</a>
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Hero Section dengan Foto Lingkaran */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Foto Profile Lingkaran */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/assets/profile.jpeg" 
                  alt="Profile"
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute inset-0 rounded-full border-2 border-gray-200 animate-pulse"></div>
              </div>
            </div>
            
            {/* Nama */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 font-playfair">
             <span className="text-gray-900">Josephine Antonia</span>
            </h1>
            
            {/* Title */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-inter max-w-2xl mx-auto">
              Full-Stack Developer dengan minat pada pengembangan aplikasi web end-to-end, mulai dari frontend, backend, hingga pengelolaan database.
              Aktif mengembangkan aplikasi web melalui berbagai proyek akademik dan studi kasus, serta terus meningkatkan kemampuan teknis.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300 transform hover:scale-105 font-inter"
              >
                Projek Saya
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 font-inter"
              >
                Kontak
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 font-playfair">
            Projek Semester
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
            Perkembangan project web development dari semester ke semester
          </p>

          {/* Semester 3 Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-green-500 pl-4 font-playfair">
              Semester 3 
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl font-inter">
              Project semester 3 fokus pada pengembangan foundational skills dalam full-stack development basics.
            </p>
            <div className="grid grid-cols-1 gap-8">
              {projects.semester3.map(project => (
                <div 
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded font-inter">
                          {project.semester}
                        </span>
                        <span className="text-sm text-gray-500 font-inter">{project.type}</span>
                      </div>
                      <h4 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 mb-4 font-inter">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-inter"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="text-gray-800 font-medium hover:text-gray-900 transition duration-200 flex items-center font-inter">
                          Explore Project <CodeIcon className="w-4 h-4 ml-1" />
                        </button>
                        <div className="flex gap-3">
                          <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 transition duration-200"
                            onClick={e => e.stopPropagation()}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          {project.demoLink && (
                            <a 
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-800 transition duration-200"
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

          {/* Semester 4 Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-blue-500 pl-4 font-playfair">
              Semester 4
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl font-inter">
              Project semester 4 kemampuan full-stack development dan database design.
            </p>
            <div className="grid grid-cols-1 gap-8">
              {projects.semester4.map(project => (
                <div 
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded font-inter">
                          {project.semester}
                        </span>
                        <span className="text-sm text-gray-500 font-inter">{project.type}</span>
                      </div>
                      <h4 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 mb-4 font-inter">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-inter"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="text-gray-800 font-medium hover:text-gray-900 transition duration-200 flex items-center font-inter">
                          Explore Project <CodeIcon className="w-4 h-4 ml-1" />
                        </button>
                        <div className="flex gap-3">
                          <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 transition duration-200"
                            onClick={e => e.stopPropagation()}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          {project.demoLink && (
                            <a 
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-800 transition duration-200"
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

          {/* Semester 5 Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-purple-500 pl-4 font-playfair">
              Semester 5 
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl font-inter">
              Project K3 semester 5 yang dikembangkan menggunakan React.js.
            </p>
            <div className="grid grid-cols-1 gap-8">
              {projects.semester5.map(project => (
                <div 
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded font-inter">
                          {project.semester}
                        </span>
                        <span className="text-sm text-gray-500 font-inter">{project.type}</span>
                      </div>
                      <h4 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 mb-4 font-inter">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-inter"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="text-gray-800 font-medium hover:text-gray-900 transition duration-200 flex items-center font-inter">
                          Explore Project <CodeIcon className="w-4 h-4 ml-1" />
                        </button>
                        <div className="flex gap-3">
                          {project.githubLink && (
                            <a 
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-700 transition duration-200"
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
                              className="text-gray-500 hover:text-gray-800 transition duration-200"
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

          {/* Projek Test Case Section */}
          <div className="mt-16 pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-pink-500 pl-4 font-playfair">
              Web Application Case Study – PT. Dutakom Wibawa Putra
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl font-inter">
              Website frontend yang dikembangkan menggunakan React.js dengan data dari JSON Server (db.json). Project ini berfokus pada pembuatan antarmuka yang responsif, dan penerapan konsep dasar frontend development seperti component, state, dan data fetching.
            </p>
            <div className="grid grid-cols-1 gap-8">
              {testCaseProjects.map(project => (
                <div 
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-pink-600 bg-pink-100 px-2 py-1 rounded font-inter">
                          {project.semester}
                        </span>
                        <span className="text-sm text-gray-500 font-inter">{project.type}</span>
                      </div>
                      <h4 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 mb-4 font-inter">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-inter"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="text-gray-800 font-medium hover:text-gray-900 transition duration-200 flex items-center font-inter">
                          Explore Project <CodeIcon className="w-4 h-4 ml-1" />
                        </button>
                        <div className="flex gap-3">
                          {project.githubLink && (
                            <a 
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-700 transition duration-200"
                              onClick={e => e.stopPropagation()}
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                          {project.figmaLink && (
                            <a 
                              href={project.figmaLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-pink-600 transition duration-200"
                              onClick={e => e.stopPropagation()}
                            >
                              <Palette className="w-5 h-5" />
                            </a>
                          )}
                          {project.demoLink && (
                            <a 
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-800 transition duration-200"
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
      <section id="skills" className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 font-playfair">
            Tech Stack
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
            Teknologi dan tools yang saya kuasai dalam pengembangan web
          </p>

          {/* Tech Stack Overview */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="text-2xl font-bold text-green-600 mb-3 font-playfair">Frontend</div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-inter">React.js</p>
                  <p className="text-sm text-gray-600 font-inter">JavaScript</p>
                  <p className="text-sm text-gray-600 font-inter">Tailwind CSS</p>
                  <p className="text-sm text-gray-600 font-inter">HTML CSS</p>
                  <p className="text-sm text-gray-600 font-inter">Responsive Design</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="text-2xl font-bold text-blue-600 mb-3 font-playfair">Backend</div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-inter">PHP Laravel</p>
                  <p className="text-sm text-gray-600 font-inter">REST API Development</p>
                  <p className="text-sm text-gray-600 font-inter">Python</p>
                  <p className="text-sm text-gray-600 font-inter">JavaScript</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="text-2xl font-bold text-purple-600 mb-3 font-playfair">UI/UX Design</div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-inter">Figma</p>
                  <p className="text-sm text-gray-600 font-inter">Design Systems</p>
                  <p className="text-sm text-gray-600 font-inter">Wireframing</p>
                  <p className="text-sm text-gray-600 font-inter">Prototyping</p>
                  <p className="text-sm text-gray-600 font-inter">User Research</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="text-2xl font-bold text-orange-600 mb-3 font-playfair">Tools</div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-inter">Git & GitHub</p>
                  <p className="text-sm text-gray-600 font-inter">Visual Studio Code</p>
                  <p className="text-sm text-gray-600 font-inter">Figma</p>
                  <p className="text-sm text-gray-600 font-inter">Power BI</p>
                  <p className="text-sm text-gray-600 font-inter">phpMyAdmin</p>
                </div>
              </div>
            </div>

            {/* Additional Skills */}
            <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 font-playfair">Additional Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 font-inter">REST API Integration</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 font-inter">CRUD Implementation</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 font-inter">UI/UX Design Systems</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 font-inter">Responsive Web</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-playfair">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/assets/profile.jpeg"
                  alt="Profile"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">
                  Fullstack Web Developer & UI/UX Designer
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-inter">
                  Saya adalah mahasiswa dengan minat kuat pada pengembangan aplikasi web fullstack dan desain UI/UX. Melalui berbagai proyek yang dikerjakan pada perkuliahan, saya mengembangkan kemampuan pada sisi frontend, backend, serta pengelolaan database dan desain sistem.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed font-inter">
                  Proyek-proyek tersebut mencerminkan progres pembelajaran yang bertahap, mulai dari penguasaan konsep dasar hingga implementasi aplikasi dengan fitur yang lebih kompleks, terstruktur, dan sesuai kebutuhan pengguna. Saya percaya bahwa kombinasi technical skills dan design thinking menghasilkan produk digital yang optimal.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-inter">Communication</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-inter">Team Collaboration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-inter">Time Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-inter">Design System Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 font-playfair">
            Let's Connect!
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
            Mari terhubung dan berkolaborasi dalam project menarik
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 font-playfair">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:joseephineez@gmail.com"
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 group"
                >
                  <Mail className="w-6 h-6 text-gray-600 mr-4 group-hover:text-gray-800" />
                  <span className="text-gray-700 font-inter group-hover:text-gray-900">joseephineez@gmail.com</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/josephine-antonia-01277038a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 group"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 mr-4 group-hover:text-blue-600" />
                  <span className="text-gray-700 font-inter group-hover:text-gray-900">LinkedIn Profile</span>
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-600" />
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/Josephinnnes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 group"
                >
                  <Github className="w-6 h-6 text-gray-600 mr-4 group-hover:text-gray-800" />
                  <span className="text-gray-700 font-inter group-hover:text-gray-900">GitHub Profile</span>
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <Container>
          <div className="text-center">
            <p className="font-inter">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <p className="mt-2 text-sm font-inter">Built with React and Tailwind CSS</p>
          </div>
        </Container>
      </footer>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Portfolio;