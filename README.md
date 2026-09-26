# Ragdoll Kılıç 3D

Menü yok. Sayfayı açtığın an seviye başlıyor: koş, kılıcı savur, jöle gibi ragdoll'ları doğra.

Arkadan takip eden kamera, iri oynak gözlü parlak karakterler, iki elle tutulan uzun kılıç ve gerçekten kopan kafa, kol, bacak ve gövde. Seviye sayacı var (Lv 1, 2, 3…); her 5. seviye boss.

## Oynamak

- **Bilgisayarda:** `index.html`'i tarayıcıda aç. Kurulum ya da sunucu gerekmez; oyun tek dosyaya paketli halde `dist/game.js` içinde.
- **Telefonda:** GitHub'da *Settings → Pages → Build and deployment → Deploy from a branch* seçip dalı ve `/ (root)` klasörünü seç. Birkaç dakika sonra oyun `https://<kullanıcı-adın>.github.io/ragdollBladeGame/` adresinde açılır.

> Ses, tarayıcıların otomatik oynatma kuralı yüzünden ilk dokunuşa kadar çalmaz. Oyun ise beklemeden başlar.

## Kontroller

| Eylem | Telefon | Bilgisayar |
|---|---|---|
| Koş | Ekranın sol yarısında sürükle (sanal çubuk) | `W` `A` `S` `D` / oklar |
| Kaydırdığın yöne kes | Sağ yarıda kaydır: sağa → yatay, aşağı → tepeden, yukarı → aşağıdan | Fareyle sürükle |
| Kes | Sağ yarıya dokun (sırayla farklı açılar) | Tıkla, `J` veya `Boşluk` |
| Tepeden / aşağıdan kes | — | `K` / `L` |
| Yeniden başlat · Ses | Sağ üstteki düğmeler | `R` · `M` |

Kamera en yakın düşmana kilitlenir: kaydırma yönü ekrana göredir, yani karaktere göre de doğrudur.

## Oyun

- **Kesme:** Kılıç bir kemiğe değdiği yerden onu ikiye böler. Kafa, gövde ya da bacak kesilirse düşman ölür. Kol kesilirse silahı düşebilir ve panikle kaçar; onu da yakalayıp bitirmen gerekir.
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
