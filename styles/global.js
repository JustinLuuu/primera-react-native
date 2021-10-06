import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({    
    header: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        backgroundColor: 'blue',
        height: 60
    },
    subHeader: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        margin: 20,
        padding: 15,
        fontSize: 25,
        backgroundColor: 'orange',
    },
    input: {
        margin: 13,
        height: 60,
        borderColor: '#7a42f4',
        borderWidth: 2,
        padding: 12,
        fontSize: 20
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 10,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default styles;