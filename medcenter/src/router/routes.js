import {routes as home} from '../pages/home'
import {routes as register} from '../modules/register'
import {routes as auth} from '../modules/auth'
import {routes as chat} from '../modules/chat'

export default [

    ...home,
    ...register,
    ...auth,
    ...chat
]