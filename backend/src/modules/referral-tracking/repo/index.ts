// import { Models } from "../../../shared/infrastructure/database/sequelize/models";
import { ClientRepo } from "./implementations/SequelizeClientRepo";
import { ProjectRepo } from "./implementations/SequelizedProjectRepo";
import { LeadRepo } from "./implementations/SequelizeLeadRepo";
import { ReferralPartnerRepo } from "./implementations/SequelizeReferralPartnerRepo";

const clientRepo = new ClientRepo({})
const referralPartnerRepo = new ReferralPartnerRepo({})
const leadRepo = new LeadRepo({})
const projectRepo = new ProjectRepo({})

export {
    clientRepo,
    referralPartnerRepo,
    leadRepo,
    projectRepo
}