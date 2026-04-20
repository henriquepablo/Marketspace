import AuthView from "@/screens/Auth/Auth.view";
import { useAuthViewModel } from "@/screens/Auth/useAuth.viewModel";

export default function Login() {

    const viewModel = useAuthViewModel();

    return (
        <AuthView {...viewModel} />
    )
}