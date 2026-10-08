# AGENTS.md — Aturan Bersama (Antigravity · OpenCode · Codex)

## Project

- **Stack**: Laravel 13.8, Inertia.js 3.1, React 19, Tailwind CSS 4, Vite 8, PHP 8.3
- **Entry**: `resources/js/app.jsx` (React), `routes/web.php` (routing)
- **Direktori utama**: `app/` (backend), `resources/js/Pages/` (halaman React), `resources/js/Components/`, `resources/js/Layouts/`, `database/`, `routes/`, `config/`, `tests/`
- **Dev**: `composer dev` (server + queue + pail + vite) atau `npm run dev` + `php artisan serve`
- **Build**: `npm run build`
- **Test**: `php artisan test` atau `composer test`
- **Format**: `./vendor/bin/pint`
- **Arsitektur**: Laravel MVC + Inertia SSR, React pages di `Pages/`, Tailwind 4 via `@tailwindcss/vite`

## Prompt Pengguna

- Pengguna memberi instruksi bahasa Indonesia percakapan, prompt pendek, tidak terstruktur, atau chat klien mentah.
- Pahami tujuan praktis tanpa menyuruh pengguna merapikan prompt.
- Ekstrak requirement secara internal. Jangan simpan chat mentah ke repo.
- Jangan buat dokumen requirement untuk revisi kecil.
- Klarifikasi hanya jika info yang hilang bisa mengubah hasil atau merusak data.

## Efisiensi Konteks

- Mulai task: periksa `git status`, `git diff`, file terkait langsung.
- Cari simbol/route/controller/model/component/test sebelum membuka banyak file.
- Baca file bertahap sesuai kebutuhan. Jangan scan seluruh codebase untuk perubahan lokal.
- Jangan baca ulang file yang belum berubah. Jangan eksplorasi seluruh arsitektur untuk revisi kecil.
- Gunakan pola yang sudah ada. Jangan tambah abstraksi/dependency tanpa kebutuhan nyata.
- Abaikan: `vendor/`, `node_modules/`, `.git/`, `public/build/`, `storage/logs/`, `storage/framework/`, `coverage/`, `dist/`, `build/`

## Pelaksanaan

- Permintaan implementasi → kerjakan langsung sampai selesai.
- Kelompokkan perubahan terkait sebelum validasi.
- Jangan jalankan command/test berulang tanpa perubahan relevan.
- Test spesifik dulu (`--filter`), test luas hanya untuk perubahan lintas modul.
- Jangan ubah file di luar scope hanya untuk rapikan kode.
- Jangan perbaiki masalah lama yang tidak berkaitan kecuali menghalangi task.

## Caveman Lite

- Terapkan otomatis. Hilangkan acknowledgment, filler, basa-basi, repetisi prompt, narasi command.
- Pertahankan detail teknis penting. Jangan pendekkan source code, command, path, error, hasil test.
- Jawaban akhir: perubahan + validasi + blocker. Maks ~8 poin.

## Keselamatan Git

- Hormati uncommitted changes. Jangan hapus/timpa perubahan pengguna.
- Jangan commit, push, buat branch, atau buka PR kecuali diminta.
- Jangan jalankan command destruktif tanpa instruksi eksplisit.

## Handoff Antar-AI

- Jangan membaca atau menulis `docs/AI_HANDOFF.md` untuk task kecil yang selesai dalam satu sesi.
- Baca handoff hanya jika ada indikasi pekerjaan sebelumnya belum selesai.
- Tulis handoff hanya jika task berhenti sebelum selesai atau terdapat blocker.
- Handoff maksimal 25 baris dan hanya berisi status operasional penting.
