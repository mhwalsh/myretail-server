# myRetail RESTful service

myRetail is a RESTful service that makes product data available to web and mobile clients.

## Getting Started

To run this project git clone the repository to your local machine and follow the setup sets that follow.

### Prerequisites

This project depends on a [mongoDB](https://www.mongodb.com/). Install this database on your local machine and start it. This [guide](https://github.com/mhwalsh/lecture-guides/blob/master/mongo-install.md) walks through the mongoDB install with `brew` and `brew services`. Brew and brew services are not required to install it and get it running, but it makes things very easy to manage. If you don't have brew and word like to use it, find out more [here](https://brew.sh/).

### Installing

Run the following command inside the project directory:

```
$ npm install
```

This will install all project dependencies into a `node_modules` folder.

To start the server run:

```
$ npm start
```

Add some initial test data to the database by running the following command:

```
$ node db.setup.js 
```
The server does not need to be up to execute this script. If database doesn't exist it will be created. If database does exist and contains data, the data will be dropped and regenerated.

### Check Step
Test the services is working locally by navigating to this this url in your preferred browser [http://localhost:3003/product/13860428](http://localhost:3003/product/13860428)

## Project structure

```
.
├── package-lock.json
├── package.json
├── readme.md
├── src  --------------------> // source code
│   ├── app.js
│   ├── models  ------------>  // database models
│   │   └── productSchema.js
│   ├── modules  ----------->  // other js modules
│   │   ├── idValidator.js
│   │   ├── productService.js
│   │   └── urlFormatter.js
│   └── routers  ----------->  // http request routing module
│       └── product.js
└── test  ------------------>  // test code
    ├── idValidator.test.js
    ├── product.test.js
    ├── productService.test.js
    └── urlFormatter.test.js
```

## Running the tests

To run the automated tests for this service locally, run the server using the following command in the terminal:

```
$npm start
```
In another tab in the terminal, run the following:

```
$ npm test
```
### Test Suite Description

There are tests for each module. The main services that are being tested are the  `src/modules/productService.js` and the `src/routers/product.js`. The `productService` is a module that connects the an external resource for specific product data. The `product` router handles http connection to myRetail and delegates requests to the `productService`. 

The tests live in a `test` directory inside the root of the project. See the project structure above. Test files have a `.test.js` suffix naming convention.


### Test Coding Style

The tests are built with mocha and chai. Each testing file tests one module and `describe` statements are used to separate related tests into groups. `before`, `beforeEach`, and `after` statements are used inside relevant describes to set up the tests. `it` statements describe the test cases.

```
describe('ProductService', () => {

    before(() => {
        nock.disableNetConnect();
    });

    describe('#getProductNameById() happy path', () => {
    	it('should return product name if called with a valid id', (done) => {
```

Test for the module that hit the external service, use [nock](https://github.com/node-nock/nock) to intercept requests and send expected responses.

## Deployment

This app is deployed on heroku and the database on mLabs. To contribute, contact author. You will need the [heroku toolbelt](https://devcenter.heroku.com/articles/heroku-cli). Once the heroku remote is set deploying new changes is as simple as committing and running `$ git push heroku master`.

### Environment Vars
```
- EXTERNAL_URL - For external service
- LOCAL_URL - Local only for local server location for testing.
- MONGODB_URI - Remote only for db location on heroku.
```
### Deployed valid test urls
- [https://boiling-fjord-88968.herokuapp.com/product/13860428](https://boiling-fjord-88968.herokuapp.com/product/13860428)
- [https://boiling-fjord-88968.herokuapp.com/product/13860429](https://boiling-fjord-88968.herokuapp.com/product/13860429)
- [https://boiling-fjord-88968.herokuapp.com/product/13860432](https://boiling-fjord-88968.herokuapp.com/product/13860432)

## Built With

* [Expressjs](https://expressjs.com/) - Web framework for Node.js
* [MongoDB](https://www.mongodb.com/) - NoSQL db
* [Mongoose](http://mongoosejs.com/index.html) - Object modeling for Node.js and MongoDB
* All other dependency can be found in the `package.json` file in the root of the project.


## Authors

* **Millicent Walsh** - [mhwalsh](https://github.com/mhwalsh)