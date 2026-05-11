
const butonlar = document.querySelectorAll(".kategori-btn");
const kutular = document.querySelectorAll(".kategori-kutu");

butonlar.forEach(btn => {
    btn.addEventListener("click", () => {

        butonlar.forEach(b => b.classList.remove("aktif"));
        btn.classList.add("aktif");

        let kategori = btn.getAttribute("data-kategori");


        kutular.forEach(k => k.style.display = "none");


        document.getElementById(kategori).style.display = "block";
    });
});


const modal = document.getElementById("kitapModal");
const modalKapak = document.getElementById("modalKapak");
const modalBaslik = document.getElementById("modalBaslik");
const modalYazar = document.getElementById("modalYazar");
const modalFiyat = document.getElementById("modalFiyat");
const modalAciklama = document.getElementById("modalAciklama");
const modalClose = document.querySelector(".modal-close");
const modalKalp = document.getElementById("modalKalp");  
const sepeteEkleBtn = document.getElementById("sepeteEkleBtn");


const kitapKartlari = document.querySelectorAll(".kitap-kart");

kitapKartlari.forEach(kart => {
    kart.addEventListener("click", () => {

        modalKapak.src = kart.dataset.kapak;
        modalBaslik.textContent = kart.dataset.baslik;
        modalYazar.textContent = kart.dataset.yazar;
        modalFiyat.textContent = kart.dataset.fiyat;
        modalAciklama.textContent = kart.dataset.aciklama;

        modalFavoriKontrol(kart.dataset.baslik);

        modal.style.display = "flex";
    });
});


modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});


sepeteEkleBtn.addEventListener("click", function () {

    const kitap = {
        baslik: modalBaslik.textContent,
        yazar: modalYazar.textContent,
        fiyat: modalFiyat.textContent,
        kapak: modalKapak.src,
        adet: 1
    };

    let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
    sepet.push(kitap);
    localStorage.setItem("sepet", JSON.stringify(sepet));

    alert("Kitap sepete eklendi!");
});


modalKalp.addEventListener("click", function () {

    let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];
    const kitap = modalBaslik.textContent;

    const varMi = favoriler.some(f => f.baslik === kitap);

    if (varMi) {

        favoriler = favoriler.filter(f => f.baslik !== kitap);
        modalKalp.classList.remove("dolu");
        modalKalp.textContent = "🤍";
    } else {

        favoriler.push({
            baslik: modalBaslik.textContent,
            yazar: modalYazar.textContent,
            fiyat: modalFiyat.textContent,
            kapak: modalKapak.src
        });
        modalKalp.classList.add("dolu");
        modalKalp.textContent = "❤️";
    }

    localStorage.setItem("favoriler", JSON.stringify(favoriler));
});


function modalFavoriKontrol(baslik) {
    const favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

    const varMi = favoriler.some(f => f.baslik === baslik);

    if (varMi) {
        modalKalp.classList.add("dolu");
        modalKalp.textContent = "❤️";
    } else {
        modalKalp.classList.remove("dolu");
        modalKalp.textContent = "🤍";
    }
}

console.log("Sepete eklenen ürün:", kitap);
console.log("Güncel Sepet:", sepet);

const kitap = {
    baslik: modalBaslik.textContent,
    yazar: modalYazar.textContent,
    fiyat: modalFiyat.textContent,
    kapak: modalKapak.src,
    adet: 1
};

console.log("Sepete eklenen ürün:", kitap);   

sepet.push(kitap);
localStorage.setItem("sepet", JSON.stringify(sepet));

console.log("Güncel sepet:", sepet);  


const kitaplar = document.querySelectorAll(".kitap-kart");
const Modal = document.getElementById("kitapModal");

const kapak = document.getElementById("modalKapak");
const baslik = document.getElementById("modalBaslik");
const yazar = document.getElementById("modalYazar");
const fiyat = document.getElementById("modalFiyat");
const aciklama = document.getElementById("modalAciklama");

kitaplar.forEach(kitap => {

kitap.addEventListener("click", () => {

modal.style.display = "flex";

kapak.src = kitap.dataset.kapak;
baslik.textContent = kitap.dataset.baslik;
yazar.textContent = kitap.dataset.yazar;
fiyat.textContent = kitap.dataset.fiyat;
aciklama.textContent = kitap.dataset.aciklama;

});

});