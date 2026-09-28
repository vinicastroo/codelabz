import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-geist)',
        display: 'var(--font-display)'
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
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#334155',
            '--tw-prose-headings': '#021d3f',
            '--tw-prose-links': '#e0024d',
            '--tw-prose-bold': '#021d3f',
            '--tw-prose-quotes': '#021d3f',
            '--tw-prose-quote-borders': '#e0024d',
            '--tw-prose-bullets': '#e0024d',
            '--tw-prose-counters': '#e0024d',
            '--tw-prose-hr': '#e2e8f0',
            maxWidth: 'none',
            fontSize: '1.125rem',
            lineHeight: '1.9',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            '> p:first-of-type': {
              fontSize: '1.3em',
              lineHeight: '1.65',
              fontWeight: '400',
              color: '#64748b',
            },
            h2: {
              fontWeight: '800',
              letterSpacing: '-0.01em',
              marginTop: '2.75em',
              marginBottom: '0.9em',
              fontSize: '1.6em',
              lineHeight: '1.3',
            },
            h3: {
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '0.75em',
              fontSize: '1.3em',
            },
            a: {
              fontWeight: '600',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              textDecorationColor: '#e0024d66',
              transition: 'text-decoration-color 0.2s ease',
            },
            'a:hover': {
              textDecorationColor: '#e0024d',
            },
            strong: {
              fontWeight: '700',
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '1.2em',
              lineHeight: '1.6',
              borderLeftWidth: '3px',
              paddingLeft: '1.25em',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            img: {
              borderRadius: '1rem',
            },
            code: {
              backgroundColor: '#f1f5f9',
              padding: '0.2em 0.4em',
              borderRadius: '0.35em',
              fontWeight: '600',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
        lg: {
          css: {
            fontSize: '1.1875rem',
            lineHeight: '1.9',
          },
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
