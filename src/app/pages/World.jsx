import React from 'react';
import { Link } from 'react-router-dom';

const World = () => (
    <section>
        <Link to="/hello">Hello</Link>
        {' '}
        World
    </section>
);

export default World;
