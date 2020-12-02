interface CustomerProps {
    customerId: string;
    customerName: string;
    customerContact: string;
}


export class Customer {
    props: CustomerProps

    get customerName(): string {
        return this.props.customerName
    }

    get customerContact(): string {
        return this.props.customerContact
    }
    private constructor(props: CustomerProps) {
        this.props = props

    }
    public static create(props: CustomerProps): Customer {
        const customer = new Customer(props)
        return customer
    }
}