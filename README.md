# Angel Amaya - Portfolio Website

![Portfolio Preview](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600)

## Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. The site showcases my skills, projects, and provides a contact form for potential clients or employers to reach out.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Animated UI**: Smooth animations and transitions using Framer Motion
- **Contact Form**: Direct email functionality using Node.js and Nodemailer
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading times and smooth scrolling

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

### Backend
- Node.js
- Express
- Nodemailer (email functionality)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. In a separate terminal, start the backend server
```bash
npm run server
```

## Project Structure

```
portfolio-website/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── Hero.tsx     # Hero section
│   │   ├── Projects.tsx # Projects section
│   │   ├── Skills.tsx   # Skills section
│   │   └── Contact.tsx  # Contact form
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── server.js            # Backend server for email functionality
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## Deployment

### Frontend
The frontend can be deployed to platforms like Netlify, Vercel, or GitHub Pages.

```bash
npm run build
```

### Backend
The backend needs to be deployed to a Node.js hosting service like Heroku, Render, or Railway.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3001
```

For production, you'll need to set up environment variables for your email service:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Contact

Angel Amaya - [angelnataren16@gmail.com](mailto:angelnataren16@gmail.com)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
