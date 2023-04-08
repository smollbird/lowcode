interface IQuery {
  key: string;
  value: string;
  description: string;
}

export interface IQueryNav {
  params: IQuery[];
  headers: IQuery[];
  body: IQuery[];
}
