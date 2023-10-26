import React from 'react';
import { Image } from 'react-native';

const HeaderLogo = () => (
  <Image
    source={require('../assets/images/app/header-icon.png')}
    style={{ width: 82.5, height: 22.5 }}
  />
);

export default HeaderLogo;
