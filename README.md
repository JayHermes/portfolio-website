# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ✨ Smooth animations with Framer Motion
- 🚀 Optimized for performance
- 🌙 Dark theme with gradient accents
- 📧 Contact form
- 🎯 Smooth scrolling navigation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx` to update your name and title
2. **About Section**: Edit `components/About.tsx` to add your bio
3. **Skills**: Edit `components/Skills.tsx` to update your skills
4. **Projects**: Edit `components/Projects.tsx` to add your projects
5. **Contact**: Edit `components/Contact.tsx` to update social links and email
6. **Metadata**: Edit `app/layout.tsx` to update page title and description

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set the build command: `npm run build`
4. Set the publish directory: `.next`

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css    # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx     # Projects section
│   └── Contact.tsx     # Contact section
└── public/             # Static assets
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## License

MIT License - feel free to use this template for your own portfolio!

