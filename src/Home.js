import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home  = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    
    const handleDelete = id => {
        const newBlogs = blogs.filter(blog => blog.id !== id);  // Doesn't change the original array 'blogs'
        setBlogs(newBlogs);
    }

    useEffect(() => {  // Runs everytime there is a re-render
        console.log('use effect ran');
    }, []);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All my blogs!" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;