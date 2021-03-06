import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoteHeader from './header/NoteHeader'
import NoteBody from './body/NoteBody'
import TypingArea from './footer/TypingArea'
import { useDispatch } from 'react-redux'
import { clearNoteDataAction } from '../redux/actions/saveNoteActions'
import { resetTimeElapsedAction, resetDurationAction } from '../redux/actions/videoPlayerActions'
import { resetActiveCategoryAction } from '../redux/actions/categoryActions'

export default function CreateNote({ resetActiveCategory = true }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        if (resetActiveCategory) {
            dispatch(resetActiveCategoryAction())
        }
        return () => {
            dispatch(resetTimeElapsedAction())
            dispatch(resetDurationAction())
            dispatch(clearNoteDataAction())
            dispatch(resetActiveCategoryAction())
        }
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.contentArea}>
                <div className={classes.headerArea}>
                    <NoteHeader />
                </div>
                <div className={classes.bodyArea}>
                    <NoteBody />
                </div>
            </div>
            <div className={classes.footerArea}>
                <TypingArea />
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '100vh',
        width: '100%',
    },

    // Content area (= header + body)
    contentArea: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '3.5rem',
        margin: '1rem',
    },
    headerArea: {
        marginBottom: '1rem'
    },
    bodyArea: {
        width: '100%',
        height: '80%',
    },

    // Footer area
    footerArea: {
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: '3.5rem',
        overflow: 'hidden',

        [theme.breakpoints.down('xs')]: {
            position: 'fixed'
        },
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
        },
    }
}))