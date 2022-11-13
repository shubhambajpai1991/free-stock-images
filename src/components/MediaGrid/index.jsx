import { Box } from '@mui/material';
import React from 'react';
import MediaCard from '../MediaCard';

function MediaGrid(props) {
    return (
        <Box
            sx={{
                columnCount: { xs: '1', sm: '2', md: '3', lg: '4' },
                columnGap: '4px',
                p: '40px 30px',
            }}
        >
            {props.mediaList.map((media) => {
                return <MediaCard media={media} />;
            })}
        </Box>
    );
}

export default MediaGrid;
