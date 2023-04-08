import { IPostmanStore, IQuery } from '@/components/postMan/src/types';
import { store } from '.';
import { defineStore } from 'pinia';
import type { Store } from 'pinia';
import instance from '@/utils/request';

export const usePostman = defineStore('usePostman', {
  state: (): IPostmanStore => ({
    host: 'http://127.0.0.1:8080', //服务器地址 域名(IP)+端口号
    time: 0, // 更新间隔  0:只在初始化时调用
    timeUnit: 's', // 更新时间间隔的单位
    timeUnits: [
      { value: 's', label: '秒' },
      { value: 'ms', label: '毫秒' },
      { value: 'min', label: '分' },
      { value: 'h', label: '时' },
      { value: 'd', label: '天' }
    ],

    requestAddress: '', //请求地址
    requestMethod: 'GET', //请求方法
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD', 'PATCH'],

    params: [],
    headers: [],
    body: []
  }),
  actions: {
    pushParamsData(paramsData: IQuery) {
      this.params.push(paramsData);
      this.getAddrWithParams();
    },
    getAddrWithParams() {
      let params = '';
      this.params.map((p) => {
        console.log(p, '232');
        if (!p.hasSplit) {
          if (this.requestAddress.lastIndexOf('?') === -1) {
            params += `?${p.KEY}=${p.VALUE}`;
          } else params += `&${p.KEY}=${p.VALUE}`;
          p.hasSplit = true;
        }
      });
      this.requestAddress += params;
    },
    requestNetwork() {
      instance.request({
        url: this.url,
        method: this.requestMethod,
        data: this.body
      });
    }
  },
  getters: {
    url: (state: IPostmanStore): string => state.host + state.requestAddress
  }
});

// 在组件 setup 外部使用 store
export function usePostmanWithOut(): Store<'usePostman', IPostmanStore> {
  return usePostman(store) as Store<'usePostman', IPostmanStore>;
}
