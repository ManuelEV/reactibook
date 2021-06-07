import React from 'react'
import { NavBar } from '../navigation/NavBar'
import { FeedPost } from './FeedPost';
import { FeedPostForm } from './FeedPostForm'

export const FeedScreen = () => {

    const posts = [
        {
            id: 'aasd123',
            content: 'asdasdasdasdasdsad',
            url: 'asdasdasdasdasd',
            user: {
                id: '',
                name: 'Juan',
                friends: [],
            }
        },
        {
            id: 'qqewe421',
            content: 'asdasdasdasdasdsad',
            url: 'asdasdasdasdasd',
            user: {
                id: '',
                name: 'Pedro',
                friends: [],
            }
        },
        {
            id: 'uyuyi7878',
            content: 'asdasdasdasdasdsad',
            url: 'asdasdasdasdasd',
            user: {
                id: '',
                name: 'Diego',
                friends: [],
            }
        },
    ];

    return (
        <div className="w-full h-full">
            <NavBar />
            <FeedPostForm />

            {
                posts.map(post => (
                    <FeedPost
                        key={post.id}
                    />
                ))
            }

        </div>
    )
}
