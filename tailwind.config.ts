/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        md: '800px',
        lg: '1116px',
        '3xl': '1900px',
        custom: { raw: '(max-height: 999px)' }
      },
      colors: {
        stone: {
          850: '#24211e'
        },
        zinc: {
          850: '#2c2c31',
          870: '#242427'
        }
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0.5
          },
          '100%': {
            opacity: 1
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: 0.5,
            transform: 'translateY(-15%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'fade-in-down-short': {
          '0%': {
            opacity: 0.5,
            transform: 'translateY(-5%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: 0.5,
            transform: 'translateY(15%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'fade-in-up-short': {
          '0%': {
            opacity: 0.5,
            transform: 'translateY(5%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'fade-in-left': {
          '0%': {
            opacity: 0.5,
            transform: 'translateX(3%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'width-to-fit': {
          '0%': {
            width: '0%'
          },
          '100%': {
            width: '100%'
          }
        },
        'wide-pulse': {
          '0%': {
            transform: 'scale(1, 1)',
            opacity: 0
          },

          '50%': {
            opacity: 0.3
          },

          '100%': {
            transform: 'scale(2.25, 2.25)',
            opacity: 0
          }
        },
        scale: {
          '0%': {
            transform: 'scale(0.97)',
            opacity: 0.85
          },
          '50%': {
            transform: 'scale(1.005)'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 250ms ease forwards',
        'fade-in-up': 'fade-in-up 250ms ease forwards',
        'fade-in-up-short': 'fade-in-up-short 250ms ease forwards',
        'fade-in-down': 'fade-in-down 250ms ease forwards',
        'fade-in-down-short': 'fade-in-down-short 250ms ease forwards',
        'fade-in-left': 'fade-in-left 250ms ease forwards',
        'width-to-fit': 'width-to-fit 5000ms ease-in forwards',
        'wide-pulse': 'wide-pulse 2000ms ease-in infinite',
        scale: 'scale 250ms ease forwards'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  }
};
