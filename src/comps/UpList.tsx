
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar/Avatar";
import Badge from "@mui/material/Badge/Badge";
import Box from "@mui/material/Box/Box";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import React, { useEffect, useState } from "react";
import { IPortalUPList } from "../common/interface";
import user from '../status'
const { getWebDynamicUPList }  = user;



const UpList = ({ uid, onUpClick }: { uid?: string, onUpClick?: (mid?: string) => void }) => {

    const [list, setlist] = useState<IPortalUPList[]>();
    const [expendAnater, setexpendAnater] = useState(false);

    useEffect(() => {
        if (uid) {
            handleClickUPer();
            getUPList();
        }
    }, [uid]);

    const getUPList = () => {
        getWebDynamicUPList().then(list => {
            // const has_update = list?.filter(up => up.has_update)
            setlist(list)
            // has_update && chrome.action.setBadgeText({ text: has_update.length.toString() });
        })
    }

    const handleClickUPer = async (mid?: string) => {
        onUpClick && onUpClick(mid)
        if (mid) {
            // mid && getUPList();
            const newList = list?.map(up => {
                if (up.mid == mid) {
                    up['has_update'] = false
                }
                return up
            })

            setlist(newList)
        }
    }



    return  <ul className="up-list" >

            <Box
                sx={{ overflowX: expendAnater ? "auto" : "hidden" }}
                onMouseEnter={setexpendAnater.bind(this, true)}
                onMouseLeave={setexpendAnater.bind(this, false)}
            >

                <Box component='span' sx={{
                    display: "inline-block",
                    marginLeft: "8px",
                    marginRight: "8px",
                    verticalAlign: "middle"
                }}>
                    <Tooltip title={"ALL"} arrow>
                        <Avatar alt={"ALL"} onClick={() => handleClickUPer && handleClickUPer()}>{"ALL"}</Avatar>
                    </Tooltip>
                </Box>

                {list?.map(up =>
                    <Badge
                        key={up.mid}
                        overlap="circular"
                        color="warning"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant={up.has_update ? "dot" : undefined}
                        sx={{
                            mx: 1,
                            transition: "margin .5s",
                            // display: up.has_update ? "black" : "none"
                        }}
                    >
                        <Tooltip title={up.uname} arrow>
                            <Avatar src={up.face} alt={up.uname} sx={{ cursor: 'pointer' }} onClick={() => handleClickUPer && handleClickUPer(up.mid)}></Avatar>
                        </Tooltip>
                    </Badge>
                )}
            </Box>


        </ul>
        

}

export default UpList;