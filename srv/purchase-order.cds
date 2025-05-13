using { PURCHASEORDER } from './external/PURCHASEORDER';

service PurchaseOrderService {
    entity PurchaseOrder as projection on PURCHASEORDER.A_PurchaseOrder;
}
