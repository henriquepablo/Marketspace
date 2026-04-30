import { useState } from "react"

export enum PaymentMethod {
    PIX = 'pix',
    BOLETO = 'boleto',
    DINHEIRO = 'dinheiro',
    CREDITO = 'credito',
    DEPOSITO = 'deposito'
}

export const useHomeViewModel = () => {

    const [payments, setPayments] = useState<PaymentMethod[]>([]);
    const [openModalFilter, setOpenModalFilter] = useState<boolean>(false);
    const [switchChange, setSwitchChange] = useState<boolean>(false);
    const [condition, setCondition] = useState<'new' | 'used'>('new');

    function togglePayment(type: PaymentMethod) {

        setPayments(prev =>
            prev.includes(type)
                ? prev.filter(p => p !== type)
                : [...prev, type]
        )
    }

    const resetFilters = () => {
        setPayments([]);
        setSwitchChange(false);
        setCondition('new');
    }

    return {
        payments, togglePayment, openModalFilter, setOpenModalFilter, resetFilters, switchChange, setSwitchChange, condition, setCondition
    }
}