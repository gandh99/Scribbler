import { saveNote } from '../actionTypes'
import { IScribble, INote } from '../../interfaces/notes'
import { sortByTimeElapsed } from '../../utils/createNote'

interface IInitialState {
    newScribble?: IScribble,
    allScribbles: IScribble[],
    savedNote?: INote
}

const initialState = {
    // For recording data related to the note itself
    noteId: -1,     // will only be positive if the note already exists
    title: '',
    videoUrl: '',
    allScribbles: [],
    newScribble: { scribbleId: '', timeElapsed: 0, text: '' },

    // For checking if the note was saved to the database
    savedNote: { noteId: '', title: '', videoUrl: '', allScribbles: [] }
} as IInitialState      // Necessary format to include properties not defined in IInitialState

export default function (state = initialState, action: any) {
    switch (action.type) {
        case saveNote.SAVE_NOTE_ID:
            return {
                ...state,
                noteId: action.payload
            }
        case saveNote.SAVE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case saveNote.SAVE_VIDEO_URL:
            return {
                ...state,
                videoUrl: action.payload
            }
        case saveNote.SAVE_SCRIBBLE:
            let didUpdate = false
            let allScribbles: IScribble[] = state.allScribbles.map(scribble => {
                if (scribble.scribbleId === action.payload.scribbleId) {
                    didUpdate = true
                    return action.payload
                }

                return scribble
            })

            if (!didUpdate) {
                allScribbles.push(action.payload)
            }

            return {
                ...state,
                newScribble: action.payload,
                allScribbles: allScribbles
                    .sort((s1: IScribble, s2: IScribble) => sortByTimeElapsed(s1.timeElapsed, s2.timeElapsed))
            }
        case saveNote.DELETE_SCRIBBLE:
            return {
                ...state,
                allScribbles: state.allScribbles
                    .filter(scribble => scribble.scribbleId !== action.payload.scribbleId)
            }
        case saveNote.SAVE_ALL_SCRIBBLES:
            return {
                ...state,
                allScribbles: action.payload
            }
        case saveNote.SAVE_NOTE_TO_DATABASE_SUCCESS:
            return {
                ...state,
                savedNote: action.payload
            }
        case saveNote.SAVE_NOTE_TO_DATABASE_FAIL:
            return {
                ...state,
                savedNote: {}
            }
        case saveNote.CLEAR_NOTE_DATA:
            return {
                ...state,
                noteId: -1,
                title: '',
                videoUrl: '',
                newScribble: { scribble_id: '', timeElapsed: '', text: '' },
                allScribbles: [],
            }
        default:
            return state
    }
}