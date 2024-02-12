import { supabase } from "../../../lib/supabase";

export async function getUsers(){
    const {data:users,error} = await supabase
    .from('users')
    .select('*')

    return {
        users,
        error,
    }
}

export async function createUser(){
    const {data:users,error} = await supabase
    .from('users')
    .select('*')

    return {
        users,
        error,
    }
}

export async function updateUser(){
    const {data:users,error} = await supabase
    .from('users')
    .select('*')

    return {
        users,
        error,
    }
}