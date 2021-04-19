import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Text } from './BigButton.styles';

export default function BigButton({ text }) {
   return (
      <Btn type="button">
         <Text>{text}</Text>
      </Btn>
   );
}

BigButton.propTypes = {
   text: PropTypes.string.isRequired,
};
