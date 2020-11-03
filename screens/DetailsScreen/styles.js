import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#24282f",
        flex:1,
    } ,

    status: {
        backgroundColor: "#d63d2e",
        width: 15,
        height: 15,
        borderRadius:15,
    },

    statusBlock:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    item: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        backgroundColor: '#4a4d54',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 5,
        borderRadius: 17,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        height: 300,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },

    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10,
        paddingTop: 15,
    },

    itemText: {
        flex: 1,
        fontSize: 20,
        color: '#f5f5f5'
    },

    descriptionText: {
        fontSize: 14,
        color: '#9b9c9e',
        paddingTop: 5,
    },

    titleText: {
        fontSize: 30,
        color: '#ff9800',
        fontWeight: "bold",
    },

    titleBlock: {flex: 1},

});

export default styles;
