import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
                <Typography variant='h4'> Conatct My Resturant</Typography>
                <p>
                    The diner shop of the community is a cheerful place to be in.
                    The magnificent front façade welcomes the rising sun, illuminating
                    the whole space and bring it to life. The sun rays made the metal
                    tables shine like a sliver. The soothing music played in the diner
                    acts as a treat for the ears and a perfect start to a day.
                </p>
            </Box>
            <Box sx={{
                m: 2, width: "600px", ml: 10,
                "@media (max-width:600px)": {
                    width: "300px",
                },
            }}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: 'black', color: 'white', }} align='center'>Contact Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-102-0340 (Tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>

                                <TableCell>
                                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>

                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact