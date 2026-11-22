# Portofolio 2.0 — Rahmat Taufik Akbar

Proyek website portofolio modern berbasis **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS v4**, yang dikembangkan sebagai evolusi dari versi HTML statis sebelumnya.

---

## 🌟 Fitur Utama

1. **Desain Modern & Responsif**:
   - Tipografi khas developer menggunakan font Google **Syne** (Display) dan **Space Mono** (Monospace).
   - Efek tekstur noise latar belakang halus (*grain overlay*).
   - Mode Gelap & Terang dinamis (*Dark / Light Mode Toggle*) tersinkronisasi otomatis dengan `localStorage` dan preferensi sistem operasi.

2. **Komponen & Arsitektur Terstruktur**:
   - `Navbar`: Header navigasi responsif dengan logo `TAUFIK.DEV`, tautan bagian, tombol toggle tema, dan menu mobile drawer.
   - `Hero`: Header visual dengan status badge interaktif *"OPEN FOR COLLABORATION"*, ringkasan profil singkat, dan tombol aksi cepat (*copy email to clipboard* dengan feedback visual).
   - `About`: Profil lengkap siswa jurusan TJKT SMKN 3 Banjarmasin, kutipan motivasi, serta kartu *Quick Facts*.
   - `Skills`: Kartu keahlian teknis terkategori (*Networking*, *Server & OS*, *Programming & Web*, *Developer Tools*).
   - `Projects`: Galeri portofolio dengan tab filter dinamis (*Semua*, *Networking*, *Programming*, *Web Development*).
   - `Interactive Terminal`: Widget CLI bash interaktif (`taufik@tjkt:~$`) yang dapat menjalankan perintah seperti `help`, `whoami`, `skills`, `projects`, `ping`, `contact`, dan `clear`.
   - `Contact`: Kartu kontak email langsung, tautan GitHub, serta formulir pesan cepat.
   - `Footer`: Hak cipta, atribusi teknologi, dan tombol kembali ke atas (*back to top*).

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 16 (Turbopack)
- **Library UI**: React 19
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React & Custom SVG Icons
- **Fonts**: Google Fonts (`Syne` & `Space Mono`) via `next/font/google`

---

## 📂 Struktur Folder Proyek

```text
Portofolio 2.0/
├── public/                 # Berkas statis (ikon, gambar, favicon)
├── scripts/
│   └── patch-next.js       # Skrip otomatis kompatibilitas Node 27
├── src/
│   ├── app/                # Next.js App Router (layout, page, globals.css)
│   ├── components/         # Komponen UI modular (Navbar, Hero, Projects, dll.)
│   ├── context/            # State global (ThemeContext dark/light mode)
│   └── data/               # 🔥 TEMPAT MENGUBAH SEMUA KONTEN (Projects, Skills, Profile)
│       ├── profile.ts      # Biodata, bio, info sekolah, kontak
│       ├── projects.ts     # Daftar proyek dan tag teknologi
│       └── skills.ts       # Daftar keahlian teknis
├── patch-node27.js          # Runtime patch HTTP headers Node 27
├── package.json            # Daftar paket & skrip npm
├── tsconfig.json           # Konfigurasi TypeScript
└── README.md               # Dokumentasi lengkap proyek
```

---

## 📝 Panduan Mengubah & Menambah Konten

Proyek ini dirancang dengan prinsip **Separation of Concerns** (data terpisah dari tampilan UI). Anda **tidak perlu menyentuh komponen React/UI**, cukup ubah file data di folder `src/data/`:

### 1. Menambah atau Mengubah Proyek
Buka berkas: `src/data/projects.ts`

Tambahkan objek baru ke dalam array `projectsData`:

```typescript
{
  id: "nama-proyek-unik",
  title: "Nama Proyek Anda",
  category: "programming", // Pilih salah satu: "networking" | "programming" | "web"
  categoryLabel: "Python", // Label badge atas
  categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  icon: "🚀",              // Emoji atau ikon
  description: "Penjelasan ringkas proyek dan apa yang diselesaikannya.",
  tags: ["Python", "Automation", "CLI"],
  type: "Personal Project", // atau "Praktik TJKT"
  github: "https://github.com/omorithecodingdude/nama-repo" // opsional
},
```
> Kartu proyek baru akan langsung otomatis muncul di website dan otomatis masuk ke tab filter kategori yang sesuai!

### 2. Menambah atau Mengubah Skills
Buka berkas: `src/data/skills.ts`

Tambahkan item baru pada kategori yang diinginkan:
```typescript
{ name: "Docker", highlight: true }, // jika highlight: true, akan diberi warna aksen biru
{ name: "PostgreSQL" }
```

### 3. Mengubah Profil, Bio, Sekolah, & Kontak
Buka berkas: `src/data/profile.ts`

Di berkas ini Anda dapat memperbarui:
- `classInfo` & `school`: Info kelas dan sekolah
- `status`: Status ketersediaan kolaborasi (misal: `"OPEN FOR COLLABORATION"`)
- `shortBio` & `longBio`: Paragraf pengenalan diri
- `quickFacts`: Fakta ringkas di samping bio
- `email` & `github`: Alamat email dan tautan repository

---

## 🚀 Panduan Git & GitHub

### Apa Saja yang Di-push?
- ✅ **IKUT Di-push**: Seluruh folder `src/`, `public/`, `scripts/`, `package.json`, `tsconfig.json`, `next.config.ts`, `patch-node27.js`, dan `README.md`.
- ❌ **TIDAK Di-push (Otomatis Diabaikan oleh `.gitignore`)**:
  - `node_modules/` *(Folder dependensi ukuran besar)*
  - `.next/` *(Folder cache build)*
  - `.env*` *(Kunci API rahasia)*

### Langkah-langkah Push ke GitHub Pertama Kali:

1. Buat repository baru di [GitHub](https://github.com/new) (misal diberi nama `portofolio-2`). Jangan centang "Add a README" karena kita sudah punya.
2. Buka terminal PowerShell dan jalankan:

```powershell
cd "C:\Users\Lenovo\Desktop\Punya Taufik\Coding-an\My Web\Portofolio 2.0"

# 1. Simpan semua perubahan
git add .
git commit -m "feat: initial commit modern portfolio 2.0 with nextjs and tailwind"

# 2. Atur branch utama ke 'main'
git branch -M main

# 3. Hubungkan dengan repo GitHub Anda (ganti URL sesuai repo Anda)
git remote add origin https://github.com/omorithecodingdude/portofolio-2.git

# 4. Unggah ke GitHub
git push -u origin main
```

### Langkah Update di Masa Depan (Setelah Mengubah Konten):
```powershell
git add .
git commit -m "update: tambah proyek baru dan update skills"
git push
```

---

## 💻 Menjalankan Proyek Secara Lokal

Pastikan Anda berada di direktori proyek:

```powershell
cd "C:\Users\Lenovo\Desktop\Punya Taufik\Coding-an\My Web\Portofolio 2.0"
```

### Menjalankan Server Development:
```powershell
npm run dev
```
Buka peramban di: **http://localhost:3000**

### Melakukan Build Produksi:
```powershell
npm run build
```

### Menjalankan Server Produksi:
```powershell
npm run start
```

---

## 🔧 Catatan Khusus (Patch Kompatibilitas Node 27)

Proyek ini telah dilengkapi dengan patch otomatis (`patch-node27.js` dan `scripts/patch-next.js`) untuk mengatasi perubahan pada Node.js 27 alpha di mana `req.headers` memiliki prototipe `null`. Skrip ini otomatis berjalan saat `npm install` berkat konfigurasi `postinstall` pada `package.json`.
