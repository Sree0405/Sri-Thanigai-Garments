Sri Thanigai Garments – Corporate Website

A modern corporate garment manufacturing website built using Next.js, Directus CMS, and PostgreSQL.

The platform provides a scalable and dynamic architecture where all website content is managed through a headless CMS (Directus) while the frontend renders the data dynamically using Next.js App Router.

This architecture enables non-technical administrators to manage the entire website through the CMS dashboard without modifying the frontend code.

The system supports dynamic product catalogues, fabric management, galleries, and company infrastructure pages, making the platform future-ready for B2B integrations and catalogue expansion.

Project Architecture

The project follows a Headless CMS Architecture.

Frontend (Next.js + React)
        |
        | REST / API Requests
        |
Backend (Directus CMS)
        |
        |
Database (PostgreSQL)
Key Characteristics

• Fully dynamic content architecture
• Admin-managed CMS dashboard
• Scalable data structure
• Component-driven frontend
• Optimized image handling
• SEO-friendly routing
• Responsive UI system

Technology Stack
Frontend

Framework
Next.js (App Router)

Language
TypeScript

UI Library
React

Styling
Tailwind CSS

Animation
Framer Motion / Motion Based Transitions

Image Handling
Next.js Image Optimization

Routing
Next.js Dynamic Routing

Deployment
Cloud / VPS / Shared Hosting

Backend

CMS
Directus

Database
PostgreSQL

API Layer
Directus REST API

Asset Storage
Directus File Storage

Authentication
Directus Role-based Access

System Overview

The system consists of two main components.

Frontend Application

The frontend is responsible for:

• Rendering dynamic pages
• Fetching content from Directus
• Displaying product catalogues
• Rendering fabric information
• Displaying gallery images
• Managing navigation and layout
• Handling responsive UI

Backend CMS

Directus is used as a Headless CMS that allows administrators to manage all website data through a visual dashboard.

Administrators can create and manage:

• categories
• subcategories
• products
• product details
• fabrics
• galleries
• infrastructure images
• manufacturing information

All content changes are immediately reflected on the website through API integration.

Database Design

The PostgreSQL database stores all structured data used by the CMS.

The main entities in the database include:

Categories

Represents main garment categories.

Example

Men
Women
Kids

Fields

• id
• category_name
• category_slug
• category_image
• description

Sub Categories

Represents subdivisions within each garment category.

Example

Men → T-Shirts
Men → Shirts
Women → Tops
Kids → Casual Wear

Fields

• id
• sub_category_name
• category_id (relationship)
• slug
• banner_image

Products

Represents product groups inside each subcategory.

Fields

• id
• product_name
• slug
• sub_category_id
• product_description
• product_image

Product Details

Represents detailed variants or individual product entries.

Fields

• id
• product_id
• design_name
• images
• description

Fabrics

Fabric catalogue used in garment production.

Fields

• id
• fabric_name
• fabric_type
• fabric_image
• fabric_description

Product Fabric Mapping

Links products with fabrics used in manufacturing.

Fields

• id
• product_detail_id
• fabric_id

This allows each product to display the fabrics used in its production.

Dynamic Page Architecture

All pages in the system are dynamically generated using CMS data.

Home Page

The homepage includes:

Hero banner
Company introduction
Product categories
Manufacturing highlights
Infrastructure preview
Gallery preview
Call-to-action sections

All sections are configurable through CMS content.

Product Catalogue

The product catalogue follows a hierarchical structure.

Category
   |
   └── Sub Category
           |
           └── Product
                  |
                  └── Product Detail

Example

Men
   |
   └── T-Shirts
          |
          └── Cotton T-Shirt
                 |
                 └── Premium Cotton Round Neck

Each level of the hierarchy is dynamically fetched from Directus.

Fabric Catalogue

The fabric section displays the types of fabrics used in garment production.

Features include:

• Fabric listing page
• Fabric detail page
• Fabric images and specifications
• Fabric usage in products

Products can reference the fabrics used in their construction.

Manufacturing Page

This page displays information about the company’s production process.

Content includes:

• manufacturing workflow
• production stages
• quality control
• garment finishing process

All content is manageable through CMS fields.

Infrastructure Page

Displays company infrastructure including:

• machinery
• production lines
• factory facilities
• equipment images

Gallery Page

The gallery page displays images of:

• factory floor
• garment production
• finished garments
• manufacturing environment

Images are uploaded and managed through Directus assets.

Contact Page

The contact page includes:

• company address
• location map
• enquiry contact form
• phone and email details

Dynamic Data Fetching

All frontend data is fetched from Directus using API endpoints.

Example flow:

Next.js Page
      |
Fetch Data
      |
Directus API
      |
PostgreSQL Database

This ensures the frontend always displays the latest CMS content.

Image Management

All images are stored in Directus File Storage.

These include:

• product images
• fabric images
• category banners
• gallery images
• infrastructure photos

Next.js optimizes these images using its built-in image optimization system.

SEO Optimization

The project includes built-in SEO practices.

Features include:

• meta titles
• meta descriptions
• Open Graph tags
• structured metadata
• optimized images
• clean URL structure

Example URLs

/products/men
/products/men/t-shirts
/products/men/t-shirts/cotton-round-neck
/fabrics/cotton
Responsive Design

The website is optimized for multiple screen sizes.

Mobile
320px – 768px

Tablet
768px – 1024px

Laptop
1024px – 1440px

Desktop
1440px+

The layout adapts automatically using Tailwind CSS responsive utilities.

Folder Structure

Example project structure.

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
CMS Administration

Directus provides a visual dashboard for managing the entire website.

Admins can:

• create categories
• create subcategories
• add products
• upload product images
• manage fabrics
• update gallery images
• update infrastructure details

No coding knowledge is required to manage website content.

Deployment

The project can be deployed using:

Frontend

Vercel
Netlify
Cloud Server

Backend

Directus Server
Docker Container
Cloud VPS

Database

PostgreSQL server

Future Enhancements

The system architecture allows easy expansion.

Possible upgrades include:

• B2B product ordering system
• fabric inventory tracking
• admin analytics dashboard
• customer enquiry management
• multi-language support
• product filtering system
• advanced search

Development Status

Current progress includes:

• Next.js project setup
• Tailwind configuration
• Directus CMS integration
• PostgreSQL database setup
• dynamic category system
• product catalogue system
• fabric catalogue system
• gallery system
• homepage development

Project Goal

The goal of this project is to deliver a professional digital platform for Sri Thanigai Garments that showcases the company's manufacturing capabilities, product collections, fabrics, and infrastructure while enabling easy content management through a headless CMS architecture.

The platform is designed to be scalable, maintainable, and future-ready for potential expansion into a full product management or B2B catalogue system.