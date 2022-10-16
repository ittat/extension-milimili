export interface IRespond<T> {
    code: number,
    message: string,
    ttl: number,
    data: T
}


export interface IWebDynamicRespond {
    hasmore: boolean,
    offset: string,
    items: IWebDynamic[],
    update_baseline:string
}

export interface IPortalUPList { 
    face:string,
    has_update:boolean,
    mid:string,
    uname:string
}
export interface IPortal {
    live_users:{
        count:number,
        group:string,
        item?:{
            face: string,
            jump_url: string,
            mid: number,
            name: string,
            title:string
        }[]
    },
    my_info:{
        dyns:number,
        face:string,
        follower:number,
        following:number,
        mid:number,
        name:string
    },
    up_list:IPortalUPList[]
}

export interface IUpdate {
    update_num: number 
}

export interface IModules {

    module_author: {
        face: string,
        jump_url: string,
        mid: number,
        name: string,
        pub_action: string,
        pub_time: string,
    },
    module_dynamic: {
        additional?: string,
        desc?: {
            rich_text_nodes?: any[],
            text?: string
        },
        major?: {
            type?: 'MAJOR_TYPE_ARCHIVE' | 'MAJOR_TYPE_LIVE_RCMD' | 'MAJOR_TYPE_DRAW',
            archive?: {
                aid: string,
                bvid: string,
                cover: string,
                desc: string,
                duration_text: string,
                jump_url: string,
                title: string,
                type: number,
            },
            live_rcmd?: {
                content: string// string json数据
            },
            draw?: {
                id: number,
                items: IDraw[]
            }
        }
    }

}

export interface IDraw {
    height: number,
    width: number,
    size: number,
    src: string,
    tags: string[]
}

export interface IWebDynamic {
    basic: any,
    modules: IModules,
    orig: IWebDynamic,
    id_str: string,
    type: "DYNAMIC_TYPE_WORD" | "DYNAMIC_TYPE_LIVE_RCMD" | "DYNAMIC_TYPE_AV" | "DYNAMIC_TYPE_FORWARD" | "DYNAMIC_TYPE_DRAW", // 发文字|直播| 视频|转发动态| 多图
    visible: boolean
}


export interface  IUser {
    face: string,
    sign: string,
    mid: string,
    name: string,
    attentions: number[],

}

export interface IUserRespond {
    code: number,
    ts: number,
    card: IUser
}