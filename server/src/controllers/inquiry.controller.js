// services/inquiryService.js
const Inquiry = require('../models/inquiry.model'); // Adjust the path as needed

// Function to create an inquiry
exports.createInquiry = async (data) => {
    try {
        const inquiry = new Inquiry(data);
        await inquiry.save();
        return { status: 201, data: inquiry };
    } catch (error) {
        return { status: 400, error: error.message };
    }
};

// Function to get all inquiries
exports.getAllInquiries = async () => {
    try {
        // const inquiries = await Inquiry.find().populate('userName', 'name');
        const inquiries = await Inquiry.find();
        return { status: 200, data: inquiries };
    } catch (error) {
        return { status: 500, error: error.message };
    }
};

// Function to get a single inquiry by ID
exports.getOneInquiry = async (id) => {
    try {
        const inquiry = await Inquiry.findById(id).populate('userName', 'name');
        if (!inquiry) {
            return { status: 404, error: 'Inquiry not found' };
        }
        return { status: 200, data: inquiry };
    } catch (error) {
        return { status: 500, error: error.message };
    }
};

// Function to update an inquiry
exports.updateInquiry = async (id, data) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(id, data, { new: true });
        if (!inquiry) {
            return { status: 404, error: 'Inquiry not found' };
        }
        return { status: 200, data: inquiry };
    } catch (error) {
        return { status: 400, error: error.message };
    }
};

// Function to delete an inquiry
exports.deleteInquiry = async (id) => {
    try {
        const inquiry = await Inquiry.findByIdAndDelete(id);
        if (!inquiry) {
            return { status: 404, error: 'Inquiry not found' };
        }
        return { status: 200, message: 'Inquiry deleted' };
    } catch (error) {
        return { status: 500, error: error.message };
    }
};
