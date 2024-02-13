import { supabase } from "../../../lib/supabase";

export async function getNotifications() {
    const {data:notifications, error} = await supabase
    .from('notifications')
    .select('*')

    return {
        notifications,
        error,
    }
}

export async function deleteNotification(id_notification) {
    try {
        const { data, error } = await supabase
            .from('notifications')
            .delete()
            .eq('id_notification', id_notification);

        if (error) {
            throw error;
        }

        return {
            data,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error,
        };
    }
}