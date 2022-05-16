import { createStore, Store } from "vuex";
import book, { TagGather } from "./modules/book";
import { InjectionKey } from "vue";

export type State = {
    book: TagGather,
};

//创建injectionKey
export const key: InjectionKey<Store<State>> = Symbol("");

export default createStore<State>({
    modules: {
        book,
    }
})