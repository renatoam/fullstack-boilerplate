/* eslint-disable max-len */
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useEffect } from 'react'
// import { motion } from 'framer-motion'
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#000000',
    // padding: theme.spacing(8, 0, 6)
    height: '100%',
    padding: 0
  },
  heroContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    // justifyContent: 'space-between',
    justifyContent: 'space-evenly',
    height: '100%'
  },
  heroText: {
    width: '50%',
    '& h1, & p': {
      color: '#fff',
      textAlign: 'justify'
    },
    '& h1': {
      fontSize: 'clamp(18px, 2.5vw, 42px)'
    },
    '& p': {
      fontSize: 'clamp(12px, 1vw, 16px)'
    }
  },
  heroImage: {
    border: '10px solid #ffffff',
    borderRadius: '100%',
    overflow: 'hidden',
    width: 'clamp(200px, 20vw, 40%)',
    maxHeight: '100%',
    maxWidth: '500px',
    '& img': {
      maxHeight: '100%',
      width: '100%'
    }
  },
  heroButtons: {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    gap: 'clamp(10px, 1.5vw, 20px)'
  },
  heroButtonHelp: {
    backgroundColor: '#00DDDD',
    fontSize: 'clamp(10px, 1vw, 16px)',
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      backgroundColor: '#026868',
      color: '#ffffff'
    }
  },
  heroButtonBusiness: {
    border: '1px solid #00DDDD',
    color: '#00DDDD',
    fontSize: 'clamp(10px, 1vw, 16px)',
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      backgroundColor: '#00DDDD',
      color: 'inherit'
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const StyledMain = styled.main`
  background-color: #000;
  height: calc(100vh - 237px);
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    color: #ffff00;
  }
`

export default function AboutMe() {
  const classes = useStyles()

  useEffect(() => {
    localStorage.setItem('bg', '#000000')
  }, [])

  return (
    <>
      <CssBaseline />
      <StyledMain>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container className={classes.heroContainer}>
            <figure className={classes.heroImage}>
              <img src="/images/profile-pic.png" alt="Renato Melo" />
            </figure>
            <div className={classes.heroText}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Renato Melo
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                I'm a Front-End Developer completely in love with my profession. I discovered that
                one of my favorite hobbies - and I have many - is to study programming.
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Today, I consider myself a web development evangelist and I want to help you to
                become a developer too or, if you're someone that need help to improve your
                business, take off an idea from paper, or even a recruiter, I can help you also.
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                I love help other developers (and learn with them), so don't hesitate to ask me for
                some help. There is no cost and it will be a pleasure, if I can help you.
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Also, if you need to hire a dev for some project or for your business, freelance or
                not, please, send me a message and it will be a pleasure work for you or, if I
                can't, I can refer a dev friend to you.
              </Typography>
              <Grid container className={classes.heroButtons}>
                <Grid item>
                  <Button variant="contained" className={classes.heroButtonHelp}>
                    If you're a dev and need some help
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.heroButtonBusiness}>
                    If you need a dev
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </StyledMain>
    </>
  )
}
