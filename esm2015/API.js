"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
var axios_1 = __importDefault(require("axios"));
var API = /** @class */ (function () {
    function API(baseURL) {
        this.api = axios_1.default.create({ baseURL: baseURL });
    }
    API.prototype.config = function (options) {
        this.api.defaults.headers.common["Version"] = options.version;
        this.api.defaults.headers.common["X-CorrelationID"] = options.correlationId;
        if (options.userLanguage) {
            this.api.defaults.headers.common["UserLanguage"] = options.userLanguage;
        }
        this.api.defaults.headers.common["UserAccountIdentifier"] = options.userAccountIdentifier;
        if (options.partnerName) {
            this.api.defaults.headers.common["PartnerName"] = options.partnerName;
        }
        if (options.callbackUrl) {
            this.api.defaults.headers.common["X-Callback-URL"] = options.callbackUrl;
        }
        this.api.defaults.headers.common["Cache-Control"] = "no-cache";
    };
    return API;
}());
exports.API = API;
//# sourceMappingURL=API.js.map