import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const alertTimeout: number = 5000;

type AlertColor = 'error' | 'success';

export interface AlertInterface {
    showAlert: boolean;
    alertType: AlertColor;
    alertMessage: string;
    timeout?: number;
}

interface PayloadInterface extends AlertInterface {}

const initialState: AlertInterface = {
    showAlert: false,
    alertType: 'success',
    alertMessage: 'This is a message'
};

const alertSlice = createSlice({
    name: 'alertSlice',
    initialState,
    reducers: {
        handleAlert: (state: AlertInterface, action: PayloadAction<PayloadInterface>) => {
            const { showAlert, alertType, alertMessage, timeout } = action.payload;

            state.showAlert = showAlert;
            state.alertType = alertType || state.alertType;
            state.alertMessage = alertMessage || state.alertMessage;
            state.timeout = timeout || alertTimeout;
        },
        closeAlert: (state: AlertInterface) => {
            state.showAlert = false;
        }
    }
});

export const { handleAlert, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
