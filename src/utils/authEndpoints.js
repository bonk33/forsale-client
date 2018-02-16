export const loginEndpoint = '/rest-auth/login/';

export const logoutEndpoint = '/rest-auth/logout/';

export const registrationEndpoint = '/rest-auth/registration';

export const registrationVerifyEmailEndpoint = 'localhost:8000/rest-auth/registration/verify-email/'

export const passwordResetEndpoint = 'localhost:8000/rest-auth/password/reset/';

export const passwordResetConfirmEndpoint = 'localhost:8000/rest-auth/password/reset/confirm/';

export const passwordChangeEndpoint = 'localhost:8000/rest-auth/password/change';

export const getUserEndpoint = (id) => `localhost:8000/rest-auth/${id}/`;

