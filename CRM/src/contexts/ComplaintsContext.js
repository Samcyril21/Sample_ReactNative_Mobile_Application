import React, { createContext, useState } from "react";

const ComplaintListContext = createContext();
const ComplaintDispatchContext = createContext();


function ComplaintListProvider({ children }) {
    const [complaintList, setComplaintList] = useState([
        {
            ComplaintId: '#16786',
            CustomerName: 'Samcyril',
            Product: 'Sofa',
            ComplaintDate: '01/01/2022',
            ResolutionDate: '01/01/2022',
            Contact:'9988776655',
            WorkeCompletedDate:'01/01/2022',
            WorkCompletedBy:"Jonn Doe",
            Status:'Open',
            Address:'',
            City:'',
            State:'',
            Pincode:'',
            ProductImages:[],
            Details:'',
        },
        {
            ComplaintId: '#16787',
            CustomerName: 'Samcyril',
            Product: 'Sofa',
            ComplaintDate: '01/01/2022',
            ResolutionDate: '01/01/2022',
            Contact:'9988776655',
            WorkeCompletedDate:'01/01/2022',
            WorkCompletedBy:"Jonn Doe",
            Status:'Open',
            Address:'',
            City:'',
            State:'',
            Pincode:'',
            ProductImages:[],
            Details:'',
        },
        {
            ComplaintId: '#16788',
            CustomerName: 'Samcyril',
            Product: 'Sofa',
            ComplaintDate: '01/01/2022',
            ResolutionDate: '01/01/2022',
            Contact:'9988776655',
            WorkeCompletedDate:'01/01/2022',
            WorkCompletedBy:"Jonn Doe",
            Status:'Open',
            Address:'',
            City:'',
            State:'',
            Pincode:'',
            ProductImages:[],
            Details:'',
        },
    ]);
    return (
        <ComplaintListContext.Provider value={complaintList}>
            <ComplaintDispatchContext.Provider value={setComplaintList}>
                {children}
            </ComplaintDispatchContext.Provider>
        </ComplaintListContext.Provider>
    );
};
export { ComplaintListProvider,ComplaintListContext, ComplaintDispatchContext };