# React-Redux Library Project

**You will have 2.5 hours for this project. Treat it like an assessment.**

Read the ENTIRE instructions before running specs for the first time; it
contains important information about running tests with Vitest, a fast testing
suite built to take advantage of Vite's module-based approach.

## Background

You will be adding Redux onto a lending book library app called "aA Lending
Library". This application should allow for the creation, display, updating, and
deletion of books.

This application allows the user to perform CRUD on books. Each book has four
fields: `id`, `title`, `author`, and `checkedOut`.

When the application is refreshed, all data will be reset and no data should
persist.

You will create a Redux store and properly connect the components in the React
application to the Redux store and store the books data in the Redux store.

## Setup

If any step of the setup fails, ask an instructor for help.

1. Download or clone the repository.
2. `cd` into the the repository folder.
3. Run `npm install`.

To test your code live in the browser, run:

1. `npm run dev` runs your app in watch mode so it will update with changes.
2. Navigate to [`localhost:5173`].

## Your task

Your task for this assessment is to set up the Redux store and to properly
connect the React components to the Redux store to achieve the desired outcomes.

Do not worry about styling or trying to give your app a pretty display.
Functionality is all you need to worry about in this assessment.

**DO NOT** manipulate the `return` value of any of the React components
**besides** the `Root` component in the __src/main.jsx__. Doing so may not allow
some test specs to run properly. You can add to or manipulate the code in the
React components **except** the `return` value.

## Running specs

You will be testing your code using Vitest with React Testing Library. Run `npm
test` to run all the test specs. Vitest will then enter watch mode, which will
start watching your files for changes and run all the test specs whenever your
files change. To run all your tests again rather than waiting for a file change,
use the `a` command, as outlined in the `h`elp menu of options for running
tests manually. To exit watch mode, type `q` (or `^c`).

See the 'Debugging Tips' section below for information on how to run tests from
a single spec file.

For this practice, Vitest specs live in a single __\_\_tests\_\___ folder within
the __src__ folder:

1. __src/\_\_tests\_\_/1-setup-redux.test.jsx__
2. __src/\_\_tests\_\_/2-display-book-list.test.jsx__
3. __src/\_\_tests\_\_/3-remove-book.test.jsx__
4. __src/\_\_tests\_\_/4-display-book-details.test.jsx__
5. __src/\_\_tests\_\_/5-create-book.test.jsx__
6. __src/\_\_tests\_\_/6-update-book.test.jsx__
7. __src/\_\_tests\_\_/7-reset-books.test.jsx__

## Phase 1: Set up Redux

In the __src/store/store.jsx__ file, **create, initiate, and return** a Redux
store with all the necessary parameters in the `configureStore` function.

The data in the initial Redux store state should be dependent on the data within
the __src/data/initial-books.json__ file. The data in the file needs to be
converted into the following initial Redux store state:

```js
{
   books: {
      "1": {
        "id": "1",
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "checkedOut": false
      },
      "2": {
        "id": "2",
        "title": "The Eyre Affair",
        "author": "Jasper Fforde",
        "checkedOut": false
      },
      "3": {
        "id": "3",
        "title": "Byzantium",
        "author": "Stephen Lawhead",
        "checkedOut": false
      },
      "4": {
        "id": "4",
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "checkedOut": false
      },
      "5": {
        "id": "5",
        "title": "The Fellowship of the Ring",
        "author": "J. R. R. Tolkien",
        "checkedOut": false
      }
   }
}
```

Here's an example of how you can use the JSON array in the
__src/data/initial-books.json__ file by importing it from a file directly
within the __src/store/__ folder:

```js
import initialBooks from '../data/initial-books.json';
```

Provide the Redux store state to the entire React application. This **MUST** be
done in the __src/main.jsx__ file (**NOT** the __src/App.jsx__ file).

Run and pass the test specs to continue:

```sh
npm test 1-setup-redux
```

**HINT:** Make sure you set up your root reducer and add it to the Redux store.

## Phase 2: Display a list of books

**IMPORTANT NOTE:** This phase requires Phase 1 test specs to be passing.

On the root page of the application, `/`, display a list of the current books in
the Redux store.

Run the application (`npm run dev`) and make sure the root page of the
application (`/`) looks like this:

![books-index-page-screenshot]

Run and pass the test specs to continue:

```sh
npm test 2-display-book-list
```

**HINT:** Make sure to look through all the React components to see which
components are being rendered at the root page of the application (`/`).

## Phase 3: Remove a book

**IMPORTANT NOTE:** This phase requires Phase 1 and 2 test specs to be passing.

On the root page of the application, `/`, if a `Delete` button is clicked for a
book, the book should be removed from the Redux store and the list of books
should no longer have the removed book.

Run the application (`npm run dev`) and make sure the root page of the
application (`/`) looks like this after the `Delete` button next to "Book #1" is
clicked:

![remove-book-screenshot]

Run and pass the test specs to continue:

```sh
npm test 3-remove-book
```

## Phase 4: Display a book's details

**IMPORTANT NOTE:** This phase requires Phase 1 and 2 test specs to be passing.

On the root page of the application, `/`, if the book name (e.g., "Book #1")
link is clicked, the user should be directed to the `/books/:bookId` route. At
this route, the application should display the details of the book that have a
matching `id` to the `:bookId` route parameter.

Run the application (`npm run dev`) and make sure the book detail page of
"Book #1" at the route `/books/1` looks like this:

![display-book-details-screenshot]

Run and pass the test specs to continue:

```sh
npm test 4-display-book-details
```

## Phase 5: Create a book

**IMPORTANT NOTE:** This phase requires Phase 1, 2, and 4 test specs to be
passing.

On the root page of the application, `/`, if the `Add New Book` link is clicked,
the user should be directed to the `/books/new` route. At this route, the
application should display the form to create a new book. Once that form is
submitted, the new book should be added to the Redux store and the user should
be redirected to the `/books/:bookId` route where the `:bookId` route parameter
will be replaced by a new 5 character `id` assigned to the newly created book.

Run the application (`npm run dev`) and fill out the create book form at
`/books/new`. Once the form is submitted, make sure the book details page shows
the input values of the form, similar to the page below:

![book-details-after-create-screenshot]

Run and pass the test specs to continue:

```sh
npm test 5-create-book
```

## Phase 6: Update a book

**IMPORTANT NOTE:** This phase requires Phase 1, 2, and 4 test specs to be
passing.

On the root page of the application, `/`, if an `Edit` link is clicked for a
book, the user should be directed to the `/books/:bookId/edit` route where
`:bookId` should be replaced with the `id` of the book. At this route, the
application should display the form to update that book.

Make sure the edit book form page shows the pre-populated book details as input
values of the form, similar to the page below:

![edit-book-form-screenshot]

Once that form is submitted, the book should be updated in the Redux store and
the user should be redirected to the `/books/:bookId` route where the `:bookId`
route parameter will be replaced by the `id` of the book that was updated.

Run the application (`npm run dev`) and fill out the edit book form at
`/books/1/edit`. Once the form is submitted, make sure the book details page
shows the input values of the form, similar to the page below:

![book-details-after-update-screenshot]

Run and pass the test specs to continue:

```sh
npm test 6-update-book
```

## Phase 7: Reset book data

On the root page of the application, `/`, if the `Reset Book Data` button is
clicked the Redux store should be reverted to its initial state in Phase 1.

**IMPORTANT NOTE:** This phase requires the Phase 1, 2, and 3 test specs to be
passing.

Run the application (`npm run dev`) and remove "Book #1". The application should
look like this:

![remove-book-screenshot]

Now, press the `Reset Book Data` button. The application should revert back to
having the 5 initial books:

![books-index-page-screenshot]

Run and pass the test specs to continue:

```sh
npm test 7-reset-books
```

## CHALLENGE BONUS

Take a look at the book detail page again at `/books/:bookId`.

When the `Check Out` button is clicked on the page, the book's data in the Redux
store should have the `checkedOut` value set to `true`. The `Check Out` button
should then change text to become a `Return` button. When the `Return` button is
clicked, the book's data in the Redux store should have the `checkedOut` value
set to `false`. The `Return` button should then change text to become a `Check
Out` button.

Make sure the book detail page of "Book #1" at the route `/books/1` looks like
this after pressing the `Check Out` button:

![display-book-details-check-out-screenshot]

To run the test specs with the challenge bonus, comment in the commented out
code in the `src/__tests__/4-display-book-details.test.jsx` file (at the bottom
of the file), then run the command:

```sh
npm test 4-display-book-details
```

## Debugging tips

Here are some tips for making debugging in Vitest a little less intimidating.

1. Vitest often loads modules--and does other things--asynchronously. As a
   result, the output can multiply significantly when running tests from
   multiple files at once, as each test takes control of the console in
   seemingly random order and re-prints its updated status as each async
   function completes. You can either wait for the final results or, to minimize
   the output, run a single file of tests at a time (see next item).

2. To run the tests for a single test file, specify the file's name of the file
   after `npm test`. What's more, the filename argument will be treated as a
   regular expression, so you don't have to specify the full name. E.g., to run
   only the tests in **3-remove-book.test.jsx**, simply run

   ```sh
   npm test 3
   ```

   in the project's root directory.

   (You will have to specify a bit more for any number that also appears in the
   test files' full path.)

3. Vitest is currently configured to show the console output in your terminal.
   This enables you to see the output of any `console.log`s in your code. It
   also means that the information from Redux logger will print in your
   terminal. If you ever want to turn this off, just open **vite.config.js** and
   add `silent: true` under the `test` key.

4. Vitest is pretty good about restarting in-process tests if you make further
   changes to the relevant files. Nevertheless, if you think a failing test
   should have passed, always re-run it before you start despairing and trying
   to debug. Similarly, if your results seem repeatedly off or the watch feature
   doesn't seem to be triggering, try killing and restarting your Vitest
   process. As with most software, sometimes it just needs to reboot.

5. Examine the test files to see the expected behavior.

## Submission

Make sure you are passing all the test specs by running:

```sh
npm test
```

If you want to submit your project, do the following:

1. Delete the **node_modules** directory.
2. Zip your project.
3. Submit the zip folder through the link on Open.

[`localhost:5173`]: localhost:5173
[books-index-page-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/books-index-page-screenshot.png
[remove-book-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/remove-book-screenshot.png
[display-book-details-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/display-book-details-screenshot.png
[display-book-details-check-out-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/display-book-details-check-out-screenshot.png
[book-details-after-create-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/book-details-after-create-screenshot.png
[edit-book-form-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/edit-book-form-screenshot.png
[book-details-after-update-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/pt-week-35/book-details-after-update-screenshot.png
