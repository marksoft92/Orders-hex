import React from 'react';
import { InputNumber } from 'antd';
import { FormattedMessage } from 'react-intl';

interface SandwichFieldsProps {
    handleChange: (value: number | null) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    values: any;
    errors: any;

    setFieldValue: (field: string, value: any) => void;
}

const SandwichFields: React.FC<SandwichFieldsProps> = ({
    handleBlur,
    values,
    errors,

    setFieldValue
}) => {

    return (
        <>
           <div className='d-flex'>
                <label htmlFor="slices_of_bread"><FormattedMessage id="slices_of_bread" /></label>
                <InputNumber
                    id="slices_of_bread"
                    name="slices_of_bread"
                    onChange={v => setFieldValue('slices_of_bread', v)}
                    onBlur={handleBlur}
                    value={values.no_of_slices}
                    max={10}
                    min={1}
                    keyboard={false}
                />
                { errors.slices_of_bread && (
                    <div className='error'>{errors.slices_of_bread}</div>
                )}
            </div>


        </>
    );
};

export default SandwichFields;
