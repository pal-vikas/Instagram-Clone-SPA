import Users from "../NewUsers"
import { useParams } from "react-router-dom";
import Feed from "../components/Feed";

function UserDeatils()
{
    let {username} =useParams() ;
    let user = Users.find(user=>user.username == username)
    return(
        <>
            <div className="mx-auto w-[700px] mt-24 mb-24 flex gap-5 items-center">
                <div className="w-1/4 "><img className="h-[180px] w-[180px] object-cover rounded-full" src={user.image} alt="" /></div>
                <div className="w-3/4">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <div className="flex mt-1 mb-1">
                    <div className="bg-neutral-200 px-2 py-1 rounded-md">{user.username}</div>
                    </div>
                    
                    <h1>{user.profession}</h1> 
                    <p>{user.description}</p>
                    <div className="flex gap-3 mt-mt2">
                        <div className="flex gap-5 mt-2">
                            <div className="bg-neutral-200 px-2 py-1 rounded-md">{user.followers} Followers</div>
                            <div className="bg-neutral-200 px-2 py-1 rounded-md">{user.following} Following</div>
                        
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-[900px] mx-auto">
                    <div className="flex gap-2 flex-wrap">
                        {
                            user.posts.map(post => <Feed img={post.image} id ={post.id}/>)
                         }
                    </div>
            </div>
        </>
    )
}

export default UserDeatils;