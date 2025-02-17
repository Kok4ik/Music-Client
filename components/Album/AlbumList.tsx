
import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import AlbumItem from './AlbumItem'
import { IAlbum } from '@/types/album'
interface AlbumListProps {
    albums: IAlbum[]
}

const AlbumList: React.FC<AlbumListProps> = ({albums}) => {


    return (
        <Grid container direction={'column'}>
            <Box p={2}>
                {albums.map(album => 
                    <AlbumItem 
                        key={album._id}
                        album={album}
                    />
                )}
            </Box>
        </Grid>
    )
}

export default AlbumList