import { StyleSheet, View, Text } from "react-native";
import Colors from "../../utils/Colors";

function GuessLogNumber({roundNumber, guess}){
    return(
        <View style={styles.listItem}>
            <Text style={styles.iteText}>#{roundNumber}</Text>
            <Text style={styles.iteText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

export default GuessLogNumber;

const styles = StyleSheet.create({
    listItem:{
        borderColor:Colors.primary500,
        borderWidth:1,
        borderRadius: 40,
        padding: 12,
        marginVertical:8,
        backgroundColor:Colors.yellow,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowOffset: {width: 0 , height: 0},
        shadowOpacity: 0.25,
        shadowRadius:3,
    },
    iteText:{
        fontFamily:'open-sans'
    }
});