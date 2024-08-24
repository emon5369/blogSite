import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts)
                setPosts(posts.documents)
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold">
                                <Link className='hover:text-[#f4a836] hover:text-3xl' to="/login">Login</Link> to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
    }

export default Home