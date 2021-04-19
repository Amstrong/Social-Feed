import React from 'react';
import ReactDOM from 'react-dom';
import SmallButton from './SmallButton';

test('The text renders correctly on the Small button', () => {
   const div = document.createElement('div');
   ReactDOM.render(<SmallButton text={'Start'} />, div);
   expect(div.querySelector('span').textContent).toBe('Start');
});
