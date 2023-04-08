import { provideData } from '.';
import { usePostmanWithOut } from '@/store/postmanStore';
import { storeToRefs } from 'pinia';

const postman = { ...storeToRefs(usePostmanWithOut()) };

export type IProvide = typeof postman;

export function useData(): void {
  provideData(postman);
}
