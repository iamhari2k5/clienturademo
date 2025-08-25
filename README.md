# Clientura - Digital Marketing Agency Landing Page

A modern, responsive landing page for a digital marketing agency built with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Build Tool**: Vite 5.4.2
- **Package Manager**: npm

## ✨ Features

### Core Sections
- **Hero Section**: Eye-catching gradient background with animated elements, compelling CTA, and key statistics
- **About Company**: Mission statement, company values, and team highlights with hover animations
- **Services Grid**: Six main service offerings with detailed descriptions and feature lists
- **Animated Counters**: Real-time counting animations for key metrics (clients, projects, revenue, awards)
- **Pricing Plans**: Three-tier pricing structure with feature comparisons and popular plan highlighting
- **Customer Testimonials**: Rotating testimonial carousel with client photos and success metrics
- **Contact Footer**: Comprehensive contact information, social links, and newsletter signup

### Design & UX Features
- **Responsive Design**: Mobile-first approach with breakpoints for tablet (768px) and desktop (1024px+)
- **Smooth Animations**: CSS transitions, hover effects, and scroll-triggered animations
- **Professional Color Scheme**: Blue (#3B82F6) and purple (#8B5CF6) gradients with proper contrast ratios
- **Interactive Elements**: Hover states, button animations, and micro-interactions
- **Performance Optimized**: Lazy loading, optimized images, and efficient component structure

### Technical Features
- **Component-Based Architecture**: Modular React components for easy maintenance
- **TypeScript Integration**: Type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom animations
- **Intersection Observer**: Scroll-triggered counter animations
- **Modern React Patterns**: Functional components with hooks

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with navigation and CTA
│   ├── About.tsx         # Company information and values
│   ├── Services.tsx      # Service offerings grid
│   ├── Counters.tsx      # Animated statistics counters
│   ├── Pricing.tsx       # Pricing plans and features
│   ├── Testimonials.tsx  # Customer testimonial carousel
│   └── Footer.tsx        # Footer with contact info and links
├── App.tsx               # Main application component
├── main.tsx              # React application entry point
├── index.css             # Tailwind CSS imports
└── vite-env.d.ts         # Vite environment types
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project**
   ```bash
   git clone [repository-url]
   cd digitalpro-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Each component is optimized for all screen sizes with appropriate typography scaling, spacing adjustments, and layout modifications.

## 🎨 Color Palette

- **Primary Blue**: #3B82F6
- **Secondary Purple**: #8B5CF6
- **Accent Colors**: Various gradients and complementary colors
- **Neutral Colors**: Grays for text and backgrounds
- **Success/Warning/Error**: Standard semantic colors

## ⚡ Performance Features

- **Optimized Bundle Size**: Tree-shaking and code splitting
- **Efficient Animations**: CSS-based animations with hardware acceleration
- **Lazy Loading**: Images and components loaded as needed
- **Minimal Dependencies**: Only essential packages included

## 🚀 Deployment

The application can be deployed to various platforms:

### Netlify/Vercel
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure build command: `npm run build`
4. Set publish directory: `dist`

### Traditional Web Server
1. Run `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure server to serve `index.html` for all routes

## 🔧 Customization

### Modifying Colors
Update the Tailwind config or use CSS custom properties in the component files.

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Follow the existing design patterns

### Updating Content
Modify the data arrays and text content within each component file.

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Follow the existing component structure
2. Maintain TypeScript types
3. Use Tailwind CSS for styling
4. Test responsiveness across devices
5. Ensure accessibility compliance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact:
- Email: support@clientura.com
- Website: https://clientura.com

---

Built with ❤️ using React, TypeScript, and Tailwind CSS