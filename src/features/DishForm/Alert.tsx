import React from 'react';
import { Alert } from 'antd';
import { FormState } from './slice';

interface AlertFormProps {
    formData: FormState;
}

const AlertForm: React.FC<AlertFormProps> = ({ formData }) => {
    const error = formData.error.message;
    return (<>
        {formData.success && <Alert message="Success" type="success" />}
        {error && <Alert message={error} type="error" />}
    </>)
}

export default AlertForm;