export const OtherAtrOverlay = props => {
	const { items, choiceUser, id, name } = props;

	return (
		<>
			{items.map(item => (
				<div
					key={item.value}
					className={
						choiceUser.includes(item.value + id) ||
						choiceUser.includes(item.value + name)
							? 'modal-atr-item active'
							: 'modal-atr-item'
					}
				>
					{item.value}
				</div>
			))}
		</>
	);
};
