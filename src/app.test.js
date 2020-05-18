import App from './App'
import {shallow} from 'enzyme'
import {findByTestAtrr,testStore} from './Utils/index'
import React from 'react'

const setUp=(initialState={})=>{
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    console.log(wrapper.debug())
    return wrapper;
}

describe('App Component', () => {
    let wrapper;
    beforeEach(()=>{
        const initialState = {
            post:[{
                title:'Example title 1',
                body:'Some text'
            },{
                title:'Example title 2',
                body:'Some text'
            },{
                title:'Example title 3',
                body:'Some text'
            }]
        }

        wrapper=setUp(initialState);
    })

    it('should render without errors', () => {
        const component = findByTestAtrr(wrapper,'app');
        expect(component.length).toBe(1);
    });
});