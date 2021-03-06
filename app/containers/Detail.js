import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        const { params } = navigation.state;

        return (
            <View style={styles.container}>
                <Text>详情:{params.id}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
