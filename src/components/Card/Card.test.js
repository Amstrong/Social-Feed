/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

test('The Post renders correctly on the Card', () => {
   const div = document.createElement('div');
   const post = {
      text: 'Text for testing mock.',
      name: 'Amstrong Monachello',
      created_at: 'April 19',
   };
   ReactDOM.render(<Card key={post.id} post={post} />, div);
   expect(div.querySelector('h3').textContent).toBe('Text for testing mock.');
   expect(div.querySelector('h4').textContent).toBe('Amstrong Monachello');
   expect(div.querySelector('h5').textContent).toBe('Posted: April 19');
});
