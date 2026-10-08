[![KH Shodiq Hamzah Raih DR HC Berkat Tafsir al-Bayan Dalam Bahasa Jawa Kromo     | Republika Online](https://images.openai.com/static-rsc-4/uGH7ujR9diqWx1iN0Vkr3M0dbqrnIRhK2TQ06Opg7Z3nkbtiCpt096aMmeOVPe2BiccShe2sSEd8jLw6bjJnXjhhQZt4VN7ETr7Dq8ncDSeNJYU8hK5ORfx4ShT3pGGJEDc1he98el8AxpAc8TQrhufn8BlLeQ5R4j_CNtfj9pU?purpose=inline)](https://khazanah.republika.co.id/berita/rm3pvn385/kh-shodiq-hamzah-raih-dr-hc-berkat-tafsir-albayan-dalam-bahasa-jawa-kromo?utm_source=chatgpt.com)

# Hasil audit data Asshodiqiyah

Secara **struktur website**, repo sudah cukup lengkap sebagai purwarupa: terdapat halaman profil pesantren, pengasuh, pendidikan, lima unit pendidikan formal, KBIHU, artikel, dan kontak. Namun secara **kelengkapan data resmi**, beberapa halaman masih terlalu umum, sejumlah kolom legal kosong, dan ada data yang salah penempatan.

Kesimpulan audit saya:

| Aspek                    | Kondisi                                      |
| ------------------------ | -------------------------------------------- |
| Struktur halaman         | Cukup lengkap                                |
| Identitas umum pesantren | Sudah ada, tetapi perlu sumber dokumen       |
| Data legal setiap unit   | Belum lengkap                                |
| Data pimpinan unit       | Sebagian kosong atau belum terverifikasi     |
| Program dan kurikulum    | Masih berupa deskripsi umum                  |
| Kontak per unit          | Hampir seluruhnya belum ditampilkan          |
| PPDB, biaya, beasiswa    | Belum ada                                    |
| Data santri, siswa, guru | Belum ada atau belum diberi tanggal          |
| Prestasi dan kerja sama  | Banyak informasi publik belum dimanfaatkan   |
| Data KBIHU               | Sangat minim                                 |
| Konsistensi data         | Ada beberapa konflik yang perlu dikonfirmasi |

## Temuan paling penting yang harus diperbaiki

### 1. Data MA salah ditempatkan

Di repo, nomor `013/BAN-PDM/SK/2025` dimasukkan sebagai **SK Pendirian MA Asshodiqiyah**. Nomor tersebut sebenarnya merupakan **SK akreditasi**, bukan SK pendirian atau izin operasional.

Data resminya:

- NPSN: **70035520**
- Izin operasional: **Keputusan Nomor 565 Tahun 2021**
- Tanggal izin operasional: **25 Mei 2021**
- Akreditasi: **A**
- Tahun akreditasi: **2024**
- SK akreditasi: **013/BAN-PDM/SK/2025**
- Kepala madrasah yang tercatat: **Miftakhur Rohim**. ([Referensi Data Kemendikdasmen][1])

Jadi struktur datanya seharusnya dibedakan:

```text
SK/Izin Operasional : 565 Tahun 2021
Tanggal Izin        : 25 Mei 2021
Akreditasi          : A
Tahun Akreditasi    : 2024
SK Akreditasi       : 013/BAN-PDM/SK/2025
```

### 2. Data SMP IT sebenarnya tersedia, tetapi masih kosong di repo

Repo hanya menampilkan NPSN SMP IT, sedangkan SK pendirian dan akreditasi masih `null`.

Data publik yang dapat dimasukkan:

- Nama: **SMP IT Asshodiqiyah**
- NPSN: **69762628**
- Status: swasta
- SK pendirian/operasional: **421.3/1255/2013**
- Tanggal SK: **12 Juni 2013**
- Akreditasi: **B**
- Luas tanah yang tercatat: **1.120 m²**
- Telepon: **024-70900778**
- Email: **[smpitasshodiqiyahsemarang@gmail.com](mailto:smpitasshodiqiyahsemarang@gmail.com)**
- Situs yang tercatat: **smpitasshodiqiyah.sch.id**. ([Referensi Data Kemendikdasmen][2])

Sumber sekolah pihak ketiga mencantumkan kepala sekolah **Mohammad Zam Zami Urif**, 95 siswa, dan 15 guru. Data tersebut dapat dijadikan petunjuk, tetapi harus dikonfirmasi langsung karena bukan sumber utama pemerintah dan dapat berubah. ([DaftarSekolah][3])

### 3. Data MTs juga tersedia tetapi belum dimasukkan

Repo baru mencantumkan nama dan NPSN, sedangkan izin operasional, akreditasi, pimpinan, dan identitas madrasah masih kosong.

Data yang ditemukan:

- Nama: **MTs Asshodiqiyah**
- NPSN: **70049571**
- Status: swasta
- Izin operasional: **Keputusan Nomor 564 Tahun 2021**
- Tanggal izin operasional: **25 Mei 2021**
- Luas tanah yang tercatat bersama kompleks madrasah: **7.735 m²**
- Akreditasi belum tercantum pada referensi resmi yang ditemukan. ([Referensi Data Kemendikdasmen][4])

Kantor Kementerian Agama Kota Semarang pada kegiatan Matsama tahun ajaran 2024/2025 menyebut kepala MTs **Agus Muhammad Faried Nabil** dan menyebut peserta saat itu sebagai generasi awal MTs Asshodiqiyah. Artinya, halaman MTs dapat diperkuat dengan narasi sejarah awal operasional madrasah, bukan hanya deskripsi kurikulum generik. ([Jawa Tengah Kemenag][5])

Ada dokumen publik nonprimer yang mencantumkan:

- NSM: **121233740042**
- Nomor izin: **3343/Kw.11.2/3/PP.03/05/2021**
- Nomor kontak: **0813-2830-9440**
- Status saat dokumen dibuat: belum terakreditasi.

Informasi tersebut sebaiknya hanya dijadikan daftar konfirmasi kepada pengelola, bukan langsung diterbitkan. ([Scribd][6])

### 4. Data SMK masih kurang banyak

Repo sudah mencantumkan NPSN, akreditasi B, jurusan, laboratorium, internet, dan ekstrakurikuler, tetapi belum mencantumkan SK pendirian, izin operasional, kepala sekolah, dan data legal akreditasi.

Data resmi SMK:

- Nama: **SMK Asshodiqiyah**
- NPSN: **20362087**
- Status: swasta
- Kepala sekolah: **Sudarto**
- Operator sekolah: **Renni Ika Yuliani**
- SK pendirian: **420/1748/2011**
- Tanggal pendirian yang tercatat: **9 Desember 2010**
- SK izin operasional: **421.5/1290**
- Tanggal izin operasional: **19 Februari 2016**
- Akreditasi: **B**
- SK akreditasi: **1347/BAN-SM/SK/2021**
- Kurikulum yang tercatat: **Kurikulum Merdeka**
- Luas tanah: **3.200 m²**
- Akses internet: fiber optik
- Telepon: **024-76450379**
- Email: **[smk_asshodiqiyah@yahoo.co.id](mailto:smk_asshodiqiyah@yahoo.co.id)**. ([Dapo Kemdikbud][7])

Nama program keahlian di repo kemungkinan memakai nomenklatur lama:

- `Teknik Komputer dan Jaringan`
- `Farmasi Klinis dan Komunitas`.

Data resmi tingkat akhir yang disinkronkan pada 19 Juni 2026 menggunakan kategori:

- **Teknik Jaringan Komputer dan Telekomunikasi**
- **Teknologi Farmasi**. ([Referensi Data Kemendikdasmen][8])

Sebelum diubah, perlu dipastikan apakah sekolah saat ini menggunakan nama konsentrasi yang lebih spesifik atau nama program resmi yang baru.

### 5. Status akreditasi SD IT perlu diverifikasi dari sertifikat

Data di repo:

- NPSN: **69933468**
- SK: **4212/9306/2014**
- Tanggal: **22 Desember 2014**
- Akreditasi: **C**.

Referensi Kemendikdasmen juga mencantumkan:

- Akreditasi C
- Luas tanah 400 m²
- Email **[sditasshodiqiyah@gmail.com](mailto:sditasshodiqiyah@gmail.com)**. ([Referensi Data Kemendikdasmen][9])

Namun, sistem spasial pendidikan Kota Semarang menampilkan status “tidak terakreditasi”. Kemungkinan penyebabnya adalah perbedaan tahun sinkronisasi, masa berlaku sertifikat, atau ketidaksamaan basis data. Karena itu, website sebaiknya tidak hanya menulis “Akreditasi C”, tetapi menyimpan nomor dan masa berlaku sertifikat terbaru. ([Diskominfo Kota Semarang][10])

Sumber pihak ketiga mencantumkan kepala sekolah **Indra Bagus Octora**, 106 siswa, dan 7 guru. Ini masih perlu dikonfirmasi kepada unit SD IT. ([DaftarSekolah][11])

## Ringkasan data per unit

| Unit      | Data yang sudah ada                     | Data yang dapat ditambahkan segera                        | Masih perlu konfirmasi                                          |
| --------- | --------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------- |
| SD IT     | NPSN, SK, akreditasi                    | Email, luas tanah                                         | Kepala sekolah, akreditasi terbaru, telepon, jumlah siswa       |
| SMP IT    | NPSN dan deskripsi                      | SK 421.3/1255/2013, akreditasi B, telepon, email, situs   | Kepala sekolah aktif, siswa/guru terkini                        |
| MTs       | NPSN dan deskripsi                      | Izin 564 Tahun 2021, tanggal izin, kepala madrasah        | NSM, telepon, akreditasi, program unggulan                      |
| MA        | NPSN, akreditasi, kepala                | Izin 565 Tahun 2021 dan pemisahan SK akreditasi           | Kontak, peminatan, siswa/guru, PPDB                             |
| SMK       | NPSN, jurusan, fasilitas                | SK pendirian, izin, kepala sekolah, kontak, SK akreditasi | Nama konsentrasi terbaru, mitra industri, BKK, PKL              |
| KBIHU     | Tahun berdiri, pembimbing, layanan umum | Riwayat pembinaan dan kepemimpinan                        | Nomor izin, biaya, jadwal, kontak, prosedur pendaftaran         |
| Pesantren | Sejarah umum dan pengasuh               | Program pengajian, penelitian, kerja sama sosial          | Nomor statistik pesantren, jumlah santri, struktur kepengurusan |

## Koreksi konsep “6 unit pendidikan”

Home menampilkan statistik **“6 unit pendidikan”**, sedangkan daftar tersebut terdiri atas lima satuan pendidikan formal dan satu KBIHU.

KBIHU bukan satuan pendidikan formal seperti sekolah atau madrasah. Penulisan yang lebih tepat:

> **5 unit pendidikan formal dan 1 lembaga bimbingan haji dan umrah**

Atau:

> **6 unit layanan pendidikan dan pembinaan**

Ini akan menghindari kesan bahwa KBIHU memiliki status yang sama dengan SD, SMP, MTs, MA, atau SMK.

# Data profil pesantren dan yayasan yang perlu ditambah

## 1. Struktur Yayasan Asshodiqiyah

Halaman profil saat ini hanya menyebut Yayasan Asshodiqiyah sebagai naungan, tanpa struktur pimpinan.

Publikasi Kementerian Agama Kota Semarang mencantumkan:

- Ketua Yayasan: **Gus Shidqon Prabowo**
- Direktur pendidikan: **H. A. Umar**
- Unit yang berada di lingkungan yayasan: SD, SMP, MTs, SMK, dan MA. ([Jawa Tengah Kemenag][12])

Website sebaiknya memiliki halaman atau bagian:

- Pembina yayasan
- Pengawas yayasan
- Ketua yayasan
- Sekretaris
- Bendahara
- Direktur pendidikan
- Pengasuh pondok
- Kepala setiap unit
- Struktur pengurus pesantren putra dan putri.

Nama-nama tersebut harus berasal dari SK pengurus yayasan terbaru, bukan hanya artikel publik.

## 2. Legalitas pesantren dan yayasan

Repo mencantumkan:

- Yayasan berdiri melalui Akta Notaris Nomor 10 tanggal 14 September 1998
- Pesantren diresmikan 7 Maret 2010.

Riwayat tersebut juga muncul pada arsip lama profil SMK/Yayasan. Namun, halaman resmi sebaiknya dilengkapi:

- Nama lengkap badan hukum
- Nomor akta pendirian
- Nama notaris
- Nomor dan tanggal perubahan akta terakhir
- Nomor AHU Kementerian Hukum
- NPWP yayasan
- Nomor Statistik Pondok Pesantren
- Piagam Statistik Pesantren
- Nomor izin operasional pesantren
- Tahun dan pihak yang meresmikan
- Dokumen yang dapat diunduh atau setidaknya nomor dokumennya. ([SMK ASSHODIQIYAH SEMARANG][13])

Nomor AHU, NSPP, dan izin operasional pesantren belum berhasil ditemukan dari sumber publik yang cukup kuat.

## 3. Luas kawasan perlu diseragamkan

Repo menggunakan angka **3 hektare**.

Sumber sejarah lain mencantumkan **sekitar 2,9 hektare**, sedangkan data sekolah masing-masing menggunakan bidang tanah berbeda:

- SD IT: 400 m²
- SMP IT: 1.120 m²
- MTs dan MA: 7.735 m²
- SMK: 3.200 m². ([SMK ASSHODIQIYAH SEMARANG][13])

Angka tersebut tidak boleh langsung dijumlahkan karena mungkin terdapat bidang tanah bersama atau pencatatan yang saling bertumpang tindih. Untuk profil umum, gunakan:

> “Kawasan Asshodiqiyah berdiri di atas lahan sekitar 2,9–3 hektare.”

Setelah sertifikat atau inventaris aset yayasan diperiksa, barulah gunakan angka pasti.

## 4. Alamat belum konsisten

Repo menggunakan:

> Jl. Sawah Besar Timur No.99, RT.09/RW.02, Kaligawe, Gayamsari, Kota Semarang 50164.

Sumber publik menggunakan beberapa variasi:

- Jl. Sawah Besar Timur No.99
- Jl. Sawah Besar Timur I No.99
- RT.08/RW.02
- RT.09/RW.02.

Sebelum publikasi, cocokkan dengan:

1. Akta yayasan
2. Google Business Profile
3. Surat izin sekolah/madrasah
4. Kartu NPWP yayasan
5. Kode pos resmi.

Website dapat tetap menyimpan variasi nama jalan sebagai alias SEO, tetapi alamat utama harus satu versi.

# Data pengasuh yang dapat diperkaya

Halaman pengasuh sudah menjadi salah satu bagian paling lengkap, tetapi masih dapat diperbaiki. Repo menyebut 37 lebih karya dan Tafsir Al-Bayan 30 jilid.

Profil resmi UIN Walisongo menyebut:

- Nama: **KH Shodiq Hamzah**
- Lahir: Demak, 1 Januari 1954
- Ayah: KH Hamzah Utsman
- Ibu: Nyai Hj Rohanah
- Alumni Pondok Pesantren Futuhiyyah Mranggen
- Menulis 38 karya
- Sebanyak 35 karya telah diterbitkan saat penganugerahan gelar
- Karya utama: **Al-Bayan fi Ma’rifati Ma’ani al-Qur’an**, tafsir 30 juz dalam bahasa Jawa
- Dianugerahi Doktor Honoris Causa bidang Ilmu Tafsir pada 29 November 2022. ([Walisongo][14])

Kiprah organisasi yang dapat dicantumkan setelah konfirmasi periode:

- Penasihat Masjid Agung Jawa Tengah
- Pengurus MUI Jawa Tengah
- Rais Syuriyah PCNU Kota Semarang pada beberapa periode
- Dewan Syariah organisasi KBIHU
- Keterlibatan dalam JATMAN
- Pendiri Yayasan Al-Fattah
- Salah satu penggagas Universitas Wahid Hasyim. ([Walisongo][14])

Pada Desember 2024, beliau terpilih sebagai Ketua DPW FK KBIHU Jawa Tengah periode 2024–2029. ([NU Online][15])

Koreksi yang disarankan:

- Ganti `37+ karya` menjadi kalimat bertanggal:
  **“UIN Walisongo mencatat 38 karya, dengan 35 karya telah diterbitkan hingga 2022.”**
- Jangan memastikan “30 jilid” sebelum edisi fisiknya diverifikasi. Sumber utama yang ditemukan memastikan **30 juz**, bukan selalu jumlah volume cetaknya.
- Tambahkan bibliografi lengkap: judul Arab, transliterasi, bidang kajian, tahun, penerbit, jumlah jilid, dan foto sampul.

# Program kepesantrenan yang belum masuk website

Saat ini website hanya menggunakan istilah umum seperti pengajian kitab, karakter salaf, pembinaan akhlak, dan kegiatan keagamaan.

Penelitian akademik dan publikasi pengabdian menemukan sejumlah program konkret:

### Kajian Tafsir Al-Bayan

Kajian utama **Tafsir Al-Bayan** (30 juz karya pengasuh Dr. (H.C.) KH. Shodiq Hamzah) dan pembacaan surah-surah Al-Qur’an yang dilakukan dalam kehidupan harian santri Asshodiqiyah. Ini menjadi program unggulan utama pesantren.

### Simaan Al-Qur’an santri putri

Penelitian Universitas Islam Sultan Agung mendokumentasikan kegiatan simaan Al-Qur’an pada hari Ahad bagi santri putri. Informasi ini layak dimasukkan ke halaman program putri setelah dikonfirmasi jadwal terbarunya. ([Unissula Repository][17])

### Program mahasantri

Penelitian akademik juga membahas sistem pendidikan karakter mahasantri yang tinggal dan dibina dalam lingkungan pondok selama 24 jam. Artinya, karakter pesantren bukan hanya “Salaf–Pelajar–Mahasiswa”, tetapi dapat dikembangkan menjadi halaman khusus program mahasiswa atau mahasantri. ([Walisongo Journal][18])

### Literasi dan keterampilan digital

Pada 2023 terdapat program penguatan literasi digital serta pelatihan penggunaan PowerPoint untuk santri. Pada 22 Maret 2025, Asshodiqiyah juga menjadi tempat kegiatan **Gerakan Santri Menulis** yang melibatkan Suara Merdeka Network dan pemangku kepentingan lainnya. ([MSTI Journal][19])

Halaman program pesantren sebaiknya minimal memuat:

| Kelompok program | Data yang dibutuhkan                        |
| ---------------- | ------------------------------------------- |
| Pengajian kitab  | Nama kitab, pengampu, waktu, kelas santri   |
| Tahfiz/simaan    | Target hafalan, jadwal, peserta putra/putri |
| Madrasah diniyah | Jenjang, mata pelajaran, sistem evaluasi    |
| Salaf            | Metode bandongan, sorogan, musyawarah       |
| Pelajar          | Jadwal integrasi sekolah dan pondok         |
| Mahasantri       | Kampus asal, pembinaan, aturan tinggal      |
| Literasi         | Menulis, perpustakaan, penerbitan santri    |
| Keterampilan     | Komputer, bahasa, kewirausahaan             |
| Organisasi       | Kepengurusan santri, keamanan, kebersihan   |
| Ekstrakurikuler  | Rebana, olahraga, pramuka, seni, PMR        |

# Kerja sama dan kegiatan publik yang belum dimanfaatkan

Repo baru menampilkan beberapa judul berita singkat, tanpa halaman sumber atau dokumentasi lengkap.

Informasi publik yang dapat dijadikan konten:

### Penanganan banjir dan kolam retensi

Kawasan Asshodiqiyah berada di area yang menghadapi persoalan banjir. Universitas Diponegoro melakukan kegiatan bantuan banjir dan kemudian terlibat dalam pembangunan kolam retensi pada November 2024. Penelitian teknik sipil UNDIP tahun 2025 juga membahas perencanaan kolam retensi kawasan tersebut. ([Universitas Diponegoro][20])

### Pengobatan gratis

Pada 24 Maret 2024, LPPM UNDIP mengadakan pengobatan gratis bagi keluarga besar pesantren dan masyarakat sekitar, dengan sekitar 350 kupon pemeriksaan yang disiapkan. ([Universitas Diponegoro][21])

### Perkiraan jumlah santri tahun 2024

Salah satu publikasi bantuan banjir UNDIP menyebut sekitar **500 santri** berada di lingkungan pesantren pada Maret 2024. Angka ini dapat dipakai sebagai dokumentasi historis dengan label waktu, tetapi tidak boleh digunakan sebagai jumlah santri aktif 2026 tanpa data internal baru. ([Universitas Diponegoro][20])

Website sebaiknya membuat halaman **Kerja Sama dan Pengabdian** dengan kategori:

- Perguruan tinggi
- Pemerintah
- Kementerian Agama
- Layanan kesehatan
- Lingkungan dan mitigasi banjir
- Literasi
- Organisasi keagamaan
- Dunia industri untuk SMK.

# KBIHU masih sangat kurang datanya

Halaman KBIHU saat ini hanya berisi tahun berdiri 1985, nama pembimbing, dan enam layanan yang masih bersifat umum.

Artikel Kementerian Agama pada 2017 mencatat kegiatan pembukaan manasik yang diikuti sekitar 400 calon jemaah. Saat itu KBIHU Asshodiqiyah disebut sebagai salah satu KBIHU dengan jumlah jemaah besar di Kota Semarang dan memberangkatkan lebih dari satu kelompok terbang. Nama pembimbing lain yang disebut antara lain Prof. H. A. Rofiq dan Dr. H. A. Umar. Data ini bernilai historis, bukan angka jemaah terkini. ([Jawa Tengah Kemenag][22])

Data KBIHU yang harus diminta langsung:

- Nomor izin KBIHU Kementerian Agama
- Tanggal dan masa berlaku izin
- Nama resmi sesuai keputusan
- Ketua dan struktur pengurus
- Daftar pembimbing bersertifikat
- Jumlah jemaah per tahun
- Jadwal manasik
- Lokasi praktik manasik
- Program bimbingan sebelum keberangkatan
- Pendampingan di Arab Saudi
- Program pascahaji
- Biaya layanan
- Syarat pendaftaran
- Nomor WhatsApp khusus
- Rekening resmi
- Galeri angkatan jemaah
- Testimoni alumni
- FAQ haji dan umrah.

# Masalah halaman kontak

Repo menjadikan `smk_asshodiqiyah@yahoo.co.id` sebagai email pada halaman kontak pesantren. Email tersebut tampaknya milik SMK, bukan email pusat yayasan atau pesantren.

Sebaiknya dipisahkan:

| Entitas          | Email/kontak                                                                      |
| ---------------- | --------------------------------------------------------------------------------- |
| Yayasan          | Email pusat baru atau email resmi yayasan                                         |
| Pondok pesantren | Email sekretariat pesantren                                                       |
| SD IT            | [sditasshodiqiyah@gmail.com](mailto:sditasshodiqiyah@gmail.com)                   |
| SMP IT           | [smpitasshodiqiyahsemarang@gmail.com](mailto:smpitasshodiqiyahsemarang@gmail.com) |
| MTs              | Perlu dikonfirmasi                                                                |
| MA               | Perlu dikonfirmasi                                                                |
| SMK              | [smk_asshodiqiyah@yahoo.co.id](mailto:smk_asshodiqiyah@yahoo.co.id)               |
| KBIHU            | Nomor dan email khusus                                                            |

Email SD, SMP, dan SMK tercatat dalam basis data pendidikan publik. ([Referensi Data Kemendikdasmen][9])

Hal berikut di halaman kontak juga belum memiliki dukungan sumber kuat:

- Jam sekretariat Senin–Jumat 08.00–16.00
- Jam Sabtu 08.00–12.00
- Minggu tutup
- Ketersediaan area parkir
- Akun Facebook
- Status resmi akun Instagram dan YouTube.

Jangan menerbitkan jam pelayanan atau akun media sosial sebagai informasi resmi sebelum dikonfirmasi oleh pengurus.

# Data dinamis jangan di-hardcode

Beberapa sumber menampilkan jumlah siswa yang berbeda karena tanggal sinkronisasi dan cakupan data berbeda. Contohnya, data MA tingkat akhir pada Juni 2026 mencatat enam peserta didik tingkat akhir, sedangkan angka tersebut bukan jumlah keseluruhan siswa MA. SMK pada tanggal yang sama mencatat 12 peserta didik tingkat akhir dalam dua program. ([Referensi Data Kemendikdasmen][23])

Karena itu, setiap statistik harus menyimpan:

```text
nilai
jenis statistik
tahun ajaran
semester
tanggal pembaruan
sumber
```

Contoh tampilan yang benar:

> 95 peserta didik — data semester tertentu, diperbarui tanggal tertentu.

Bukan:

> 95 siswa.

# Struktur data ideal per unit

Setiap halaman unit pendidikan sebaiknya mempunyai kelompok data berikut:

### Identitas resmi

- Nama resmi
- Nama singkat
- Jenis satuan pendidikan
- NPSN
- NSM untuk madrasah
- Status negeri/swasta
- Kementerian pembina
- Yayasan penyelenggara
- Alamat dan koordinat
- Tahun berdiri.

### Legalitas

- Nomor SK pendirian
- Tanggal SK pendirian
- Nomor izin operasional
- Tanggal izin operasional
- Nomor akreditasi
- Nilai akreditasi
- Tahun dan masa berlaku akreditasi
- Dokumen sertifikat.

### Organisasi

- Kepala unit
- Wakil kepala
- Kepala tata usaha
- Operator
- Komite sekolah
- Jumlah guru
- Jumlah tenaga kependidikan.

### Akademik

- Kurikulum
- Program atau konsentrasi
- Mata pelajaran unggulan
- Integrasi pendidikan pesantren
- Bahasa pengantar
- Sistem evaluasi
- Kalender akademik
- Jadwal pembelajaran.

### Sarana

- Luas tanah dan bangunan
- Jumlah ruang kelas
- Laboratorium
- Perpustakaan
- Masjid
- UKS
- Lapangan
- Asrama
- Internet
- Fasilitas disabilitas
- Sanitasi.

### Informasi publik

- PPDB
- Kuota
- Persyaratan
- Jadwal
- Biaya
- Beasiswa
- Brosur unduhan
- Nomor WhatsApp
- Email
- Media sosial
- Google Maps.

### Kinerja

- Prestasi
- Kelulusan
- Alumni
- Mitra perguruan tinggi
- Mitra industri
- PKL dan BKK khusus SMK
- Kegiatan siswa
- Galeri.

# Daftar data yang belum berhasil diverifikasi secara publik

Data berikut tetap harus diminta kepada pihak Asshodiqiyah:

1. Nomor AHU dan perubahan terakhir Yayasan Asshodiqiyah.
2. NSPP serta izin operasional Pondok Pesantren Asshodiqiyah.
3. Nomor izin aktif KBIHU.
4. Struktur yayasan dan pesantren terbaru.
5. Nama kepala SD IT dan SMP IT yang masih aktif pada 2026.
6. Akreditasi terbaru SD IT dan MTs.
7. Nomor WhatsApp resmi setiap unit.
8. Email resmi pusat pesantren/yayasan.
9. Data siswa, santri, guru, dan pengurus tahun ajaran 2026/2027.
10. Jadwal pengajian kitab dan program diniyah.
11. Biaya pesantren dan sekolah.
12. Fasilitas aktual beserta jumlah dan fotonya.
13. Status program tahfiz, bahasa, mahasantri, dan pesantren putri.
14. Data alumni.
15. Prestasi setiap unit.
16. Nama resmi konsentrasi keahlian SMK saat ini.
17. Koordinat serta RT/RW legal.
18. Luas kawasan berdasarkan dokumen aset.
19. Akun media sosial yang benar-benar dikelola lembaga.
20. Jam layanan sekretariat.

# Urutan revisi repo

## Prioritas 0 — koreksi faktual

1. Pisahkan SK operasional dan SK akreditasi MA.
2. Isi SK serta akreditasi SMP IT.
3. Isi izin operasional MTs.
4. Isi SK pendirian, izin operasional, kepala, dan SK akreditasi SMK.
5. Ubah “6 unit pendidikan” menjadi “5 unit pendidikan formal dan KBIHU”.
6. Jangan gunakan email SMK sebagai satu-satunya email pusat.
7. Tandai statistik dengan tahun dan sumber.
8. Hapus atau tandai sementara jam pelayanan yang belum terverifikasi.

## Prioritas 1 — melengkapi profil

1. Struktur yayasan dan pesantren.
2. Legalitas badan hukum.
3. Program kepesantrenan konkret.
4. Pimpinan dan kontak setiap unit.
5. Kurikulum, konsentrasi, serta fasilitas.
6. Halaman PPDB terpadu.
7. Halaman kerja sama dan pengabdian.

## Prioritas 2 — penguatan konten

1. Bibliografi karya KH Shodiq Hamzah.
2. Sejarah perkembangan setiap unit.
3. Prestasi dan alumni.
4. Dokumentasi Gerakan Santri Menulis.
5. Dokumentasi kerja sama UNDIP.
6. Halaman mitigasi banjir dan kolam retensi.
7. Arsip kegiatan KBIHU per tahun.
8. Artikel yang menyertakan tanggal, penulis, sumber, foto, dan tautan rujukan.

**Kesimpulannya:** repo sudah memiliki kerangka halaman yang tepat, tetapi belum dapat dianggap sebagai profil lembaga resmi yang sepenuhnya valid. Kekurangan utama bukan desain atau jumlah halaman, melainkan legalitas per unit, data pimpinan, kontak terpisah, program konkret, serta konsistensi data yang berubah menurut tahun. Tahap berikutnya yang paling tepat adalah membuat `docs/content-audit.md`, memasukkan data terverifikasi di atas, dan menyiapkan formulir akuisisi data untuk pihak yayasan guna melengkapi bagian yang tidak tersedia secara publik.

[1]: https://referensi.data.kemendikdasmen.go.id/pendidikan/npsn/70035520?utm_source=chatgpt.com "Data Pendidikan Kemendikdasmen"
[2]: https://referensi.data.kemendikdasmen.go.id/pendidikan/npsn/69762628?utm_source=chatgpt.com "Data Pendidikan Kemendikdasmen"
[3]: https://daftarsekolah.net/sekolah/74827/smp-it-asshodiqiyah?utm_source=chatgpt.com "Profil & Data Sekolah SMP IT ASSHODIQIYAH, Kota Semarang, Jawa Tengah - DaftarSekolah.net"
[4]: https://referensi.data.kemendikdasmen.go.id/pendidikan/npsn/70049571?utm_source=chatgpt.com "Data Pendidikan Kemendikdasmen"
[5]: https://jateng.kemenag.go.id/matsama-mts-as-shodiqiyyah-tp-2024-2025/?utm_source=chatgpt.com "Matsama MTs As-shodiqiyyah TP 2024/2025 - Kantor Wilayah Kementerian Agama Provinsi Jawa Tengah"
[6]: https://id.scribd.com/document/932615818/11-Revisi-Doc-i-Finish?utm_source=chatgpt.com "Kurikulum MTs Asshodiqiyah 2025/2026 | PDF"
[7]: https://dapo.kemendikdasmen.go.id/sekolah/DE6AAF59C94539069693?utm_source=chatgpt.com "Data Pokok SMK ASSHODIQIYAH - Pauddikdasmen"
[8]: https://referensi.data.kemendikdasmen.go.id/snpmb/site/sekolah?npsn=20362087&utm_source=chatgpt.com "Informasi Satuan Pendidikan"
[9]: https://referensi.data.kemendikdasmen.go.id/pendidikan/npsn/69933468?utm_source=chatgpt.com "Data Pendidikan Kemendikdasmen"
[10]: https://dataspasial.semarangkota.go.id/detail?npsn=69933468&utm_source=chatgpt.com "Spasial Pendidikan Kota Semarang"
[11]: https://daftarsekolah.net/sekolah/74794/sd-it-asshodiqiyah?utm_source=chatgpt.com "Profil & Data Sekolah SD IT ASSHODIQIYAH, Kota Semarang, Jawa Tengah - DaftarSekolah.net"
[12]: https://jateng.kemenag.go.id/penutupan-mpls-dan-matsama-lpi-yayasan-asshodiqiyyah-semarang/?utm_source=chatgpt.com "Penutupan MPLS dan Matsama LPI Yayasan Asshodiqiyyah Semarang - Kantor Wilayah Kementerian Agama Provinsi Jawa Tengah"
[13]: https://smkasshodiqiyah.wordpress.com/about/?utm_source=chatgpt.com "Home | SMK ASSHODIQIYAH SEMARANG"
[14]: https://fuhum.walisongo.ac.id/uin-walisongo-akan-berikan-gelar-doktor-hc-pada-k-h-shodiq-hamzah/?utm_source=chatgpt.com "UIN Walisongo akan Berikan Gelar Doktor HC pada K.H. Shodiq Hamzah - Fakultas Ushuluddin dan Humaniora"
[15]: https://jateng.nu.or.id/regional/kh-shodiq-hamzah-usman-terpilih-aklamasi-menjadi-ketua-dpw-fk-kbihu-jawa-tengah-2024-2029-FTCvq?utm_source=chatgpt.com "KH Shodiq Hamzah Usman Terpilih Aklamasi Menjadi Ketua DPW FK KBIHU Jawa Tengah 2024-2029"
[16]: https://digilib.uin-suka.ac.id/id/eprint/39731/?utm_source=chatgpt.com "GENEALOGI PENGAJIAN KITAB TAFSĪR AL-IBRĪZ DAN TIPOLOGI RESEPSI YĀSĪNAN DI PONDOK PESANTREN ASSHODIQIYAH SEMARANG - Institutional Repository UIN Sunan Kalijaga Yogyakarta"
[17]: https://repository.unissula.ac.id/30367/?utm_source=chatgpt.com "UPAYA USTADZAH DALAM PEMBENTUKAN KEPRIBADIAN MUSLIM SANTRI PUTRI MELALUI KEGIATAN SIMAAN AHAD DI PONDOK PESANTREN ASSHODIQIYAH SEMARANG Unissula Repository"
[18]: https://journal.walisongo.ac.id/index.php/wahana/article/view/2563?utm_source=chatgpt.com "MENELADANI NILAI-NILAI KARAKTER KOMUNITAS MAHASANTRI (STUDI PONDOK PESANTREN ASSHODIQIYAH SEMARANG) | Wahana Akademika: Jurnal Studi Islam dan Sosial"
[19]: https://journal.msti-indonesia.com/index.php/ajad/article/view/214?utm_source=chatgpt.com "Peningkatan Literasi Digital dan Kemanusiaan Melalui Powerpoint sebagai Media Pembelajaran bagi Santri Pondok Pesantren Asshodiqiyah | AJAD : Jurnal Pengabdian kepada Masyarakat"
[20]: https://undip.ac.id/post/34159/lppm-undip-beri-bantuan-terdampak-banjir-ponpes-asshodiqiyah-gayamsari.html?utm_source=chatgpt.com "LPPM UNDIP Beri Bantuan Terdampak Banjir Ponpes Asshodiqiyah Gayamsari - Universitas Diponegoro"
[21]: https://undip.ac.id/post/34278/lppm-undip-berikan-pengobatan-gratis-warga-ponpes-asshodiqiyah-gayamsari.html?utm_source=chatgpt.com "LPPM UNDIP Berikan Pengobatan Gratis Warga Ponpes Asshodiqiyah Gayamsari - Universitas Diponegoro"
[22]: https://jateng.kemenag.go.id/kakanwil-buka-manasik-haji-kbih-as-shodiqiyah/?utm_source=chatgpt.com "Kakanwil Buka Manasik Haji KBIH As Shodiqiyah - Kantor Wilayah Kementerian Agama Provinsi Jawa Tengah"
[23]: https://referensi.data.kemendikdasmen.go.id/snpmb/site/sekolah?npsn=70035520&utm_source=chatgpt.com "Informasi Satuan Pendidikan"
