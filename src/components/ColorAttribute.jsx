import { Field } from 'formik';

export const ColorAttribute = ({ name, colors }) => {
	return (
		<div className='color-attribute-wrapper'>
			{colors.map(color => (
				<label
					key={color.id}
					style={{ backgroundColor: color.value }}
					htmlFor={color.value}
				>
					<Field
						className='color-field'
						type='radio'
						name={name}
						value={color.value}
						id={color.value}
					/>
					<div className='color-label'></div>
				</label>
			))}
		</div>
	);
};
