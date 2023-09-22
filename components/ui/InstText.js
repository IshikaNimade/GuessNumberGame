import { StyleSheet, Text } from "react-native";
import Colors from "../../utils/Colors";

function InstText({children, style}){
    return(
    <Text style={[styles.instructionText, style]}>{children}</Text>
    );
}

export default InstText;

const styles= StyleSheet.create({
    instructionText:{
        color:Colors.yellow,
        fontSize:24,
    },
});