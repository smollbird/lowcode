import { provide, inject } from 'vue';
import { IProvide } from './useData';
const postmanId = Symbol('postman');
export function provideData(value: IProvide): void {
  provide(postmanId, value);
}
export function getContext(): IProvide {
  return inject(postmanId) as IProvide;
}
