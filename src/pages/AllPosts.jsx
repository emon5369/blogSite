import { Container, PostCard } from "../components"
import service from "../appwrite/config"
import { useEffect, useState } from "react"
import SearchBar from '../components/SearchBar'
import { Link } from "react-router-dom"

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        service.getPosts([]).then((posts) => {     //passed empty array to fetch all posts
            if (posts)
                setPosts(posts.documents)
        })
    }, [])

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="w-full py-8">
            <Container>
                <div className='mb-2 sm:mb-5 flex justify-between'>
                <SearchBar 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value) }
                    />
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
            </Container>
        </div>
    )
}

export default AllPosts