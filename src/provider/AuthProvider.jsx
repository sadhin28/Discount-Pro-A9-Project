
import AuthContext from "../Context/AuthContext";

import PropTypes from "prop-types";


export default function AuthProvider({ children }) {

    const authInfo = {

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};