using { BOM } from './external/BOM';

service BoMService {
    entity BoM as projection on BOM.MaterialBOM;
}
