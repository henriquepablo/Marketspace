import AuthView from "@/screens/Login/Login.view";
import { useAuthViewModel } from "@/screens/Login/useLogin.viewModel";

export default function Login() {

    const viewModel = useAuthViewModel();

    return (
        <AuthView {...viewModel} />
    )
}