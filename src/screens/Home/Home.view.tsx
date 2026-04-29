import { Modal, Switch, TouchableOpacity, View } from "react-native";
import { ApplyFiltersButton, ApplyFiltersButtonText, BottomModal, ButtonMyAnnoun, ButtonMyAnnounText, ButtonNew, ButtonNewText, ConditionButton, ConditionButtonText, Container, ContainerButton, ContainerInput, ContainerProducts, ContentModal, Description, Header, HeaderModal, Input, Name, Overlay, Photo, QuantityAnnounActivy, ResetFiltersButton, ResetFiltersButtonText, TextAnnounActivy, TextModal, Title, TitleModal } from "./styles";
import { ArrowRightIcon, MagnifyingGlassIcon, PlusIcon, SlidersIcon, TagIcon, XCircleIcon, XIcon } from "phosphor-react-native";
import { colors } from "@/constants/colors";
import AnnouncementCard from "@/components/AnnouncementCard/AnnouncementCard";
import Check from "@/components/Check/Check";
import { PaymentMethod, useHomeViewModel } from "./useHome.viewModel";

const HomeView: React.FC<ReturnType<typeof useHomeViewModel>> = ({
    payments,
    togglePayment,
    openModalFilter,
    setOpenModalFilter, 
    resetFilters, 
    setSwitchChange, 
    switchChange, 
    condition, 
    setCondition
}) => {
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
                        <PlusIcon color="white" size={18} />
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

                        <ArrowRightIcon color={colors.blue} />
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

                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon color={colors.gray[100]} />
                    </TouchableOpacity>

                    <View style={{ height: 18, width: 1, backgroundColor: colors.gray[400] }} />

                    <TouchableOpacity onPress={() => setOpenModalFilter(true)}>
                        <SlidersIcon color={colors.gray[100]} />
                    </TouchableOpacity>
                </View>
            </ContainerInput>

            <AnnouncementCard />


            <Modal transparent animationType="slide" visible={openModalFilter}>
                <Overlay />
                <ContentModal>

                    <HeaderModal>
                        <TitleModal>
                            Filtrar anúncios
                        </TitleModal>

                        <TouchableOpacity onPress={() => setOpenModalFilter(false)}>
                            <XIcon size={26} color="gray" />
                        </TouchableOpacity>
                    </HeaderModal>

                    <TextModal>
                        Condição
                    </TextModal>


                    <ContainerButton>
                        <ConditionButton active={condition === 'new'} onPress={() => setCondition('new')} >
                            <ConditionButtonText active={condition === 'new'}>
                                Novo
                            </ConditionButtonText>
                            {
                                condition === 'new' &&
                                <XCircleIcon size={18} color="white" weight="fill" />
                            }
                        </ConditionButton>

                        <ConditionButton active={condition === 'used'} onPress={() => setCondition('used')} >
                            <ConditionButtonText active={condition === 'used'}>
                                Usado
                            </ConditionButtonText>
                            {
                                condition === 'used' &&
                                <XCircleIcon size={18} color="white" weight="fill" />
                            }
                        </ConditionButton>
                    </ContainerButton>

                    <TextModal>
                        Aceita troca?
                    </TextModal>

                    <Switch
                        trackColor={{ true: colors.blueLight }}
                        value={switchChange}
                        onValueChange={(value) => setSwitchChange(value)}
                    />

                    <TextModal>
                        Meios de pagamento aceitos
                    </TextModal>

                    <Check
                        label="Boleto"
                        check={payments.includes(PaymentMethod.BOLETO)}
                        onPress={() => togglePayment(PaymentMethod.BOLETO)}
                    />

                    <Check
                        label="Pix"
                        check={payments.includes(PaymentMethod.PIX)}
                        onPress={() => togglePayment(PaymentMethod.PIX)}
                    />

                    <Check
                        label="Dinheiro"
                        check={payments.includes(PaymentMethod.DINHEIRO)}
                        onPress={() => togglePayment(PaymentMethod.DINHEIRO)}
                    />

                    <Check
                        label="Cartão de Crédito"
                        check={payments.includes(PaymentMethod.CREDITO)}
                        onPress={() => togglePayment(PaymentMethod.CREDITO)}
                    />

                    <Check
                        label="Depósito Bancário"
                        check={payments.includes(PaymentMethod.DEPOSITO)}
                        onPress={() => togglePayment(PaymentMethod.DEPOSITO)}
                    />
                    <BottomModal>
                        <ResetFiltersButton onPress={resetFilters}>
                            <ResetFiltersButtonText>
                                Resetar filtros
                            </ResetFiltersButtonText>
                        </ResetFiltersButton>

                        <ApplyFiltersButton>
                            <ApplyFiltersButtonText>
                                Aplicar filtros
                            </ApplyFiltersButtonText>
                        </ApplyFiltersButton>
                    </BottomModal>
                </ContentModal>
            </Modal>
        </Container>
    )
}

export default HomeView;