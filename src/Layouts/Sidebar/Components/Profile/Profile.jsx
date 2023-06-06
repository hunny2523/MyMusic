import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Box, Typography } from '@mui/material'

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
                    p: 2,

                }}
                >
                    {user.image &&
                        <Avatar
                            alt="Remy Sharp"
                            src={user?.image[0]?.url}
                            sx={{ width: 80, height: 80, boxShadow: 4 }}
                        />
                    }
                    <Typography variant="body" padding="10px" fontWeight="bold" color="gray">
                        {user?.name}
                    </Typography>
                </Box>
            }
        </Fragment>
    )
}

export default Profile