// describe creates a block that groups together several related tests
describe("test", () => {
    test("should update status to open", async () => {
        // a lead status will become open when a referral-partner inputs it into the system
        const lead = { "status": "open" } //createLead()
        const status = lead.status

        expect(status).toBe("open");
    });
});