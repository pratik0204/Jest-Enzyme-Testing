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
        let mockFunc;
        beforeEach(()=>{
            mockFunc=jest.fn();
            const props ={
                buttonText:'Example Button Text',
                emitEvent:mockFunc
            }
            wrapper=shallow(<SharedButon {...props} />);
        });

        it('should render a button', () => {
            const button = findByTestAtrr(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper,'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    })
    
});