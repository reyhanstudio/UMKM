/* =========================================
   1. FUNGSI BELI VIA WHATSAPP
   ========================================= */
function beliWhatsApp(namaProduk, harga) {
    const nomorWA = "6285123522907"; // Ganti nomor di sini dengan nomor Anda
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