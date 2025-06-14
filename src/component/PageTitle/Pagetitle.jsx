import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types'
const Pagetitle = ({title}) => {
    return (
        <HelmetProvider>

            <Helmet>
                <title>{title}</title>

            </Helmet>
        </HelmetProvider>
    );
};

export default Pagetitle;