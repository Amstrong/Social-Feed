/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import BigButton from './BigButton';

test('The text renders correctly on the button', () => {
   const div = document.createElement('div');
   ReactDOM.render(<BigButton text={'Start'} />, div);
   expect(div.querySelector('span').textContent).toBe('Start');
});
