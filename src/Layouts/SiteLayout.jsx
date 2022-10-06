import React from 'react';
import {Outlet} from 'react-router-dom';
import CustomLink from '../components/customLink/CustomLink';
import AuthHeader from '../components/authHeader/AuthHeader';

const SiteLayout = () => {
  return (
      <>
          <header>
            <div>
              <CustomLink to={'/'}>Home</CustomLink>
              <CustomLink to={'/chat'}>Chat</CustomLink>
              <CustomLink to={'/profile'}>Profile</CustomLink>
              <CustomLink to={'/galery'}>Galery</CustomLink>
            </div>
            <AuthHeader/>
          </header>

          <main>
            <Outlet />
          </main>
      </>
  )
}

export default SiteLayout;