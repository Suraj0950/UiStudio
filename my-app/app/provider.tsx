"use client"
import { useEffect, useState } from "react";
import axios from 'axios';
import { UserDetailContext } from "./context/UserDetailContext";

function provider({children}:any) {

	const [userDetail, setUserDetail] = useState();
    useEffect(() => {
        CreateNewUser();
    },[]);

    const CreateNewUser = async() => {
        const result = await axios.post('/api/user', {});
        console.log(CreateNewUser)
        console.log(result.data)
		setUserDetail(result?.data)
    }
  return (
	<UserDetailContext.Provider value={{userDetail, setUserDetail}}>
		<div>
			{children}
		</div>
	</UserDetailContext.Provider>
  )
}

export default provider
