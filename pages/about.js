function About({posts}){
    return (
        <div>
            <div>
                {posts.map((post) => (
                    <h5 key={post.id} style={{color: 'red'}}>{post.value}</h5>
                ))}
            </div>
        </div>
        
    )
} 

export  async function getStaticProps(){
    const res = await fetch("http://localhost:3001/test1.action")
    const data = await res.json()
    console.log(data)

    return {
        props: {
            posts: data.data
        }
    }
}

export default About