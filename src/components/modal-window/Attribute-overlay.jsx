import { ColorAttributeOverlay } from './Color-attribute-overlay';
import { OtherAtrOverlay } from './Other-atr-overlay';

export const AttributeOverlay = props => {
	const { attribute, choiceUser, name, id } = props;

	return (
		<div className='atr-overlay'>
			<p>{attribute.id || attribute.name}:</p>
			<div className='atr-overlay-wrapper'>
				{name === 'Color' || id === 'Color' ? (
					<ColorAttributeOverlay
						colors={attribute.items}
						choiceUser={choiceUser}
					/>
				) : (
					<OtherAtrOverlay {...props} />
				)}
			</div>
		</div>
	);
};
