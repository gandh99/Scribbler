import { notifications } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'
import { INote } from '../../interfaces/notes'
import { ISharedNote } from '../../interfaces/notifications'

export const shareNoteAction = (note: INote, recipientUsername: string, success: Function, error: Function) => (dispatch: any) => {
    axios
        .post('/notifications/notes/share', { note, recipientUsername })
        .then(res => {
            dispatch({
                type: notifications.SHARE_NOTE_SUCCESS,
                payload: res.data
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: notifications.SHARE_NOTE_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error(err.response.data)
        })
}

export const getNotesSharedWithMeAction = () => (dispatch: any) => {
    axios
        .get('/notifications/notes/shared-with-me')
        .then(res => {
            dispatch({
                type: notifications.GET_SHARED_NOTES_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: notifications.GET_SHARED_NOTES_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
        })
}

export const markSharedNotesAsSeenAction = () => (dispatch: any) => {
    axios
        .post('/notifications/notes/mark-as-seen')
        .then(res => {
            dispatch({
                type: notifications.MARK_SHARED_NOTES_AS_SEEN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: notifications.MARK_SHARED_NOTES_AS_SEEN_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
        })
}

export const respondToSharedNoteAction = (sharedNote: ISharedNote, accept: boolean) => (dispatch: any) => {
    axios
        .post('/notifications/notes/respond', { sharedNote, accept })
        .then(res => {
            dispatch({
                type: notifications.RESPOND_TO_SHARED_NOTE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: notifications.RESPOND_TO_SHARED_NOTE_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
        })
}