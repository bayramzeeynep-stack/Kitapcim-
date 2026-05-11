<link rel="stylesheet" href="stil_dosyalari/iletisim.css">
<?php include 'header.php'; ?>
<main class="iletisim-ana">
    <h2 class="iletisim-baslik">İletişim</h2>
    <div class="iletisim-container">

        <div class="iletisim-bilgi">
             <h3>Bize Ulaşın</h3>
             <p> 📞 <strong> Telefon: </strong> 0 (555) 555 55 55 </p>
             <p> 📧 <strong> E-posta: </strong> yuvakitabevi@mail.com </p>
             <p> 📍 <strong> Adres: </strong> Taksim Meydan/İstanbul </p>

             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13056.677751250807!2d28.974791966335303!3d41.03701747683332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBLb2NhdGVwZSwgMzQ0MzUgQmV5b8SfbHUvxLBzdGFuYnVs!5e1!3m2!1str!2str!4v1769104288774!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div class="iletisim-form">
             <h3>Mesaj Gönder</h3>
             <label>Ad Soyad</label>
             <input type="text" id="ad" placeholder="Adınız">
             
             <label>E-posta</label>
             <input type="email" id="email" placeholder="E-posta adresiniz">
             
             <label>Mesajınız</label>
             <textarea id="mesaj" placeholder="Mesajınızı yazın..."></textarea>

             <button onclick="mesajGonder()">Gönder</button>
        </div>
    </div>
</main>

<script>
    function mesajGonder() {
        alert("Mesajınız başarıyla gönderildi!");
    }
</script>
<?php include 'footer.php'; ?>
<script src="js-kodlari/nav.js"></script>