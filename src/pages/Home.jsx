import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar'

function Home() {
    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const authentic = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authentic) {
            service.getPosts().then((posts) => {
                if (posts)
                    setPosts(posts.documents)
            })
        } else {
            setPosts([])
        }
    }, [authentic])

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-3xl text-sky-900 font-bold">
                                Publish your passions, your way
                            </h1>
                            <h3 className='text-slate-600 font-bold py-2 text-lg'>Create a unique and beautiful blog easily.</h3>
                            <div className="flex flex-wrap my-6 items-center">
                                <div className="text-left w-full sm:w-1/3 px-4">
                                    <h2 className='text-2xl mb-2 text-amber-700'>Create a blog</h2>
                                    <p className='text-gray-800 text-lg'>Share your story with the world. Create a beautiful, personalized blog that fits your brand.</p>
                                </div>
                                <div className='w-full sm:w-1/3 my-3'>
                                    <img src="Blog-Post.jpg" alt="blog img"
                                        className='rounded-3xl h-70' />
                                </div>
                                <div className="text-left w-full sm:w-1/3 px-5">
                                    <h2 className='text-2xl mb-2 text-amber-700'>Hang onto your memories</h2>
                                    <p className='text-gray-800 text-lg'>Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more</p>
                                </div>
                            </div>
                            <Link to="/login"><button className='bg-[#f4a836] hover:bg-[#f29406] p-3 my-2 rounded-lg text-lg text-white'>Create Your Blog</button></Link>
                            <div className='my-8'>
                    <h3 className='text-2xl font-bold text-center mb-4'>What Our Users Say</h3>
                    <div className='flex flex-wrap justify-center space-x-8'>
                        <div className='max-w-sm p-4 bg-gray-100 rounded-lg shadow-md'>
                            <p className='text-gray-700 mb-2'>"This platform is one of the best platform for blogging!"</p>
                            <p className='text-gray-500 text-sm'>- Jane Doe</p>
                        </div>
                        <div className='max-w-sm p-4 bg-gray-100 rounded-lg shadow-md'>
                            <p className='text-gray-700 mb-2'>"A seamless experience from start to finish."</p>
                            <p className='text-gray-500 text-sm'>- John Smith</p>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <h2 className='mb-4 text-center text-3xl sm:text-4xl font-extrabold text-slate-600 '>Explore Our Latest Posts</h2>

                <div className='mb-6 flex justify-center'>
                    <SearchBar
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className='mb-2 sm:mb-5 flex justify-between'>
                    <h3 className='text-[25px] sm:text-3xl font-bold'>Featured Post</h3>
                    <Link to="/add-post">
                        <button className='bg-[#f4a836] hover:bg-[#f29406] px-4 py-2 rounded text-white font-semibold'>
                            Create New Post
                        </button>
                    </Link>
                </div>

                <div className='flex flex-wrap'>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-transform duration-200 hover:scale-105'>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <div className="w-full py-8 mt-4 text-center">
                            <h3 className="text-3xl">No posts found.</h3>
                        </div>
                    )}
                </div>

                <div className='mt-8 flex justify-center'>
                    <Link to="/all-posts">
                        <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
                            Load More
                        </button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Home