EcommerceHomepage
An e-commerce platform built with Angular, offering dynamic and responsive design for browsing featured products, latest rentals, and various categories.

Project Overview
This web-based platform allows users to:
Browse categories like milk products, sweets, spices, and pickles.
Explore featured products and view the latest rentals.
Interact with an automatic image carousel showcasing product categories.
The app is optimized for mobile and desktop views, featuring a clean layout with interactive design elements.

Features
Shop by Categories: Browse products by selecting specific categories.
Featured Categories Slider: Automatic image carousel for categories.
Featured Products Section: Highlighted products displayed with names, images, and prices.
Responsive Design: Optimized for all screen sizes with interactive hover effects.

Technologies Used
Angular - Front-end framework
SCSS - Styling
TypeScript - Logic and component interaction
HTML - Structure and layout

Setup and Installation Prerequisites:
Ensure Node.js and Angular CLI are installed.

Installation
Clone the repository:
git clone https://github.com/kadamswati17/ecommerce-homepage.git
cd ecommerce-homepage

Install dependencies:
npm install

Running the Project
Use the Angular development server to run the app:
ng serve

Navigate to http://localhost:4200/ to view the application


src/
├── app/
│   ├── components/
│   │   ├── header/                # Header component
│   │   ├── banner/                # Banner component
│   │   ├── category-section/      # Category section
│   │   ├── featuredcategories/    # Featured categories slider
│   │   ├── rentals/               # Rentals component
│   │   ├── product-card/          # Product card for featured products
│   │   └── footer/                # Footer component
│   ├── services/                  # Service files
│   ├── app.component.ts           # Root component
│   ├── app.component.html         # Root template
│   └── app.module.ts              # Main module file
└── assets/                        # Static assets
└── styles/                        # Global styles

Development Commands
Run Dev Server: ng serve – Starts the app on http://localhost:4200/.
Generate Component: ng generate component <component-name>
Build Project: ng build – Builds to dist/ directory.
Run Unit Tests: ng test via Karma.
For additional Angular CLI commands, check out the Angular CLI Documentation.
