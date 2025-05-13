const cds = require("@sap/cds");

// Set credentials from environment variables
const po = cds.env.requires.PURCHASEORDER;
if (po && po.credentials && po.credentials.authentication === "BasicAuthentication") {
    po.credentials.username = process.env.BT_USERNAME;
    po.credentials.password = process.env.BT_PASSWORD;
}

const bp = cds.env.requires.BUSINESS_PARTNER;
if (bp && bp.credentials && bp.credentials.authentication === "BasicAuthentication") {
    bp.credentials.username = process.env.BT_USERNAME;
    bp.credentials.password = process.env.BT_PASSWORD;
}

const bm = cds.env.requires.BOM;
if (bm && bm.credentials && bm.credentials.authentication === "BasicAuthentication") {
    bm.credentials.username = process.env.BT_USERNAME;
    bm.credentials.password = process.env.BT_PASSWORD;
}


// Start the CAP server
module.exports = cds.server;
