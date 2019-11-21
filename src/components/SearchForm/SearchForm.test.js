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

    it.skip('should call updateState when button is clicked', () => {
      const mockEvent = {
          preventDefault: jest.fn()
      };
      wrapper.instance().updateState = jest.fn();
      wrapper.find('button').simulate('click');
      expect(wrapper.instance().updateState).toHaveBeenCalledWith(mockEvent);
    })

    it('should call searchNews and clearInputs when updateState is called', () => {
        const mockEvent = {
            preventDefault: jest.fn()
        };

        wrapper.instance().clearInputs = jest.fn();
        wrapper.instance().updateState(mockEvent);

        expect(mockSearchNews).toHaveBeenCalled();
        expect(wrapper.instance().clearInputs).toHaveBeenCalledWith();
    })

    it('should update state clearInputs is called', () => {
      wrapper.setState({
          newsSearch : 'Spider'
      })

      wrapper.instance().clearInputs();

      const expected = '';

      expect(wrapper.state('newsSearch')).toEqual(expected);
    })


})