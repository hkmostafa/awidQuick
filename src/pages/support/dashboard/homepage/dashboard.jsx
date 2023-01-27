import AddSection from '../../../../components/AddForms/addSection'
import AddRestaurant from '../../../../components/AddForms/addRestaurant'

import NavbarDashboard from '../../../../components/navbar/navbardashboard'
import './dashboard.scss'

function Dashboard(){


    return(
        <> 
        <NavbarDashboard/>
        <div className='dashboardcontainer'>
           <AddSection/>
           <AddRestaurant/>
        </div>
        </>
       
    )
}

export default Dashboard