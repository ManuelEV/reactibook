import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavBar } from '../navigation/NavBar'
import { FeedPost } from './FeedPost';
import { FeedPostForm } from './FeedPostForm'

export const FeedScreen = () => {

    const {posts} = useSelector( state => state.posts );

    const [filteredPosts, setPosts] = useState(posts);

    const handleFilterPosts = (filterCondition) => {
        setPosts( posts.filter(post => post.visibility === filterCondition) );
    }

    return (
        <div className="w-full h-full">

            <NavBar />
            
            <div className="pt-16">

                <FeedPostForm />

                <div className="w-full flex justify-center">
                    <div className="w-3/5 flex row">
                        <span 
                            className="px-2 underline cursor-pointer"
                            onClick={() => handleFilterPosts('public')}
                        >
                            Público
                        </span>
                        <span 
                            className="px-2 underline cursor-pointer"
                            onClick={() => handleFilterPosts('friends')}
                        >
                            Amigos
                        </span>
                        <span 
                            className="px-2 underline cursor-pointer"
                            onClick={() => setPosts(posts)}
                        >
                            Ver todo
                        </span>
                    </div>
                </div>

                {
                    filteredPosts.map(post => (
                        <FeedPost
                            key={post.id}
                            {...post}
                        />
                    ))
                }
            </div>

        </div>
    )
}
