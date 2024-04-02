import React, { createContext, useState } from "react";

const EnquiryListContext = createContext();
const EnquiryDispatchContext = createContext();


function EnquiryListProvider({ children }) {
    const [enquiryList, setEnquiryList] = useState([
        {
            EnquiryId: '#16786',
            CustomerName: 'Samcyril',
            FollowUpDate: '01/01/2022',
            Contact:'9988776655',
            Category: 'John Doe',
            Status:'High',
            CompanyName:'Coleague',
            GstIn:'1234567890',
            Address:'',
            City:'',
            State:'',
            Pincode:'',
            Requirements:'',
        },
        {
            EnquiryId: '#16787',
            CustomerName: 'Samcyril',
            FollowUpDate: '01/01/2022',
            Contact:'9988776655',
            Category: 'John Doe',
            Status:'High',
            CompanyName:'Coleague',
            GstIn:'1234567890',
            Address:'',
            City:'',
            State:'',
            Pincode:'',
            Requirements:'',
        },
        {
            EnquiryId: '#16788',
            CustomerName: 'Samcyril',
            FollowUpDate: '01/01/2022',
            Contact:'9988776655',
            Category: 'John Doe',
            Status:'High',
            CompanyName:'Coleague',
            GstIn:'1234567890',
            Address:'',
            City:'',
            State:'',
            Pincode:'',
            Requirements:'',
        },
        {
            EnquiryId: '#16789',
            CustomerName: 'Samcyril',
            FollowUpDate: '01/01/2022',
            Contact:'9988776655',
            Category: 'John Doe',
            Status:'High',
            CompanyName:'Coleague',
            GstIn:'1234567890',
            Address:'',
            City:'',
            State:'',
            Pincode:'',
            Requirements:'',
        }
    ]);
    return (
        <EnquiryListContext.Provider value={enquiryList}>
            <EnquiryDispatchContext.Provider value={setEnquiryList}>
                {children}
            </EnquiryDispatchContext.Provider>
        </EnquiryListContext.Provider>
    );
};
export { EnquiryListProvider,EnquiryListContext, EnquiryDispatchContext };