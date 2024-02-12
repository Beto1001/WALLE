import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getNotifications } from '../../datasource/notificationsDataSource';
import { Ionicons } from '@expo/vector-icons';
const NotificationCard: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { notifications, error } = await getNotifications();
        if (error) {
          throw new Error(error.message);
        }
        setNotifications(notifications || []);
      } catch (error) {
        setError(error.message);        
      }
    };
    fetchNotifications();
  }, []);

  return (
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.heading}>Notificaciones</Text>
            </View>

            <TouchableOpacity>
              {notifications.map((notification) => (
               <TouchableOpacity style={styles.rectangle} key={notification.id_notification}>
                     <Text>
                     <Ionicons name="notifications" size={24} color="black" />
                    </Text>
                    <Text style={styles.notification}>{`${notification.notification}`}</Text>
               </TouchableOpacity>
              ))}
            </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
    container:{
        padding:38,
    },
    table:{
        borderColor:'blue',
        marginBottom: 5,
    },
    header:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  deleteNotification: {
    alignSelf:'flex-end',
  },
  rectangle:{
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginBottom: 8,
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  notification:{
    fontSize:15,
    fontWeight:'bold',
    color:'gray'
  }
});

export default NotificationCard;
