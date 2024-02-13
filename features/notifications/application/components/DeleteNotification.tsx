import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { deleteNotification } from '../../datasource/notificationsDataSource';

export default function DeleteNotification({id_notification}) {
    const handleDelete = async () => {
        const result = await deleteNotification(id_notification)
        if (result.error){
            alert("No se ha podido eliminar la notificación");
        } else{
            alert("Notificación eliminada");
        }
    }

  return (
    <MaterialIcons
        name="delete"
        size={24}
        color="black"
        onPress={handleDelete}
    />
  )
}