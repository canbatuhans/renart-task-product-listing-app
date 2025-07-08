# Frontend - Product Listing UI

## 📋 Açıklama

React.js (Vite) ile yazılmış, modern ve responsive bir ürün listeleme arayüzü.  
Ürünler backend API'dan çekilir ve referans tasarıma uygun şekilde gösterilir.

---

## ✨ Özellikler

- 🎠 **Responsive Carousel** (Swiper.js) - Oklarla ve swipe ile kaydırma
- 🎨 **Renk Seçici** - Her ürün için farklı görsel
- ⭐ **Yıldız Puanı** - Popülerlik skoru 5 üzerinden, 1 ondalık
- 📱 **Modern Tasarım** - Temiz CSS, responsive layout
- 🖥️ **Çoklu Cihaz Desteği** - Mobil, tablet, masaüstü uyumlu

---

## 🛠️ Kullanılan Teknolojiler

- **React.js (Vite)** - Modern React framework
- **Swiper.js** - Carousel kütüphanesi
- **Axios** - HTTP client
- **CSS Modules** - Stil yönetimi

---

## 🚀 Kurulum

```bash
cd frontend
npm install
npm run dev
```

## 🎨 Tasarım Özellikleri

### Carousel

- **4 ürün kartı** aynı anda görünür
- **Tek kart kaydırma** - Her ok tıklamasında 1 kart kayar
- **Custom SVG oklar** - Sadece gerektiğinde görünür
- **Smooth animasyonlar** - Akıcı geçişler

### Responsive Design

- **Mobil:** 1 kart, tam genişlik
- **Tablet:** 2-3 kart
- **Masaüstü:** 4 kart

### Renk Seçici

- Her ürün için farklı renk seçenekleri
- Seçilen renge göre ürün görseli değişir
- Hover efektleri

---

## 📁 Component Yapısı

```
src/
├── components/
│   ├── ProductList/
│   │   ├── ProductList.jsx
│   │   └── ProductList.css
│   ├── ProductCard/
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.css
│   ├── ColorPicker/
│   │   ├── ColorPicker.jsx
│   │   └── ColorPicker.css
│   └── StarRating/
│       ├── StarRating.jsx
│       └── StarRating.css
├── hooks/
│   └── useProducts.js
└── utils/
    └── helpers.js
```

---

## 🔧 Geliştirici Notları

- **Modüler yapı:** Her component kendi klasöründe
- **Stajyer dostu:** Açıklamalı ve temiz kod
- **API entegrasyonu:** Otomatik veri güncelleme
- **Responsive:** Tüm cihazlarda test edildi

### Özelleştirme

- **Renkler:** CSS değişkenleri ile kolay değişim
- **Fontlar:** Avenir ve Montserrat (Google Fonts)
- **Animasyonlar:** CSS transitions ve transforms

---
