import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NotificationCard from "../components/NotificationCard";

function NotificationsScreen(){
  return  <NotificationCard />
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default NotificationsScreen;
