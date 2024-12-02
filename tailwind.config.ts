import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [{
      my_light_pastel: {
        
        "primary": "#a78bfa",
        
        "secondary": "#70b6c2",
        
        "accent": "#ec4899",
        
        "neutral": "#8f95cc",
        
        "base-100": "#f3e8ff",

        "base-200": "#f3e8ff",
        
        "info": "#9ca3af",
        
        "success": "#2dd4bf",
        
        "warning": "#fbbf24",
        
        "error": "#f43f5e",
      },
      my_dark_pastel: {
        
        "primary": "#c4b5fd",
          
        "secondary": "#7dd3fc",
          
        "accent": "#f9a8d4",
          
        "neutral": "#8f95cc",
          
        "base-100": "#1f2937",

        "base-200": "#f3e8ff",
          
        "info": "#9ca3af",
          
        "success": "#a7f3d0",
          
        "warning": "#fde68a",
          
        "error": "#fb7185",
      }
    },], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
} satisfies Config;
