import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/Colors";

function Title({children}){



    return(
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color: Colors.white,
        textAlign:'center',
        borderWidth:2,
        borderColor:Colors.white,
        padding:12,
    }
});