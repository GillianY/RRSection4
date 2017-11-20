import { CHAGNE_AUTH } from './types';

export function authenticate (isLoggedIn){
    return {
        type: CHAGNE_AUTH,
        payload: isLoggedIn
    };
}