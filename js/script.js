// Toggle Menu Mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Tab Skills
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

// FUNGSI MODAL UMUM (Untuk Experience & Project)
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "flex";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}
// SERTIFIKAT 
function filterCert(category) {
    const cards = document.querySelectorAll('.cert-card');
    const buttons = document.querySelectorAll('.filter-btn');
    const seeMoreBtn = document.getElementById('see-more-btn');

    // 1. Update tombol filter yang aktif
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === category) btn.classList.add('active');
    });

    // 2. Logika Filter
    cards.forEach(card => {
        if (category === 'all') {
            // Jika pilih "All", tampilkan yang utama, sembunyikan yang 'hidden-cert'
            if (card.classList.contains('hidden-cert')) {
                card.style.display = "none";
                card.classList.remove('hide'); // Reset state filter
            } else {
                card.style.display = "block";
                card.classList.remove('hide');
            }
            // Munculkan tombol See More lagi
            seeMoreBtn.style.display = "inline-block";
            seeMoreBtn.innerText = "See More";
        } else {
            // Jika pilih kategori tertentu (misal: Bootcamp)
            if (card.dataset.category === category) {
                card.style.display = "block";
                card.classList.remove('hide');
            } else {
                card.style.display = "none";
                card.classList.add('hide');
            }
            // Sembunyikan tombol See More karena filter kategori menampilkan semua hasil
            seeMoreBtn.style.display = "none";
        }
    });
}

function toggleCerts() {
    const hiddenCards = document.querySelectorAll('.cert-card.hidden-cert');
    const seeMoreBtn = document.getElementById('see-more-btn');

    if (seeMoreBtn.innerText === "See More") {
        // Aksi Tampilkan: Ubah display jadi block
        hiddenCards.forEach(card => {
            card.style.display = "block";
        });
        seeMoreBtn.innerText = "See Less";
    } else {
        // Aksi Sembunyikan: Balikkan display jadi none
        hiddenCards.forEach(card => {
            card.style.display = "none";
        });
        seeMoreBtn.innerText = "See More";
        // Scroll balik ke atas section sertifikat
        document.getElementById('certificate').scrollIntoView({ behavior: 'smooth' });
    }
}
// Menutup modal jika klik di luar box
window.onclick = function(event) {
    if (event.target.className === 'modal-experience-modal' || 
        event.target.className === 'modal-proj-modal' || 
        event.target.className === 'modal-overlay') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}