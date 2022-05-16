import { Module } from "vuex";
import { State } from "../index";

type Tag = {
    //书签名称
    tagName: string,
    //书签链接
    tagUrl: string,
    //书签图标链接
    tagIcon: string,
}

export type TagGather = {
    tagInfo: Tag[],
};

export default ({
    namespaced: true,
    state: {
        tagInfo: localStorage.getItem("tagInfo") ? JSON.parse(localStorage.getItem("tagInfo") || "[]") : [],
    },
    mutations: {
        //添加书签
        addTagInfo(state, ti: Tag) {
            state.tagInfo.push(ti);
            localStorage.setItem("tagInfo", JSON.stringify(state.tagInfo));
        },
        //删除当前书签
        removeCurTagInfo(state, i: number) {
            state.tagInfo.splice(i, 1);
            localStorage.setItem("tagInfo", JSON.stringify(state.tagInfo));
        },
        //修改当前书签
        changeCurTagInfo(state, ta) {
            state.tagInfo.splice(ta[0], 1, ta[1]);
            localStorage.setItem("tagInfo", JSON.stringify(state.tagInfo));
        },
    },
}) as Module<TagGather, State>