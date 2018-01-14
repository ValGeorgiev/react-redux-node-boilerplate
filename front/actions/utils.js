import {
  SET_LANGUAGE
} from './const'

export function setLanguage (lang) {
  return (dispatch, getState) => {
    dispatch({
      payload: lang,
      type: SET_LANGUAGE
    })
  }
}
