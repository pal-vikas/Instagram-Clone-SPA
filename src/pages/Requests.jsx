import Users from '../Users'
import UserCard from '../components/UserCard'

function Requests()
{
    return(
        <>
            <div className="mx-auto w-[400px] text-center mt-24">
                <h1 className="text-2xl text-center  font-bold"> Your Follow requests</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima nam officia tempore, aperiam doloribus eius ipsa nesciunt nisi tenetur!</p>
                {
                    Users.map(user=><UserCard img={user.image} name ={user.name} prof={user.profession} username={user.username} />)
                }
            </div>
        </>
    )
}

export default Requests;