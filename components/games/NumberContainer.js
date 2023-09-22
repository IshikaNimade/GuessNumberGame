import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../utils/Colors";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.primary500,
        padding: deviceWidth<450 ? 12 : 24,
        margin:24,
        borderRadius:0,
        alignItems:'center',
        justifyContent:'center',
    },
    numberText:{
        color: Colors.primary500,
        fontSize:36,
        fontWeight:'bold',
    }
});