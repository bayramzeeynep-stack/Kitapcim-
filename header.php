<header class="navbar">
    <div class="navbar-logo">
        <img src="img/logo.png" alt="logo">
        <span>Yuva Kitabevi</span>
    </div>

<?php 
$mevcut_sayfa = basename($_SERVER['PHP_SELF']);
if($mevcut_sayfa == 'index.php'): 
?>
    <div class="arama-kutu-navbar">
         <input id="aramaInput" type="text" placeholder="Kitap ara...">
         <button id="aramaBtn">Ara</button>
         <div class="arama-oneri" id="aramaOneriKutusu"></div>
    </div>
<?php endif; ?>
    
    <div class="navbar-links">
        <nav class="nav-left">
            <a href="index.php">Ana Sayfa</a> <!-- .html'leri .php yaptım -->
            <a href="kategoriler.php">Kategoriler</a>
            <a href="sepetim.php">Sepetim</a>
            <a href="favoriler.php">Favoriler</a>
            <a href="iletisim.php">İletişim</a>
        </nav>
        <nav class="nav-right">
            <a id="hesapButon" class="hesap-link">Giriş / Kayıt Ol</a>
        </nav>
    </div>
</header>
<div id="girisModal" class="modal">
     <div class="modal-icerik">
          <span class="kapat">&times;</span>

          <div class="giris-panel">
               <h2>Giriş Yap</h2>
               <label>Kullanıcı Adı</label>
               <input type="text" id="girisKullanici">

               <label>Şifre</label>
               <input type="password" id="girisSifre">

               <button onclick="girisYap()">Giriş Yap</button>
               <p class="degis">Hesabın Yok Mu?
                <span onclick="panelDegistir()">Kayıt Ol</span>
               </p>
          </div>


          <div class="kayit-panel kapali">
               <h2>Kayıt Ol</h2>
               <label>Kullanıcı Adı</label>
               <input type="text" id="kayitKullanici">

               <label>Şifre</label>
               <input type="password" id="kayitSifre">
               <button onclick="kayitOl()">Kayıt Ol</button>

               <p class="degis">Hesabın Var Mı?
                  <span onclick="panelDegistir()">Giriş Yap</span>
               </p>
          </div>
     </div>
  </div>