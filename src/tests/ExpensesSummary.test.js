import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../src/components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with mutiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512343252}/>);
    expect(wrapper).toMatchSnapshot();
});