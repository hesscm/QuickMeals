import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import RecipeGeneratorPage from '../RecipeGeneratorPage/RecipeGeneratorPage';
import PickYourMealsPage from '../PickYourMealsPage/PickYourMealsPage';
import ShoppingListPage from '../UserShoppingListPage/ShoppingListPage';
import ViewMealPlanPage from '../UserViewMealPlanPage/ViewMealPlanPage';
import SavedMealsPage from '../UserSavedMealsPage/SavedMealsPage';
import DashboardPage from '../UserDashboardPage/DashboardPage';
import MUIAppBar from '../Nav/MUIAppBar';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { lightGreen, orange, pink, deepOrange, lightBlue, teal } from '@mui/material/colors';

import './App.css';

const newLightGreen = lightGreen['500'];
const customTheme = createTheme({
  palette: {
    primary: {
      // light: newLightGreen,
      main: '#B0ECD7',
      // dark: lightGreen,
      // contrastText: lightGreen
    },
    secondary: {
      // light: newLightGreen,
      main: '#E5C687',
      // dark: lightGreen,
      // contrastText: lightGreen
    },
    error: deepOrange,
    warning: {
      // light: newLightGreen,
      main: '#F77607',
      // dark: lightGreen,
      // contrastText: lightGreen
    },
    success: {
      // light: newLightGreen,
      main: '#3A5245',
      // dark: lightGreen,
      // contrastText: lightGreen
    },
  },
  typography: {
    fontFamily: 'Zen Kaku Gothic Antique, sans- serif',
    h1: { color: '#3A5245', fontWeight: 'bold' },
    h2: { color: '#3A5245', fontWeight: 'bold' },
    h3: { color: '#3A5245', fontWeight: 'bold' },
    h4: { color: '#3A5245', fontWeight: 'bold' },
    h5: { color: '#3A5245', fontWeight: 'bold' },
    h6: { color: '#3A5245', fontWeight: 'bold' },
    body1: { color: '#3A5245' },
    body1: { color: '#3A5245' }

  }


});

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <div>
          <MUIAppBar />
          <br />
          {/* <Nav /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/recipegenerator" />
            <Redirect exact from="/home" to="/recipegenerator" />
            <Redirect exact from="/user" to="/recipegenerator" />



            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/recipegenerator"
            >
              <RecipeGeneratorPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              <UserPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Pick Your Meals Page
              exact
              path="/pickmeals"
            >
              <PickYourMealsPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows View Your Meals Page
              exact
              path="/viewmeals"
            >
              <ViewMealPlanPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Saved Meals Page
              exact
              path="/savedmeals"
            >
              <SavedMealsPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Shopping List Page
              exact
              path="/shoppinglist"
            >
              <ShoppingListPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows User Dashboard Page
              exact
              path="/dashboard"
            >
              <DashboardPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
            >
              <InfoPage />
            </ProtectedRoute>

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404 Error. Looks Like we haven't made this page yet!</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
