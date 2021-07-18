import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { GetServerSidePropsContext } from 'next'
import remark from 'remark'
import html from 'remark-html'
import FooterBlog from 'src/layout/articles/footer'
import HeaderBlog from 'src/layout/articles/header'
import Main from 'src/layout/articles/main'
import Sidebar from 'src/layout/articles/Sidebar'
import FeaturedPost from 'src/modules/blog/components/FeaturedPost'
import MainFeaturedPost from 'src/modules/blog/components/MainFeaturedPost'
import {
  featuredPosts,
  mainFeaturedPost,
  sections,
  sidebar
} from 'src/modules/blog/constants/posts'
import { getPosts } from 'src/modules/blog/helpers/posts'

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
