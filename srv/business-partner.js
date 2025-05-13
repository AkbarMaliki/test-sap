const cds = require('@sap/cds');

module.exports = async function (srv) {
    const remote = await cds.connect.to('BUSINESS_PARTNER');

    srv.on('READ', 'BusinessPartner', async (req) => {
        return remote.run(req.query);
    });
};
