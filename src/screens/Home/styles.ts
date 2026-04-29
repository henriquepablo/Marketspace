import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.gray[600]};
    padding: 24px 24px;
`;

export const Header = styled.View`
    flex-direction: row;
    gap: 15px;
`;

export const Photo = styled.Image`
    width: 45px;
    height: 45px;
    border-width: 2px;
    border-color: ${colors.blueLight};
    border-radius: 22.5px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${colors.gray[100]};
    font-family: ${fonts.regular};
`;

export const Name = styled.Text`
    font-size: 16px;
    color: ${colors.gray[100]};
    font-family: ${fonts.bold};
`;

export const ButtonNew = styled.TouchableOpacity`
    width: 139px;
    height: 42px;
    background-color: ${colors.gray[100]};
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const ButtonNewText = styled.Text`
    color: ${colors.gray[700]};
    font-size: 14px;
    font-family: ${fonts.bold};
`;

export const Description = styled.Text`
    color: ${colors.gray[300]};
    font-family: ${fonts.regular};
    font-size: 15px;
    margin-top: 20px;
`;

export const ContainerProducts = styled.View`
    width: 100%;
    height: 66px;
    background-color: rgba(100, 121, 199, 0.10);
    border-radius: 6px;
    margin-top: 20px;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    gap: 10px;
`;

export const QuantityAnnounActivy = styled.Text`
    color: ${colors.gray[200]};
    font-size: 20px;
    font-family: ${fonts.bold};
`;

export const TextAnnounActivy = styled.Text`
    color: ${colors.gray[200]};
    font-size: 13px;
    font-family: ${fonts.regular};
`;

export const ButtonMyAnnoun = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const ButtonMyAnnounText = styled.Text`
    color: ${colors.blue};
    font-size: 14px;
    font-family: ${fonts.bold};
`;

export const ContainerInput = styled.View`
    flex-direction: row;
    background-color: ${colors.gray[700]};
    height: 45px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 6px;
    margin-top: 10px;
    gap: 10px;
`;

export const Input = styled.TextInput`
    flex: 1;
    background-color: ${colors.gray[700]};
    height: 45px;
`;

export const Overlay = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const ContentModal = styled.View`
    flex: 2;
    background-color: ${colors.gray[600]};
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    margin-top: -20px;
    padding: 24px 24px;
`;

export const HeaderModal = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TitleModal = styled.Text`
    font-size: 20px;
    font-family: ${fonts.bold};
    color: ${colors.gray[100]};
`;

export const TextModal = styled.Text`
    font-size: 14px;
    font-family: ${fonts.bold};
    color: ${colors.gray[200]};
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ContainerButton = styled.View`
    flex-direction: row;
`;

export const ConditionButton = styled.TouchableOpacity<{active: boolean}>`
    background-color: ${({ active }) => active ? colors.blueLight : colors.gray[500]};
    width: 76px;
    height: 28px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 4px;
    margin-right: 10px;
`;

export const ConditionButtonText = styled.Text<{active: boolean}>`
    color: ${({active}) => active ? colors.gray[600] : colors.gray[300]};
    font-size: 14px;
    font-family: ${fonts.bold};
`;

export const BottomModal = styled.View`
    flex: 1;
    align-items: flex-end;
    gap: 20px;
    flex-direction: row;
    margin-bottom: 15px;
`;

export const ResetFiltersButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray[500]};
    height: 42px;
    flex: 1;
    border-radius: 6px;
`;

export const ResetFiltersButtonText = styled.Text`
    color: ${colors.gray[200]};
    font-size: 14px;
    font-family: ${fonts.bold};
`;

export const ApplyFiltersButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray[100]};
    height: 42px;
    flex: 1;
    border-radius: 6px;
`;

export const ApplyFiltersButtonText = styled.Text`
    color: ${colors.gray[700]};
    font-size: 14px;
    font-family: ${fonts.bold};
`;