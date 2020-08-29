import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:3333',
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com fisico: IP da maquina
 * Andoid com Emulador: localhost(adb reverse)
 * Android com emulador: 10.0.2.2(Android Studio)
 * Android com emulador: 10.0.3.2 (Genyotion)
 * Android com fisico: IP da maquina
 */
