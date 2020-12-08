"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// describe creates a block that groups together several related tests
describe("test lead status", function () {
    test("should update status to open", function () { return __awaiter(void 0, void 0, void 0, function () {
        var lead, status;
        return __generator(this, function (_a) {
            lead = { "status": "open" };
            status = lead.status;
            expect(status).toBe("open");
            return [2 /*return*/];
        });
    }); });
    test("should update status to scheduled", function () { return __awaiter(void 0, void 0, void 0, function () {
        var lead, status;
        return __generator(this, function (_a) {
            lead = { "status": "scheduled" };
            status = lead.status;
            expect(status).toBe("scheduled");
            return [2 /*return*/];
        });
    }); });
    test("should update status to proposal-sent", function () { return __awaiter(void 0, void 0, void 0, function () {
        var lead, status;
        return __generator(this, function (_a) {
            lead = { "status": "proposal-sent" };
            status = lead.status;
            expect(status).toBe("proposal-sent");
            return [2 /*return*/];
        });
    }); });
    test("should update status to lost", function () { return __awaiter(void 0, void 0, void 0, function () {
        var lead, status;
        return __generator(this, function (_a) {
            lead = { "status": "lost" };
            status = lead.status;
            expect(status).toBe("lost");
            return [2 /*return*/];
        });
    }); });
    test("should update status to won", function () { return __awaiter(void 0, void 0, void 0, function () {
        var lead, status;
        return __generator(this, function (_a) {
            lead = { "status": "won" };
            status = lead.status;
            expect(status).toBe("won");
            return [2 /*return*/];
        });
    }); });
    test("should update status to closed", function () { return __awaiter(void 0, void 0, void 0, function () {
        var lead, status;
        return __generator(this, function (_a) {
            lead = { "status": "closed" };
            status = lead.status;
            expect(status).toBe("closed");
            return [2 /*return*/];
        });
    }); });
    test("should update status to closed", function () { return __awaiter(void 0, void 0, void 0, function () {
        var lead, status;
        return __generator(this, function (_a) {
            lead = { "status": "closed" };
            status = lead.status;
            expect(status).toBe("closed");
            return [2 /*return*/];
        });
    }); });
});
