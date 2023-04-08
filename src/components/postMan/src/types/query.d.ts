interface IQuery {
  id: string;
  KEY: string;
  VALUE: string;
  DESCRIPTION: string;
  hasSplit: boolean;
}

export interface IQueryNav {
  params: IQuery[];
  headers: IQuery[];
  body: IQuery[];
}
