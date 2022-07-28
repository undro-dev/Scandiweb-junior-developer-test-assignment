import { Field } from 'formik';

export const Attribute = ({ name, attributes }) => {
	return (
		<div className='attribute-wrapper'>
			{attributes.map(atr => (
				<label key={atr.id} htmlFor={`${atr.id}${name}`}>
					<Field
						className='atr-field'
						type='radio'
						name={name}
						value={`${atr.value}${name}`}
						id={`${atr.id}${name}`}
					/>
					<div className='atr-label'>{atr.value}</div>
				</label>
			))}
		</div>
	);
};
