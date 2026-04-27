import { ProductImage } from "@/assets";
import { AnnouncementImage, Condition, Container, Name, PhotoProfile, Price } from "./styles";

const AnnouncementCard: React.FC = () => {
    return (
        <Container>
            <AnnouncementImage source={ProductImage}/>
            <Name>
                Tênis vermelho
            </Name>
            <Price>
                R$ 59,90
            </Price>

            <PhotoProfile />

            <Condition>
                USADO
            </Condition>
        </Container>
    )
}

export default AnnouncementCard;