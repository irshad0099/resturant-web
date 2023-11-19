import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
      sx={{
        my: 10,
        textAlign: "center",
        p:2,
        "& h4": {
          fontWeight: "bold",
          my:2,
          fontSize: "2rem",
        },
        "& p": {
          textAlign: "justify"
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize: "1.5rem",
          },
        },
      }}
      >
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>
          The diner shop of the community is a cheerful place to be in.
          The magnificent front façade welcomes the rising sun, illuminating
          the whole space and bring it to life. The sun rays made the metal
          tables shine like a sliver. The soothing music played in the diner
          acts as a treat for the ears and a perfect start to a day.
        </p>
        <br />
        <p>
          The diner shop of the community is a cheerful place to be in.
          The magnificent front façade welcomes the rising sun, illuminating
          the whole space and bring it to life. The sun rays made the metal
          tables shine like a sliver. The soothing music played in the diner
          acts as a treat for the ears and a perfect start to a day.
        </p>
      </Box>
    </Layout>
  )
}

export default About