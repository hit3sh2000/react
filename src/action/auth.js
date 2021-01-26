
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";


export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post("/api/auth", body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        console.log(err,errors);
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

// Load User
export const loadUser = () => async (dispatch) => {
    // check if token is present
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get("/api/auth");

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};
