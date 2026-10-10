import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#101318', panel: '#171B22', line: '#292F39', mint: '#68D7A1' }, boxShadow: { soft: '0 12px 36px rgba(0,0,0,.18)' } } }, plugins: [] };
export default config;
