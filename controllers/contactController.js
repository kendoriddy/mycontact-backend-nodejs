const asyncHandler = require("express-async-handler");
// @desc Get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

// @desc Create new contacts
// @route POST /api/contacts
// @access Public

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone_number } = req.body;
  if (!name || !email || !phone_number) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  res.status(201).json({ message: "Create contact" });
});

// @desc Get contacts
// @route GET /api/contacts/:id
// @access Public

const getContact = async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

// @desc Update contacts
// @route UPDATE /api/contacts/:id
// @access Public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

// @desc Delete contacts
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
