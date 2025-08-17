import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import './BlogDetails.scss';
import './Blog.scss';
import './Comment.scss';
import '../Contact/Contact.scss';
import Carousel from '../Slider/Carousel';

const BlogDetails = ({blog}) => {
  const blogDetails = {
    useFor: 'image-slider',
    sliderSetting: {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
    sliderImages: blog.sliderImages || [],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="st-content">
      <div
        className="st-page-heading st-bg"
        style={{ backgroundImage: `url(${blog.imgLink})` }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h1 className="st-page-heading-title">
              {blog.title}
            </h1>
            <div className="st-post-label">
              <span>
                By <Link href="#">{blog.designation}</Link>
              </span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </div>
      {/* .st-page-heading */}
      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-md-1">
            <div className="st-post-details st-style1">
              <div>
                {blog.detail1}
              </div>
                  <Carousel data={blogDetails} />
                  {/* .st-slider */}
                  <div className="st-height-b20 st-height-lg-b20" />
                  <div>{blog.detail2}</div>
                </div>
                <div className="st-height-b35 st-height-lg-b35" />
                <div className="st-post-meta">
                  <div className="st-post-tages">
                    <h4 className="st-post-tage-title">Tags:</h4>
                    <ul className="st-post-tage-list st-mp0">
                      <li>
                        <Link href="#">WordPress</Link>
                      </li>
                      <li>
                        <Link href="#">Shopify</Link>
                      </li>
                      <li>
                        <Link href="#">React</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="st-post-share">
                    <h4 className="st-post-share-title">Share:</h4>
                    <div className="st-post-share-btn-list">
                      <Link href="#">
                        <Icon icon="fa6-brands:facebook-f" />
                      </Link>
                      <Link href="#">
                        <Icon icon="fa6-brands:twitter" />
                      </Link>
                      <Link href="#">
                        <Icon icon="fa6-brands:behance" />
                      </Link>
                      <Link href="#">
                        <Icon icon="fa6-brands:instagram" />
                      </Link>
                      <Link href="#">
                        <Icon icon="fa6-brands:pinterest-p" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="st-height-b60 st-height-lg-b60" />
              </div>
              <div className="st-post-btn-gropu">

                                {
              blog.prevBlog && (
                <Link
                  href={`/blog/${blog.prevBlog}`}
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Previous Post
                </Link>
              )
            }
            {
              blog.nextBlog && (
                <Link
                  href={`/blog/${blog.nextBlog}`}
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Next Post
                </Link>
              )}

              </div>
            </div>
   
          </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </section>
  );
};

export default BlogDetails;
