import user from './status'

const { checkHasLogin, checkHasUpdate }  = user;

async function polling() {
  setTimeout(polling, 1000 * 60);
  const islogin = await checkHasLogin()
  if (islogin) {
      const hasUpdate = await checkHasUpdate()
      hasUpdate && chrome.action.setBadgeText({ text: hasUpdate.toString() });
  }

}

polling();
