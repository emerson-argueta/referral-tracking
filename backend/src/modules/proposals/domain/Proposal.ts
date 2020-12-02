interface ProposalProps {
    customerId: string;
    status: string;
}

export class Proposal {
    props: ProposalProps

    private constructor(props: ProposalProps) {
        this.props = props
    }

    public static create(props: ProposalProps): Proposal {
        const proposal = new Proposal(props)

        return proposal
    }
}