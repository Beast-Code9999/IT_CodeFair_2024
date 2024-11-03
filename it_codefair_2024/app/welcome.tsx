import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { wp } from '@/helpers/common'
import { Colors } from '@/constants/Colors'
import { hp } from '@/helpers/common'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'


const welcome = () => {
    const router = useRouter();

    return (
        <ScreenWrapper bg="#fff">
            <StatusBar style="dark" />
            <View style={styles.container}>
                {/* welcome image */}
                <Image style={styles.welcomeImage} resizeMode="contain" source={require('@/assets/images/welcome.png')} />

                {/* welcome text */}
                <View style={{ gap: 20 }}>
                    <Text style={styles.title}>CDUgram</Text>
                    <Text style={styles.punchline}>
                        Where every students can share their moments and experiences.
                    </Text>
                </View>

                {/* footer */}
                <View style={styles.footer}>
                    <Button
                        textStyle={{}}
                        title="Get Started"
                        buttonStyle={{ marginHorizontal: wp(3) }}
                        onPress={() => router.push("/signup")}
                    />

                    <View style={styles.bottomText}>
                    <Text style={{fontSize: hp(1.7)}}>
                        Already have an account?
                    </Text>
                    <Pressable>
                        <Text style={[
                            styles.loginText,
                            { 
                                color: 'green',
                                fontWeight: 'bold',
                            }
                        ]}>
                            Login   
                        </Text>
                    </Pressable>
                </View> 
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: wp(4),
    },
    welcomeImage: {
        width: wp(80),
        height: wp(100),
        alignSelf: 'center',
    },
    title: {
        color: 'black',
        fontSize: hp(4),
        fontWeight: '600',
        textAlign: 'center',
    },
    punchline: {
        color: 'black',
        fontSize: hp(1.7),
        textAlign: 'center',
        paddingHorizontal: wp(10),
    },
    footer: {
        width: '100%',
        gap: 30,
    },
    bottomText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    loginText: {
        textAlign: 'center',
        fontSize: hp(1.6),
        color: 'black',
    }
})