import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import { Feather } from '@expo/vector-icons'
import CircleButton from './CircleButton'

const memoListItem =(): JSX.Element => {
    return(
        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>何年何月何日何時</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Feather name ='delete' size={40} color='#B0B0B0' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    memoListItem:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)'
    },
    memoListItemTitle:{
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate:{
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }

})

export default memoListItem