import React from 'react';
import { Input } from 'antd';
import { FormattedMessage } from 'react-intl';

interface DishNameInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
    error?: string;
}

const DishNameInput: React.FC<DishNameInputProps> = ({
    handleChange,
    handleBlur,
    value,
    error,
}) => {

    return (
        <div className='d-flex'>

            <label htmlFor="name"> <FormattedMessage id="name" /></label>
            <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
            />

            {error && <div className='error'><FormattedMessage id={'required'}/></div>}
        </div>
    );
};

export default DishNameInput;
