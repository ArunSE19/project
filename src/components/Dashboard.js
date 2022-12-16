import React from 'react'
import './dashboard.css'
const dashboard = () => {
  return (
    <>    
    <div className='navbar bg-primary fixed-top flex-md-nowrap p-2 shadow'>
        <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='/'>EarnFromLearn</a>
        {/* <input type="text" className='form-control form-control-priamry w-100' placeholder='search'/> */}
        <ul className='navbar-nav px-3'>
            <li className='nav-item text-nowrap'>
                <a className='nav-link' href='/'>Logout</a>
            </li>
        </ul>
    </div>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2 bg-light d-none d-md-block sidebar'>
                <div className='left-sidebar'>
                    <ul className='nav flex-column sidebar-nav'>
                        <li className='nav-item'> 
                            <a className="nav-link active" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                                Add Course</a>
                        </li>
                        <li className='nav-item'>
                            <a className="nav-link" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                                Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default dashboard
