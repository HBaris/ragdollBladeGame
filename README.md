# Ragdoll Kılıç

Menü yok. Sayfayı açtığın an oyundasın: koş, kes, ragdoll'ları uçur.

Tek bağımlılık yok, derleme yok: düz HTML5 Canvas + JavaScript. Fizik motoru (Verlet ragdoll) ve sesler (WebAudio sentezi) oyunun içinde.

## Oynamak

- **Bilgisayarda:** `index.html` dosyasını tarayıcıda aç. Sunucu da internet de gerekmez.
- **Telefonda:** GitHub'da *Settings → Pages → Build and deployment → Deploy from a branch* seçip dalı ve `/ (root)` klasörünü seç. Birkaç dakika sonra oyun `https://<kullanıcı-adın>.github.io/ragdollBladeGame/` adresinde açılır.

> Ses, tarayıcıların otomatik oynatma kuralı yüzünden ilk tuşa/dokunuşa kadar çalmaz. Oyun ise beklemeden başlar.

## Kontroller

| Eylem | Klavye / Fare | Dokunmatik |
|---|---|---|
| Koş | `A` `D` veya `←` `→` | Sol yarıda sürükle (sanal çubuk) |
| Zıpla (2. basış = takla) | `W`, `↑`, `Boşluk` veya sağ tık | **ZIPLA** butonu veya çubuğu yukarı fırlat |
| Kes (imlece doğru) | Sol tık | Sağ yarıda kaydır: o yöne keser |
| Kes (ileri) | `J` (`S` basılıyken aşağı) | Sağ yarıya dokun |
| Yukarı kes | `K` | Sağ yarıda yukarı kaydır |
| Ses aç/kapa · Yeniden başla | `M` · `R` | — |

## Neler var

- **Gerçek kesme:** Kılıç bir kemiği ikiye böler, iskelet ayrılır. Kafa, kol, bacak ya da gövde kopar; güdüklerden kan fışkırır, yere leke kalır.
- **Nişan nereyse orası kopar:** Kesik, kılıç nişan çizgisini geçtiği yerde olur. Fareyle kafaya nişan alırsan kafa gider, bacaklara alırsan bacaklar.
- **3'lü kombo:** yukarıdan aşağı → aşağıdan yukarı → etrafını biçen dönen bitiriş. Havada keserken süzülürsün; çift zıplamada takla atarsın.
- **Düşmanlar**
  - *Er* (mavi-gri): yumruk atar.
  - *Kılıççı* (turuncu alın bantlı): tepeden kılıç indirir. Saldırısı sırasında kılıcına vurursan savuşturursun (**KLANG!**).
  - *Mızrakçı* (mor): uzaktan mızrak atar. Mızrağı kılıçla sektirirsen geri uçar ve dizili düşmanları şişler (**ŞİŞ KEBAP!**).
  - *İri* (kahverengi, büyük): 3 canı var, gövdesi son darbeye kadar kopmaz.
- Kolu kopan düşman silahsız kalır, kan fışkırtarak panikle kaçar.
- Ölünce düşmanlar zıplayıp sevinir. Bir tuşa bas, anında yeniden başla.
- Öldürmelerde ağır çekim, ekran sarsıntısı, kombo sayacı; her 12 leşte bir can geri gelir. Rekor tarayıcıda saklanır.

## Kod

| Dosya | İçerik |
|---|---|
| `js/ragdoll.js` | Verlet ragdoll, kas (poz takibi), kemik kesme, çarpışma testleri |
| `js/actors.js` | Oyuncu, düşman türleri (`ETYPES`), pozlar, kılıç, mızrak |
| `js/game.js` | Oyun döngüsü, ağır çekim, savaş kuralları, doğma/zorluk, HUD |
| `js/effects.js` | Kan parçacıkları, lekeler, yazılar, atkı |
| `js/input.js` | Klavye, fare, dokunmatik |
| `js/world.js` | Arka plan ve zemin |
| `js/audio.js` | Sentezlenen sesler |

Ayar yapmak için hız, zıplama ve kılıç boyu `js/actors.js`'in başındaki sabitlerde; düşman değerleri `ETYPES`'ta; zorluk eğrisi `js/game.js` içindeki `difficulty()` ve `updateSpawn()`'da.
