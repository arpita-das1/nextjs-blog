import Layout from '../components/layout';
import { getAllPostIds, getPostData } from '../../lib/staticPost';
import Head from 'next/head';
import FormattedDate from '../../lib/FormattedDate';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
    <h1 className={utilStyles.headingXl}>{postData.title}</h1> <br />
    
    <div className={utilStyles.lightText}>
        <FormattedDate dateString={postData.date} /> <br />
    </div>

    <p className={utilStyles.lightText}>
      {postData.content}
    </p>
  </Layout>;
}

//In this function, we need to return a list of possible values for id.
export async function getStaticPaths() {
 const paths = getAllPostIds();
 return {
   paths,
   fallback: false,
 };
}

//getStaticProps is given params, which contains id (because the file name is [id].js).
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        }
    };
}