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
- **Koşu drift eder.** Düz koşarken düz gidersin, ama hızlıyken yön değiştirirsen gövde hemen döner, sen savrulmaya devam edersin: bir ayak fren yapar, öbürü boşa çırpınır. Tam hızda 90° dönüşte ~2 m kayarsın, geri dönüşte ~1 m. Yavaşken çeviksin.
- **Kesmek için hızlı çevir.** Joystick'i bir yandan öbür yana hızlıca savurursan kılıç savrulur ve değdiği yeri keser. Yavaş dönen ya da düşmana uzatılmış kılıç kesmez, sadece iter.
- Hızlı savuruşta bıçak göğüs hizasına iner (gövde, kollar). Daha yavaş savuruşta yukarıda kalır (boyun, kafa).
- Titan seviyesinde **kısa dokunuş** (bilgisayarda tık ya da `Boşluk`) halat atar.
- Yeniden başlat ve ses: sağ üstteki düğmeler (`R` · `M`).

Kamera en yakın düşmana bakar. Yakın dövüşte yavaş döner ki joystick yönleri ayağının altından kaymasın.

## Oyun

**Seviye döngüsü:** Düello → Düello → **Platform** → **At** → Düello → **Boss** → **Platform** → **Titan**, sonra zorlaşarak tekrar. Ayarlar (dişli) menüsündeki "Platform / At / Titan seviyesine git" düğmeleri doğrudan o seviyelere atlar.

- **Tek can, ama kolay ölmezsin.** Gövdene gelen darbe seni kesmez, sadece savurur.
  - Bir bacağın kesilirse tek ayakla sekerek, iki bacağın da giderse güdüklerinle sürünerek devam edersin.
  - Bir kolun giderse kılıcı öbür elinle tutarsın.
  - **İki kolun giderse ya da kafan giderse ölürsün.** Sol üstteki küçük vücut şeması kopan uzuvlarını kırmızı gösterir.
- **Kesme:** Kılıç bir kemiğe değdiği yerden onu ikiye böler. Rakipler kafa, gövde ya da bacak kesilince ölür. Kolu kesilen rakip silahını düşürüp panikle kaçabilir; ona kılıcın değmesi yeter.
- **Rakipler de senin gibi oynar.** Onların da tek bir sanal joystick'i var: kılıç koştukları yöne bakar, drift ederler, kesmek için kılıcı bir yana yavaşça çekip (bunu görürsün) hızla öbür yana savururlar. Usta olanlar koşarken savurur, bazen topaç gibi döner. Uzun boylu rakip kılıcını senin göğüs hizana eğer.
- **Dost ateşi:** Rakiplerin kılıcı yolundaki arkadaşını da keser (**DOST ATEŞİ!**). Kesilen bazen kin tutup ona saldırır (**HEY!**). Dikkatli olanlar arkadaşı yoldaysa bekler, ama her zaman değil.
- **Savunma:** Kılıçlar çarpışır (**KLANG!**, **BLOK!**). Rakipler seviye ilerledikçe daha sık bloklar, geri sıçrar, karşı saldırı yapar ve seni çevreler.
- **At seviyesi:** Geniş yeşil alanda atın sırtındasın.
  - Joystick atı yönlendirir; at birden dönemez, dörtnala giderken geniş döner.
  - Kılıç da joystick'i takip eder, ama sadece atın önünde ve yanlarında döner.
  - Rakipler iri ama ağır; saldırıya hazırlanmaları uzun sürer.
  - At önüne çıkanı ezip savurur.
- **Halatlı platform:** Gökyüzünde, kırmızı-beyaz halatlarla asılı küçük bir beton platform; alçak bir duvarla çevrili. Sadece normal rakipler (2–4) sığar.
  - Halatlar direk gibidir, içinden geçilmez. Savrulan kılıç (seninki ya da rakibinki) değdiği halatı keser (**HALAT KOPTU!**). Alt parça yere kıvrılır, üst parça gökyüzüne fırlar.
  - Platform, halatların kalanlarının ağırlık merkezine göre yan yatar ve sallanarak oturur. Kenardaki halatlar ortadakilerden çok yatırır. Aynı taraftan üç halat giderse ~20°.
  - Eğimde herkes aşağı kayar; koşarak karşı koyabilirsin. Duvar yavaş kaymayı durdurur, ama hızlı çarpan (darbe + kayma) duvarın üstünden devrilip düşer ve ölür.
- **Titan seviyesi:** Uzakta, ~12 m boyunda bir titan var.
  - Sürüklemek her zamanki gibi koşturur ve kılıcı çevirir.
  - **Kısa dokunuş halat atar:** boşluğa dokunursan halat ekran dışına, önde ve yukarıda bir yere takılır ve salınarak ilerlersin. Titana dokunursan halat onun o noktasına takılır ve ona doğru uçarsın.
  - Hızla uçarken kılıç titanın değdiği yerini keser.
  - Titanın 3 canı var: kol ya da bacak kopunca devam eder (bacaksızsa sürünür). Boynu ya da gövdesi kesilirse veya üç uzvunu kaybederse düşer.
- **Boss** (düello döngüsünde): daha iri ve 3 canlı; son canına kadar hiçbir yeri kopmaz.
- **Ortamlar:** Düellolarda Çayır, Buz Sahanlığı (kenardan suya düşen ölür) ve Gün Batımı Dojo sırayla döner. At ve titan seviyeleri geniş bir çayırda, platform seviyeleri gökyüzünde geçer.

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
| `src/character.js` | Oyuncu ve düşman: drift hareketi, joystick-kılıç, düşmanın sanal joystick'i, halatla uçuş, ata binme |
| `src/horse.js` | Binilebilir at: model, dörtnala animasyon, yönlendirme |
| `src/view.js` | Jöle gövde ağları, oynak gözler, kırmızı kesitler |
| `src/sword.js` | Kılıç modeli ve elden düşen kılıç fiziği |
| `src/game.js` | Seviye döngüsü, dövüş ve hasar kuralları, halat, kamera, ağır çekim |
| `src/world.js` | Ortamlar, halatlı platformun eğimi ve kopan halatlar; bütün dokular kodla üretiliyor |
| `src/effects.js` | Kan, lekeler, kıvılcım, su sıçraması |
| `src/input.js`, `src/hud.js` | Kontroller ve arayüz |

Zorluk eğrisi `levelSpec()` (`src/game.js`) içinde, düşman davranışı `thinkEnemy()` / `startFlick()` (`src/character.js`) içinde, drift ayarları `character.js` başındaki `GRIP_*` / `BRAKE_FAST` sabitlerinde.

İlk sürüm olan 2D yan görünümlü oyun `2d/` klasöründe duruyor (`2d/index.html`).
