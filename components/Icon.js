import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function IconRenderer({name, color, size}) {
  return <Icon name={name} color={color} size={size} />;
}
