const cds = require('@sap/cds');

module.exports = async function (srv) {
    const remote = await cds.connect.to('PURCHASEORDER');

    srv.on('READ', 'PurchaseOrder', async (req) => {
        req.query.SELECT.count = false;
        return remote.run(req.query);
    });
};
