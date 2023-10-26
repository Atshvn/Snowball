import { ADD_MENU, ADD_SETTING,ADD_NEWS } from "./Contants";

export const addMenu = (payload) => ({
  type: ADD_MENU,
  payload,
});

export const addSetting = (payload) => ({
  type: ADD_SETTING,
  payload,
});
export const addNews = (payload) => ({
  type: ADD_NEWS,
  payload,
});

