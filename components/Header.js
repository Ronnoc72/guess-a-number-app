import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import StyledTitle from '../components/StyledTitle';
import colors from '../constants/colors';

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <StyledTitle style={styles.headerTitle}>{props.title}</StyledTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: colors.primary,
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? colors.primary : 'white',
  },
});

export default Header;
