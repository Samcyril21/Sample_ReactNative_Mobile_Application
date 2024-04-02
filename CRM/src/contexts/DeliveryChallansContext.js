import React, { createContext, useState } from "react";

const DeliveryChallanListContext = createContext();
const DeliveryChallanDispatchContext = createContext();


function DeliveryChallanListProvider({ children }) {
    const [deliveryChallanList, setDeliveryChallanList] = useState([
        {
            DeliveryChallantId: '#16786',
            CustomerName: 'John Doe',
            PaymentTerm: 'Immidiate',
            PaymentMode: 'CARD',
            GstIn: '1234567890',
            DeliveryDate: '01/01/2022',
            PaymentDate: '01/01/2022',
            Contact1:'9988776655',
            Contact2:'9988776655',
            DeliveryAddress:{ 
                Address:'',
                City:'',
                State:'',
                Pincode:'',},
            IsBillingSameAsDelivery: false,
            BillingAddress:{
                Address:'',
                City:'',
                State:'',
                Pincode:'',
            },
            Items:[]
        }
    ]);
    return (
        <DeliveryChallanListContext.Provider value={deliveryChallanList}>
            <DeliveryChallanDispatchContext.Provider value={setDeliveryChallanList}>
                {children}
            </DeliveryChallanDispatchContext.Provider>
        </DeliveryChallanListContext.Provider>
    );
};
export { DeliveryChallanListProvider,DeliveryChallanListContext, DeliveryChallanDispatchContext };