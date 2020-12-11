import { Models } from "../../../shared/infrastructure/database/sequelize/models";
import { ClientRepo } from "./implementations/SequelizeClientRepo";
import { LeadRepo } from "./implementations/SequelizeLeadRepo";
import { ReferralPartnerRepo } from "./implementations/SequelizeReferralPartnerRepo";

const clientRepo = new ClientRepo(Models)
const referralPartnerRepo = new ReferralPartnerRepo(Models)
const leadRepo = new LeadRepo(Models)