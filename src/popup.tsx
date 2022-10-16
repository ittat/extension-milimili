
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { IWebDynamic } from "./common/interface";
import Media from "./comps/Media";
import SwipeableStepper from "./comps/Swiper";
import UpList from "./comps/UpList";
import user from './status';
import './popup.less';


const { checkHasLogin, getMyUid, getWebDynamic }  = user;

const Popup = () => {
  const [currentURL, setCurrentURL] = useState<string>();
  const [uid, setUid] = useState<string>();
  const [dynamicList, setDymList] = useState<IWebDynamic[]>();
  const swipeableStepperRef = useRef(null)


  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
    });
    init();
  }, []);

  const changeBackground = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            color: "#555555",
          },
          (msg) => {
            console.log("result message:", msg);
          }
        );
      }
    });
  };

  const init = async () => {
    const haslogin = await checkHasLogin();
    if (haslogin) {
      const uid = await getMyUid();
      uid && setUid(uid);
    }


  }

  const handleClickUPer = async (mid?: string) => {

    const items = await getWebDynamic({ mid })


    if (items) {
      setDymList(items);
    }

    // @ts-ignore
    swipeableStepperRef.current?.resetIndex()
  }


  return (
    <div className="popup-page">
      {uid ?
        <>
          <UpList uid={uid} onUpClick={handleClickUPer} />
          {/* @ts-ignore */}
          <SwipeableStepper ref={swipeableStepperRef}>
            {dynamicList?.map(item => <Media key={item.id_str} data={item} />) || <Box></Box>}
          </SwipeableStepper>
        </>
        : <div  className="login-ui">
          {/* <img src='/bilibili.gif' width={100}/> */}
          <div> Welcome! Please Login first.</div>
        <Button color="primary" onClick={() => { window.open('https://passport.bilibili.com/login', '_blank') }}>login</Button>
        </div>
      }
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById("root"));
