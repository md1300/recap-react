export default function Post(post){
    console.log(post)
    return(
        <div>
            
            <h3>user ID: {post.post.userId} </h3>
            <h3> <small>title : {post.post.title}</small></h3>
        </div>
    )
}