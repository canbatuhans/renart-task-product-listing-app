# Backend - Product Listing API

## 📋 Açıklama

Node.js ve Express ile yazılmış, ürün verilerini JSON dosyasından okuyan ve fiyatları gerçek zamanlı altın fiyatına göre dinamik olarak hesaplayan RESTful API.

---

## ✨ Özellikler

- 📊 Ürün verileri: `src/data/products.json`
- 💰 Dinamik fiyat: (popularityScore + 1) × weight × goldPrice
- 🏆 Gerçek zamanlı altın fiyatı: [metalpriceapi.com](https://metalpriceapi.com)
- 🔍 Fiyat ve popülerlik aralığına göre filtreleme
- 🏗️ Temiz, modüler dosya yapısı (controller, model, route, utils)

---

## 🛠️ Kullanılan Teknolojiler

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Axios** - HTTP client (altın fiyatı için)
- **CORS** - Cross-origin resource sharing

---

## 🚀 Kurulum

```bash
cd backend
npm install
node src/server.js
```

### Tüm Ürünleri Listele

```http
GET /products
```

### Fiyat Aralığına Göre Filtrele

```http
GET /products?minPrice=100&maxPrice=500
```

### Popülerlik Aralığına Göre Filtrele

```http
GET /products?minPopularity=3.5&maxPopularity=4.5
```

### Kombinasyon

```http
GET /products?minPrice=100&maxPrice=500&minPopularity=3.0
```

---

## 📁 Dosya Yapısı

```
src/
├── controllers/
│   └── productController.js    # İş mantığı
├── routes/
│   └── productRoutes.js        # Endpoint tanımları
├── models/
│   └── productModel.js         # Veri erişimi
├── utils/
│   └── priceUtils.js           # Fiyat hesaplama
├── data/
│   └── products.json           # Ürün verileri
├── app.js                      # Express app
└── server.js                   # Sunucu başlatma
```

---

## 🔧 Geliştirici Notları

- **Kodlar açıklamalı ve stajyer dostudur**
- **Yeni ürün eklemek için:** `products.json` dosyasını düzenleyin
- **Fiyat formülü:** `priceUtils.js` dosyasında kolayca değiştirilebilir
- **Filtreleme:** `productController.js` dosyasında genişletilebilir

### Örnek Ürün Verisi

```json
{
  "id": 1,
  "name": "Product Name",
  "popularityScore": 0.8,
  "weight": 15.5,
  "images": {
    "red": "image1.jpg",
    "blue": "image2.jpg",
    "green": "image3.jpg"
  }
}
```
