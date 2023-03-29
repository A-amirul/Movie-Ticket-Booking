import React, { useEffect, useState } from 'react';

const SideCart = ({ watchTime }) => {
	const [time,setTime] = useState(watchTime);
	useEffect(() => {
		const GetWatchTimeLocalStorage = localStorage.getItem('watchTime');
		setTime(GetWatchTimeLocalStorage);
	}, [watchTime]);
	return (
		<div className=''>
			<h1 className='text-center'>My Cart</h1>
			<div className='text-center mt-5'>
				<p>Total watch Time</p>
				<input type="text" value={time} name="" id="" />
			</div>

		</div>
	);
};

export default SideCart;