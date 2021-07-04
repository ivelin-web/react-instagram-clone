const initialState = {
    user: null,
};

const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export { initialState, actionTypes };
export default reducer;
