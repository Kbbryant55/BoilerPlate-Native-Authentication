import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';

const InnerSection = props => {
    return <View style={styles.container}>{props.children}</View>
}

const styles = {
    container: {
        marginTop: 10,
        marginBottom: 10,
    }
}

export default InnerSection;