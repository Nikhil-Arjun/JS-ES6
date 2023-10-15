// map is only created by using a constructor

const contacts = new Map();

contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });

console.log(contacts);

const infoJessie = contacts.get("Jessie");
console.log(infoJessie);

contacts.set("Jessie", {
  phone: "213-555-1234",
  address: "NewYork, apt-4, USA",
});

console.log(contacts);

console.log(contacts.has("name"));

console.log(contacts.has("Hilary"));

console.log(contacts.size);

const del_info = contacts.delete("Hilary");
console.log(del_info);

console.log(contacts.size);
