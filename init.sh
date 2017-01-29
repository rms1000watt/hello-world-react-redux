npm install -g create-react-app
create-react-app hello-world-react-redux
cd hello-world-react-redux

mkdir src/screens
mkdir src/layouts
mkdir src/components
mkdir src/actions
mkdir src/reducers
mkdir src/store
mkdir src/middleware

touch src/store/index.js
touch src/middleware/index.js

npm install --save react-redux redux react-router react-router-redux react-bootstrap

# update src/store/index.js with https://github.com/tj/frontend-boilerplate/blob/master/client/store/index.js