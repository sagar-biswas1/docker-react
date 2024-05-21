// import React from 'react';

// class DownloadButton extends React.Component {
//   // Function to convert object data to JSON and trigger download
//   downloadData = () => {
//     const userData = {
//       // Your user data object here
//       name: 'John',
//       age: 30,
//       gender:'male'
//     };
//     const jsonData = JSON.stringify(userData);
//     const blob = new Blob([jsonData], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'userData.json'; // File name
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.downloadData}>Download User Data</button>
//       </div>
//     );
//   }
// }

// export default DownloadButton;

import React from 'react';
import jsPDF from 'jspdf';

const PDFGenerator = () => {



  const generatePDF = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => {
        const doc = new jsPDF();
    // Define styles
    const textStyle = { fontSize: 12, lineHeight: 1.5 };
    const titleStyle = { fontSize: 16, fontStyle: 'bold', lineHeight: 1.5 };

        doc.text('User Details', 10, 10);
        // doc.setFontStyle('normal');
        doc.text(`Name: ${json.name}`, 20, 20, textStyle);
        doc.text(`Username: ${json.username}`, 20, 30, textStyle);
        doc.text(`Email: ${json.email}`, 20, 40, textStyle);
        doc.text(`Address: ${json.address.street}, ${json.address.suite}, ${json.address.city}, ${json.address.zipcode}`, 20, 50, textStyle);
        doc.text(`Phone: ${json.phone}`, 20, 60, textStyle);
        doc.text(`Website: ${json.website}`, 20, 70, textStyle);
        doc.text(`Company: ${json.company.name}`, 20, 80, textStyle);
        doc.text(`Catch Phrase: ${json.company.catchPhrase}`, 20, 90, textStyle);
        doc.text(`BS: ${json.company.bs}`, 20, 100, textStyle);
    
        // Save the PDF
        doc.save('document.pdf');
    })
    
   
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PDFGenerator;
