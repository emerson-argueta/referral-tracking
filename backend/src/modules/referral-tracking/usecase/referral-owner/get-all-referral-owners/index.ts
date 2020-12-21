import { referralOwnerRepo } from "../../../repo";
import { GetAllReferralOwners } from "./GetAllReferralOwners";
import { GetAllReferralOwnersController } from "./GetAllReferralOwnersController";


const getAllReferralOwners = new GetAllReferralOwners(referralOwnerRepo);
const getAllReferralOwnersController = new GetAllReferralOwnersController(getAllReferralOwners);

export {
    getAllReferralOwners,
    getAllReferralOwnersController
}