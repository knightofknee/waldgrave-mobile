import React from "react";
import { View, Text } from "react-native";

export default function Post(props: { title: string; authorName: string; link: string; body: string; }) {
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.authorName}</Text>
            <Text>{props.link}</Text>
            <Text>{props.body}</Text>
        </View>
    );
}
