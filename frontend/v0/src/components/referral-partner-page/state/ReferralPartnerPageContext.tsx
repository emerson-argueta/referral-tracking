import { createContext, Dispatch, useContext, useReducer } from "react";
import { TReferralPartnerPage } from "./actions/ReferralPartnerPageActions";
import { ReferralPartnerPageReducer } from "./ReferralPartnerPageReducer";
import { initReferralPartnerPageState, IReferralPartnerPageState } from "./ReferralPartnerPageState";

export const ReferralPartnerPageDispatchContext = createContext<Dispatch<TReferralPartnerPage>>({} as Dispatch<TReferralPartnerPage>);
export const ReferralPartnerPageStateContext = createContext(initReferralPartnerPageState);

export const useReferralPartnerPageContext = (): [IReferralPartnerPageState, Dispatch<TReferralPartnerPage>] => {
    const authState = useContext(ReferralPartnerPageStateContext)
    const authDispatch = useContext(ReferralPartnerPageDispatchContext)
    return [authState, authDispatch]
}

export const ReferralPartnerPageProvider = ({ children }: any) => {
    const [authstate, authDispatch] = useReducer(ReferralPartnerPageReducer, initReferralPartnerPageState);

    return (
        <ReferralPartnerPageStateContext.Provider value={authstate}>
            <ReferralPartnerPageDispatchContext.Provider value={authDispatch}>{children}</ReferralPartnerPageDispatchContext.Provider>
        </ReferralPartnerPageStateContext.Provider>
    );
}