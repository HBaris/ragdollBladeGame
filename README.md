# Ragdoll Kılıç 3D

Menü yok. Sayfayı açtığın an seviye başlıyor: koş, kılıcı savur, jöle gibi ragdoll'ları doğra.

Arkadan takip eden kamera, iri oynak gözlü parlak karakterler, iki elle tutulan uzun kılıç ve gerçekten kopan kafa, kol, bacak ve gövde. Seviye sayacı var (Lv 1, 2, 3…); her 5. seviye boss.

## Oynamak

- **Bilgisayarda:** `index.html`'i tarayıcıda aç. Kurulum ya da sunucu gerekmez; oyun tek dosyaya paketli halde `dist/game.js` içinde.
- **Telefonda:** Oyunun bir web adresinden sunulması gerekir. GitHub Pages bunu yapar ama ücretsiz planda sadece **herkese açık** repolarda çalışır; bu repo gizli. İki yol var:
  1. Repoyu herkese açık yap (*Settings → General → Danger Zone → Change visibility*), sonra *Settings → Pages → Deploy from a branch* ile oyunun bulunduğu dalı ve `/ (root)` klasörünü seç. Oyun `https://<kullanıcı-adın>.github.io/ragdollBladeGame/` adresinde açılır.
  2. Repoyu gizli tutmak istersen `index.html` ile `dist/game.js`'i herhangi bir statik barındırmaya (Netlify Drop, Cloudflare Pages vb.) yükle.

> Ses, tarayıcıların otomatik oynatma kuralı yüzünden ilk dokunuşa kadar çalmaz. Oyun ise beklemeden başlar.

## Kontroller

Tek kontrol **joystick**. Parmağını ekranın herhangi bir yerine koyup sürükle (bilgisayarda fareyle sürükle ya da `W` `A` `S` `D`).

- **Yön = kolların ve kılıcın baktığı yer.** İleri itersen kılıcı öne tutar, sağa çekersen kollar ve kılıç sağa döner. Gövde arkadan gelir.
- **Az itersen** yerinde durup sadece kılıcı çevirir. **Çok itersen** o yöne koşar.
- **Kesmek için hızlı çevir.** Joystick'i bir yandan öbür yana hızlıca savurursan kılıç savrulur ve değdiği yeri keser. Yavaş dönen ya da düşmana uzatılmış kılıç kesmez, sadece iter.
- Hızlı savuruşta bıçak göğüs hizasına iner (gövde, kollar). Daha yavaş savuruşta yukarıda kalır (boyun, kafa).
- Yeniden başlat ve ses: sağ üstteki düğmeler (`R` · `M`).

Kamera en yakın düşmana bakar. Yakın dövüşte yavaş döner ki joystick yönleri ayağının altından kaymasın.

## Oyun

- **Kesme:** Kılıç bir kemiğe değdiği yerden onu ikiye böler. Kafa, gövde ya da bacak kesilirse düşman ölür. Kol kesilirse silahı düşebilir ve panikle kaçar; silahsız kaçan düşmana kılıcın değmesi (dürtme dahil) yeter.
- **Savunma:** Kılıçlar birbirine çarpar. İki saldırı çakışırsa **KLANG!** olur, ikiniz de sendelersiniz. Bekleyen kılıcına gelen darbeyi bazen **BLOK**larsın. Düşmanlar seviye ilerledikçe daha sık bloklar, geri sıçrar, karşı saldırı yapar ve etrafını sararak yandan ya da arkadan gelir.
- **Can:** 3 kalp. Can seviyeden seviyeye taşınır; temizlenen her seviye +1 kalp verir. Ölürsen seviye tam canla yeniden başlar.
- **Ortamlar** sırayla döner:
  - *Çayır:* eğrelti otları ve karlı dağlar.
  - *Buz Sahanlığı:* kenardan suya düşen ölür, düşmanı da suya itebilirsin.
  - *Gün Batımı Dojo:* torii kapısı ve kum tepeleri.
- **Boss** (her 5. seviye): daha iri ve 3 canlı. Son canına kadar hiçbir yeri kopmaz.
- Seviye ve grafik ayarı tarayıcıda saklanır. Ayarlar düğmesinden sesi ve grafik kalitesini (gölgeler, çözünürlük) değiştirebilirsin.

## Geliştirme

Kaynak kod `src/` altında ES modülleri olarak duruyor; `dist/game.js` bunların three.js ile birlikte paketlenmiş halidir.

```bash
npm install
npm run build   # dist/game.js üretir (commit'lenir, çift tıkla açılsın diye)
npm run dev     # değişiklikte otomatik yeniden paketler
```

| Dosya | İçerik |
|---|---|
| `src/ragdoll.js` | 3D Verlet ragdoll, kaslar, kemik kesme, kılıç çarpışma testleri |
| `src/pose.js` | Duruş/koşu/hamle pozları, bacaklar için ileri kinematik, kollar için IK |
| `src/character.js` | Oyuncu ve düşman: hareket, savuruşlar, yapay zekâ |
| `src/view.js` | Jöle gövde ağları, oynak gözler, kırmızı kesitler |
| `src/sword.js` | Kılıç modeli ve elden düşen kılıç fiziği |
| `src/game.js` | Seviyeler, dövüş kuralları, kamera, ağır çekim |
| `src/world.js` | Ortamlar; bütün dokular kodla üretiliyor |
| `src/effects.js` | Kan, lekeler, kıvılcım, su sıçraması |
| `src/input.js`, `src/hud.js` | Kontroller ve arayüz |

Zorluk eğrisi `levelSpec()` (`src/game.js`) içinde, düşman davranışı `thinkEnemy()` (`src/character.js`) içinde.

İlk sürüm olan 2D yan görünümlü oyun `2d/` klasöründe duruyor (`2d/index.html`).
