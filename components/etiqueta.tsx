import React from 'react';
import { Text, StyleSheet } from 'react-native';

type EtiquetaProps = {
	children?: React.ReactNode;
};

export function Etiqueta(props: EtiquetaProps) {
    return <Text style={styles.label}>{props.children ?? 'Hola'}</Text>;
}

const styles = StyleSheet.create({
    label: {
        padding: 10,
        textAlign: 'center',
    }
});
