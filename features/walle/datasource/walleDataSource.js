import { supabase } from "../../../lib/supabase";

export async function getWalle() {
    const {data: walle, error} = await supabase
    .from('walle')
    .select('*')
    .where('')

    return {
        walle,
        error,
    }   
}

