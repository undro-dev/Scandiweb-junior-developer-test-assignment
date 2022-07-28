export const CartImages = ({ images, name }) => {
	let index = 0;

	const clickPrevBtn = e => {
		const parentElement = e.target.closest('.cart-image-wrapper');
		index === 0 ? (index = images.length - 1) : index--;
		parentElement.querySelector('img').src = images[index];
	};
	const clickNextBtn = e => {
		const parentElement = e.target.closest('.cart-image-wrapper');
		index === images.length - 1 ? (index = 0) : index++;
		parentElement.querySelector('img').src = images[index];
	};

	return (
		<div className='cart-image-wrapper'>
			<img src={images[0]} alt={name} />
			<div className='btn-controls'>
				<button className='prev' onClick={e => clickPrevBtn(e)}></button>
				<button className='next' onClick={e => clickNextBtn(e)}></button>
			</div>
		</div>
	);
};
