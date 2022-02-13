# hCard Builder React App
This app is used to users to edit their personal details on our site.The app is responsive for different screen widths.

### Packages

hCard Builder is used React Hook, react-dropzone, react-image-crop, react-bootstrap.

For the testing, it is using @testing-library/user-event

### Project Structure

Divided to 3 levels, Application, hbuilder, hpreview and it uses separate styles files for each level and that makes code reusable.

### Application Level

MainBuilder.js is calling UserForm.js and Preview.js. This page initializing states with useState and passing to low level classes as properties.

### hbuilder Level

This level is having UserForm.js and ImageUploader.js.UserForm.js rendering Personal Details and Address. ImageUploader.js is having profile Uploading and Image cropping functionality. Image upload functionality is using react-dropzone npm package and Image Cropping functionality is using react-image-crop npm package. States are synchronized with useEffect function.

### hpreview Level

hpreview is has Preview.js. Preview.js is rendering HCARD PREVIEW and getting data from properties.

### unit test cases

Unit test cases are available in ./test/UserForm.test.js and it is using @testing-library/user-event.
Testing, when user enter values in Personal Details screen, is it auto filling in HCARD PREVIEW in onchange event.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

The dev script invokes npm-run-all to run in parallel the build script and all scripts that start with dev:* - including dev:build-server and dev:start.

### `npm install`

Installing all necessary packages

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run test -- --coverage --watchAll=false`

To find test coverage

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



