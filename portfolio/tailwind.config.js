/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'monolith-txt': '#111827',
                'monolith-bg': '#ffffff',
                'monolith-primary': '#374151',
                'monolith-secondary': '#e5e7eb',
                'monolith-accent': '#d97706',
            },
        },
    },
    plugins: [],
}