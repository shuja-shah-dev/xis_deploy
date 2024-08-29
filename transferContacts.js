

const axios = require("axios");
const fs = require("fs");

axios.defaults.timeout = 90000; // Set global timeout to 90 seconds

async function fetchAndPostContacts() {
  try {
    // Fetch data from the second API
    const { data: secondApiContacts } = await axios.get("https://be.xis.ai/contacts");

    // Transform the contacts and collect them into an array
    const transformedContacts = secondApiContacts.map(contact => ({
      fname: contact.fname,
      lname: contact.lname,
      jobTitle: contact.jobTitle,
      company: contact.company,
      topic: contact.topic,
      email: contact.email,
      desc: contact.desc,
      date: contact.date
    }));

        // // Post to the first API
      // await axios.post(
      //   "https://thankful-growth-9dc3553048.strapiapp.com/api/contacts",
      //   transformedData,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      // console.log(`Blog titled "${contact.fname}" uploaded successfully.`);

    // Save the transformed contacts to a JSON file
    fs.writeFileSync("contacts.json", JSON.stringify(transformedContacts, null, 2), "utf8");
    console.log("Contacts have been saved to contacts.json");
  } catch (error) {
    console.error("Error processing contacts:", error);
  }
}

fetchAndPostContacts();
