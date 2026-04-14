/* =========================================
   1. FUNGSI BELI VIA WHATSAPP
   ========================================= */
function beliWhatsApp(namaProduk, harga) {
    const nomorWA = "6285888289062"; // Ganti nomor di sini dengan nomor Anda
    const hargaFormat = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(harga);
    const pesan = `Halo Admin LIRYS, saya tertarik dengan produk berikut:%0A%0AProduk: *${namaProduk}*%0AHarga: *${hargaFormat}*%0A%0AApakah stoknya masih tersedia?`;
    const linkWA = `https://wa.me/${nomorWA}?text=${pesan}`;
    window.open(linkWA, '_blank');
}

/* =========================================
   2. PENGATUR ANIMASI ANTI-GAGAL
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Paksa bagian Beranda langsung muncul tanpa menunggu scroll
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-content, .hero-image');
        heroElements.forEach(el => el.classList.add('visible'));
    }, 200);

    // 2. Observer untuk bagian bawah (Produk, Tentang, Medsos)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px", threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(section => {
        // Jangan observe bagian hero karena sudah dipaksa muncul di atas
        if (!section.classList.contains('hero-content') && !section.classList.contains('hero-image')) {
            observer.observe(section);
        }
    });
});
/* =========================================
   3. HAMBURGER MENU LOGIC
   ========================================= */
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links li a');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // Toggle (buka/tutup) menu
        navLinks.classList.toggle('active');
        
        // Ubah ikon dari hamburger (bars) ke silang (times)
        const icon = mobileMenu.querySelector('i');
        if(navLinks.classList.contains('active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Otomatis tutup menu kalau salah satu link diklik (khusus HP)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}