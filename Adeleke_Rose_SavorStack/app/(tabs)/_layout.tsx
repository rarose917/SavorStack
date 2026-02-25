
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="breakfast" options={{ title: 'View Breakfast' }} />
        <Tabs.Screen name="lunch" options={{ title: 'View Lunch' }} />
        <Tabs.Screen name="dinner" options={{ title: 'View Dinner' }} />
    </Tabs>
  )
}

export default _layout