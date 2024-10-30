import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Search, Bell, Home, Clock, Book, Chart } from 'lucide-react-native';

export default function HomeScreen() {
    return (
        <View className="flex-1 bg-white">
            {/* Top Navigation Bar */}
            <View className="flex-row items-center justify-between px-4 pt-12 pb-4 bg-white border-b border-gray-200">
                <View className="flex-row items-center flex-1 px-3 py-2 bg-gray-100 rounded-lg mr-2">
                    <Search className="w-5 h-5 text-gray-500" />
                    <TextInput
                        placeholder="CPU Model..."
                        className="ml-2 flex-1"
                    />
                </View>
                <Pressable>
                    <Bell className="w-6 h-6 text-gray-700" />
                </Pressable>
            </View>

            {/* Main Content */}
            <ScrollView className="flex-1 px-4 pt-4">
                {/* Main Cards Section */}
                <View className="flex-row justify-between mb-4">
                    <View className="bg-gray-100 p-4 rounded-lg w-[48%]">
                        <Text className="font-semibold text-lg">Unit Price</Text>
                    </View>
                    <View className="bg-gray-100 p-4 rounded-lg w-[48%]">
                        <Text className="font-semibold text-lg">Lorem Ipsum</Text>
                    </View>
                </View>

                {/* Small Cards Grid */}
                <View className="flex-row flex-wrap justify-between mb-4">
                    {['Gas Usage', 'Power Input', 'Primary Power', 'Cooling Input'].map((title) => (
                        <View key={title} className="bg-gray-100 p-3 rounded-lg w-[48%] mb-3">
                            <Text className="font-medium">{title}</Text>
                        </View>
                    ))}
                </View>

                {/* Go Pro Section */}
                <View className="bg-blue-500 p-4 rounded-lg mb-4">
                    <Text className="text-white font-semibold">Go Pro</Text>
                </View>

                {/* List Section */}
                <View className="bg-gray-100 rounded-lg p-4 mb-4">
                    <Text className="font-semibold mb-2">Statistics & Performance</Text>
                    {/* Add your list items here */}
                    <View className="space-y-2">
                        <View className="py-2 border-b border-gray-200">
                            <Text>Statistic Item 1</Text>
                        </View>
                        <View className="py-2 border-b border-gray-200">
                            <Text>Statistic Item 2</Text>
                        </View>
                        <View className="py-2 border-b border-gray-200">
                            <Text>Statistic Item 3</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Tab Navigation */}
            <View className="flex-row justify-around py-3 bg-white border-t border-gray-200">
                <Link href="/" className="items-center">
                    <Home className="w-6 h-6 text-blue-500" />
                    <Text className="text-xs mt-1 text-blue-500">Home</Text>
                </Link>
                <Link href="/time" className="items-center">
                    <Clock className="w-6 h-6 text-gray-500" />
                    <Text className="text-xs mt-1">Time</Text>
                </Link>
                <Link href="/task" className="items-center">
                    <Book className="w-6 h-6 text-gray-500" />
                    <Text className="text-xs mt-1">Task</Text>
                </Link>
                <Link href="/chart" className="items-center">
                    <Chart className="w-6 h-6 text-gray-500" />
                    <Text className="text-xs mt-1">Chart</Text>
                </Link>
            </View>
        </View>
    );
}