export interface TableHead {
  name: string;
  key: string;
  sortable?: boolean;
  rowspan?: number | null;
  colspan?: number | null;
  align?: string;
}