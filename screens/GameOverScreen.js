import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainButton from '../components/ui/MainButton';

import StyledText from '../components/StyledText';
import StyledTitle from '../components/StyledTitle';
import colors from '../constants/colors';

const GameOverScreen = props => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width);
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.screen}>
        <StyledTitle style={styles.title}>Game Over!</StyledTitle>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceHeight / 30,
            },
          }}
        >
          <Image
            source={require('../assets/success.png')}
            style={styles.image}
          />
        </View>
        <View
          style={[
            styles.resultContainer,
            { marginBottom: availableDeviceHeight / 60 },
          ]}
        >
          <StyledText
            style={{
              ...styles.resultText,
              ...{ fontSize: availableDeviceHeight < 400 ? 14 : 18 },
            }}
          >
            Your cell phone took {' '}
            <Text style={styles.highlight}>{props.roundsNumber}</Text>{' '}
            attempts to guess your number{' '}
            <Text style={styles.highlight}>({props.userNumber})</Text>.
          </StyledText>
        </View>
        <MainButton onPress={props.onNewGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: '#007bff',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: 'center',
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'Roboto',
  },
});

export default GameOverScreen;
