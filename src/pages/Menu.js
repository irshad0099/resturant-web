import React from 'react'
import { MenuList } from '../data/data'
import Layout from '../component/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
    return (
        <Layout>
            <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
                {MenuList.map((menu) => (

                    <Card sx={{ maxWidth: "400px", display: "flex", m:2}}> 
                        <CardActionArea>
                            <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu.Image}
                                alt={Menu.name}
                            />
                            <CardContent>
                            <Typography variant='h5' gutterBottom component={"div"}>
                            {menu.name}
                            </Typography>
                            <Typography variant='body2'>{menu.description}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Layout>
    )
}

export default Menu