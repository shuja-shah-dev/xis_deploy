import connectDB from "../lib/mongodb";
import Contact from "../models/contact";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { name, phone, email, subject, desc } = await req.json();

  try {
    await connectDB();
    await Contact.create({ name, phone, email, subject, desc });
    
    res.status(200).json({
      message: "Contact sent",
      success: true,
    });

  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      return res.status(422).json({
        message: "Validation error",
        errors: errorList,
        success: false,
      });
    }

    // Handle other types of errors
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
}
