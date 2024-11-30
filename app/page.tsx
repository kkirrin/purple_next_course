import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import { Button, Htag, Ptag, Tag } from './components';
import { useState } from 'react';


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


	const [counter, setCounter] = useState<number>(0);

	return (
		<>
			<Htag tag="h1">{counter}</Htag>
			<Button appearance='primary' arrow='up' onClick={() => setCounter(x => x + 1)}>Увеличить на 1</Button>
			<Button appearance='primary'>Watch all</Button>
			<Button appearance='ghost' arrow='up'>Button</Button>
			<Button appearance='primary' arrow='down'>More btn</Button>
			<Ptag size='xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio quod et at quam. Obcaecati voluptas ullam molestias omnis. Obcaecati alias, at esse aliquam minima natus nesciunt molestias hic perferendis?</Ptag>
			<Tag size='medium' color="ghost" href='/'>ТЕГ</Tag>
			<Tag size='medium' color='gray'>ТЕГ</Tag>
			<Tag size='medium' color='red'>ТЕГ</Tag>
			<Tag size='medium' color="green">ТЕГ</Tag>



		</>


	);
}
