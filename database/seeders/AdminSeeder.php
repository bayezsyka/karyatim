<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\AuditLog;
use App\Models\Category;
use App\Models\Gallery;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        // Bersihkan data lama
        Article::query()->delete();
        Category::query()->delete();
        Gallery::query()->delete();
        AuditLog::query()->delete();

        // 1. Akun Superadmin
        $admin = User::updateOrCreate(
            ['email' => 'admin@asshodiqiyah.com'],
            [
                'name' => 'Admin Pesantren',
                'password' => Hash::make('password'),
                'role' => 'superadmin',
            ]
        );

        // Hapus user lain selain superadmin
        User::where('id', '!=', $admin->id)->delete();

        // 2. Kategori Master
        $categoriesData = [
            'Profil Pesantren' => 'Kategori profil dan informasi umum seputar Pondok Pesantren Asshodiqiyah.',
            'Tausiyah & Bimbingan' => 'Kumpulan pesan, nasihat, dan bimbingan keagamaan dari pengasuh.',
            'Kolaborasi & Lingkungan' => 'Warta kerja sama, pengabdian masyarakat, dan pelestarian lingkungan.',
            'Pendidikan & Santri' => 'Kabar kegiatan santri, siswa, kurikulum, dan prestasi pendidikan.',
            'Khazanah Keilmuan' => 'Kajian kitab, literasi, karya ulama, dan khazanah intelektual pesantren.',
        ];

        $categoryModels = [];
        foreach ($categoriesData as $name => $desc) {
            $categoryModels[$name] = Category::firstOrCreate(
                ['name' => $name],
                [
                    'slug' => \Illuminate\Support\Str::slug($name),
                    'description' => $desc,
                ]
            );
        }

        // 3. 5 Artikel Utama dari .agents/articleseed.md dengan Kategori masing-masing
        $articles = [
            [
                'title' => 'Mengenal Pondok Pesantren Asshodiqiyah Semarang, Ruang Belajar Santri dari Pelajar hingga Mahasiswa',
                'slug' => 'mengenal-pondok-pesantren-asshodiqiyah-semarang',
                'category' => 'Profil Pesantren',
                'excerpt' => 'Pondok Pesantren Asshodiqiyah Kaligawe Semarang menjadi ruang pendidikan bagi santri dengan tiga lingkup utama: salaf, pelajar, dan mahasiswa.',
                'featured_image' => 'https://jateng.kemenag.go.id/wp-content/uploads/2024/07/IMG-20240719-WA0083.jpg',
                'content' => '<p>Pondok Pesantren Asshodiqiyah menjadi salah satu lembaga pendidikan Islam yang tumbuh dan berkembang di kawasan Kaligawe, Kecamatan Gayamsari, Kota Semarang. Berlokasi di Jalan Sawah Besar Timur No. 99, pesantren ini menjadi ruang pendidikan bagi santri dengan latar belakang dan jenjang pendidikan yang beragam.</p><h2>Tiga Lingkup Utama: Salaf, Pelajar, dan Mahasiswa</h2><p>Pondok Pesantren Asshodiqiyah memperkenalkan lingkungan pesantren dengan tiga lingkup utama, yakni <strong>salaf, pelajar, dan mahasiswa</strong>. Hal tersebut menggambarkan ekosistem pesantren yang tidak hanya menjadi tempat mendalami ilmu agama, tetapi juga berjalan berdampingan dengan pendidikan formal dan aktivitas akademik para santri.</p><p>Ekosistem pendidikan di lingkungan Yayasan Asshodiqiyah juga menaungi sejumlah jenjang pendidikan formal. Satuan pendidikan di lingkungan Asshodiqiyah melibatkan jenjang mulai dari <strong>SD IT, SMP IT, MTs, SMK hingga MA</strong>. Kehadiran berbagai jenjang tersebut memberi kesempatan bagi peserta didik untuk menjalani pendidikan umum sekaligus tumbuh dalam lingkungan yang dekat dengan tradisi pesantren.</p><h2>Membangun Karakter dan Kedisiplinan</h2><p>Kehidupan pendidikan di Asshodiqiyah juga diarahkan pada pembentukan sikap. Nilai kedisiplinan, tanggung jawab, kebersamaan, penghormatan kepada guru, semangat belajar, serta pembiasaan beribadah menjadi bagian yang terus ditekankan dalam berbagai kegiatan pendidikan.</p><p>Di tengah perkembangan zaman, pesantren menghadapi tantangan untuk mempertahankan tradisi keilmuan Islam sekaligus mempersiapkan generasi yang mampu berinteraksi dengan masyarakat modern. Asshodiqiyah mengambil posisi di antara keduanya: menjaga kehidupan pesantren dan memberikan ruang bagi santri untuk memperoleh pendidikan formal serta mengembangkan kemampuan di berbagai bidang.</p><p>Lingkungan pendidikan seperti ini menjadikan pesantren bukan sekadar tempat tinggal selama menempuh pendidikan. Pesantren menjadi ruang belajar, beribadah, bersosialisasi, melatih kemandirian, serta membangun karakter dalam kehidupan sehari-hari.</p><p>Dengan keberadaan pendidikan pesantren dan berbagai jenjang pendidikan formal dalam satu kawasan, Pondok Pesantren Asshodiqiyah terus menjadi bagian penting dari perjalanan pendidikan Islam di Kota Semarang.</p>',
                'is_published' => true,
                'published_at' => '2026-07-19 08:00:00',
            ],
            [
                'title' => 'Dari Madinah, KH Shodiq Hamzah Ingatkan Haji sebagai Perjalanan Kesabaran dan Keikhlasan',
                'slug' => 'kh-shodiq-hamzah-pesan-haji-kesabaran-keikhlasan',
                'category' => 'Tausiyah & Bimbingan',
                'excerpt' => 'Pengasuh Ponpes Asshodiqiyah Dr. (H.C.) KH Shodiq Hamzah menekankan bahwa haji menguji kesabaran, kesiapan fisik, dan keikhlasan jemaah.',
                'featured_image' => 'https://static.gatra.com/foldershared/images/2023/ins/02-Feb/kh_shodiq.jpg',
                'content' => '<p>Pengasuh Pondok Pesantren Asshodiqiyah Semarang, <strong>Dr. (H.C.) KH Shodiq Hamzah</strong>, membagikan sejumlah pesan kepada jemaah ketika berada di Madinah pada musim haji 1447 H/2026 M. Dari pengalaman panjangnya mendampingi perjalanan ibadah haji, Kiai Shodiq menekankan bahwa haji tidak semata-mata merupakan perjalanan menuju Tanah Suci, tetapi juga perjalanan yang menguji kesabaran, kesiapan, dan keikhlasan seorang Muslim.</p><h2>Pengalaman Panjang Mendampingi Umat</h2><p>Dalam perbincangan bersama Media Center Haji pada 4 Mei 2026, Kiai Shodiq mengungkapkan bahwa perjalanan tersebut merupakan haji ke-47 baginya. Pengalaman panjang itu membuatnya menyaksikan berbagai perubahan serta dinamika penyelenggaraan ibadah haji dari masa ke masa.</p><p>Menurutnya, setiap perjalanan haji memiliki tantangan yang berbeda. Karena itu, jemaah perlu mempersiapkan diri bukan hanya secara fisik, tetapi juga secara mental dan spiritual. Kesabaran menjadi bagian penting karena perjalanan haji mempertemukan jutaan umat Islam dari berbagai negara dalam rangkaian ibadah yang membutuhkan kesiapan dan kedisiplinan.</p><h2>Menjaga Kebugaran dan Kesiapan Diri</h2><p>Kiai Shodiq juga mengingatkan jemaah agar tidak mengabaikan kondisi kesehatan demi mengejar amalan tertentu. Dalam pelaksanaan salat di Masjid Nabawi, misalnya, jemaah perlu memahami kemampuan tubuh masing-masing dan tidak memaksakan diri ketika kondisi kesehatan sedang menurun.</p><p>Pada kesempatan lain selama musim haji 2026, Kiai Shodiq turut mengapresiasi peningkatan pelayanan kepada jemaah Indonesia. Ia menilai sejumlah proses perjalanan dari embarkasi hingga penginapan semakin membantu mengurangi kelelahan jemaah, termasuk pengelolaan barang bawaan dan percepatan proses kedatangan.</p><p>Pesan tersebut mengingatkan bahwa keberhasilan menjalankan ibadah haji tidak hanya dinilai dari seberapa banyak aktivitas yang dapat dilakukan. Menjaga niat, kesehatan, kesabaran, serta memahami setiap ibadah dengan benar juga menjadi bagian penting dari perjalanan menuju haji yang bermakna.</p><p>Bagi keluarga besar Pondok Pesantren Asshodiqiyah, pengalaman dan pesan Kiai Shodiq menjadi bagian dari khazanah keilmuan yang dapat terus dipelajari. Ilmu tidak hanya disampaikan melalui ruang pengajian, tetapi juga melalui pengalaman panjang dalam mendampingi umat menjalankan ibadah.</p>',
                'is_published' => true,
                'published_at' => '2026-05-04 10:00:00',
            ],
            [
                'title' => 'Kolaborasi Asshodiqiyah dan UNDIP Hadirkan Kolam Retensi untuk Mengurangi Risiko Banjir',
                'slug' => 'kolaborasi-asshodiqiyah-undip-kolam-retensi',
                'category' => 'Kolaborasi & Lingkungan',
                'excerpt' => 'Kerja sama Ponpes Asshodiqiyah dan LPPM UNDIP menghadirkan kolam retensi seluas 120 meter persegi untuk pengelolaan limpasan air dan mitigasi banjir.',
                'featured_image' => 'https://undip.ac.id/wp-content/uploads/2024/11/IMG_9776-scaled.jpg',
                'content' => '<p>Persoalan lingkungan menjadi salah satu tantangan nyata bagi masyarakat di kawasan perkotaan. Pondok Pesantren Asshodiqiyah yang berada di kawasan Kaligawe, Kota Semarang, juga menghadapi persoalan tersebut, khususnya berkaitan dengan limpasan air dan risiko genangan.</p><p>Upaya mencari solusi kemudian mempertemukan Pondok Pesantren Asshodiqiyah dengan Universitas Diponegoro melalui program pengabdian kepada masyarakat.</p><h2>Peletakan Batu Pertama Kolam Retensi</h2><p>Pada 20 November 2024, Universitas Diponegoro melalui Lembaga Penelitian dan Pengabdian kepada Masyarakat memulai pembangunan <strong>kolam retensi di lingkungan Pondok Pesantren Asshodiqiyah</strong>. Kegiatan tersebut ditandai dengan prosesi peletakan batu pertama yang dihadiri pimpinan UNDIP, tim pengabdian masyarakat, serta Pengasuh Pondok Pesantren Asshodiqiyah KH Shodiq Hamzah Usman.</p><p>Kolam retensi dirancang untuk membantu pengelolaan limpahan air hujan sekaligus menjadi bagian dari penanganan persoalan air di lingkungan pesantren. UNDIP menyebut kolam tersebut memiliki luas sekitar <strong>120 meter persegi dengan kedalaman 1,5 meter</strong>.</p><h2>Pendekatan Lingkungan Menyeluruh</h2><p>Program pengabdian dirancang secara bertahap dalam jangka beberapa tahun. Setelah pembangunan kolam retensi, agenda berikutnya mencakup pengembangan sistem pemanenan air hujan, pengolahan air limbah dan jaringan drainase, hingga pembangunan kolam berikutnya. Dengan demikian, persoalan lingkungan ditangani melalui pendekatan yang lebih menyeluruh.</p><p>Kolaborasi ini menunjukkan bahwa pesantren juga dapat menjadi ruang penerapan ilmu pengetahuan dan teknologi yang memberi dampak langsung kepada masyarakat. Ilmu yang dikembangkan di perguruan tinggi bertemu dengan kebutuhan nyata di lingkungan pesantren.</p><p>Bagi Asshodiqiyah, pembangunan sarana tersebut tidak hanya berkaitan dengan infrastruktur. Lingkungan yang lebih tertata dan memiliki pengelolaan air yang lebih baik turut mendukung kenyamanan aktivitas pendidikan, pengajian, dan kehidupan para santri.</p><p>Dari lingkungan pesantren di Kaligawe, kolaborasi Asshodiqiyah dan UNDIP memperlihatkan bahwa pendidikan, pengabdian, teknologi, dan kepedulian terhadap lingkungan dapat berjalan bersama secara harmonis.</p>',
                'is_published' => true,
                'published_at' => '2024-11-20 09:30:00',
            ],
            [
                'title' => 'Asshodiqiyah Tanamkan Disiplin dan Kebersamaan Sejak Awal Tahun Ajaran',
                'slug' => 'asshodiqiyah-tanamkan-disiplin-dan-kebersamaan',
                'category' => 'Pendidikan & Santri',
                'excerpt' => 'Apel gabungan MPLS dan Matsama seluruh satuan pendidikan Yayasan Asshodiqiyah meneguhkan kedisiplinan, adab, dan semangat menuntut ilmu.',
                'featured_image' => 'https://jateng.kemenag.go.id/wp-content/uploads/2024/07/Desain-tanpa-judul-3.png',
                'content' => '<p>Memasuki lingkungan pendidikan yang baru bukan sekadar mengenal ruang kelas, guru, dan teman. Bagi peserta didik, masa awal tahun ajaran juga menjadi bagian penting dalam membangun kebiasaan, karakter, serta kesiapan untuk menjalani proses pendidikan.</p><p>Semangat tersebut terlihat dalam rangkaian Masa Pengenalan Lingkungan Sekolah dan Masa Ta\'aruf Siswa Madrasah di lingkungan Yayasan Asshodiqiyah Semarang.</p><h2>Apel Bersama Seluruh Satuan Pendidikan</h2><p>Pada penutupan rangkaian MPLS dan Matsama tahun ajaran 2024/2025, seluruh unsur pendidikan di lingkungan yayasan berkumpul dalam apel yang diselenggarakan di halaman Pondok Pesantren Asshodiqiyah. Kegiatan diikuti unsur pendidikan dari jenjang SD, SMP, MTs, SMK, dan MA bersama para guru serta pengelola pendidikan.</p><p>Dalam kegiatan tersebut, nilai <strong>disiplin, kekompakan, kebersamaan, tanggung jawab, dan semangat menuntut ilmu</strong> menjadi beberapa pesan utama yang disampaikan kepada peserta didik.</p><p>Nilai-nilai tersebut menjadi penting karena pendidikan tidak berhenti pada pencapaian akademik. Siswa juga perlu belajar membangun kebiasaan yang akan membantu mereka dalam kehidupan sehari-hari: datang dengan tertib, menghargai sesama, menghormati guru, bertanggung jawab terhadap kewajiban, serta mampu bekerja bersama orang lain.</p><h2>Pendidikan Karakter Berbasis Pesantren</h2><p>Sebelumnya, MTs dan MA Asshodiqiyah juga menyelenggarakan Matsama selama tiga hari pada 16–18 Juli 2024. Kegiatan tersebut diarahkan untuk menguatkan solidaritas, membantu peserta didik mengenal lingkungan pendidikan, serta memberikan ruang bagi pengembangan kompetensi dan minat bakat.</p><p>Lingkungan pesantren memberikan dimensi tambahan dalam proses tersebut. Belajar tidak hanya berlangsung ketika guru menyampaikan pelajaran di kelas. Kehidupan bersama, aktivitas keagamaan, hubungan antara santri dan guru, serta berbagai kegiatan sehari-hari turut menjadi proses pendidikan.</p><p>Melalui proses pendidikan yang berlangsung dari ruang kelas hingga kehidupan pesantren, Asshodiqiyah berupaya membentuk peserta didik yang bukan hanya memiliki pengetahuan, tetapi juga memiliki karakter dan kesiapan untuk berkontribusi di tengah masyarakat.</p>',
                'is_published' => true,
                'published_at' => '2024-07-19 11:00:00',
            ],
            [
                'title' => 'Tafsir Al-Bayan, Jejak Keilmuan KH Shodiq Hamzah dari Pondok Pesantren Asshodiqiyah',
                'slug' => 'tafsir-al-bayan-karya-kh-shodiq-hamzah',
                'category' => 'Khazanah Keilmuan',
                'excerpt' => 'Tafsir Al-Bayan 30 jilid beraksara pegon dan makna bahasa Jawa karya KH Shodiq Hamzah merawat kesinambungan tradisi keilmuan pesantren.',
                'featured_image' => 'https://storage.nu.or.id/storage/post/16_9/mid/whatsapp-image-2022-05-06-at-171043_1651882731.webp',
                'content' => '<p>Tradisi pesantren tidak dapat dipisahkan dari kitab, pengajian, dan kegiatan menulis. Dari generasi ke generasi, para ulama meninggalkan pengetahuan bukan hanya melalui pengajaran secara lisan, tetapi juga melalui karya yang dapat terus dibaca oleh generasi setelahnya.</p><p>Tradisi tersebut juga hadir di Pondok Pesantren Asshodiqiyah Semarang melalui karya Pengasuh Pesantren, <strong>KH Shodiq Hamzah Usman</strong>.</p><h2>Karya Monumental 30 Jilid Beraksara Pegon</h2><p>Pada masa pandemi Covid-19, Kiai Shodiq memanfaatkan waktu untuk menyelesaikan dua karya. Salah satunya adalah <strong>Tafsir Al-Bayan Fi Ma\'rifati Ma\'ani Al-Qur\'an</strong>, sebuah karya tafsir Al-Qur\'an yang kemudian diterbitkan oleh Pondok Pesantren Asshodiqiyah bersama penerbit Asnalitera Yogyakarta.</p><p>Tafsir Al-Bayan disusun sebanyak <strong>30 jilid, dengan setiap jilid membahas satu juz Al-Qur\'an</strong>. Penyajiannya menggunakan pendekatan yang dekat dengan tradisi pembelajaran pesantren, termasuk penggunaan aksara pegon serta pemaknaan dalam bahasa Jawa.</p><p>Karya tersebut tidak hanya membantu pembaca memahami makna ayat secara umum. Penjelasan kata demi kata serta unsur tata bahasa Arab juga menjadi bagian yang mendapat perhatian, sehingga tafsir dapat digunakan sebagai salah satu bahan untuk membantu santri mendalami kandungan Al-Qur\'an sekaligus memahami struktur bahasanya.</p><h2>Merawat Tradisi Keilmuan Pesantren</h2><p>Pada periode yang sama, Kiai Shodiq juga menyusun sebuah kitab berisi doa yang berkaitan dengan situasi wabah. Karya tersebut lahir ketika masyarakat menghadapi masa pandemi dan membutuhkan pegangan spiritual di tengah ketidakpastian.</p><p>Lahirnya karya-karya tersebut memperlihatkan salah satu sisi penting kehidupan pesantren: ilmu terus dipelajari, diajarkan, didiskusikan, dan dituliskan.</p><p>Bagi santri, hadirnya karya dari lingkungan pesantren sendiri juga dapat menjadi teladan bahwa proses belajar tidak berhenti pada kemampuan membaca kitab. Santri dapat melanjutkannya dengan meneliti, menulis, dan menghasilkan karya yang bermanfaat bagi masyarakat.</p><p>Tafsir Al-Bayan kemudian menjadi salah satu jejak intelektual yang lahir dari lingkungan Pondok Pesantren Asshodiqiyah. Sebuah karya yang sekaligus mengingatkan bahwa tradisi pesantren selalu memiliki hubungan erat dengan membaca, memahami, mengajarkan, dan menuliskan ilmu.</p>',
                'is_published' => true,
                'published_at' => '2022-05-06 14:00:00',
            ],
        ];

        foreach ($articles as $data) {
            $cat = $categoryModels[$data['category']] ?? reset($categoryModels);
            Article::create(
                array_merge($data, [
                    'user_id' => $admin->id,
                    'category_id' => $cat->id,
                ])
            );
        }
    }
}
