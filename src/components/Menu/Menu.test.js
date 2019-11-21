import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {

    let mockAllNews = { 
        local: [{
            id: 1,
            headline: "Spider-Man Will Remain in the Marvel Cinematic Universe",
            img: "https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp",
            description: "The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.",
            url: "https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html"
            },
            { 
            id: 2,
            headline: "Warner Bros. Thinks a ‘Lot Has Been Said’ About Joker, So It’s Canceling Red Carpet Interviews",
            img: "https://i.kinja-img.com/gawker-media/image/upload/s--4KmyUB9z--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/sapqo9o5c10gyewaopjg.png",
            description: "While the larger conversation around Todd Phillips’ upcoming Joker film continues to intensify as people reflect on how the story’s depiction of a white domestic terrorist fits into our cultural landscape, Warner Bros. is attempting to take back some control of the narrative by barring print and broadcast press access to the red carpet of the Hollywood premiere where interviews were to be conducted.",
            url: "https://io9.gizmodo.com/warner-bros-thinks-a-lot-has-been-said-about-joker-1838543086"
            }]
        };

    let mockNews = [
        {
            id: 1,
            headline: "Spider-Man Will Remain in the Marvel Cinematic Universe",
            img: "https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp",
            description: "The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.",
            url: "https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html"
            },
            { 
            id: 2,
            headline: "Warner Bros. Thinks a ‘Lot Has Been Said’ About Joker, So It’s Canceling Red Carpet Interviews",
            img: "https://i.kinja-img.com/gawker-media/image/upload/s--4KmyUB9z--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/sapqo9o5c10gyewaopjg.png",
            description: "While the larger conversation around Todd Phillips’ upcoming Joker film continues to intensify as people reflect on how the story’s depiction of a white domestic terrorist fits into our cultural landscape, Warner Bros. is attempting to take back some control of the narrative by barring print and broadcast press access to the red carpet of the Hollywood premiere where interviews were to be conducted.",
            url: "https://io9.gizmodo.com/warner-bros-thinks-a-lot-has-been-said-about-joker-1838543086"
            }
    ]

    let mockFilterNews = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Menu allNews={mockAllNews}
            filterNews={mockFilterNews} 
         />);
    })

    it('should match snapshot with all information passing in correctly', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should run filtereNews when the button is clicked', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(mockFilterNews).toHaveBeenCalledWith(mockNews);
    })

    it('should run filtereNews when the button is clicked', () => {
        wrapper.find('button').at(1).simulate('click');
        expect(mockFilterNews).toHaveBeenCalledWith(mockNews);
    })

    it('should run filtereNews when the button is clicked', () => {
        wrapper.find('button').at(2).simulate('click');
        expect(mockFilterNews).toHaveBeenCalledWith(mockNews);
    })

    it('should run filtereNews when the button is clicked', () => {
        wrapper.find('button').at(3).simulate('click');
        expect(mockFilterNews).toHaveBeenCalledWith(mockNews);
    })

    it('should run filtereNews when the button is clicked', () => {
        wrapper.find('button').at(4).simulate('click');
        expect(mockFilterNews).toHaveBeenCalledWith(mockNews);
    })

})

