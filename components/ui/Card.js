import { View } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

function Card({children}){
    return(
        <View style= { styles.card}>{children}</View>
    );

}

export default Card;

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        borderRadius:8,
        backgroundColor:Colors.primary500,
        elevation: 8,
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,  
    },
});

