import { read, append, remove } from "./storage.js";

export function init() {
  window.addEventListener("DOMContentLoaded", onLoad);
  document.getElementById("form-add").addEventListener("submit", onSubmitAdd);
  document
    .getElementById("form-delete")
    .addEventListener("submit", onSubmitDelete);
}

function onLoad() {
  render();
}

function onSubmitAdd(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const contact = {};
  data.forEach((value, key) => (contact[key] = value));
  append(contact);
  render();
}

function onSubmitDelete(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const ids = data.getAll('delete');
  remove(ids);
}

function render() {
  const contacts = read();
  const list = document.getElementById("list");
  const items = contacts.map(
    contact => `
      <li>
        <input type="checkbox" name="delete" value="${contact.id}">
        ${contact.name} &lt;${contact.email}&gt; [${contact.phone}]
      </li>
    `
  );
  list.innerHTML = items.join("");
}
