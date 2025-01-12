const express = require("express");
const router = express.Router();

const {
  ensureAuthenticated,
  addUserData,
} = require("../middlewares/auth.middleware");


const {
  getPC,
  postPC,
  getPCList,
  deletePC,
  paymentDonePC,
  selectPC,
  postPCedit,
  getPCedit,
} = require("../controllers/programmingContest.controller");

router.get("/register", ensureAuthenticated, addUserData, getPC);
router.post("/register", ensureAuthenticated, addUserData, postPC);
router.get("/list", ensureAuthenticated, addUserData, getPCList);
router.get("/delete/:id", ensureAuthenticated, addUserData, deletePC);
router.get("/paymentDone/:id", ensureAuthenticated, addUserData, paymentDonePC);
router.get("/select/:id", ensureAuthenticated, addUserData, selectPC);
router.get("/edit/:id", ensureAuthenticated, addUserData, getPCedit);
router.post("/edit/:id", ensureAuthenticated, addUserData, postPCedit);
module.exports = router;