import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import SvgUri from 'react-native-svg-uri';

export const SVGURL= (svgurl: any) => {
    return (
        <SvgUri
            width="30"
            height="30"
            source={{ uri: svgurl['svgurl'] }}
        />
    )
}