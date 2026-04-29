import { TouchableOpacity } from "react-native";
import { Container, Label } from "./styles";
import { CheckSquareIcon, SquareIcon } from "phosphor-react-native";
import { colors } from "@/constants/colors";

type CheckProps = {
    label: string;
    check: boolean;
    onPress: () => void;
}

const Check: React.FC<CheckProps> = ({ label, onPress, check }) => {

    return (
        <Container>
            <TouchableOpacity onPress={onPress}>
                {
                    check ? (
                        <CheckSquareIcon color={colors.blueLight} weight="fill" />
                    ) : (
                        <SquareIcon color={colors.gray[400]} />
                    )
                }
            </TouchableOpacity>
            <Label>
                { label }
            </Label>
        </Container>
    )
}

export default Check;