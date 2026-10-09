# Karyatim Company Profile

## Product intent

Website profil publik PT. Karyatim Mandiri Engineering untuk membantu calon klien memahami cakupan pekerjaan, menilai dokumentasi proyek, mengunduh company profile, dan memulai konsultasi.

## Source of truth

- Identitas, narasi, layanan, dan kontak: `../../aset/halaman-pdf-300dpi/` dan PDF portofolio publik.
- Dokumentasi visual: `../../aset/foto-proyek/` dan `public/images/projects/`.
- Logo induk: `../../aset/logo/image.png`.
- Data proyek, layanan, dan klien tetap berasal dari model Laravel yang sudah digunakan halaman Inertia.

## Confirmed company facts

- Nama: PT. Karyatim Mandiri Engineering.
- Basis operasi: Surabaya, Jawa Timur.
- Berdiri sejak 2014.
- Telepon: 0812 3171 6286 dan 0812 8490 0094.
- Email: infokaryatimsurabaya@gmail.com.
- Instagram: @karyatimcontractor.
- Bidang: general contractor untuk bangunan, pekerjaan sipil, struktur baja, interior, fasad, perkerasan, dan pekerjaan pendukung.

## Primary audience and journey

Pengambil keputusan perusahaan, pemilik usaha, pengelola fasilitas, dan pemilik proyek. Urutan utama: melihat kemampuan, memeriksa pekerjaan nyata, membuka rincian layanan, lalu menghubungi melalui WhatsApp atau formulir konsultasi.

## Platform and product contract

- Platform: web, dibangun dengan Laravel, Inertia, React, Tailwind CSS, dan Lucide.
- Route publik yang harus dipertahankan: `/`, `/proyek`, `/proyek/{slug}`, `/layanan`, `/layanan/{slug}`, `/tentang-kami`, dan `/kontak`.
- Form konsultasi tetap mengirim `POST /inquiry` dengan field `name`, `company`, `phone`, `email`, `service_type`, `project_location`, `estimated_volume`, `budget_range`, dan `description`.
- WhatsApp, telepon, email, Instagram, dan unduhan PDF adalah tindakan nyata. Jangan membuat CTA yang tidak memiliki tujuan aktif.
- Proyek, layanan, klien, filter kategori, proyek terkait, dan layanan terkait tetap berasal dari model serta controller Laravel. Jangan menggantinya dengan array presentasional di komponen.

## Final visual system

### Direction

`Site record board`: tampilan seperti papan catatan proyek yang tegas, teknis, lapang, dan berbasis dokumentasi lapangan. Karakternya dibangun oleh bidang biru solid, foto proyek berukuran besar, garis register tipis, indeks dua digit, dan layout editorial asimetris. Energy `2/5`, rhythm `3/5`, motion `1/5`.

### Color

- Primary blue: `#0879b8`; hover/deep blue: `#075a9f`; navy ink and dark section: `#073752`.
- Canvas: `#f4f6f6`; paper: `#ffffff`; ink: `#111c23`; muted copy: `#5f6b73`; rule: `#d8dfe2`.
- Pale interaction tint: `#eaf4f9`; light-blue metadata on navy: `#75c9ee`.
- Gunakan warna sebagai bidang solid dan penanda hirarki. Jangan menambahkan gradien, glow, atau warna aksen baru tanpa alasan produk yang jelas.

### Typography

- Typeface tunggal: Instrument Sans, fallback Inter dan sans-serif.
- Judul utama padat, berat `700`, line-height sekitar `.94-.98`, dan tracking negatif. Skala responsif sudah diotorisasi lewat `.kt-title` dan `.kt-page-title`.
- Judul section memakai `.kt-section-title`; body panjang memakai `.kt-body`; metadata ringkas memakai `.kt-meta`; indeks memakai `.kt-index` dengan angka tabular.
- Gunakan sentence case. Label kecil berfungsi sebagai metadata, bukan pill, eyebrow dekoratif, atau uppercase dengan tracking lebar.

### Layout, geometry, and rhythm

- Shell utama memakai `.kt-shell`, maksimum `82rem`, dengan gutter `1rem` per sisi dan `0.625rem` per sisi pada layar kecil.
- Section utama memakai `.kt-section`, dari `4rem` pada ponsel hingga `7.5rem` pada layar besar.
- Grid desktop berbasis 12 kolom. Komposisi harus terasa seperti register/editorial spread, bukan deretan kartu mengambang.
- Sudut elemen kecil (`2px` pada tombol dan field), border `1px`, tanpa shadow dekoratif. `.kt-grid-mark` boleh dipakai untuk sudut registrasi yang tipis dan fungsional.
- Fotografi menggunakan crop penuh dan rasio stabil, terutama `4:3` untuk proyek. Hindari overlay dekoratif; caption ditempatkan sebagai strip informasi yang jelas.

### Motion and interaction

- Motion dibatasi pada satu reveal ringan untuk hero serta pergeseran ikon atau skala foto yang halus pada hover.
- Semua transisi harus fungsional, singkat, dan aman untuk `prefers-reduced-motion`.
- Tombol, link navigasi, filter, dan kontrol mobile memiliki target sentuh minimal `44px`. Focus field harus menggunakan border biru dan ring lembut yang sudah ditentukan.
- Ikon memakai Lucide secara minimal untuk memperjelas tindakan, bukan sebagai ornamen.

## Approved components and page patterns

- `AppLayout`: shell publik tunggal dengan navbar sticky, area konten, dan footer.
- `Navbar`: logo resmi biru, lima route utama, unduhan PDF, konsultasi WhatsApp, active state bergaris, serta menu mobile dengan target sentuh yang memadai.
- `Footer`: bidang navy, CTA konsultasi, navigasi, korespondensi, unduhan profil, dan fakta perusahaan. Jangan mengubahnya menjadi footer empat kolom generik.
- `ProjectCard`: foto `4:3`, kategori dan tahun, judul, lokasi opsional, lalu link catatan proyek. Card hanya dipakai karena proyek merupakan data discrete dan scannable.
- `ClientLogoGrid`: tampilkan artwork daftar klien resmi dari company profile. Data backend hanya boleh menjadi konteks pendamping, bukan pengganti identitas visual atau sumber nama rekaan.
- Page header internal: bidang navy setinggi sekitar `20-25rem`, aksen border biru bawah, metadata ringkas, dan judul besar yang rata ke bawah.
- Homepage: split hero biru dan foto lapangan, register empat layanan, grid proyek unggulan, daftar layanan pada bidang navy, bukti klien, lalu CTA berbasis foto.
- Project index: filter kategori horizontal yang boleh di-scroll pada mobile, grid proyek `3/2/1` kolom, empty state sederhana, dan akses ke PDF.
- Service index: daftar editorial bergaris dengan indeks, judul, ringkasan, dan affordance panah. Jangan mengubahnya menjadi grid kartu ikon.
- Detail proyek dan layanan: header faktual, gambar utama lebar, komposisi narasi `7/12` dan daftar lingkup `4/12`, lalu galeri atau proyek terkait bila datanya tersedia.
- About: narasi dan foto tim dalam split editorial, prinsip kerja sebagai numbered register, bukti klien, lalu CTA.
- Contact: kontak langsung di sisi kiri dan form putih bergaris di sisi kanan; label harus mandiri tanpa helper text yang redundan. Pertahankan success, validation error, processing, dan WhatsApp fallback.

## Responsive rules

- Project grid berubah dari tiga kolom menjadi dua di bawah `900px`, lalu satu di bawah `640px`.
- Navbar desktop berubah menjadi tombol menu berukuran `44px`; menu mobile tampil sebagai daftar route vertikal dan satu CTA WhatsApp.
- Grid editorial bertumpuk secara alami pada layar kecil. CTA dengan banyak tindakan boleh wrap, sedangkan filter kategori boleh horizontal-scroll tanpa membuat halaman overflow.
- Jangan mengurangi target sentuh, memadatkan judul hingga bertabrakan, atau membiarkan gambar dan teks keluar dari viewport.

## Content and asset authority

- Copy faktual harus mengikuti halaman sumber di `../../aset/halaman-pdf-300dpi/`, PDF publik di `public/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf`, dan data Laravel yang telah dikonfirmasi.
- Logo yang digunakan UI berada di `public/images/brand/` dan bersumber dari `../../aset/logo/image.png`. Jangan membuat ulang logo, wordmark, atau favicon.
- Foto proyek resmi bersumber dari `../../aset/foto-proyek/` dan salinan web di `public/images/projects/`. Pilih berdasarkan nama dan konteks pekerjaan; jangan memakai stock photo atau gambar substitusi.
- Nama klien hanya boleh muncul dari sumber resmi atau record `CorporateClient`. Bila bukti klien tidak tersedia, hilangkan klaimnya.
- Jangan menambahkan statistik, sertifikasi, standar, jaminan, alamat detail, nama klien, testimonial, atau klaim hasil yang tidak ada di sumber.
- Bahasa utama adalah Bahasa Indonesia dengan nada langsung, profesional, dan berbasis pekerjaan. Hindari slogan abstrak, jargon pemasaran, dan penjelasan berulang di bawah judul.

## Extension rules for future agents

- Mulai dari token dan primitive `.kt-*` di `resources/css/app.css`; jangan membuat sistem visual paralel di halaman baru.
- Gunakan `AppLayout`, `Navbar`, `Footer`, `ProjectCard`, dan `ClientLogoGrid` sebelum membuat varian baru. Buat komponen baru hanya untuk pola data atau interaksi yang benar-benar berbeda.
- Halaman publik baru harus menggunakan salah satu komposisi yang disetujui: split documentary, ruled register, 12-column editorial detail, atau evidence grid. Variasikan skala dan ritme berdasarkan konten, bukan dengan menambah dekorasi.
- Pertahankan route, slug, nama prop Inertia, field database, urutan data, serta state kosong dan opsional. Perubahan visual tidak boleh memutus kontrak backend.
- Pertahankan logo, fakta perusahaan, nomor kontak, tautan unduhan, dan sumber foto. Jika sumber saling bertentangan, jangan menebak; minta konfirmasi.
- Jangan memakai pill eyebrow, label uppercase berjarak lebar, subtitle repetitif, emoji, gradien neon, card-everything, testimonial rekaan, atau statistik tanpa sumber.
- Setiap elemen interaktif harus berfungsi, memiliki state yang jelas, dan tetap nyaman pada keyboard serta mobile. Tambahan motion wajib menghormati reduced motion.
- Jika mengubah token, primitive, pola halaman, atau otoritas konten, perbarui dokumen ini pada perubahan yang sama agar implementasi dan handoff tetap sinkron.
