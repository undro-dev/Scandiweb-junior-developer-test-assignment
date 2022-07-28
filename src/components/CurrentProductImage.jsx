export const CurrentProductImage = ({ id, gallery }) => {
	const showLargeImg = e => {
		document.querySelector('.large-img').src = e.target.src;
	};

	return (
		<div className='product-images'>
			<div className='product-images-small'>
				{gallery.map(image => (
					<img
						className='small-img'
						src={image}
						alt={id}
						key={image}
						onClick={e => showLargeImg(e)}
					></img>
				))}
			</div>
			<div className='product-images-large'>
				<img className='large-img' src={gallery[0]} alt={id}></img>
			</div>
		</div>
	);
};
