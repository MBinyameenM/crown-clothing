import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...OtherInputProps}) => (

    <div className="group">
        <input 
            onChange={handleChange}
            {...OtherInputProps}
            className="form-input"
        />
        { label? ( 
            <label className={`form-input-label ${OtherInputProps.value.length ? 'shrink' : '' } `}>
                {label}
            </label>
        ): null }
    </div>

);

export default FormInput;