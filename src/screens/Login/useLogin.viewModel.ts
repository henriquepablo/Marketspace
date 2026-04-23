import { useState } from "react"
import { Alert } from "react-native";

export const useAuthViewModel = () => {

    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleLogin = () => {
        if (email.trim() === "" || email.trim() === "") Alert.alert('Login', 'Preencha todos os campos!');
    }

    return { email, setEmail, password, setPassword, handleLogin }
}