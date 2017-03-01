export interface ISaConfig {
  label?: string;
  itemId: string;
  externalSystemCorrelationId?: string;
  number?: number;
  qualifiedNumber?: string;
  answerType?: string;
  required?: boolean;
  editable?: boolean;
  affectsVisibility?: boolean;
  precision?: number;
  allowAttachmentsAndComments?: boolean;
  vendorFieldMapping?: string;
  section?: boolean;
}
