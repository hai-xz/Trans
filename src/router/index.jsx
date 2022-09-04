import Aa from '../page/Aa'
import Bb from '../page/Bb'
import Cc from '../page/Cc'
import Dd from '../page/Dd'

const router=[
  {
    path:'/',
    element:<Aa/>
  },{
    path:'/like/:id',
    element:<Bb/>
  },{
    path:'/c',
    element:<Cc/>
  },{
    path:'/d',
    element:<Dd/>
  }
]

export default router