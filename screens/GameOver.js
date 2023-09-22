import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({roundsNumber, userNumber, onStartNewGame}){
    return(
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/gameover.png')} style={styles.image}/>
            </View>
            <View>
                <Text style={styles.summaryText}>Your phone needed 
                    <Text style={styles.heighlight}> {roundsNumber} </Text> 
                     rounds to guess the number 
                    <Text style={styles.heighlight}> {userNumber} </Text>
                .</Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOver;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer:{
        margin:24,  
        borderRadius: 200,
        width:350,
        height:350,
        borderColor:Colors.yellow,
        borderWidth:3,
        overflow:'hidden',
    },
    image:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
        fontFamily:'open-sans',
        textAlign:'center',
        marginVertical:24,
        marginBottom:24,
        color:Colors.white,
        fontSize:24
    },
    heighlight:{
        fontFamily:'open-sans-bold',
        color: Colors.yellow,
        fontSize:24
    },
});