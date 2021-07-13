/* eslint-disable max-len */
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import { motion } from 'framer-motion'
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#000000',
    padding: theme.spacing(8, 0, 6)
  },
  heroContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heroText: {
    width: '50%',
    '& h1, & p': {
      color: '#fff',
      textAlign: 'justify'
    }
  },
  heroImage: {
    border: '10px solid #ffffff',
    borderRadius: '100%',
    overflow: 'hidden',
    width: '40%',

    '& img': {
      width: '100%'
    }
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    width: '100%'
  },
  heroButtonHelp: {
    backgroundColor: '#00DDDD',
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      backgroundColor: '#026868',
      color: '#ffffff'
    }
  },
  heroButtonBusiness: {
    border: '1px solid #00DDDD',
    color: '#00DDDD',
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
  height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    color: #ffff00;
  }
`

// const Logo = () => {
//   const variants = {
//     hidden: { rotate: -180 },
//     visible: {
//       rotate: 0,
//       transition: {
//         duration: 1
//       }
//     }
//   }

//   const pathVariants = {
//     hidden: {
//       opacity: 0,
//       pathLength: 0
//     },
//     visible: {
//       opacity: 1,
//       pathLength: 1,
//       transition: {
//         duration: 2,
//         ease: 'easeInOut'
//       }
//     }
//   }

//   return (
//     <motion.svg
//       width="380"
//       height="380"
//       viewBox="0 0 380 380"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       variants={variants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.path
//         d="M190 380C294.934 380 380 294.934 380 190C380 85.0659 294.934 0 190 0C85.0659 0 0 85.0659 0 190C0 294.934 85.0659 380 190 380Z"
//         fill="#222F2F"
//         variants={pathVariants}
//       />
//       <motion.path
//         d="M190 375C292.173 375 375 292.173 375 190C375 87.8273 292.173 5 190 5C87.8273 5 5 87.8273 5 190C5 292.173 87.8273 375 190 375Z"
//         stroke="white"
//         strokeWidth="10"
//         variants={pathVariants}
//       />
//       <motion.path
//         d="M190.5 351C279.142 351 351 279.142 351 190.5C351 101.858 279.142 30 190.5 30C101.858 30 30 101.858 30 190.5C30 279.142 101.858 351 190.5 351Z"
//         fill="#222F2F"
//         variants={pathVariants}
//       />
//       <motion.path
//         variants={pathVariants}
//         d="M190.5 350.5C278.866 350.5 350.5 278.866 350.5 190.5C350.5 102.134 278.866 30.5 190.5 30.5C102.134 30.5 30.5 102.134 30.5 190.5C30.5 278.866 102.134 350.5 190.5 350.5Z"
//         stroke="white"
//       />
//       <motion.path
//         d="M121.277 193.168C127.527 192.973 132.182 191.475 135.242 188.676C138.367 185.811 139.93 182.133 139.93 177.641C139.93 175.297 139.148 170.674 137.586 163.773C136.089 156.872 135.34 150.72 135.34 145.316C135.34 131.84 139.116 121.749 146.668 115.043C154.285 108.272 165.743 104.757 181.043 104.496H183.582V111.918H182.117C172.677 111.918 165.288 114.392 159.949 119.34C154.611 124.223 151.941 132.296 151.941 143.559C151.941 148.116 152.592 153.747 153.895 160.453C155.197 167.159 155.848 171.944 155.848 174.809C155.848 180.342 154.22 184.9 150.965 188.48C147.71 191.996 143.836 194.6 139.344 196.293V198.051C143.836 199.743 147.71 202.38 150.965 205.961C154.22 209.477 155.848 214.001 155.848 219.535C155.848 222.4 155.197 227.185 153.895 233.891C152.592 240.596 151.941 246.228 151.941 250.785C151.941 262.634 154.611 271 159.949 275.883C165.288 280.831 172.677 283.305 182.117 283.305H183.582V290.727H181.043C165.743 290.466 154.285 286.951 146.668 280.18C139.116 273.474 135.34 263.09 135.34 249.027C135.34 243.624 136.089 237.471 137.586 230.57C139.148 223.669 139.93 219.047 139.93 216.703C139.93 212.211 138.367 208.565 135.242 205.766C132.182 202.901 127.527 201.371 121.277 201.176V193.168ZM257.703 201.273C251.453 201.469 246.766 202.999 243.641 205.863C240.581 208.663 239.051 212.309 239.051 216.801C239.051 219.145 239.799 223.767 241.297 230.668C242.859 237.569 243.641 243.721 243.641 249.125C243.641 263.122 239.832 273.474 232.215 280.18C224.663 286.951 213.237 290.466 197.938 290.727H195.398V283.305H196.863C206.303 283.305 213.693 280.831 219.031 275.883C224.37 271 227.039 262.667 227.039 250.883C227.039 246.326 226.388 240.694 225.086 233.988C223.784 227.283 223.133 222.497 223.133 219.633C223.133 214.099 224.76 209.574 228.016 206.059C231.271 202.478 235.145 199.841 239.637 198.148V196.391C235.145 194.698 231.271 192.094 228.016 188.578C224.76 184.997 223.133 180.44 223.133 174.906C223.133 172.042 223.784 167.257 225.086 160.551C226.388 153.845 227.039 148.214 227.039 143.656C227.039 132.328 224.37 124.223 219.031 119.34C213.693 114.392 206.303 111.918 196.863 111.918H195.398V104.496H197.938C213.237 104.757 224.663 108.272 232.215 115.043C239.832 121.749 243.641 131.872 243.641 145.414C243.641 150.818 242.859 156.97 241.297 163.871C239.799 170.772 239.051 175.395 239.051 177.738C239.051 182.23 240.581 185.909 243.641 188.773C246.766 191.573 251.453 193.07 257.703 193.266V201.273Z"
//         fill="#00DDDD"
//         variants={pathVariants}
//       />
//     </motion.svg>
//   )
// }

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <StyledMain>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container className={classes.heroContainer}>
            <figure className={classes.heroImage}>
              <img src="/profile-pic.png" alt="Renato Melo" />
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
                not, please, send me a message and it will be a pleasure work to you or I can refer
                a dev friend to you.
              </Typography>
              <Grid container spacing={2}>
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
