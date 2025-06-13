



import AuthContext from "../Context/AuthContext";



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
    // eslint-disable-next-line no-undef
    children: PropTypes.node.isRequired,
};