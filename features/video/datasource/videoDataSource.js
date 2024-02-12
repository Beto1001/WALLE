import { supabase } from "../../../lib/supabase";

export async function getVideo() {
    const {data:video, error} = await supabase
    .from('video')
    .select('*')

    return {
        video,
        error,
    }
}