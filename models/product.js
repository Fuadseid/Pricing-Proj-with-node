const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);
const getproduct = (cb) => {
  fs.readFile(p, (err, filecontent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(filecontent));
    }
  });
};
module.exports = class product {
  constructor(t) {
    this.title = t;
  }
  save() {
    getproduct((products)=>{

      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    })
    fs.readFile(p, (err, filecontent) => {
 

    });
  }

  static fetchALL(cb) {
    getproduct(cb);
  }
};
