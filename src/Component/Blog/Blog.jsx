import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";
const Blog = ({blog,handleAddToBookmark, handleMarkAsRead}) => {
    const {id,title, cover, reading_time, author, author_image, posted_date,hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_image} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><IoBookmarksOutline /></button>
                </div>
            </div>
            <h4 className="text-4xl">{title}</h4>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id,reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;