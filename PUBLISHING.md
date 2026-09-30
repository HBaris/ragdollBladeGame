# Google Play ve App Store'da yayınlama

Oyun web teknolojisiyle yazıldı; mağazalar için [Capacitor](https://capacitorjs.com) ile yerel
uygulamaya sarıldı (`android/`, `ios/`). Derleme ve imzalama GitHub Actions'ta yapılır, bilgisayarına
Android Studio ya da Xcode kurman gerekmez. Hesap açma, ödeme, anahtar üretme ve mağaza formları
senin adına yapılamaz; aşağıdaki adımlar onlar içindir.

## 0. Önce karar ver (sonradan değiştirilemez)

- **Paket kimliği:** `com.hbaris.ragdollkilic` (`capacitor.config.json`, `android/app/build.gradle`,
  iOS proje ayarları). İlk yüklemeden sonra değiştirilemez. Değiştireceksen şimdi değiştir ve
  `npx cap sync` çalıştır.
- **Ad:** "Ragdoll Kılıç". Mağazalarda aynı ya da çok benzer adlı bir oyun varsa reddedilebilir ya da
  marka şikâyeti alabilir: yüklemeden önce iki mağazada da ara. Başka oyunların adını (ör.
  "Ragdoll Blade") ve "Attack on Titan" gibi marka adlarını başlıkta, açıklamada ve anahtar
  kelimelerde kullanma.
- **Gizlilik politikası adresi:** `docs/privacy.html` hazır. İçindeki `[İLETİŞİM E-POSTASI]` ve
  `[CONTACT EMAIL]` yerlerine kendi adresini yaz. GitHub'da Settings → Pages → "Deploy from a branch",
  dal `main`, klasör `/docs` seçersen adres
  `https://hbaris.github.io/ragdollBladeGame/privacy.html` olur. İki mağaza da bu adresi ister.

## 1. Telefonunda hemen dene (hesap gerekmez)

GitHub'da **Actions → "Android derlemesi" → Run workflow**. Bitince çalıştırmanın sayfasındaki
`ragdoll-kilic-test-apk` dosyasını indir, zip'ten çıkan `app-debug.apk`'yı Android telefona at ve kur
(telefon "bilinmeyen kaynaklara izin ver" diye sorar). iPhone'da hesap olmadan kurulum yolu yok;
iOS'ta ilk deneme TestFlight ile olur (bölüm 3).

## 2. Google Play

1. **Geliştirici hesabı:** <https://play.google.com/console> (tek seferlik 25 $, kimlik doğrulama).
   Yeni **kişisel** hesaplarda Google, üretime çıkmadan önce en az 12 test kullanıcısıyla 14 gün
   kapalı test istiyor. Bu kural değişebilir; Console'da ne yazıyorsa o geçerli.
2. **Yükleme anahtarı (bir kez, kendi bilgisayarında):**
   ```sh
   keytool -genkeypair -v -keystore upload.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
   base64 -w0 upload.jks > upload.jks.b64      # macOS: base64 -i upload.jks -o upload.jks.b64
   ```
   `upload.jks` dosyasını ve parolasını güvenli bir yerde yedekle, depoya koyma. Kaybedersen Play
   App Signing ile sıfırlatabilirsin ama uğraştırır.
3. **GitHub Secrets** (Settings → Secrets and variables → Actions → New repository secret):
   `ANDROID_KEYSTORE_BASE64` (`upload.jks.b64` içeriği), `ANDROID_KEYSTORE_PASSWORD`,
   `ANDROID_KEY_ALIAS` (`upload`), `ANDROID_KEY_PASSWORD`.
4. **Actions → "Android derlemesi" → Run workflow** (sürüm adı ör. `1.0.0`). Artık test APK'sının
   yanında `ragdoll-kilic-play-aab` da çıkar. Sürüm kodu her çalıştırmada otomatik artar.
5. **Play Console'da:** uygulama oluştur → Test → Kapalı test (ya da Dahili test) → AAB'yi yükle.
   İlk AAB elle yüklenmek zorunda.
6. **Mağaza sayfası:** metinler `store/listing.md`, ikon `store/icon-512.png`, tanıtım görseli
   `store/feature-graphic.png`, ekran görüntüleri `store/screenshots/android/`.
7. **Formlar:**
   - Veri güvenliği: veri toplanmıyor, paylaşılmıyor.
   - Reklam: yok.
   - Hedef kitle: 13 yaş ve üstü. Oyun kan ve uzuv kesme içerdiği için çocuklara yönelik
     işaretleme; işaretlersen "Aileler" politikasına takılır.
   - İçerik derecelendirmesi (IARC anketi): şiddet var, çizgi film tarzı, kan var. Sonuç büyük
     ihtimalle PEGI 12 civarı çıkar; kesin notu anket verir.

## 3. App Store

1. **Apple Developer Program:** <https://developer.apple.com/programs/> (yıllık 99 $).
2. **Paket kimliğini kaydet:** Certificates, Identifiers & Profiles → Identifiers → + → App IDs →
   `com.hbaris.ragdollkilic`.
3. **App Store Connect'te uygulama oluştur:** My Apps → + → New App, platform iOS, paket kimliği
   yukarıdaki, SKU serbest (ör. `ragdollkilic`).
4. **API anahtarı:** App Store Connect → Users and Access → Integrations → App Store Connect API →
   Team Keys → +. İmza sertifikası ve profilini otomatik oluşturabilmesi için **Admin** rolü ver.
   `.p8` dosyası yalnızca bir kez indirilebilir.
5. **GitHub Secrets:**
   - `APPLE_TEAM_ID`: Membership sayfasındaki 10 karakterlik ekip kimliği.
   - `ASC_KEY_ID`: anahtar kimliği.
   - `ASC_ISSUER_ID`: Issuer ID.
   - `ASC_KEY_P8_BASE64`: `base64 -i AuthKey_XXXX.p8` çıktısı.
6. **Actions → "iOS TestFlight" → Run workflow.** Derleme macOS makinesinde imzalanıp App Store
   Connect'e yüklenir. İşlenmesi 10–30 dakika sürer, sonra TestFlight uygulamasıyla iPhone'una kurabilirsin.
7. **Mağaza sayfası:**
   - Metinler: `store/listing.md`.
   - Ekran görüntüleri: `store/screenshots/ios/` (6,9" boyut, 1290×2796). Uygulama yalnızca
     iPhone'u desteklediği için iPad görüntüsü istenmez.
   - App Privacy: "Data Not Collected".
   - Yaş derecelendirmesi anketi: çizgi film/fantastik şiddet "sık/yoğun" işaretlenmeli.
   - Şifreleme sorusu Info.plist'te cevaplı: `ITSAppUsesNonExemptEncryption = false`.
8. **İncelemeye gönder.**

## 4. Güncelleme

`src/` değişince hiçbir şey elle kopyalanmaz: iş akışları `npm run build:www` ve `npx cap sync`
çalıştırır. Yeni sürüm için iki iş akışını da yeni bir sürüm adıyla (ör. `1.0.1`) çalıştır. Derleme
numaraları otomatik artar.

Yerelde denemek istersen:
- Android Studio ile: `npm run cap:sync && npx cap open android`.
- Mac'te Xcode ile: `npm run cap:sync && npx cap open ios`.

## Bilinmesi gerekenler

- İş akışları bu depoda yazıldı ama gerçek hesap ve anahtarla henüz çalıştırılmadı. İlk
  çalıştırmada bir ayar eksik çıkarsa hata kaydını paylaş.
- Apple web içeriğini saran uygulamaları "asgari işlevsellik" (4.2) maddesiyle zaman zaman
  reddeder. Tam bir oyun olduğu için geçmesi beklenir ama garanti değildir.
- Titan, halat ve boyun mekaniği bilinen bir animeyi andırır. Mağaza metinlerinde ve görsellerde o
  eserin adını, karakterlerini ya da logosunu kullanma.
