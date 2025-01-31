const Payment = require('../models/Payment');

// Create Payment
exports.createPayment = async (req, res) => {
  const { paymentDesc, paymentType, amount, paymentDate, recieptNumber, creditCard, creditCardType, userDetail,isSucceed, isCanceled } = req.body;

  try {
    console.log("createPayment start");

    const payment = new Payment({
      paymentDesc,
      paymentType,
      amount,
      paymentDate,
      recieptNumber,
      creditCard,
      creditCardType,
      userDetail,
      isSucceed,
      isCanceled
    });

    await payment.save();
    console.log('Payment saved:', payment); // Log saved data
    res.status(201).json({ message: 'Payment created successfully', payment });
  } catch (error) {
    console.error("Error in createPayment:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Edit Payment
exports.editPayment = async (req, res) => {
  console.log("editPayment start");

  const { paymentId, ...updates } = req.body;

  try {
        // Whitelist fields that are allowed to be updated
    const allowedUpdates = ['paymentDesc', 'amount', 'isSucceed', 'isCanceled'];
    const filteredUpdates = Object.keys(updates).reduce((acc, key) => {
      if (allowedUpdates.includes(key)) {
        acc[key] = updates[key];
      }
      return acc;
    }, {});

   // Perform the update
    const payment = await Payment.findOneAndUpdate(
      { paymentId }, 
      { $set: filteredUpdates },
      { new: true } 
    );

    if (!payment) {
      return res.status(400).json({ message: "The payment was not found" });
    }

    res.status(200).json({ message: "Edit successful", payment });
  } catch (error) {
    console.error("Error in editPayment:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete Payment
exports.deletePayment = async (req, res) => {
  console.log("deletePayment start");

  const { paymentId } = req.body;

  try {
    const payment = await Payment.findOneAndDelete({ paymentId });

    if (!payment) {
      return res.status(400).json({ message: "The payment was not found" });
    }

    res.status(200).json({ message: "Delete successful", payment });
  } catch (error) {
    console.error("Error in deletePayment:", error.message);
    res.status(500).json({ error: error.message });
  }
};
