import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    height: 143px;
    width: 153px;
    background-color: ${colors.gray[600]};
    position: relative;
    margin-top: 20px;
`;

export const AnnouncementImage = styled.Image`
    width: 100%;
    height: 100px;
    border-radius: 6px;
`;

export const PhotoProfile = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border-width: 1px;
    border-color: ${colors.gray[700]};
    position: absolute;
    top: 5px;
    left: 5px;
`;

export const Name = styled.Text`
    font-family: ${fonts.regular};
    font-size: 14px;
    color: ${colors.gray[200]};
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Price = styled.Text`
    font-size: 16px;
    font-family: ${fonts.bold};
    color: ${colors.gray[100]};
`;

export const Condition = styled.Text`
    background-color: ${colors.gray[200]};
    color: ${colors.gray[700]};
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 6px;
    width: 50px;
    text-align: center;
    font-size: 11px;
    font-family: ${fonts.bold};
`;