# Sri Thanigai Garments – Corporate Website

A modern **corporate garment manufacturing website** built using **Next.js, Directus CMS, and PostgreSQL**.

This platform uses a **Headless CMS architecture** where all content is dynamically managed through **Directus**, while **Next.js renders the frontend dynamically**.

The system allows administrators to manage the entire website without touching code, including:

* Product categories
* Sub categories
* Products
* Product details
* Fabrics
* Gallery images
* Infrastructure
* Manufacturing details

---

# Project Architecture

The application follows a **Headless CMS architecture**.

```
Frontend (Next.js + React)
        |
        | REST API
        |
Backend (Directus CMS)
        |
        |
Database (PostgreSQL)
```

### Key Features

* Fully dynamic website
* Admin managed CMS
* Scalable architecture
* SEO optimized routing
* Responsive design
* Modular component system

---

# Technology Stack

## Frontend

| Technology        | Description                                 |
| ----------------- | ------------------------------------------- |
| **Next.js**       | React framework for SSR and dynamic routing |
| **TypeScript**    | Type-safe development                       |
| **React**         | Component-based UI                          |
| **Tailwind CSS**  | Utility-first styling                       |
| **Framer Motion** | Animations and transitions                  |
| **Next Image**    | Optimized image rendering                   |

---

## Backend

| Technology            | Description         |
| --------------------- | ------------------- |
| **Directus**          | Headless CMS        |
| **PostgreSQL**        | Relational database |
| **Directus REST API** | Data access layer   |
| **Directus Assets**   | File storage system |

---

# System Overview

The platform consists of **two main systems**.

## 1. Frontend Application

The frontend is responsible for:

* Rendering dynamic pages
* Fetching data from Directus
* Displaying product catalogues
* Rendering fabric information
* Showing gallery images
* Managing layout and navigation

---

## 2. Backend CMS

Directus acts as the **content management system**.

Admins can manage:

* Categories
* Sub categories
* Products
* Product details
* Fabrics
* Gallery
* Infrastructure
* Manufacturing details

All updates made in the CMS are instantly reflected on the website.

---

# Database Structure

The PostgreSQL database stores structured data used by Directus.

---

## Categories

Main garment categories.

| Field          | Description          |
| -------------- | -------------------- |
| id             | Primary key          |
| category_name  | Category title       |
| slug           | URL slug             |
| category_image | Banner image         |
| description    | Category description |

Example:

* Men
* Women
* Kids

---

## Sub Categories

Subdivisions of each category.

| Field             | Description                |
| ----------------- | -------------------------- |
| id                | Primary key                |
| sub_category_name | Sub category title         |
| category_id       | Relationship with category |
| slug              | URL slug                   |
| banner_image      | Category banner            |

Example:

```
Men
 └── T-Shirts
 └── Shirts
```

---

## Products

Represents product groups.

| Field           | Description             |
| --------------- | ----------------------- |
| id              | Primary key             |
| product_name    | Product name            |
| slug            | URL slug                |
| sub_category_id | Relation to subcategory |
| product_image   | Product preview         |
| description     | Product description     |

---

## Product Details

Represents detailed product variants.

| Field       | Description          |
| ----------- | -------------------- |
| id          | Primary key          |
| product_id  | Parent product       |
| design_name | Product variant      |
| images      | Product gallery      |
| description | Detailed description |

---

## Fabrics

Fabric catalogue used in production.

| Field        | Description        |
| ------------ | ------------------ |
| id           | Primary key        |
| fabric_name  | Fabric title       |
| fabric_type  | Fabric category    |
| fabric_image | Fabric image       |
| description  | Fabric description |

---

## Product Fabric Mapping

Links products with fabrics used.

| Field             | Description       |
| ----------------- | ----------------- |
| id                | Primary key       |
| product_detail_id | Product reference |
| fabric_id         | Fabric reference  |

---

# Dynamic Page Architecture

All pages are dynamically generated using CMS data.

---

## Product Catalogue Hierarchy

```
Category
   |
   └── Sub Category
           |
           └── Product
                  |
                  └── Product Detail
```

Example:

```
Men
 └── T-Shirts
      └── Cotton T-Shirt
           └── Premium Cotton Round Neck
```

---

# Website Pages

| Page             | Description                      |
| ---------------- | -------------------------------- |
| Home             | Overview of company and products |
| About            | Company profile                  |
| Products         | Product catalogue                |
| Category Pages   | Men / Women / Kids               |
| Product Detail   | Individual product details       |
| Fabric Catalogue | Fabric listing                   |
| Fabric Detail    | Fabric information               |
| Manufacturing    | Production workflow              |
| Infrastructure   | Machinery and facilities         |
| Gallery          | Factory and production images    |
| Contact          | Contact information              |

---

# Image Management

All media files are stored in **Directus asset storage**.

Includes:

* Product images
* Fabric images
* Category banners
* Gallery photos
* Infrastructure images

Next.js automatically optimizes images for performance.

---

# SEO Optimization

The website includes SEO best practices.

Features include:

* Meta titles
* Meta descriptions
* Open Graph tags
* Structured schema data
* Optimized images
* Clean URL structure

Example URLs:

```
/products/men
/products/men/t-shirts
/products/men/t-shirts/cotton-round-neck
/fabrics/cotton
```

---

# Responsive Design

The platform is optimized for all screen sizes.

| Device  | Screen Range    |
| ------- | --------------- |
| Mobile  | 320px – 768px   |
| Tablet  | 768px – 1024px  |
| Laptop  | 1024px – 1440px |
| Desktop | 1440px+         |

Tailwind responsive utilities ensure consistent layouts.

---

# Project Folder Structure

```
src
│
├── app
│   ├── page.tsx
│   ├── products
│   ├── fabrics
│   ├── gallery
│   ├── manufacturing
│
├── components
│   ├── layouts
│   ├── product
│   ├── gallery
│   ├── ui
│
├── services
│   ├── directus.ts
│
├── utils
│
├── styles
```

---

# CMS Administration

Directus provides a visual dashboard.

Admins can:

* Create categories
* Add sub categories
* Manage products
* Upload images
* Manage fabrics
* Update galleries
* Edit company information

No development knowledge is required.

---

# Deployment

## Frontend

Possible hosting options:

* Vercel
* Netlify
* Cloud VPS

## Backend

* Directus Server
* Docker Container
* Cloud Hosting

## Database

* PostgreSQL server

---

# Development Status

Current completed modules:

* Next.js project setup
* Tailwind CSS configuration
* Directus CMS setup
* PostgreSQL database configuration
* Dynamic category system
* Product catalogue system
* Fabric catalogue system
* Gallery system
* Homepage layout

---

# Future Enhancements

The system supports future expansion such as:

* B2B product ordering
* Fabric inventory management
* Product filtering
* Multi-language support
* Advanced product search
* Admin analytics dashboard
* Customer enquiry management

---

# Project Goal

The goal of this platform is to create a **modern digital presence for Sri Thanigai Garments** that showcases:

* garment collections
* fabrics
* manufacturing capabilities
* production infrastructure

The system is designed to remain **scalable, maintainable, and future-ready** for advanced business integrations.
