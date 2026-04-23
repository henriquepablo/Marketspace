import RegisterView from "@/screens/SignUp/Register.view";
import { useRegisteriewModel } from "@/screens/SignUp/useRegister.viewModel";

export default function Signup() {

    const viewModel = useRegisteriewModel();

    return (
        <RegisterView {...viewModel} />
    )
}