import BlogDetailsPage from '../blog-details/page';
import data from '../../../src/Data.json';

export async function generateMetadata({ params }) {
    const { slug } = params;
    const blog = getData(slug);

    return {
        title: `Blog Post - ${blog.title}`,
    };
}
const getData = (slug) => {
    const blogs = data.blogData.informations;
    const currentIndex = blogs.findIndex(b => b.slug === slug);
    const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1]['slug'] : null;
    const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1]['slug'] : null;
    return { ...blogs.find(b => b.slug === slug), nextBlog, prevBlog };
}

export default function BlogPage({ params }) {
    const { slug } = params;

    const blog = getData(slug);
    console.log(blog);
    return (
        <BlogDetailsPage blog={blog} />
    );
}
