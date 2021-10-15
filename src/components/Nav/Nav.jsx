import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">QuickMeals</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          <>
            <Link className="navLink" to="/login">
              Login
            </Link>
            <Link className="navLink" to="/registration">
              Register An Account
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              User
            </Link>
            <Link className="navLink" to="/dashboard">
              Dashboard
            </Link>
            <Link className="navLink" to="/savedmeals">
              Favorites
            </Link>
            <Link className="navLink" to="/viewmeals">
              View Meal Plan
            </Link>
            <Link className="navLink" to="/shoppinglist">
              Shopping List
            </Link>
            <Link className="navLink" to="/recipegenerator">
              Recipe Generator
            </Link>
            <Link className="navLink" to="/pickmeals">
              Pick Your Meals
            </Link>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}




      </div>
    </div>
  );
}

export default Nav;
