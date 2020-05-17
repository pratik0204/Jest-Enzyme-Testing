import React from 'react'
import {checkProps,findByTestAtrr} from '../../Utils/index'
import SharedButon from './index';
import {shallow} from 'enzyme';

describe('SharedButton COmponent', () => {
    describe('Checking PropTypes', () => {
        it('should not throw warning', () => {
            const expectedProps={
                buttonText:'Example Button Text',
                emitEvent:()=>{

                }
            };

            const propsError = checkProps(SharedButon,expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', () => {
        let wrapper;
        
        beforeEach(()=>{
            const props ={
                buttonText:'Example Button Text',
                emitEvent:()=>{
    
                }
            }
            wrapper=shallow(<SharedButon {...props} />);
        });

        it('should render a button', () => {
            const button = findByTestAtrr(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        });
    })
    
});