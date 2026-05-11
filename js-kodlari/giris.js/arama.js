import { kitaplar } from "./kitaplar.js";

const aramaInput = document.getElementById("aramaInput");
const aramaOneriKutusu = document.getElementById("aramaOneriKutusu");

aramaInput.addEventListener("input", () => {
    const kelime = aramaInput.value.toLowerCase().trim();
    aramaOneriKutusu.innerHTML = "";

    if (kelime === "") {
        aramaOneriKutusu.style.display = "none";
        return;
    }

    // Kitaplar arasında arama
    const eslesenler = kitaplar.filter(k =>
        k.baslik.toLowerCase().includes(kelime)
    );

    if (eslesenler.length === 0) {
        aramaOneriKutusu.style.display = "none";
        return;
    }

    // Öneri kutusunu aç
    aramaOneriKutusu.style.display = "block";

    // İlk 5 eşleşme göster
    eslesenler.slice(0, 5).forEach(k => {
        const div = document.createElement("div");
        div.classList.add("oneri-item");
        div.textContent = k.baslik;

        // Tıklayınca ilgili kitaba git
        div.addEventListener("click", () => {
            window.location.href = k.url;
        });

        aramaOneriKutusu.appendChild(div);
    });
});