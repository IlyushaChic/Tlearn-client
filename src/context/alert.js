import { createDomain } from 'effector';

const error = createDomain();

export const setAlert = error.createEvent()

export const $alert = error.createStore({ alertText: '', alertStatus: '' })
    .on(setAlert, (_, value) => value)