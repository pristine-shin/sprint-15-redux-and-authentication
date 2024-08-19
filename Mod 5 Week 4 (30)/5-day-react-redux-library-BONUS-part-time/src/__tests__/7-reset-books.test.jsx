import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('07 - Reset Book Data', () => {
  let container, user;

  beforeEach(() => {
    user = userEvent.setup();
    container = document.createElement("div");
    container.id = "root";
    document.body.appendChild(container);
  });

  afterEach(() => {
    vi.resetModules();
    container.remove();
    container = null;
  });

  describe('the "Reset Book Data" button should reset all the books in the Redux store to the initial state', () => {
    it('should reset the books to the original state', async () => {
      await act(async () => await import("../main.jsx"));
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/1\">Book #1</a><a href=\"/books/1/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/2\">Book #2</a><a href=\"/books/2/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/3\">Book #3</a><a href=\"/books/3/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/4\">Book #4</a><a href=\"/books/4/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/5\">Book #5</a><a href=\"/books/5/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");

      // Try deleting the fourth record
      const deleteBookBtn = screen.getAllByRole('button', { name: "Delete" })[3];
      await user.click(deleteBookBtn);
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/1\">Book #1</a><a href=\"/books/1/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/2\">Book #2</a><a href=\"/books/2/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/3\">Book #3</a><a href=\"/books/3/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/5\">Book #5</a><a href=\"/books/5/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");

      // Reset all records to initial record data
      const resetBooksDataBtn = screen.getByRole('button', { name: "Reset Book Data" });
      await user.click(resetBooksDataBtn);
      expect(screen.getByText("Book #4")).toBeInTheDocument();
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/1\">Book #1</a><a href=\"/books/1/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/2\">Book #2</a><a href=\"/books/2/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/3\">Book #3</a><a href=\"/books/3/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/4\">Book #4</a><a href=\"/books/4/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/5\">Book #5</a><a href=\"/books/5/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");
    });

    it('should reset the books to reflect the data in the `src/data/initial-books.json` file', async () => {
      vi.doMock('../data/initial-books.json', () => ({
        default:
          [
            {
              "id": 43210,
              "title": "Mock Test 2 Title",
              "author": "Mock Test 2 Author"
            },
            {
              "id": 98765,
              "title": "Mock Test 1 Title",
              "author": "Mock Test 1 Author"
            }
          ]
      }));

      await act(async () => await import("../main.jsx"));
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/43210\">Book #43210</a><a href=\"/books/43210/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/98765\">Book #98765</a><a href=\"/books/98765/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");

      // Try deleting the second record
      const deleteBookBtn = screen.getAllByRole('button', { name: "Delete" })[1];
      await user.click(deleteBookBtn);
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/43210\">Book #43210</a><a href=\"/books/43210/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");

      // Reset all records to initial record data
      const resetBooksDataBtn = screen.getByRole('button', { name: "Reset Book Data" });
      await user.click(resetBooksDataBtn);
      expect(screen.getByText("Book #98765")).toBeInTheDocument();
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/43210\">Book #43210</a><a href=\"/books/43210/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/98765\">Book #98765</a><a href=\"/books/98765/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");
    });
  });
});
