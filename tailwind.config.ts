import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)'
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(94.3deg,  rgb(224, 2, 77) 1%, rgba(26,33,64,1) 99% );'
      },
      gridTemplateColumns: {
        app: '1fr 0.1fr',
        contact: '0.3fr 0.7fr'
      },
      keyframes: {
        slideDownAndFade: {
          from: {
            opacity: '0',
            transform: 'translateY(-2px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        marquee: "marquee var(--duration) linear infinite",
      },
      colors: {
        'codelabz-dark': '#021d3f',
        'codelabz-surface': '#032550',
        'codelabz-accent': '#e0024d',
        'codelabz-light': '#f1f5f9',
        ruby: {
          '50': '#FFF0F2',
          '100': '#FFE1E7',
          '200': '#FFC8D5',
          '300': '#FF9CB2',
          '400': '#FF648B',
          '500': '#FF2E67',
          '600': '#F30B54',
          '700': '#E0024D',
          '800': '#AC0543',
          '900': '#930840',
          '950': '#53001E'
        },
        sapphire: {
          '50': '#EEF7FF',
          '100': '#D8EDFF',
          '200': '#BADFFF',
          '300': '#8ACDFF',
          '400': '#53B1FF',
          '500': '#2B8FFF',
          '600': '#146FFC',
          '700': '#0D57E8',
          '800': '#1246BB',
          '900': '#154093',
          '950': '#0D1D41'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
