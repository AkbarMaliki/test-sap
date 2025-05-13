using { BUSINESS_PARTNER } from './external/BUSINESS_PARTNER';

service BusinessPartnerService {
    entity BusinessPartner as projection on BUSINESS_PARTNER.A_BusinessPartner;
}


