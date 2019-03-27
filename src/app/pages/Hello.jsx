import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Hello = ({ user, onLoadRandomUser }) => (
    <section>
        Hello
        {' '}
        <Link to="/world">World</Link>
        {' '}
        {user ? ` to ${user.name}` : ''}
        <p>
            <button type="button" onClick={onLoadRandomUser}>Load User</button>
        </p>
    </section>
);


Hello.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }),
    onLoadRandomUser: PropTypes.func.isRequired
};

Hello.defaultProps = {
    user: null
};

export default Hello;
