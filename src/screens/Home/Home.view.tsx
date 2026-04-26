import { TouchableOpacity, View } from "react-native";
import { ButtonMyAnnoun, ButtonMyAnnounText, ButtonNew, ButtonNewText, Container, ContainerInput, ContainerProducts, Description, Header, Input, Name, Photo, QuantityAnnounActivy, TextAnnounActivy, Title } from "./styles";
import { ArrowRightIcon, MagnifyingGlassIcon, PlusIcon, SlidersIcon, TagIcon } from "phosphor-react-native";
import { colors } from "@/constants/colors";

const HomeView: React.FC = () => {
    return (
        <Container>
            <Header>
                <View >
                    <Photo />
                </View>
                <View>
                    <Title>
                        Boas Vindas,
                    </Title>
                    <Name>
                        Maria!
                    </Name>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <ButtonNew>
                        <PlusIcon color="white" size={18}/>
                        <ButtonNewText>
                            Criar anúncio
                        </ButtonNewText>
                    </ButtonNew>
                </View>
            </Header>

            <Description>
                Seus produtos anunciados para venda
            </Description>
            

            <ContainerProducts>
                <View>
                    <TagIcon size={22} color={colors.blue} />
                </View>

                <View>
                    <QuantityAnnounActivy>
                        4
                    </QuantityAnnounActivy>

                    <TextAnnounActivy>
                        anúncios ativos
                    </TextAnnounActivy>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <ButtonMyAnnoun>
                        <ButtonMyAnnounText>
                            Meus anúncios
                        </ButtonMyAnnounText>

                        <ArrowRightIcon color={colors.blue}/>
                    </ButtonMyAnnoun>
                </View>
            </ContainerProducts>

            <Description>
                Compre produtos variados
            </Description>

            <ContainerInput>
                <Input 
                    placeholder='Buscar anúncio'
                />

                <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon color={colors.gray[100]} />
                    </TouchableOpacity>

                    <View style={{height: 18, width: 1, backgroundColor: colors.gray[400]}}/>

                    <TouchableOpacity>
                        <SlidersIcon color={colors.gray[100]} />
                    </TouchableOpacity>
                </View>
            </ContainerInput>
        </Container>
    )
}

export default HomeView;