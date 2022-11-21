let express = require('express');
let chownrFn = require('chownr');
let app = express();
let router = express.Router();

let fnReproducer = function (req, res) {
  let data1 = req.query.path;
  chownrFn(data1);
};

router.get("/path", fnReproducer);
