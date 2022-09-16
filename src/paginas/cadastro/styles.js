import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#210d41',
        paddingTop: 64,
        paddingHorizontal: 64,
        alignItems: 'center',
        gap: 20
    },
    form: {
        width: '100%',
        gap: 5
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#100720',
        color: 'white',
        width: '100%',
        height: 40,
        borderRadius: 10
    },
    label: {
        color: 'white',
        opacity: 0.5
    }
})