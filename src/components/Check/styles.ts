import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const Label = styled.Text`
    font-size: 16px;
    font-family: ${fonts.regular};
    color: ${colors.gray[200]};
`;