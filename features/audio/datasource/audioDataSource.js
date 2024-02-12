import { supabase } from "../../../lib/supabase";

export async function getAudio() {
    const {data: audio, error} = await supabase
    .from('audio')
    .select('*')

    return {
        audio,
        error,
    }
}