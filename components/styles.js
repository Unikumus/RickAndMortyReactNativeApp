import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    item:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 5,
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },


    image: {
        height: 80,
        width: 80,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginRight: 20,
        resizeMode: 'cover',

    },

    status: {
        backgroundColor: "#d63d2e",
        width: 15,
        height: 15,
        borderRadius:15,
    },

    itemText:{
        flex:1,
        fontSize: 20,
        color: '#f5f5f5',
        fontWeight: 'bold'
    },

    statusText:{
        flex:1,
        fontSize: 14,
        color: '#f5f5f5'
    },

    titleBlock:{
        flex:1,
    },

    statusBlock:{
        flex:1,
        flexDirection: 'row',
    },


});

export default styles;
