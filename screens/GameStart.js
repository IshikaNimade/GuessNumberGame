import { TextInput, View, StyleSheet, Alert} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../utils/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstText from "../components/ui/InstText";

function GameStart({onPickNumber}){

    const [enteredNumber, setEnteredNumber]=useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber("");
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid Number',
            'Number has to be a number between 0 and 99.',
            [{text:'okay',style:'destructive',onPress: resetInputHandler}])
            return;
        }

        onPickNumber(chosenNumber);
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
        <Card>

            <InstText>Enter a Number!</InstText>

            <TextInput style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}/>

            <View style={styles.buttonContainer}>
                <View style={styles.button}><PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton></View>
                <View style={styles.button}><PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
            </View>

        </Card>
        </View>
    );
}

export default GameStart;

const styles = StyleSheet.create({
    rootContainer:{
        marginTop:100,
        flex:1,
        alignItems:'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 30,
        borderBottomColor: Colors.yellow,
        borderBottomWidth: 2,
        color: Colors.yellow,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonContainer:{
        flexDirection: 'row'
    },
    button:{
        flex: 1,
    }
});