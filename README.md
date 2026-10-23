# ✦ CraftUI — Modern Micro-Interactions & Bento Component Registry

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.2-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.x-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

> **Crafted by Aflah Athallah** • Mahasiswa S1 Teknik Informatika (Semester 5) • Cikarang, Bekasi, Jawa Barat  
> Proyek portofolio eksplorasi *Design Engineering*, *Frontend Craftsmanship*, *micro-interactions 60fps*, dan *vibe coding*.

---

## 🌟 Tentang CraftUI

**CraftUI** adalah platform katalog komponen antarmuka (*UI Playground & Component Registry*) yang dirancang khusus untuk mendemonstrasikan interaksi gestur tingkat lanjut, efek pencahayaan kursor (*radial spotlight*), tata letak *Bento Grid*, tombol laser & shimmer dinamis, serta fisika *spring animation* sekelas antarmuka macOS dan SaaS modern (Linear / Raycast / Vercel).

Platform ini dibangun sebagai etalase portofolio untuk membuktikan kesiapan teknis dalam peran **Frontend Engineer**, **Design Engineer**, atau **Software Engineering Intern (MSIB)**.

---

## 🚀 Fitur Unggulan (Core Components)

1. **01. Spotlight Bento Cards (Cursor-Driven Glow)**
   * Mengkalkulasi koordinat kursor mouse relatif terhadap *bounding box* kartu.
   * Multi-color selector real-time: **Indigo**, **Emerald**, **Violet**, dan **Cyan**.
   * Efek radial spotlight dan border gradient dinamis 60fps.

2. **02. Magnetic Elements Playground (Spring Physics)**
   * Memanfaatkan *Framer Motion springs* dengan konfigurasi damping & stiffness terkalibrasi.
   * Elemen ditarik elastis mengikuti tarikan gravitasi kursor pengguna.

3. **03. macOS Floating Dock**
   * Dock navigasi mengambang ala macOS dengan animasi pembesaran proporsional (*icon magnification*).
   * Dilengkapi tooltip cerdas dan navigasi halus ke setiap seksi halaman.

4. **04. Continuous Laser Border Beam**
   * Garis laser neon berputar tanpa henti sepanjang border elemen menggunakan kalkulasi *pure conic-gradient* dan mask background.

5. **05. Shimmer Button & Glow Reflections**
   * Tombol CTA berdaya tarik tinggi dengan pantulan cahaya berkilau (*shimmer spin*) menggunakan CSS container queries.
   * Pilihan mood warna dinamis: Purple, Cyan, Emerald, dan Amber.

6. **06. 3D Parallax Tilt Card (Showcasing Real Projects)**
   * Menghitung offset X/Y pointer untuk rotasi 3D berkedalaman tinggi (*perspective: 1000px*) lengkap dengan efek kilau pantulan cahaya holografik.
   * Memamerkan karya nyata: **BentoFlow**, **ChromaCraft**, dan **Aplikasi UAS Pemweb 2**.

7. **Interactive Code Viewer Modal**
   * Fitur 1-click **Copy Code** ke clipboard dengan notifikasi toast dinamis.
   * Tab switcher: **Component Code (`.tsx`)** vs **Usage Example (`example.tsx`)**.
   * Tombol **Download TSX File** langsung ke komputer pengguna.

---

## 🛠️ Tech Stack & Engineering Highlights

| Komponen | Spesifikasi & Teknologi |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org) |
| **View Library** | [React 19](https://react.dev) |
| **Language** | [TypeScript](https://www.typescriptlang.org) (Strict Typing) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + Custom Conic Gradients & Glassmorphism |
| **Physics & Motion** | [Framer Motion](https://motion.dev) (Springs, useMotionValue, useTransform) |
| **Icons** | [Lucide React](https://lucide.dev) |

---

## 💻 Panduan Menjalankan di Lokal

### 1. Clone repositori
```bash
git clone https://github.com/Abcdeflahhh/craft-ui.git
cd craft-ui
```

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan development server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 4. Build untuk produksi
```bash
npm run build
npm run start
```

---

## 🎓 Relevansi Akademik & Portofolio (Mahasiswa TI)

Proyek ini merefleksikan penguasaan materi inti perkuliahan dan kriteria magang industri:
1. **Human-Computer Interaction (HCI / IMK)**: Desain antarmuka berorientasi pengguna, *micro-feedback*, *spring physics*, dan respons visual instan.
2. **Software Architecture & Clean Code**: Pemisahan yang jelas antara logika data (*component-data.ts*), *showcase presentation*, dan utility modular.
3. **Modern Web Engineering**: Optimasi Next.js 16 App Router, Client vs Server Components, dan *bundle optimization*.

---

## 👨‍💻 Profil Pembuat

* **Nama:** Aflah Athallah
* **Status:** Mahasiswa S1 Teknik Informatika (Semester 5)
* **Domisili:** Cikarang, Bekasi, Jawa Barat, Indonesia
* **Status Kerja:** Terbuka untuk kesempatan Magang MSIB / Internship 2025–2026
* **Kontak & Tautan:**
  * GitHub: [@Abcdeflahhh](https://github.com/Abcdeflahhh)
  * LinkedIn: [linkedin.com/in/aflahtamam68](https://linkedin.com/in/aflahtamam68)
  * Email: [aflahtamamke2@gmail.com](mailto:aflahtamamke2@gmail.com)
  * Portofolio Utama: [BentoFlow Live](https://bentoflowaflah.vercel.app)

---

## 📝 Lisensi

MIT © 2026 Aflah Athallah.
