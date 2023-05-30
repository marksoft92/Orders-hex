import React from 'react';
import {Slider} from 'antd';
import { FormattedMessage } from 'react-intl';

interface SoupFieldsProps {
    handleChange: (value: number | null) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    values: any;
    errors: any;
    setFieldValue: (field: string, value: any) => void;
}

const SoupFields: React.FC<SoupFieldsProps> = ({
    errors,
    setFieldValue
}) => {

    return (
        <>
            <div className='d-flex'>
                <label htmlFor="spiciness_scale"><FormattedMessage id="spiciness_scale" /></label>
                <Slider
                    min={1}
                    max={10}
                    onChange={v => setFieldValue('spiciness_scale', v)}
                    step={1}
                />
                {errors.spiciness_scale && (
                    <div className='error'>{errors.spiciness_scale}</div>
                )}
            </div>


        </>
    );
};

export default SoupFields;
