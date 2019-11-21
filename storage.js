export function read() {
  const data = window.localStorage.getItem("ds-contacts");
  return data === null ? [] : JSON.parse(data);
}

export function write(contacts) {
  const data = JSON.stringify(contacts);
  window.localStorage.setItem("ds-contacts", data);
}

export function append(contact) {
  const contacts = read();
  const newContact = Object.assign({ id: contacts.length + 1 }, contact);
  contacts.push(newContact);
  write(contacts);
}

export function remove(ids) {
  const contacts = read();
  const newContacts = contacts.filter(contact => ids.indexOf(String(contact.id)) === -1);
  write(newContacts);
}
