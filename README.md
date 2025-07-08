# 🛒 Renart Intern Task: Product Listing App

## Proje Özeti / Project Overview

Bu proje, modern ve dinamik bir ürün listeleme uygulamasıdır.  
Node.js/Express tabanlı bir backend API ve React/Vite tabanlı bir frontend arayüzünden oluşur.  
Amaç, gerçek zamanlı altın fiyatına göre dinamik ürün fiyatlaması ve kullanıcı dostu, responsive bir ürün vitrini sunmaktır.

---

## 🚀 Özellikler / Features

- ✅ Gerçek zamanlı altın fiyatı ile dinamik ürün fiyatı hesaplama
- ✅ Fiyat ve popülerlik skoruna göre filtreleme (backend)
- ✅ Modern, responsive ve tasarıma uygun ürün vitrini (frontend)
- ✅ Carousel, renk seçici, yıldız puanı ve daha fazlası
- ✅ Temiz, modüler kod yapısı

---

## 🌐 Canlı Demo / Live Demo

- **Frontend:** [Vercel Linki](https://renart-intern-task-product-listing-app.vercel.app)
- **Backend API:** [Render Linki](https://renart-task-product-listing-app.onrender.com)

---

## 🛠️ Kurulum / Installation

### Backend

```bash
cd backend
npm install
node src/server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Kullanımı / API Usage

- `GET /products` : Tüm ürünleri listeler
- `GET /products?minPrice=...&maxPrice=...` : Fiyat aralığına göre filtreler
- `GET /products?minPopularity=...&maxPopularity=...` : Popülerlik aralığına göre filtreler

---

## 📁 Proje Yapısı / Project Structure

```
task-product-listing/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── utils/
│   │   ├── data/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
└── README.md
```

---

## 🎯 Teknik Detaylar / Technical Details

### Backend

- **Framework:** Node.js + Express.js
- **API:** RESTful
- **Fiyat Hesaplama:** (popularityScore + 1) × weight × goldPrice
- **Altın Fiyatı:** Gerçek zamanlı API (goldapi.io)
- **Filtreleme:** Fiyat aralığı ve popülerlik skoru

### Frontend

- **Framework:** React.js (Vite)
- **Carousel:** Swiper.js
- **Responsive:** Mobil, tablet, masaüstü uyumlu
- **Tasarım:** Modern ve kullanıcı dostu

---
