import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
// import { supabase } from '../../../../lib/supabase';
const Logout = () => {

  return (
    <TouchableOpacity /*onPress={() => supabase.auth.signOut()}*/>
      <FontAwesome name="sign-out" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default Logout;
