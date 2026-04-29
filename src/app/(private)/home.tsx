import HomeView from "@/screens/Home/Home.view";
import { useHomeViewModel } from "@/screens/Home/useHome.viewModel";

export default function Home() {

    const viewModel = useHomeViewModel();

    return (
        <HomeView {...viewModel} />
    )
}