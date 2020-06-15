import React from "react"
import s from "./Users.module.scss"

const Users = (props) => {

    const handleFollowed = (followed,id)=>{
        followed ? props.follow(id) : props.Unfollow(id)
    }

    if(props.users.users.length === 0){
        props.setUsers([
            {id: 1,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0wCvKLGH0ngoY7-wnnNOFsrCto0laW92ksGvjOwS5nv5ziY-U&usqp=CAU",followed:true, fullName: "Levon A.", status:"i love football", location:{country:"Armenia",city:"aresh"}},
            {id: 2,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0wCvKLGH0ngoY7-wnnNOFsrCto0laW92ksGvjOwS5nv5ziY-U&usqp=CAU",followed:false, fullName: "Artur A.", status:"i love dedy", location:{country:"Armenia",city:"Erevan"}},
            {id: 3,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0wCvKLGH0ngoY7-wnnNOFsrCto0laW92ksGvjOwS5nv5ziY-U&usqp=CAU",followed:true, fullName: "Maria A.", status:"i love my sun", location:{country:"Armenia",city:"sevan"}},
        ])
    }
    return (
        <div>
            {props.users.users.map(el => (
                <div className={s.usersWrap}>

                    <div className={s.imgWrap}>
                        <img src={el.photoUrl} alt="user img"/>
                        <button onClick={()=> handleFollowed(el.followed,el.id)}>{el.followed ? "follow" : "Unfollow"}</button>
                    </div>

                    <div className={s.infoWrap}>
                        <div className={s.name}>
                            <div className={s.fullName}>{el.fullName}</div>
                            <div className={s.status}>{el.status}</div>
                        </div>
                        <div className={s.city}>
                            <div className={s.fullName}>{el.location.country}</div>
                            <div className={s.status}>{el.location.city}</div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Users