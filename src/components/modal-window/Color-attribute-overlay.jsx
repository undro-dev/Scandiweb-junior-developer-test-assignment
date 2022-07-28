export const ColorAttributeOverlay = props => {
	const { colors, choiceUser } = props;

	return (
		<>
			{colors.map(color => (
				<div
					key={color.value}
					className={
						choiceUser.includes(color.value)
							? 'modal-color-atr active'
							: 'modal-color-atr'
					}
					style={{ backgroundColor: color.value }}
				></div>
			))}
		</>
	);
};
