/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },
    daltonism: {
      redGreenBlind: {
        primary: '#009E89', // Alternatywa dla zielonego
        secondary: '#F2B705', // Alternatywa dla czerwonego
        background: '#F9FAFB',
        text: '#1F2937',
      },
      protanope: {
        primary: '#6D28D9', // Fiolet jako alternatywa
        secondary: '#EAB308', // Złoto jako alternatywa
        background: '#E5E7EB',
        text: '#374151',
      },
      deutanope: {
        primary: '#DB2777', // Róż jako alternatywa
        secondary: '#F59E0B', // Pomarańcz jako alternatywa
        background: '#EFF6FF',
        text: '#111827',
      },
      tritanope: {
        primary: '#065F46', // Ciemny zielony jako alternatywa
        secondary: '#7C3AED', // Fiolet jako alternatywa
        background: '#FEF3C7',
        text: '#4B5563',
      },

    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      
      backgroundImage: {
        dots_light: 'url(/dots-light.svg)',
        dots_dark: 'url(/dots-dark.svg)',
        contact_illustration_light: 'url(/contact/contact-min.webp)',
        contact_illustration_dark: 'url(/contact/contact-min.webp)',
        hero_light: 'url(/hero/test2.jpg)',
        hero_dark: 'url(/hero/test2_dark.jpg)',
        logo_light: 'url(/logo1.svg)',
        logo_dark: 'url(/logo_white.svg)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
