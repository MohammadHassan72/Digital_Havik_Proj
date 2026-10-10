import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'DIGITAL HAVIK | Mohammad Hassan', description: 'Personal digital and performance marketing workspace created by Mohammad Hassan.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
