import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// custom components
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'
import Header from './components/Header'
import colors from './constants/colors';

function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };


  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onNewGame={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      <SafeAreaView style={styles.screen}>{content}</SafeAreaView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});



