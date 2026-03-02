import { Etiqueta } from '../components/etiqueta';
import { View, Text } from 'react-native';


export default function ClimaScreen() {
    return (
        <View>
            <Etiqueta>Monterrey</Etiqueta>
            <Text style={{ fontSize: 18 }}>32°</Text>
             <Etiqueta>viento 10km/hr</Etiqueta>
              {/*imagen*/}
            {/* modo oscuro/claro*/}
             <Etiqueta> acerca de esta app </Etiqueta>
        </View> 
    );
}