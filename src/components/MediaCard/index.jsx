import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { AiFillLike, AiFillEye } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi';

function MediaCard(props) {
    return (
        <Box sx={{ position: 'relative' }}>
            <img src={props.media.largeImageURL} alt="Pixabay" width="100%" />

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    ':hover .content': {
                        opacity: '1', // opacity is like the blur level goes from 0 to 1
                    },
                }}
            >
                <Box
                    className="content"
                    sx={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                        opacity: '0',
                        transition: '400ms',
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing="8px"
                        sx={{ position: 'absolute', top: '10px', left: '10px' }}
                    >
                        <img
                            src={props.media.userImageURL}
                            alt="Username"
                            height="30px"
                            width="30px"
                            style={{ borderRadius: '50%' }}
                        />
                        <Typography sx={{ color: 'white' }}>
                            {props.media.user}
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing="12px"
                        sx={{ position: 'absolute', bottom: '10px', left: '10px' }}
                    >
                        <Stack direction="row" alignItems="center" spacing="8px">
                            <AiFillLike color="white" />
                            <Typography sx={{ color: 'white' }}>
                                {props.media.likes}
                            </Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing="8px">
                            <AiFillEye color="white" />
                            <Typography sx={{ color: 'white' }}>
                                {props.media.views}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack sx={{ position: 'absolute', right: '10px', bottom: '10px' }}>
                        <IconButton
                            sx={{ p: 0 }}
                            href={props.media.largeImageURL}
                            target="_blank"
                        >
                            <BiDownload color="white" size="28px" />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default MediaCard;
