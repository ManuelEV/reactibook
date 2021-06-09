
export const loadPosts = async ( userId ) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);

    const data = await response.text();

    const { posts } = JSON.parse(data);

    return posts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter(post => post.author.id === userId || post.visibility === 'public');
}