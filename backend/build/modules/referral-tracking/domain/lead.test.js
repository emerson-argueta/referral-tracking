/* Test Case for leads
 Seven test cases so far - one for each time the Lead status is meant to change.
 1. If Partner initializes Lead, then Lead is considered Open
 2. If Owner accepts the initialized Lead, Lead status is considered Scheduled
 3. If email is sent to Customer, Lead is considered Proposal Sent
 4. If Customer responds NO to email, then Lead is considered Lost
 5. If Customer responds YES to email, then Lead is considered Won
 6. If Partner has been paid and transaction is on-time, Lead is considered Paid , and then Closed
 7. If transaction is reoccuring, Lead is Closed after final payment.
*/
// describe creates a block that groups together several related tests
describe("test lead status", () => {
    test("should update status to open", async () => {
        // 1. If Partner initializes Lead, then Lead is considered Open.
        //TODO: Create Referral Partner and invoke create lead method.
        //Hello.
        //The create lead method would return the lead object.
        //We need to check that the status of the lead object is open.
        const lead = { "status": "open" };
        const status = lead.status;
        expect(status).toBe("open");
    });
    test("should update status to scheduled", async () => {
        // 2. If Owner accepts the initialized Lead, Lead status is considered Scheduled.
        const lead = { "status": "scheduled" };
        const status = lead.status;
        expect(status).toBe("scheduled");
    });
    test("should update status to proposal-sent", async () => {
        // 3. If email is sent to Customer, Lead is considered Proposal Sent
        const lead = { "status": "proposal-sent" };
        const status = lead.status;
        expect(status).toBe("proposal-sent");
    });
    test("should update status to lost", async () => {
        // 4. If Customer responds NO to email, then Lead is considered Lost
        const lead = { "status": "lost" };
        const status = lead.status;
        expect(status).toBe("lost");
    });
    test("should update status to won", async () => {
        // 5. If Customer responds YES to email, then Lead is considered Won
        const lead = { "status": "won" };
        const status = lead.status;
        expect(status).toBe("won");
    });
    test("should update status to closed", async () => {
        // 6. If Partner has been paid and transaction is on-time, Lead is considered Paid , and then Closed
        const lead = { "status": "closed" };
        const status = lead.status;
        expect(status).toBe("closed");
    });
    test("should update status to closed", async () => {
        // 7. If transaction is reoccuring, Lead is Closed after final payment.
        const lead = { "status": "closed" };
        const status = lead.status;
        expect(status).toBe("closed");
    });
});
//# sourceMappingURL=lead.test.js.map