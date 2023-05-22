import { Avatar, Box, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

    const user = useSelector((state) => state.auth.user)

    return (

        <Fragment>
            {user &&

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 1,
                    m: 1,
                }}
                >
                    {user.image &&
                        <Avatar
                            alt="Remy Sharp"
                            src={user.image[0].url}
                            sx={{ width: 100, height: 100 }}
                        />
                    }
                    <Typography variant="h6" gutterBottom>
                        {user.name}
                    </Typography>
                </Box>
            }
        </Fragment>
    )
}

export default Profile