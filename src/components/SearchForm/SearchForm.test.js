import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
    
    let mockSearchNews = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SearchForm searchNews={mockSearchNews} />);
    })

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should update state when handleChange is called', () => {
       const mockEvent = {
           target: {
               name: 'newsSearch',
               value: 'Spiderman'
           }
       };
       const expected = 'Spiderman';

       wrapper.instance().handleChange(mockEvent);

       expect(wrapper.state('newsSearch')).toEqual(expected);
    })

    it('should call updateState when button is clicked', () => {

    })

    it('should call searchNews when updateState is called', () => {

    })

    it('should call clearInputs when updateState is called', () => {

    })
})