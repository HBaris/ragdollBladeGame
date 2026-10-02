# Ragdoll Kılıç 3D

Menü yok. Sayfayı açtığın an seviye başlıyor: koş, kılıcı savur, jöle gibi ragdoll'ları doğra.

Arkadan takip eden kamera, iri oynak gözlü parlak karakterler, iki elle tutulan uzun kılıç ve gerçekten kopan kafa, kol, bacak ve gövde. Seviye sayacı var (Lv 1, 2, 3…); her 5. seviye boss.

## Oynamak

- **Bilgisayarda:** `index.html`'i tarayıcıda aç. Kurulum ya da sunucu gerekmez; oyun tek dosyaya paketli halde `dist/game.js` içinde.
- **Telefonda:** Oyunun bir web adresinden sunulması gerekir. GitHub Pages bunu yapar ama ücretsiz planda sadece **herkese açık** repolarda çalışır; bu repo gizli. İki yol var:
  1. Repoyu herkese açık yap (*Settings → General → Danger Zone → Change visibility*), sonra *Settings → Pages → Deploy from a branch* ile oyunun bulunduğu dalı ve `/ (root)` klasörünü seç. Oyun `https://<kullanıcı-adın>.github.io/ragdollBladeGame/` adresinde açılır.
  2. Repoyu gizli tutmak istersen `index.html` ile `dist/game.js`'i herhangi bir statik barındırmaya (Netlify Drop, Cloudflare Pages vb.) yükle.

> Ses, tarayıcıların otomatik oynatma kuralı yüzünden ilk dokunuşa kadar çalmaz. Oyun ise beklemeden başlar.
>
> Telefon zorlanırsa (iki kez üst üste 3 saniye boyunca 35 fps'in altı) oyun gölgeleri kendiliğinden kapatır ("Grafik: Düşük"); ayarlardan geri açabilirsin.

## Kontroller

Tek kontrol **joystick**. Parmağını ekranın herhangi bir yerine koyup sürükle (bilgisayarda fareyle sürükle ya da `W` `A` `S` `D`).

- **Yön = kolların ve kılıcın baktığı yer.** İleri itersen kılıcı öne tutar, sağa çekersen kollar ve kılıç sağa döner. Gövde arkadan gelir.
- **Az itersen** yerinde durup sadece kılıcı çevirir. **Çok itersen** o yöne koşar.
- **Alçaktan kesmek:** dururken çömelirsin; bu duruşta savuruş **bacak hizasından** geçer, kılıcın ucu yeri sıyırır (kıvılcım). Koşarken de joystick'i **az iterek** savurursan alçaktan geçer; çok iterek savurursan bel hizasından. Tam hızdan bırakıp dizüstü kayarken de alçaktan kesersin.
- **Biraz tesadüf:** her savuruş rastgele bir yükseklikten geçer (çoğu alçak, bazısı boyun hizası). Alçak savuruşta gövde kılıcın peşinden yere eğilir, dizler kırılır.
- **Koşu hızlı ve drift eder (7 m/s).** Düz koşarken düz gidersin, ama hızlıyken yön değiştirirsen gövde hemen döner, sen savrulmaya devam edersin: bir ayak fren yapar, öbürü boşa çırpınır. Tam hızda 90° dönüşte ~6 m, geri dönüşte ~4 m kayarsın. Tam hızdayken bırakırsan hızını alamaz, dizüstü kayarsın. Yavaşken çeviksin.
- **Kesmek için hızlı çevir.** Joystick'i bir yandan öbür yana hızlıca savurursan kılıç savrulur ve değdiği yeri keser. Yavaş dönen ya da düşmana uzatılmış kılıç kesmez, sadece iter.
- **Kılıç fiziksel.** Kabzadan uca yaylı bir sarkaç gibi davranır: dururken gevşek tutulur (ucu yukarıda ama sarkar, adımlarla sallanır), koşarken sağ kalçada dik taşınır, savururken kollar gerilir ve kılıç sıkı takip eder, sonunda biraz kamçılanır. Sağdan sola ve soldan sağa savuruşlar biraz farklı yükseklikten geçer; savuruşa başlarken kılıç aşağı indiği için önündekine tepeden de iner.
- Kesme, bıçağın ne kadar hızlı döndüğüyle ölçülür. Kolların savurmadığı, sadece sallanan kılıç ancak sert bir kamçıyla keser.
- **Omurgasız, jöle gibi.** Kalça çivili değil, güçlü bir yayla kontrolcüyü izler: vurulunca, zıplayınca bütün gövde sarsılır. Bacaklar gevşek, dizler hiç tam açılmaz, bacaklar yana açık ve adımda içe-dışa sallanır. Kafa, boyun, bel, omuzlar ve dizler hiç durmadan hafifçe titrer; hiçbir duruş net kalmaz.
- **Gövde gevşek, omurga bükülür.** Gövde iki parça: karın ve göğüs, arada her yöne bükülüp burulan bir bel eklemi. Dururken sırt ~40° kamburdur; koşarken göğüs her adımda belden öne pompalar (bükülme 12–40°), durunca ve dönünce belden katlanıp savrulur. Kafa, boyun ve omuzlar öne/yana yumuşak yaylarla bağlı; dikeyde sıkı ki koşunun zıplaması onu belden kırmasın. Kılıcı tutan eller gövdeyi peşinden sürükler.
- Titan seviyelerinde **kısa dokunuş** (bilgisayarda tık ya da `Boşluk`) halat atar.
- Yeniden başlat ve ses: sağ üstteki düğmeler (`R` · `M`).

Kamera en yakın düşmana bakar. Yakın dövüşte yavaş döner ki joystick yönleri ayağının altından kaymasın.

## Oyun

**Seviye sırası:** İlk 13 seviye elle sıralı: Düello → Düello → **Platform** → **Muharebe** → **Testere Arenası** → Düello → **Boss** → **At** → **Fırtınalı Gemi** → **Dalga Savunması** → **Platform** → **Titan** → **Titan Muharebesi**. Sonraki her 13 seviyede aynı türler **karışık sırayla** gelir (seviye numarasından türetilir: aynı seviye her açılışta aynıdır, yan yana aynı tür gelmez); zorluk yavaşça artar. Tek numaralı düello/boss seviyeleri **Karanlık Izgara**'da geçer; çift numaralılar sırayla Buz Sahanlığı, Çayır ve Dojo'da. Ayarlar (dişli) menüsündeki "Doğrudan git" düğmeleri her türe atlar.

**Değiştiriciler:** 15. seviyeden sonra seviyelerin bir kısmına rastgele (ama sabit) bir değiştirici eklenir, 40'tan sonra bazen iki; seviye başlığında yazar.
- **GECE:** ay ışığı, karanlık gök, kısa görüş mesafesi ve sis (en sık).
- **DEVLER:** rakipler 1,5 kat iri ve biraz yavaş.
- **CÜCELER:** rakipler küçük, çevik ve iki kişi fazla.
- **ÇİFT KILIÇLI DÜŞMAN:** rakiplerin de iki kılıcı var.
- **TEK VURUŞ:** ilk darbe seni öldürür (nadir; titanlarda yok).

- **Muharebe:** At sırtında, kalabalık bir düşman ordusuna karşı küçük bir ordu.
  - Düşman 14 kişiden başlar, her turda artar (en çok 24); dörtte biri atlı, kanatlardan gelir. Senin yanında 5 **mavi** müttefik var, ikisi atlı.
  - Herkes karşı takımın en yakınına saldırır: düşmanlar sana ve müttefiklere, müttefikler düşmanlara. Atlılar hedefin yanından dörtnala geçerken savurur, geçip gidince drift'le geri döner.
  - Kılıçlar kimin olduğuna bakmaz: düşmanlar birbirini, müttefikler birbirini, sen de yanlışlıkla müttefikini kesebilirsin (**DOST ATEŞİ!**). NPC'ler sadece saldırırken ya da sert bir kamçıda keser, koşarken dönmeleri kesmez.
  - Bütün düşmanlar ölünce kazanırsın; müttefiklerin ölmesi kaybettirmez. Kamera yavaşça en yakın düşmana döner, "ileri" itmek seni kavgaya götürür.
  - Uzaktaki (12 m'den ötedeki) ölümler yazı, sarsıntı ve ağır çekim üretmez; sadece seninkiler ve yakınındakiler.

- **Karanlık Izgara:** Boşlukta asılı, parlak koyu karolardan ~40 m'lik bir zemin; kenarından düşen ölür. Birkaç saniyede bir:
  - **Mavi halka:** bir nokta yanıp söner, sonra oradan genişleyen bir halka karoları kaldırır ve üstündekileri havaya ve dışarı fırlatır.
  - **Pembe pistonlar:** dama, artı ya da serpiştirilmiş karolar yanıp söner, sonra bir anda 1,6 m fırlar. Üstündeki uçar, yanındaki için duvar olur.

- **Tek can, ama kolay ölmezsin.** Gövdene gelen darbe seni kesmez, sadece savurur.
  - Bir bacağın kesilirse tek ayakla sekerek, iki bacağın da giderse güdüklerinle sürünerek devam edersin.
  - Bir kolun giderse kılıcı öbür elinle tutarsın.
  - **İki kolun giderse ya da kafan giderse ölürsün.** Sol üstteki küçük vücut şeması kopan uzuvlarını kırmızı gösterir.
- **Kesme:** Kılıç bir kemiğe değdiği yerden onu ikiye böler. **Sıradan rakip tek vuruşta ölür** (kol dahil); boss 3 darbeye dayanır.
- **Rakipler de senin gibi oynar.** Onların da tek bir sanal joystick'i var: kılıç koştukları yöne bakar, drift ederler, kesmek için kılıcı bir yana yavaşça çekip (bunu görürsün) hızla öbür yana savururlar. Usta olanlar koşarken savurur, bazen topaç gibi döner. Uzun boylu rakip kılıcını senin göğüs hizana eğer. Elleri titrek: hedefi tam tutturamazlar (acemiler daha çok şaşırır), savuruşları da seninki gibi rastgele yükseklikten geçer.
- **Dost ateşi:** Rakiplerin kılıcı yolundaki arkadaşını da keser (**DOST ATEŞİ!**). Kesilen bazen kin tutup ona saldırır (**HEY!**). Dikkatli olanlar arkadaşı yoldaysa bekler, ama her zaman değil.
- **Savunma:** Kılıçlar çarpışır (**KLANG!**, **BLOK!**). Rakipler seviye ilerledikçe daha sık bloklar, geri sıçrar, karşı saldırı yapar ve seni çevreler.
- **At kullanımı (at ve muharebe seviyeleri):** yayadaki gibi.
  - Az itersen at durur ve yerinde döner, kılıcı çevirirsin; çok itersen o yöne dörtnala koşar (13 m/s).
  - Hızlıyken sert dönersen at drift atar: gövdesi dönüşün içine yatar, toynaklarından toz kalkar. Tam hızda 90° dönüşte ~13 m savrulur, tam hızdan ~10 m'de durur.
  - Kılıç joystick'i takip eder, ama sadece atın önünde ve yanlarında döner.
- **At seviyesi:** Geniş yeşil alanda atın sırtındasın.
  - Rakipler iri ama ağır; saldırıya hazırlanmaları uzun sürer.
  - At sırtında kılıç ~1,7 kat uzun (1,65 m bıçak): yerdeki iri rakiplere yukarıdan yetişir. At kimseyi ezmez; önüne çıkanı sadece kenara iter.
- **Halatlı platform:** Gökyüzünde, dört köşesinden kırmızı-beyaz halatlarla asılı 22 m'lik bir beton platform; alçak bir duvarla çevrili. Sadece normal rakipler (2–4) var.
  - Halatlar direk gibidir, içinden geçilmez. Savrulan kılıç (seninki ya da rakibinki) değdiği halatı keser (**HALAT KOPTU!**). Alt parça yere kıvrılır, üst parça gökyüzüne fırlar.
  - Platform, kalan halatların ağırlık merkezine göre yan yatar ve sallanarak oturur. Bir köşe kesilirse o köşeye ~11°, yan yana iki köşe kesilirse ~21° (tam) yatar. Çapraz iki halat kalırsa platform dengesizdir: üstündekilerin ağırlığı hangi yandaysa o yana devrilir.
  - Eğimde herkes aşağı kayar; koşarak karşı koyabilirsin. Duvar yavaş kaymayı durdurur, ama hızlı çarpan (darbe + kayma) duvarın üstünden devrilip düşer ve ölür.
- **Titan seviyesi:** Uzakta, ~12 m boyunda, hızlı ve saldırgan bir titan var.
  - **Çift kılıç:** Titanlara karşı iki elinde birer kılıç var. Sağdaki joystick'le savrulan asıl kılıç, soldaki onun aynadaki eşi: öne V açarlar, savuruşta makas gibi kesişirler, topaç gibi dönünce ikisi de döner. Bir elin koparsa o elin kılıcı düşer, kalan elle tek kılıçla devam edersin.
  - Sürüklemek her zamanki gibi koşturur ve kılıcı çevirir.
  - **Kısa dokunuş halat atar:** boşluğa dokunursan halat ekran dışına, önde ve yukarıda bir yere takılır ve salınarak ilerlersin. Titana dokunursan halat onun o noktasına takılır ve ona doğru uçarsın.
  - Hızla uçarken kılıç titanın değdiği yerini keser.
  - **Sadece boynu öldürür, önden de arkadan da.** Boyun bölgesi: ense, gırtlak, boyun kökü (köprücük) ve kafa. Kolu, bacağı kopsa da savaşır (bacaksızsa sürünür); göğsü kesilemeyecek kadar kalın. Boyun **dördüncü** darbede kopar. Her bıçak aynı dalışta boyna bir kez sayılır (iki bıçak birden girerse iki darbe), ama son kesiş yeni bir dalış ister: çift kılıçla temiz **üç dalış** titanı düşürür.
  - **Az yazı, çok kan:** Titanlarla savaşta (titan seviyesi ve titan muharebesi) kopma, kesilme ya da çarpma yazısı çıkmaz; sadece boyna kalan darbe sayısı ("BOYUN! 2 darbe kaldı", dost vurursa "DOST BOYNUNU YARDI! …") ve "+N DOST GELDİ" kalır. Titanın kanı iri damlalarla fışkırır: kesilen uzvun iki güdüğü 5–8 sn (boyun 9–12 sn) akar, kopmayan her darbe 3–5 sn kanar. Kendi kopan uzvunu sol üstteki vücut şeması gösterir.
  - Bıçak dalış boyunca boyun bölgesine herhangi bir anda değerse, daha derine gömüldüğü kalın göğüs yerine boyun sayılır. Kalın göğse çarpmak ("ÇOK KALIN") dalışı boşa harcamaz: aynı dalışta kolunu, bacağını ya da boynunu kesmeye devam edebilirsin.
  - **Buhar:** Ensesinin arkasından beyaz buhar tütüp tıslamaya başlarsa uzaklaş: ~1.3 sn sonra patlar (enseye her darbe yiyince hemen), yakınındakini halatıyla birlikte savurur. Kopan uzuvlarının güdükleri de tüter.
  - **Hançer:** Tek elinde (ona göre) küçük bir hançer var; sağ eli koparsa sola geçer, iki eli de giderse silahsız kalır. Her savuruşu **oyuncuya nişan alır**: hazırlanırken senin gideceğin yeri tahmin eder, savuruş başlayınca yönü donar; son anda yön değiştirirsen kurtulursun. Yerdekine çömelip tepeden ya da çapraz vurur, havadakine (boynuna gelene) hızlı yatay savurur.
  - Darbesi nereye gelirse gelsin bir uzvunu koparır (kafana gelse de kafan uçmaz, bir uzvun gider); iki kolun giderse ölürsün.
- **Titan muharebesi:** Karşında geniş bir hatta gelen **üç titan**; hepsini boynundan düşürünce kazanırsın. Yanında 8 kişilik bir öncü birlik başlar, **ilk 60 saniye boyunca** her 7,5 saniyede bir arkandan (en yakın titanın ters yönünden) üçer kişilik yeni dostlar gelir (aynı anda en fazla 18 canlı dost).
  - Dostların ~%30'u **halatlı** (yeşilimsi mavi, senin gibi çift kılıçlı): titana halat atıp çoğunlukla boynuna, bazen sırtına ya da omzuna uçar, yolda değdiğini keser. Boynunu yarabilir ama **son kesiş hep senin**: dostlar boynu en fazla 1 darbeye indirir.
  - ~%30'u **atlı**: titanın yanından dörtnala geçerken uzun kılıçla bacağına savurur; at titanı itemez, bacaklarının etrafından dolaşır.
  - Kalanı piyade: titanların ayak dibine koşup bacaklarına savurur.
  - Dostların küçük kılıçları titanın uzvunu çoğunlukla sıyırır ama arada bir bacak ya da kol koparır (bacaksız titan sürünür, boynu alçalır).
  - Titanlar en çok sana sinirlidir ama dibindekileri de biçer; hançer birine saplanınca o savuruş biter. Hançer inmeden önce müttefikler (becerisine göre) geri sıçrar, buhar onları da savurur.
  - Kalabalıkta dost ateşi öldürmez, sadece iter ("HEY!"). Buhar halatlı dostların halatını da koparır.
  - Kamera en yakın titana kilitlenir; o düşünce sıradakine geçer. Halat attığında dokunduğun titana uçarsın.
- **Testere Arenası:** Taş duvarlı, çelik zeminli bir halka; üç dönen bıçak kolu (ikisi diz, biri bel hizasında) değdiği **herkesi** keser: seni, rakipleri, cesetleri. Sarı-siyah şerit kolun menzilini gösterir. Kollar sürekli dönmez: yaklaşık 5 saniye döner, yavaşlayıp durur, 2,6 saniye dinlenir, sonra yeniden hızlanır (her kolun ritmi farklı). Dururken kesmez. Rakipler dönen kolun etrafından dolaşmaya çalışır ama herkes aynı dikkatte değildir; acemiler kolun yoluna girer, seni kovalarken dikkatleri dağılır.
- **Fırtınalı Gemi:** Yağmur altında, şimşekler çakarken dalgalarla yalpalayan bir güverte (direkler de yatar). Güverte yattıkça herkes alçak yana kayar; ara ara **BÜYÜK DALGA** gelir (önce hangi yana yatacağı yazar): o sırada alçak küpeşteye kayan denize düşer, yüksek yana koş. Darbeyle küpeşteden savrulan da denize düşer.
- **Dalga Savunması:** Dojo arenasında art arda gelen, gittikçe kalabalıklaşan rakip dalgaları (4–6 dalga, sonuncusunda boss). Sahadakiler bire inince ya da 22 sn geçince sıradaki dalga arenanın senden uzak kenarından gelir.
- **Alçak duvar ve küpeşte:** Kendi koşunla çarpınca devrilmezsin; sadece darbeyle savrulurken ya da hızla kayarken üstünden aşarsın. Rakipler koşarken hızla çarparsa devrilir.
- **Boss** (düello döngüsünde): daha iri ve 3 canlı, ama ağırkanlı (yavaş hazırlanır, seyrek saldırır); son canına kadar hiçbir yeri kopmaz.
- **Ortamlar:** Düellolarda Karanlık Izgara ile Çayır (~56 m), Buz Sahanlığı (~32 m, kenardan suya düşen ölür; buz yüzer: üstündekilerin, cesetler dahil, ağırlığı hangi yana toplanırsa o yan suya gömülür, suyun 40 cm altında kalan buz su sayılır ve orada duran batar; buz kaygandır, yatınca herkes alçak kenara kayar) ve Gün Batımı Dojo (~44 m) dönüşümlü gelir. At ve titan seviyeleri 124 m'lik bir çayırda, platform seviyeleri gökyüzünde geçer.

## Ses ve müzik

Bütün sesler ve müzik kodla, anlık üretilir (WebAudio); ses dosyası yoktur. Ses motoru ilk dokunuşta açılır (tarayıcı kuralı). iPhone'un sessiz anahtarı açıksa web sesleri duyulmaz.

- **Müzik:** Dört üslup. Düello, arena ve platformda samuray (pentatonik koto + taiko), muharebe, at ve dalga savunmasında savaş (dörtnala ritim), titanlarda destansı (ağır davul + koro dolgusu), gemide denizci (6/8). Dövüşün yoğunluğuna göre katman ekler: menüde ve seviye bitince bas ve zil, seviye sürerken davullar, rakip 6 metreye girince ya da titan yakındayken melodi. Ayarlarda ayrı "Müzik: Açık/Kapalı" düğmesi (tercih hatırlanır); "Ses" düğmesi her şeyi kısar.
- **Efektler:** kılıç savurma, kesme, yaralanma, klang, düşme, drift, kılıcın yere sürtünmesi, halat kopması, titan buharı, savaş borusu (yeni dalga), büyük dalga, gök gürültüsü, halat atma ve kancanın saplanması, at nalı, titan adımları (yakındaysa kamera da sarsılır), testere vızıltısı, düğme tıkı.
- **Ortam sesi:** Gemide deniz ve fırtına, buzda ve platformda rüzgâr.

## Geliştirme

Kaynak kod `src/` altında ES modülleri olarak duruyor; `dist/game.js` bunların three.js ile birlikte paketlenmiş halidir.

```bash
npm install
npm run build   # dist/game.js üretir (commit'lenir, çift tıkla açılsın diye)
npm run dev     # değişiklikte otomatik yeniden paketler
```

| Dosya | İçerik |
|---|---|
| `src/ragdoll.js` | 3D Verlet ragdoll: iki parçalı gövde (bel eklemi `J.SPINE`), kaslar (üst gövde yumuşak: `JOINT_K` / `JOINT_C` / `JOINT_KY`), kemik kesme, kılıç çarpışma testleri |
| `src/pose.js` | Duruş/koşu/hamle pozları (`hunch`: belden kamburluk), bacaklar ve omurga için ileri kinematik, kollar için IK |
| `src/character.js` | Oyuncu ve düşman: drift hareketi, duruş (çömelme), fiziksel kılıç (`simBlade`), düşmanın sanal joystick'i, halatla uçuş, ata binme |
| `src/horse.js` | Binilebilir at: model, dörtnala animasyon, yayadaki gibi yönetim ve drift |
| `src/view.js` | Jöle gövde ağları, oynak gözler, kırmızı kesitler |
| `src/sword.js` | Kılıç modeli ve elden düşen kılıç fiziği |
| `src/game.js` | Seviye döngüsü, takımlar (`hostilesOf` / `matesOf`), muharebe, dövüş ve hasar kuralları, halat, kamera, ağır çekim, otomatik grafik düşürme |
| `src/world.js` | Ortamlar; halatlı platformun eğimi ve kopan halatlar; ızgaranın halka ve piston olayları. Bütün dokular kodla üretiliyor |
| `src/effects.js` | Kan, lekeler, kıvılcım, su sıçraması |
| `src/input.js`, `src/hud.js` | Kontroller ve arayüz |

Zorluk eğrisi `levelSpec()` (`src/game.js`) içinde, düşman davranışı `thinkEnemy()` / `startFlick()` (`src/character.js`) içinde, drift ayarları `character.js` başındaki `GRIP_*` / `BRAKE_FAST` sabitlerinde.

İlk sürüm olan 2D yan görünümlü oyun `2d/` klasöründe duruyor (`2d/index.html`).

## Mobil uygulama (Google Play / App Store)

Oyun [Capacitor](https://capacitorjs.com) ile yerel uygulamaya sarıldı: `android/` ve `ios/` projeleri,
`capacitor.config.json` (paket kimliği `com.hbaris.ragdollkilic`). Uygulamada ekran dikey kilitli ve tam
ekran; arka plana geçince oyun ve ses durur.

- `npm run build:www`: oyunu derleyip `www/` klasörüne toplar (Capacitor bunu uygulamaya koyar).
- `npm run cap:sync`: `www/`'yu Android ve iOS projelerine kopyalar.
- `assets/`: ikon ve açılış ekranı kaynakları (`npx @capacitor/assets generate` bunlardan bütün boyutları üretir).
- `store/`: mağaza metinleri (`listing.md`), ekran görüntüleri, Play tanıtım görseli ve 512 px ikon.
- `docs/privacy.html`: gizlilik politikası (GitHub Pages ile yayınlanır).
- `.github/workflows/`: Android (test APK + imzalı AAB) ve iOS (TestFlight'a yükleme) derlemeleri.

Adım adım yayınlama rehberi: [PUBLISHING.md](PUBLISHING.md).
