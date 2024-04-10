import React, { createContext, useState } from "react";

const QuotationListContext = createContext();
const QuotationsDispatchContext = createContext();

function QuotationListProvider({ children }) {
    const [quotationList, setQuotationList] = useState([
        {
            QuotationId: '#16786',
            CustomerName: 'Samcyril',
            EnquiryNo:'#16786',
            QuotationDate: '01/01/2022',
            TotalAmount: '1000',
            PaymentTerm: 'IMMIDIATE',
            DeliveryDate: '01/01/2022',
            Contact:'9988776655',
            ProuctImages:[],
            Requirements:'',
            Items:[],
            Payments:[]
        }
    ]);
    return (
        <QuotationListContext.Provider value={quotationList}>
            <QuotationsDispatchContext.Provider value={setQuotationList}>
                {children}
            </QuotationsDispatchContext.Provider>
        </QuotationListContext.Provider>
    );
};
export { QuotationListProvider,QuotationListContext, QuotationsDispatchContext};