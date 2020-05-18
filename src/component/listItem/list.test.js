import React from "react";
import {shallow} from 'enzyme';
import {checkProps,findByTestAtrr} from '../../Utils/index'
import ListItem from './index'

describe('ListItem Component', () => {
    describe('Checking Proptypes', () => {
        
        it('should not throw warning', () => {
            const expectedProps ={
                title:'Example Title',
                desc:'Some Text'
            };
            const propsError = checkProps(ListItem,expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(()=>{
            const props={
                title:'Example Title',
                desc:'Some Text'
            }
            wrapper=shallow(<ListItem {...props} />)
        });

        it('should render without errors', () => {
            const component=findByTestAtrr(wrapper,'ListItemComponent');
            expect(component.length).toBe(1);
        });

        it('should render a title', () => {
            const title=findByTestAtrr(wrapper,'ComponentTitle');
            expect(title.length).toBe(1);
        });

        it('should render a description', () => {
            const desc=findByTestAtrr(wrapper,'ComponentDesc');
            expect(desc.length).toBe(1);
        });


    });

    describe('Should not render', () => {
        let wrapper;
        beforeEach(()=>{
            const props={
               
                desc:'Some Text'
            }
            wrapper=shallow(<ListItem {...props} />)
        });

        it('component is not rendered', () => {
            const component=findByTestAtrr(wrapper,'ListItemComponent');
            expect(component.length).toBe(0);
        });
    });
});