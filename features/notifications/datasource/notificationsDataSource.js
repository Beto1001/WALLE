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