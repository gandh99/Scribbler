import { getShareDeleteNote } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'
import { INote } from '../../interfaces/notes'

export const getAllNotesAction = (success: Function, error: Function) => (dispatch: any) => {
    axios
        .get('/notes/get-all-notes')
        .then(res => {
            let allNotes: INote[] = res.data.data

            // Sort by latest first
            allNotes.sort((note1: INote, note2: INote) => {
                return (note1.updatedAt! > note2.updatedAt!) ? -1 : 1
            })

            dispatch({
                type: getShareDeleteNote.GET_ALL_NOTES_SUCCESS,
                payload: allNotes
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: getShareDeleteNote.GET_ALL_NOTES_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error()
        })
}

export const shareNoteAction = (note: INote, recipient: string, success: Function, error: Function) => (dispatch: any) => {
    axios
        .post('/notes/share', { note, recipient })
        .then(res => {
            dispatch({
                type: getShareDeleteNote.SHARE_NOTE_SUCCESS,
                payload: res.data
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: getShareDeleteNote.SHARE_NOTE_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error(err.response.data)
        })
}

export const deleteNoteAction = (note: INote, success: Function, error: Function) => (dispatch: any) => {
    axios
        .delete(`/notes/delete/${note.noteId}`)
        .then(res => {
            dispatch({
                type: getShareDeleteNote.DELETE_NOTE_SUCCESS,
                payload: res.data
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: getShareDeleteNote.DELETE_NOTE_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error()
        })
}