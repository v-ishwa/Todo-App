import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "green",
            tabBarStyle:{
                backgroundColor: "#1e293b",
                borderTopWidth: 1,
                borderTopColor: "yellow",
                height: 100,
                paddingTop: 20,
            },
            tabBarLabelStyle:{
                fontSize: 12,
                fontWeight: 900,
            },
        }}>
            <Tabs.Screen name='index' options={{
                title: "Todos",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="flash-outline" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name='settings' options={{
                title: "Settings",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                )
            }} />
        </Tabs>
    )
}