#GenerateYOURownQR - QR Code Generator



.Overview
GenerateYOURownQR is a web application that allows users to generate QR codes effortlessly. This project combines front-end development with a Node.js back-end using Express and MongoDB for QR code generation and storage.


bash
Copy code
npm install
Set up MongoDB:

Configure your MongoDB URI in connectDB.js.
Ensure your MongoDB server is running.
Start the server:

bash
Copy code
node index.js
Usage
Open the web application in your browser.

Enter the text you want to encode into the QR code.

Click the "Generate QR Code" button.

View and download the generated QR code.

Folder Structure
arduino
Copy code
GenerateYOURownQR/
│
├── index.js
├── connectDB.js
├── QR.model.js
├── QR.route.js
├── public/
│   ├── index.html
│   └── index.css
└── README.md
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
qrcode library
HTML5
CSS3
JavaScript (ES6+)
Code Highlights
Express Server Setup:

Initialization and configuration of an Express server.
MongoDB Connection:

Establishment of a connection to MongoDB using Mongoose.
QR Code Generation and Storage:

Handling POST requests for QR code generation and storage.
Front-end Interface:

HTML structure for the web application.
Styling with CSS for a user-friendly experience.
JavaScript Functions:

QR code generation, download, and scroll-to-top functionalities.

#Home page
![Screenshot (1026)](https://github.com/manshikumari12/barcodegenerator/assets/119393324/6f67aa63-27fe-465d-bf8b-1ef88521299a)
#page
![Screenshot (1024)](https://github.com/manshikumari12/barcodegenerator/assets/119393324/fe8c4b46-027c-40c8-a2de-2684fb375cdc)
#QR Code Generation
![Screenshot (1023)](https://github.com/manshikumari12/barcodegenerator/assets/119393324/a0e7c8e7-4789-45dd-a045-c1f3113c323c)

#Footer
![Screenshot (1025)](https://github.com/manshikumari12/barcodegenerator/assets/119393324/a4cabf75-79e9-4f4e-b58d-b2c8c5930443)


                                                                                          Thank-you:)

