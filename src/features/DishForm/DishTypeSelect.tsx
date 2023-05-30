// DishTypeSelect.tsx

import React from 'react';
import { Select } from 'antd';
import { FormattedMessage } from 'react-intl';

const { Option } = Select;

interface DishTypeSelectProps {
    handleChange: (value: any) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    value: string;
    error?: string;
    setFieldValue: (field: string, value: any) => void;
}

const DishTypeSelect: React.FC<DishTypeSelectProps> = ({
    handleChange,
    handleBlur,
    value,
    error,
    setFieldValue,
}) => {
    return (
        <div className='d-flex'>
            <label htmlFor="type"><FormattedMessage id="type" /></label>
            <Select
                id="type"
                onChange={value => setFieldValue('type', value)}
                onBlur={handleBlur}
                value={value}
            >
                <Option value="pizza"><FormattedMessage id="type.pizza" /></Option>
                <Option value="soup"><FormattedMessage id="type.soup" /></Option>
                <Option value="sandwich"><FormattedMessage id="type.sandwich" /></Option>
            </Select>
            { error && <div className='error'>{error}</div>}
        </div>
    );
};

export default DishTypeSelect;
