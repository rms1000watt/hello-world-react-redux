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

npm install --save react-redux redux react-router react-router-redux redux-thunk

# Used code from https://github.com/tj/frontend-boilerplate

git push https://rms1000watt@github.com/rms1000watt/hello-world-react-redux.git master:master