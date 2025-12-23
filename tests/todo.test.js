import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';

let appSource = '';

beforeAll(async () => {
  const appPath = path.resolve(process.cwd(), 'js/app.js');
  appSource = await fs.readFile(appPath, 'utf8');
});

function bootstrapTodoDom() {
  document.body.innerHTML = `
    <div id="todo-header" class="header">
      <h2>My To Do List</h2>
      <input type="text" id="todo-input" placeholder="Title...">
      <span class="add-btn">Add</span>
    </div>
    <ul id="todo-list">
      <li class="checked completed-item">Item A</li>
      <li>Item B</li>
    </ul>
  `;

  window.alert = vi.fn();
  // Evaluate the browser script in the JSDOM window context.
  window.eval(appSource);
}

beforeEach(() => {
  vi.restoreAllMocks();
  bootstrapTodoDom();
});

describe('Todo app (DOM behaviors)', () => {
  it('adds a close button to every initial todo item', () => {
    const items = Array.from(document.querySelectorAll('#todo-list li'));
    expect(items.length).toBeGreaterThan(0);

    for (const li of items) {
      const close = li.querySelector('span.close');
      expect(close).not.toBeNull();
      expect(close.textContent).toBe('×');
    }
  });

  it('clicking a close button hides the todo item', () => {
    const firstLi = document.querySelector('#todo-list li');
    const close = firstLi.querySelector('span.close');

    close.click();

    expect(firstLi.style.display).toBe('none');
  });

  it('newTodoItem alerts and does not add an empty item', () => {
    const list = document.getElementById('todo-list');
    const initialCount = list.getElementsByTagName('li').length;

    document.getElementById('todo-input').value = '';
    window.newTodoItem();

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(list.getElementsByTagName('li').length).toBe(initialCount);
  });

  it('newTodoItem appends a new item, clears input, and adds a close button', () => {
    const list = document.getElementById('todo-list');
    const initialCount = list.getElementsByTagName('li').length;

    document.getElementById('todo-input').value = 'Buy milk';
    window.newTodoItem();

    const items = list.getElementsByTagName('li');
    expect(items.length).toBe(initialCount + 1);
    expect(document.getElementById('todo-input').value).toBe('');

    const last = items[items.length - 1];
    expect(last.firstChild?.textContent).toBe('Buy milk');
    expect(last.querySelector('span.close')).not.toBeNull();
  });

  it('clicking a todo item toggles completion classes', () => {
    const li = document.querySelector('#todo-list li:nth-child(2)'); // "Item B"
    expect(li.classList.contains('checked')).toBe(false);
    expect(li.classList.contains('completed-item')).toBe(false);

    li.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(li.classList.contains('checked')).toBe(true);
    expect(li.classList.contains('completed-item')).toBe(true);

    li.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(li.classList.contains('checked')).toBe(false);
    expect(li.classList.contains('completed-item')).toBe(false);
  });

  it('clicking a close button does not toggle completion classes', () => {
    const li = document.querySelector('#todo-list li:nth-child(2)'); // "Item B"
    const close = li.querySelector('span.close');

    close.click();

    expect(li.classList.contains('checked')).toBe(false);
    expect(li.classList.contains('completed-item')).toBe(false);
    expect(li.style.display).toBe('none');
  });
});

