import { createContext, Dispatch, useContext, useReducer } from "react";
import { TReferralPartnerPage } from "./actions/ReferralPartnerPageActions";
import { ReferralPartnerPageReducer } from "./ReferralPartnerPageReducer";
import { initReferralPartnerPageState, IReferralPartnerPageState } from "./ReferralPartnerPageState";

export const ReferralPartnerPageDispatchContext = createContext<Dispatch<TReferralPartnerPage>>({} as Dispatch<TReferralPartnerPage>);
export const ReferralPartnerPageStateContext = createContext(initReferralPartnerPageState);

export const useReferralPartnerPageContext = (): [IReferralPartnerPageState, Dispatch<TReferralPartnerPage>] => {
    const referralPartnerPageState = useContext(ReferralPartnerPageStateContext)
    const referralPartnerPageDispatch = useContext(ReferralPartnerPageDispatchContext)
    return [referralPartnerPageState, referralPartnerPageDispatch]
}

export const ReferralPartnerPageProvider = ({ children }: any) => {
    const [referralPartnerPagestate, referralPartnerPageDispatch] = useReducer(ReferralPartnerPageReducer, initReferralPartnerPageState);

    return (
        <ReferralPartnerPageStateContext.Provider value={referralPartnerPagestate}>
            <ReferralPartnerPageDispatchContext.Provider value={referralPartnerPageDispatch}>{children}</ReferralPartnerPageDispatchContext.Provider>
        </ReferralPartnerPageStateContext.Provider>
    );
}