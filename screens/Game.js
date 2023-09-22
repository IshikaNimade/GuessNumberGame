import { StyleSheet, View, Alert, FlatList} from "react-native";
import React, { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/games/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstText from "../components/ui/InstText";
import GuessLogNumber from "../components/games/GuessLogNumber";

function generateRandomNumber( min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max-min) + min);

    if(rndNum === exclude){
        return generateRandomNumber( 0, 100, exclude);
    }else {
        return rndNum;
    }   
}

let minBoundary=1;
let maxBoundary=100;

function Game({userNumber, onGameOver}){
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess]=useState(initialGuess);
    const [guessRounds, setGuessRounds]= useState([initialGuess]);

    useEffect(() => {
        if(currentGuess===userNumber){  
            onGameOver(guessRounds.length);
        }
    },[currentGuess,userNumber,onGameOver])

    useEffect( () =>
    {
        minBoundary=0;
        maxBoundary=100;
    },[]
    );

    function nextGuessHandler(direction){
        if( (direction==='lower' && currentGuess < userNumber) || 
        (direction==='greater' && currentGuess >  userNumber)){
            Alert.alert(
                "Don't lie!",
                "you know that this is wrong...", 
                [{ text: "Sorry", style: "cancel" }]
              );
              
        }

        if(direction=='lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess + 1;
        }
        const newRandNumber = generateRandomNumber(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRandNumber);
        setGuessRounds(prevGuessRounds => [newRandNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstText>Higher or Lower?</InstText>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton></View>
                    <View style={styles.button}><PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton></View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRounds => <Text key={guessRounds} >{guessRounds}</Text>)} */}
                <FlatList 
                data = {guessRounds} 
                renderItem={(itemData) => <GuessLogNumber roundNumber={guessRoundsListLength - itemData.index} 
                guess={itemData.item}/>}   
                keyExtractor={(item) => item}/>
            </View>
        </View>
    );
}


export default Game;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
        alignItems:'center '
    },
    buttonContainer:{
        flexDirection: 'row'
    },
    button:{
        flex: 1,
    },
    listContainer:{
        flex:1,
        padding:16,

    }
 
});