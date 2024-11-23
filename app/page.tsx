import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import { Htag } from './components';


export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'ComputedMeda'
	}
}

export default function Home(): JSX.Element {

	interface User {
		name: string,
		age: number
	}

	const user: User  = {
		name: 'Kir',
		age: 23
	};


	

	return (
		<>
			<Htag tag="h1">Text</Htag>
		</>
	);
}
