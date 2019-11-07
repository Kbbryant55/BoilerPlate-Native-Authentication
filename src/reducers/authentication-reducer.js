const initialState = {
    email: '',
    password: '',
    user: {},
    error: '', 
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'AUTH_INPUT_CHANGE':
            return { ...state, [action.payload.field]: action.payload.value};
        case 'LOGIN_SUCCESS':
        console.log('SUCCESS!!');
            return { ...state, user: action.payload , error: ''}
        case 'LOGIN_FAILURE':
        console.log('ERROR!!');
            return { ...state, error: 'Authentication Failed' }   
        case 'LOADING':
            return { ...state, loading: true}
        default:
            return state;
    }
}
