import React, { createContext, useState } from "react";

const StaffListContext = createContext();
const StaffDispatchContext = createContext();

function StaffListProvider({ children }) {
    const [staffList, setStaffList] = useState([
        {
            StaffId: '#16786',
            Name: 'Samcyril',
            Email: 'j7hX9@example.com',
            Password: '12345',
            Accesses:'Quotation,DC,Enquiry',
            AddedOn: '01/01/2022',
            AddedBy: 'John Doe',
        }
    ]);
    return (
        <StaffListContext.Provider value={staffList}>
            <StaffDispatchContext.Provider value={setStaffList}>
                {children}
            </StaffDispatchContext.Provider>
        </StaffListContext.Provider>
    );
};
export { StaffListProvider,StaffListContext, StaffDispatchContext};