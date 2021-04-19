import React from 'react';
import { Btn, Text } from './SmallButton.styles';
import PropTypes from 'prop-types';
export default function SmallButton({ text }) {
   return (
      <Btn primary>
         <Text>{text}</Text>
      </Btn>
   );
}

SmallButton.propTypes = {
   text: PropTypes.string.isRequired,
};
