// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Set wrap={ScaffoldLayout} title="UserExamples" titleTo="userExamples" buttonLabel="New UserExample" buttonTo="newUserExample">
          <Route path="/user-examples/new" page={UserExampleNewUserExamplePage} name="newUserExample" />
          <Route path="/user-examples/{id:Int}/edit" page={UserExampleEditUserExamplePage} name="editUserExample" />
          <Route path="/user-examples/{id:Int}" page={UserExampleUserExamplePage} name="userExample" />
          <Route path="/user-examples" page={UserExampleUserExamplesPage} name="userExamples" />
        </Set>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
