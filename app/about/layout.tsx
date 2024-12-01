// Layout чисто для страницы О нас
import React from "react";

export default function AboutLayout({
	children
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
        <>
            <nav>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </nav>
            <div style={{ border: '1px solid gray;'}}>
                {children}
            </div>
        </>
	);
}
