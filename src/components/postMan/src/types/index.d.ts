import { IQueryNav } from './query.d';
import { IHeader, IRequestPart } from './host';
export * from './host';
export * from './query';

export interface IPostmanStore extends IHeader, IRequestPart, IQueryNav {}
