import { IQueryNav } from './query.d';
import { IHeader, IRequestPart } from './header.d';
export * from './header';
export * from './query';

export interface IPostmanStore extends IHeader, IRequestPart, IQueryNav {}
