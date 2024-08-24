import { Container, PostCard } from "../components"
import service from "../appwrite/config"
import { useEffect, useState } from "react"

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => { 
        service.getPosts([]).then((posts) => {     //passed empty array to fetch all posts
            if (posts)
                setPosts(posts.documents)
        })
     }, [])
    
    return (
        <div className="w-full py-8">   
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts