import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, RootState } from '../../app/store';
import { FormValues } from './DishFormConfig';

export interface FormState {
    submitting: boolean;
    error: {
        message: string | null
    };
    success: boolean
}

const initialState: FormState = {
    submitting: false,
    error: { message: null, },
    success: false
};

const CreateSliceOptions = {
    name: 'form',
    initialState,
}

const formSlice = createSlice({
    ...CreateSliceOptions,

    reducers: {
        formSubmissionStart: (state) => {
            state.submitting = true;
            state.error.message = null;
        },
        formSubmissionSuccess: (state) => {
            state.success = true
            state.submitting = false;
            state.error.message = null
        },
        formSubmissionFailure: (state, action: PayloadAction<string>) => {
            state.submitting = false;
            state.success = false
            state.error.message = Object.values(action.payload)[0];
        },
    },
});

export const { formSubmissionStart, formSubmissionSuccess, formSubmissionFailure } = formSlice.actions;

export const submitForm = (values: FormValues): AppThunk => async (dispatch, getState) => {
    dispatch(formSubmissionStart());

    try {

        // Wykonaj żądanie POST do API
        await axios.post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/ ', values);

        dispatch(formSubmissionSuccess());
    } catch (error: any) {
        dispatch(formSubmissionFailure(error.response.data));
    }
};

export default formSlice;
export const getFormData = (state: RootState) => state.form;