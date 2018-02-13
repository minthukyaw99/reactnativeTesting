import React from 'react';
import { View, StyleSheet } from 'react-native';


const CardSection = (props) => {
    return (
        <View style={styles.cardSectionStyle}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    cardSectionStyle: {
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#039be5',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        flexGrow: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    }
});

export default CardSection;