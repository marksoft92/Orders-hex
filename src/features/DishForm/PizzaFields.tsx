import React from 'react';
import { InputNumber,Slider } from 'antd';
import { FormattedMessage } from 'react-intl';

interface PizzaFieldsProps {
    handleChange: (value: number | null) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    values: any;
    errors: any;
    setFieldValue: (field: string, value: any) => void;
}

const PizzaFields: React.FC<PizzaFieldsProps> = ({
    handleChange,
    handleBlur,
    values,
    errors,
    setFieldValue
}) => {

    return (
        <>
           <div className='d-flex'>
                <label htmlFor="no_of_slices"><FormattedMessage id="no_of_slices" /></label>
                <InputNumber
                    id="no_of_slices"
                    name="no_of_slices"
                    onChange={v => setFieldValue('no_of_slices', v)}
                    onBlur={handleBlur}
                    value={values.no_of_slices}
                    max={10}
                    min={1}
                />
                {errors.no_of_slices && (
                    <div className='error'>{errors.no_of_slices}</div>
                )}
            </div>

            <div className='d-flex'>
                <label htmlFor="diameter"><FormattedMessage id="diameter" />:</label>
                <Slider
                    min={1}
                    max={50}
                    onChange={v => setFieldValue('diameter', v)}
                    step={0.1}
                />
                { errors.diameter && (
                    <div className='error'>{errors.diameter}</div>
                )}
            </div>
        </>
    );
};

export default PizzaFields;
