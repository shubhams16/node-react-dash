import axios from 'axios'

export const register = newUser=>{
    return axios
    .post('users/register', {
        f_name: newUser.f_name,
        l_name: newUser.l_name,
        u_email: newUser.u_email,
        u_password: newUser.u_password
    })
    .then(res=>{
        console.log("registerd")
    })
}

export const login = user=>{
    return axios
    .post('users/login', {
        u_email: user.u_email,
        u_password: user.u_password
    })
    .then(res =>{
        localStorage.setItem('usertoken', res.data)
        console.log("loged in")
        return res.data
    })
    .catch(err =>{
        localStorage.setItem('usertoken', '')
        console.log(err)
    })
}



export const user_profile_list = userprofilelist=>{
    return axios
    .get('users/user_profile_list')
    .then(res =>{
        localStorage.setItem('usersData', res.data)
        console.log("date")
        return res.data
    })
    .catch(err =>{
        console.log(err)
    })
}