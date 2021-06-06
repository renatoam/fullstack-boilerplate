import FeaturedPost from '@components/DataDisplay/FeaturedPost'
import MainFeaturedPost from '@components/DataDisplay/MainFeaturedPost'
import FooterBlog from '@components/Layout/FooterBlog'
import HeaderBlog from '@components/Layout/HeaderBlog'
import Main from '@components/Layout/MainSection'
import Sidebar from '@components/Navigation/Sidebar'
import { featuredPosts, mainFeaturedPost, sections, sidebar } from '@constants/posts'
import { getPosts } from '@helpers/posts'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { GetServerSidePropsContext } from 'next'
import remark from 'remark'
import html from 'remark-html'

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}))

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const rawPosts = getPosts()
  const markdownPosts = Promise.allSettled(
    rawPosts.map(async post => {
      return await remark()
        .use(html)
        .process(post || '')
    })
  )

  const posts = (await markdownPosts).map(markdown => markdown.value?.contents)

  return {
    props: {
      posts
    }
  }
}

interface IBlog {
  posts: string[]
}

export default function Blog({ posts }: IBlog) {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <HeaderBlog title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <FooterBlog title="Footer" description="Something here to give the footer a purpose!" />
    </>
  )
}
