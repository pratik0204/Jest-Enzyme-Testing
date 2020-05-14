import React from 'react'
import Headline from '../headline/index'
import {shallow} from 'enzyme'
import {findByTestAtrr} from '../../Utils/index'


let setUp=(props={})=>{
    let component=shallow(<Headline {...props} />)
    return component;
}

describe('Headline Component', () => {

    describe('Have props', () => {

        let wrapper;
        beforeEach(()=>{
            const props ={
                header:'Test Header',
                desc:'Test Desc'
            }

            wrapper=setUp(props);
        })

        it('headline should render without errors', () => {
            const component=findByTestAtrr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(1)
        });

        it('headline should render H1 without errors', () => {
            const component=findByTestAtrr(wrapper,'header');
            expect(component.length).toBe(1)
        });

        it('headline should render desc without errors', () => {
            const component=findByTestAtrr(wrapper,'desc');
            expect(component.length).toBe(1)
        });
    });

    describe('Have no props', () => {

        let wrapper;
        beforeEach(()=>{
            wrapper=setUp();
        })

        it('should  not render', () => {
            const component =findByTestAtrr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });
    
});