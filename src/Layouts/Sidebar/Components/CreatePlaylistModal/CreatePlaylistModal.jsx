import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { createUserPlaylist, userPlaylistsActions } from '../../../../Store/userPlaylists';

export default function CreatePlaylistModal() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)
    const open = useSelector(state => state.userPlaylist.openModal);

    const playlistName = React.useRef(null)
    const playlistDescription = React.useRef(null)

    const handleClose = () => {
        dispatch(userPlaylistsActions.ToggleModal())
    }



    const handleCreate = () => {


        const name = playlistName.current.value;
        const description = playlistDescription.current.value;

        if (user) {
            dispatch(createUserPlaylist([user.id, name, description]))
        }
        handleClose();
    }

    return (

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create Playlist</DialogTitle>
            <DialogContent>

                <TextField
                    label="Playlist Name"
                    fullWidth
                    required
                    inputRef={playlistName}
                    sx={{ marginBlock: "1em" }}
                />
                <TextField
                    label="Description"
                    fullWidth
                    required
                    inputRef={playlistDescription}
                    sx={{ marginBlock: "1em" }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleCreate}>Create Playlist</Button>
            </DialogActions>
        </Dialog>

    );
}