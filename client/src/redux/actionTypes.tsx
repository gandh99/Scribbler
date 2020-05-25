export const authentication = {
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAIL: 'REGISTER_FAIL',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
    TOKEN_REFRESH_SUCCESS: 'TOKEN_REFRESH_SUCCESS',
    TOKEN_REFRESH_FAIL: 'TOKEN_REFRESH_FAIL'
}

export const videoPlayer = {
    REQUEST_FOR_TIME_ELAPSED: 'REQUEST_FOR_TIME_ELAPSED',
    RESPOND_WITH_TIME_ELAPSED: 'RESPOND_WITH_TIME_ELAPSED',
    RESET_TIME_ELAPSED: 'RESET_TIME_ELAPSED',
    SET_DURATION: 'SET_DURATION',
    RESET_DURATION: 'RESET_DURATION',
    SET_SEEK_TIME: 'SET_SEEK_TIME',
    RESET_SEEK_TIME: 'RESET_SEEK_TIME',
}

export const saveNote = {
    SAVE_NOTE_ID: 'SAVE_NOTE_ID',
    SAVE_TITLE: 'SAVE_TITLE',
    SAVE_VIDEO_URL: 'SAVE_VIDEO_URL',
    SAVE_SCRIBBLE: 'SAVE_SCRIBBLE',
    SAVE_ALL_SCRIBBLES: 'SAVE_ALL_SCRIBBLES',
    SAVE_NOTE_TO_DATABASE_SUCCESS: 'SAVE_NOTE_TO_DATABASE_SUCCESS',
    SAVE_NOTE_TO_DATABASE_FAIL: 'SAVE_NOTE_TO_DATABASE_FAIL',
    CLEAR_NOTE_DATA: 'CLEAR_NOTE_DATA'
}

export const getOrDeleteNote = {
    GET_ALL_NOTES_SUCCESS: 'GET_ALL_NOTES_SUCCESS',
    GET_ALL_NOTES_FAIL: 'GET_ALL_NOTES_FAIL',
    DELETE_NOTE_SUCCESS: 'DELETE_NOTE_SUCCESS',
    DELETE_NOTE_FAIL: 'DELETE_NOTE_FAIL',
}

export const category = {
    CREATE_CATEGORY_SUCCESS: 'CREATE_CATEGORY_SUCCESS',
    CREATE_CATEGORY_FAIL: 'CREATE_CATEGORY_FAIL',
    GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_FAIL: 'GET_CATEGORIES_FAIL',
    UPDATE_CATEGORY_SUCCESS: 'UPDATE_CATEGORY_SUCCESS',
    UPDATE_CATEGORY_FAIL: 'UPDATE_CATEGORY_FAIL',
    DELETE_CATEGORY_SUCCESS: 'DELETE_CATEGORY_SUCCESS',
    DELETE_CATEGORY_FAIL: 'DELETE_CATEGORY_FAIL',
    SET_ACTIVE_CATEGORY: 'SET_ACTIVE_CATEGORY',
    RESET_ACTIVE_CATEGORY: 'RESET_ACTIVE_CATEGORY',
}

export const error = {
    GET_ERRORS: 'GET_ERRORS',
    CLEAR_ERRORS: 'CLEAR_ERRORS'
}

export const globalDisplay = {
    SHOW_SNACKBAR: 'SHOW_SNACKBAR',
    HIDE_SNACKBAR: 'HIDE_SNACKBAR',
    SHOW_LOADING_BACKGROUND: 'SHOW_LOADING_BACKGROUND',
    HIDE_LOADING_BACKGROUND: 'HIDE_LOADING_BACKGROUND',
}