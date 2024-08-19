import { screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('05 - Create a Book', () => {
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

  describe('inserts a new book into the Redux store from the CreateBookForm', () => {
    it('should insert the new book into the Redux store when CreateBookForm is submitted', async () => {
      await act(async () => await import("../main.jsx"));
      const link = screen.getByRole('link', { name: "Add New Book"});
      await user.click(link);
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><form><h2>Create Book</h2><label>Title<input type=\"text\" value=\"\"></label><label>Author<textarea></textarea></label><input type=\"submit\" value=\"Create Book\"></form>");

      const titleInput = screen.getByLabelText('Title');
      const authorInput = screen.getByLabelText('Author');
      expect(titleInput).toHaveValue('');
      expect(authorInput).toHaveValue('');

      const titleValue = '3';
      const authorValue = '4';
      fireEvent.change(titleInput, { target: { value: titleValue } });
      expect(titleInput).toHaveValue(titleValue);
      fireEvent.change(authorInput, { target: { value: authorValue } });
      expect(authorInput).toHaveValue(authorValue);

      const submitBtn = screen.getByRole('button', { name: "Create Book"});
      await user.click(submitBtn);
      expect(container.innerHTML).toMatch(new RegExp(`<h1>aA Lending Library</h1><section>ID: .{5}<br>Title: ${titleValue}<br>Author: ${authorValue}<br><button>Check Out</button><br><a href="/">Back to Books List</a></section>`));
    });
  });
});
