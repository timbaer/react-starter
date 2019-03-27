import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Hello from '../Hello';


test('should render as expected with no user loaded', () => {
    const onLoadFn = jest.fn();

    const component = renderer.create(
        <MemoryRouter>
            <Hello onLoadRandomUser={onLoadFn} />
        </MemoryRouter>
    );
    const tree = component.toJSON();

    expect(tree)
        .toMatchSnapshot();
});

test('should render as expected with loaded user', () => {
    const onLoadFn = jest.fn();

    const component = renderer.create(
        <MemoryRouter>
            <Hello onLoadRandomUser={onLoadFn}
                user={{
                    id: 1,
                    name: 'Hans Wurst'
                }}
            />
        </MemoryRouter>
    );
    const tree = component.toJSON();

    expect(tree)
        .toMatchSnapshot();
});
