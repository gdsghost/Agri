import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';


const mainFeaturedPost = {
  title: 'The Farm Managment System',
  description:
    "Scale growth, reduce time, streamline operations, and remodel your agribusiness for profitability & productivity with the leading agriculture management software solutions.",
  image: 'https://www.wbcsd.org/var/site/storage/images/programs/food-and-nature/food-land-use/scaling-positive-agriculture/agriculture-1.5/150723-3-eng-GB/Agriculture-1.5_i1500.jpg',
  imageText: 'main image description',
  linkText: 'Login to System...',
};

const featuredPosts = [
  {
    title: 'Taking the chore out of farm data management',
    date: 'Oct 23',
    description:
      'See productivity and profitability go up while complexity and wasted time go down.',
    image: 'https://news.microsoft.com/wp-content/uploads/prod/sites/133/2020/11/shutter-960x640.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Make your data work as hard as you do',
    date: 'Oct 23',
    description:
      'For generations, farmers have been bogged down by the chore of managing their operation’s data. Our farm management software makes it simple.',
    image: 'https://giveme-5.org/wp-content/uploads/2019/03/sustainable_agriculture_fyouture-830x468.jpg',
    imageLabel: 'Image Text',
  },
];

const theme = createTheme();

export default function Blog() {
  return (
      <div>
          <br></br>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
    </div>
  );
}
