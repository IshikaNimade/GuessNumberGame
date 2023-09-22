import React from 'react';
import { useState } from 'react';
import {StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameStart from './screens/GameStart';
import Game from './screens/Game';
import Colors from './utils/Colors';
import GameOver from './screens/GameOver';

function App(){

  const [userNumber, setUserNumber]=useState();
  const [gameIsOver, setGameIsOver]=useState(true);
  const [guessRounds, setGuessRounds]=useState(0);

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null),
    setGuessRounds(0)
  }

  let screen =<GameStart onPickNumber={pickedNumberHandler} />

  if(userNumber){
    screen = <Game userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = < GameOver 
      userNumber={userNumber} 
      roundsNumber={guessRounds} 
      onStartNewGame={startNewGameHandler}/>
  }

  return (
    <LinearGradient colors={[Colors.yellow, Colors.primary500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/background.jpg')} 
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15,

  }
});

export default App;
