import React from 'react';
import {withFormik, FormikProps, FormikSharedConfig, WithFormikConfig} from 'formik';
import { Button } from 'antd';
import PreparationTimeInput from './PreparationTimeInput';
import DishNameInput from './DishNameInput';
import DishTypeSelect from './DishTypeSelect';

import { FormValues, initialValues, validationSchema, dishComponents } from './DishFormConfig';
import { FormattedMessage } from 'react-intl';
import { getFormData, submitForm } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import AlertForm from './Alert';

interface DishFormikProps {
    dispatch: any;
}

const formikConfig: WithFormikConfig<FormikSharedConfig<FormValues> & DishFormikProps, FormValues> = {
    mapPropsToValues: () => initialValues,
    validateOnMount: true,
    enableReinitialize: false,
    validationSchema,
    handleSubmit: (values, { props }) => {
        props.dispatch(submitForm(values) as any);
    },
};

const DishForm: React.FC<FormikProps<FormValues>> = ({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    isValid
}) => {

    const formData = useSelector(getFormData);

    return (
        <form className='pizzaForm' onSubmit={handleSubmit}>
            <AlertForm formData={formData} />
            <DishNameInput
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.name}
                error={errors.name}
            />
            <PreparationTimeInput
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.preparation_time}
                error={errors.preparation_time}
                setFieldValue={setFieldValue}
            />
            <DishTypeSelect
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.type}
                error={errors.type}
                setFieldValue={setFieldValue}
            />
            {values.type && React.createElement(dishComponents[values.type], {
                handleChange,
                setFieldValue,
                handleBlur,
                values,
                errors,

            })}
            <Button disabled={!isValid} type="primary" htmlType="submit">
                <FormattedMessage id="submit" />
            </Button>
        </form>
    );
};

const DishFormik = withFormik(formikConfig)(DishForm);

const DishFormWithDispatch: React.FC = () => {
    const dispatch = useDispatch();
    return <DishFormik dispatch={dispatch} />;
};

export default DishFormWithDispatch;
