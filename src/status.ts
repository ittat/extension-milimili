import { IPortal, IRespond, IUpdate, IWebDynamicRespond } from "./common/interface";
import { apiFetch, IConfig } from "./http/fetch";

const accountApiHost = 'https://account.bilibili.com/api/';
const webDynamicApiHost = 'https://api.bilibili.com/x/polymer/web-dynamic/v1';


export const getUPerWebDynamic = () => {
  // https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/all?host_mid=18478705&offset=&page=1
}


class UserStore {

  update_baseline: string | undefined;
  islogin:boolean = false;

  
  constructor(){

    
  }


getAccountInfoUrl = async (mid: string) => {
  const config: IConfig = {
    url: accountApiHost + 'member/getCardByMid?mid=' + mid,
    method: "GET"
  }

  return await apiFetch(config);
}

/**
 * 获取最新动态Posts
 * @param page 
 * @returns 
 */
 getWebDynamic = async ({ page = 1, mid = '', offset = '' }) => {
  const config: IConfig = {
    url: webDynamicApiHost + `/feed/all?type=all&page=${page}&host_mid=${mid}&offset=${offset}`,
    method: "GET",
    credentials: "include",
  }
  const res = await apiFetch<IRespond<IWebDynamicRespond>>(config);
  if (res) {
    if (res.data && res.data.update_baseline) {
      this.update_baseline = res.data.update_baseline;
    }

    return res.data.items
  }
  return undefined
}

getWebDynamicUPList = async () => {
  const config: IConfig = {
    url: webDynamicApiHost + `/portal`,
    method: "GET",
    credentials: "include",
  }
  const res = await apiFetch<IRespond<IPortal>>(config);

  if (res) {
    return res.data.up_list
  }
  return undefined
}

checkHasUpdate = async () => {
  if (!this.update_baseline) {
    await this.getWebDynamic({})
  }
  const config: IConfig = {
    url: webDynamicApiHost + `/feed/all/update?type=all&update_baseline=${this.update_baseline}`,
    method: "GET",
    credentials: "include",
  }
  const response = await apiFetch<IRespond<IUpdate>>(config);

  if (response && response.data) {
    return response.data.update_num
  }
  return undefined
}

checkHasLogin = async () => {
  if (this.islogin){
    return true
  }
  const config: IConfig = {
    url: webDynamicApiHost + `/portal`,
    method: "GET",
    credentials: "include",
  }

  const response = await apiFetch<IRespond<IUpdate>>(config);

  if (response &&response.code == 0) {
    this.islogin = true
    
  }else{

    this.islogin = false
  }

  return this.islogin

  // return new Promise<boolean>((r) => {
  //   chrome.cookies.get({ url: 'https://account.bilibili.com', name: 'SESSDATA' }, (cookie) => {
  //     if (cookie && cookie.value) {
  //       r(true)
  //     } else {
  //       r(false)
  //     }
  //   })
  // })
}

getMyUid = () => {
  // return myUid;
  return new Promise<string | null>((r) => {
    chrome.cookies.get({ url: 'https://account.bilibili.com', name: 'DedeUserID' }, (cookie) => {
      if (cookie && cookie.value) {
        r(cookie.value)
      } else {
        r(null)
      }
    })
  })
}

}

const userStore = new UserStore();

export default userStore;