import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
    
    let mockSearchNews = jest.fn();

    it('should match snapshot with all information passing in correctly', () => {
        let wrapper = shallow(<SearchForm searchNews={mockSearchNews} />);

        expect(wrapper).toMatchSnapshot();
    })
})