import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('04 - Display a Book\'s Details', () => {
  let container, user;

  beforeEach(() => {
    user = userEvent.setup();
    container = document.createElement("div");
    container.id = "root";
    document.body.appendChild(container);
    vi.mock('react-router-dom', async () => {
      // Require the original module to not be mocked...
      const originalModule = await vi.importActual('react-router-dom');
      return {
        ...originalModule,
        createBrowserRouter: originalModule.createMemoryRouter,
      };
    });
  });

  afterEach(() => {
    vi.resetModules();
    container.remove();
    container = null;
  });

  describe('show a detailed book page when the link to "/books/:bookId" is clicked on the BookIndexItem', () => {
    it('should show the first book when the "Book #1" text link is clicked', async () => {
      await act(async () => await import("../main.jsx"));
      const link = screen.getByRole('link', { name: "Book #1"});
      await user.click(link);
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section>ID: 1<br>Title: The Count of Monte Cristo<br>Author: Alexandre Dumas<br><button>Check Out</button><br><a href=\"/\">Back to Books List</a></section>");
    });

    it('should show the fourth book when the "Book #4" text link is clicked', async () => {
      await act(async () => await import("../main.jsx"));
      const link = screen.getByRole('link', { name: "Book #4"});
      await user.click(link);
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section>ID: 4<br>Title: Harry Potter and the Philosopher's Stone<br>Author: J.K. Rowling<br><button>Check Out</button><br><a href=\"/\">Back to Books List</a></section>");
    });
  });

  // Start of CHALLENGE BONUS test specs

  // describe('check out the book when "Check Out" button is clicked on the BookShow', () => {
  //   it('should change the "Check Out" button to become a "Return" button when clicked', async () => {
  //     await act(async () => await import("../main.jsx"));
  //     const link = screen.getByRole('link', { name: "Book #1"});
  //     await user.click(link);
  //     expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section>ID: 1<br>Title: The Count of Monte Cristo<br>Author: Alexandre Dumas<br><button>Check Out</button><br><a href=\"/\">Back to Books List</a></section>");
  //     const checkOutButton = screen.getByRole('button', { name: "Check Out" });
  //     await user.click(checkOutButton);
  //     screen.getByText('Return');
  //     expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section>ID: 1<br>Title: The Count of Monte Cristo<br>Author: Alexandre Dumas<br><button>Return</button><br><a href=\"/\">Back to Books List</a></section>");
  //   });
  // });

  // End of CHALLENGE BONUS test specs
});
