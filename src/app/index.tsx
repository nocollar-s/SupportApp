import { View,Text,StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text>MemoApp</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>
            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>何年何月何日何時</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>何年何月何日何時</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>何年何月何日何時</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

            </View>
            <View>
                <Text>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Index
