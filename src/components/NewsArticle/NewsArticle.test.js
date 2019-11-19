import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match snapshot with all information passing in correctly', () => {
      let wrapper = shallow(<NewsArticle headline={'Title'}
                                         img={<img src='mockImage' />}
                                         description={'Blah to the Blah'}
                         />);

      expect(wrapper).toMatchSnapshot();
  })
})