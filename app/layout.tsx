import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import styles from './page.module.css';

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900"
});

export const metadata: Metadata = {
	title: "Мой проект - Главная	",
	description: "Generated by create next app"
};

export default function RootLayout({
	children
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{/* children - это  React node (например, страницы с вложенным layout)*/}
				<nav className={styles.nav}>
					<ul>
						<li>Курсы</li>
						<li>О нас</li>
						<li>Для детей</li>
					</ul>
				</nav>
				<div>
					{children}
				</div>
			</body>
		</html>
	);
}
