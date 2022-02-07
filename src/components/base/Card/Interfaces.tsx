export interface RequestsType {
  id?: number;
  title?: string;
  client?: string;
  due?: string | Date;
  count?: number;
  amount?: number;
  method?: string[];
  material?: string[];
  status?: string;
}

export interface CardProps {
  requests: RequestsType;
  width: number | string;
  height: number | string;
}

export interface Wrapper {
  width: number | string;
  height: number | string;
}
