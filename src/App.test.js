import React from 'react';
import {render} from '@testing-library/react';
import {mount} from 'enzyme';

import App from './App';

let wrapper = null;
beforeAll(() => {
    wrapper = mount(<App/>)
});

describe('App Test Suite', () => {
    it('renders react app', () => {
        expect(wrapper.contains(<h1>React App Template</h1>)).toEqual(true);
    });

    xit('renders react app', () => {
        const {getByText} = render(<App/>);
        const headingElement = getByText(/React App Template/i);
        expect(headingElement).toBeInTheDocument();
    });
});