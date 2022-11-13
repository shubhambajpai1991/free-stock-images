import React from 'react';
import {
    Box,
    Button,
    Stack,
    Typography,
    Paper,
    IconButton,
    InputBase,
} from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import Video from '../../assets/search-bar-video.mp4';

function SearchBar(props) {
    return (
        <Box sx={{ position: 'relative' }}>
            <video
                width="100%"
                height="400"
                autoPlay
                loop
                muted
                playsInline
                style={{
                    objectFit: 'cover',
                    filter: 'brightness(60%)',
                }}
            >
                <source src={Video} type="video/mp4" />
            </video>

            <Stack
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                spacing="32px"
            >
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: { xs: '24px', md: '32px' },
                        whiteSpace: 'nowrap',
                        fontWeight: '600',
                    }}
                >
                    Best free stock images.
                </Typography>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        borderRadius: '8px',
                    }}
                    onSubmit={(event) => {
                        event.preventDefault();

                        props.reset();
                        props.fetchMedia();
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Images"
                        value={props.searchKey}
                        onChange={(event) => props.setSearchKey(event.target.value)}
                    />
                    <IconButton
                        type="button"
                        sx={{ p: '10px' }}
                        onClick={() => {
                            props.reset();
                            props.fetchMedia();
                        }}
                    >
                        <BsSearch />
                    </IconButton>
                </Paper>
                <Stack
                    sx={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '500',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'flex-start', md: 'center' },
                        gap: '8px',
                    }}
                >
                    <Box component="span" sx={{ color: '#ddd' }}>
                        Categories:
                    </Box>
                    <Stack
                        direction="row"
                        columnGap="4px"
                        sx={{
                            flexWrap: 'wrap',
                        }}
                    >
                        <Button
                            variant="text"
                            sx={{ color: 'white', p: 0 }}
                            onClick={() => {
                                props.reset();

                                props.setSearchKey('Fashion');
                            }}
                        >
                            Fashion,
                        </Button>
                        <Button
                            variant="text"
                            sx={{ color: 'white', p: 0 }}
                            onClick={() => {
                                props.reset();

                                props.setSearchKey('Nature');
                            }}
                        >
                            Nature,
                        </Button>
                        <Button
                            variant="text"
                            sx={{ color: 'white', p: 0 }}
                            onClick={() => {
                                props.reset();

                                props.setSearchKey('Science');
                            }}
                        >
                            Science,
                        </Button>
                        <Button
                            variant="text"
                            sx={{ color: 'white', p: 0 }}
                            onClick={() => {
                                props.reset();

                                props.setSearchKey('Education');
                            }}
                        >
                            Education,
                        </Button>
                        <Button
                            variant="text"
                            sx={{ color: 'white', p: 0 }}
                            onClick={() => {
                                props.reset();

                                props.setSearchKey('Health');
                            }}
                        >
                            Health,
                        </Button>
                        <Button
                            variant="text"
                            sx={{ color: 'white', p: 0 }}
                            onClick={() => {
                                props.reset();

                                props.setSearchKey('People');
                            }}
                        >
                            People,
                        </Button>
                        <Button
                            variant="text"
                            sx={{ color: 'white', p: 0 }}
                            onClick={() => {
                                props.reset();

                                props.setSearchKey('Religion');
                            }}
                        >
                            Religion
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default SearchBar;
