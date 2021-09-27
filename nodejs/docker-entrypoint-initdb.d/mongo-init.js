print(
  "Start #################################################################"
);

db = db.getSiblingDB("biblio");
db.createUser({
  user: "alex",
  pwd: "tuto1234",
  roles: [{ role: "readWrite", db: "biblio" }],
});
db.createCollection("livres");

print("END #################################################################");
