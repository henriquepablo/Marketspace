import { router } from "expo-router";
import { useState } from "react"
import { Alert } from "react-native";

export const useRegisteriewModel = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


    const handleRegister = () => {
        Alert.alert('MarketSpace', 'Cadastrar');
    }

    const backToLogin = () => {
        router.back();
    }

    return { name, setName, email, setEmail, phone, setPhone, password, setPassword, confirmPassword, setConfirmPassword, handleRegister, backToLogin }
}