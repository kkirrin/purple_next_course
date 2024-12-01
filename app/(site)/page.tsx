"use client"

import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import { Button, Htag, Ptag, Rating, Tag } from '../components';
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {

	interface User {
		name: string,
		age: number
	}

	const user: User  = {
		name: 'Kir',
		age: 23
	};


	// const [counter, setCounter] = useState<number>(0);

	// useEffect(() => {
	// 	// Без массива зависимостей данная логика будет каждый раз рендеринге
	// 	console.log('Counter ' + counter);
	// 	return function cleanup() {
	// 		console.log('Unmount');
	// 	}
	// });

	// useEffect(() => {
	// 	// C пустым массивом зависимостей данная логика будет срабатывать каждый раз при первичном рендеринге
	// 	console.log('Counter ' + counter);
	// 	// Тут тоже каждый раз
	// 	return function cleanup() {
	// 		console.log('Unmount');
	// 	}
	// });

	// useEffect(() => {
	// 	// C пустым массивом зависимостей данная логика будет срабатывать каждый раз при первичном рендеринге
	// 	console.log('Mounted');
	// }, []);

	const [rating, setRating] = useState<number>(2);

	return (
		<>
			<div className={styles.main}>
				Главная страница
			</div>
			{/* <Htag tag="h1">{counter}</Htag> */}
			{/* <Button appearance='primary' arrow='up' onClick={() => setCounter(x => x + 1)}>Увеличить на 1</Button> */}
			{/* <Button appearance='primary'>Watch all</Button>
			<Button appearance='ghost' arrow='up'>Button</Button>
			<Button appearance='primary' arrow='down'>More btn</Button>
			<Ptag size='xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio quod et at quam. Obcaecati voluptas ullam molestias omnis. Obcaecati alias, at esse aliquam minima natus nesciunt molestias hic perferendis?</Ptag>
			<Tag size='medium' color="ghost" href='/'>ТЕГ</Tag>
			<Tag size='medium' color='gray'>ТЕГ</Tag>
			<Tag size='medium' color='red'>ТЕГ</Tag>
			<Tag size='medium' color="green">ТЕГ</Tag>

			<Rating isEditable={true} rating={rating} setRating={setRating}/> 
 */}


		</>


	);
}
