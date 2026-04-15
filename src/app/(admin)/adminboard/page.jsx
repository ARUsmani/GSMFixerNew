// "use client";
// import React, { useEffect, useState } from "react";
// import { Table, Button, Form, Container } from "react-bootstrap";
// import { fetchUnlockTools, updateUnlockTool } from "@/app/(admin)/adminboard/tServer";



// const page = () => {
//   const [unlockTools, setUnlockTools] = useState([]);
//   const [editingCell, setEditingCell] = useState(null);
//   const [editedValue, setEditedValue] = useState("");

//   useEffect(() => {
//     async function loadData() {
//       const data = await fetchUnlockTools();
//       setUnlockTools(data);
//     }
//     loadData();
//   }, []);

//   const handleCellClick = (id, field, value) => {
//     setEditingCell({ id, field });
//     setEditedValue(value);
//   };

//   const handleInputChange = (e) => {
//     setEditedValue(e.target.value);
//   };

//   const handleBlur = async () => {
//     if (editingCell) {
//       const { id, field } = editingCell;
//       await updateUnlockTool(id, { [field]: editedValue });
//       setUnlockTools(await fetchUnlockTools());
//       setEditingCell(null);
//     }
//   };

//   return (
//     <Container fluid>
//       <h3 className="text-light text-center">Unlock Tools</h3>
//     <Table  striped bordered hover>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>userName</th>
//           <th>userPass</th>
//           <th>bindingTime</th>
//           <th>releaseTime</th>
//           <th>isSold</th>
//         </tr>
//       </thead>
//       <tbody>
//         {unlockTools.map((tool) => (
//           <tr key={tool.id}>
//             {Object.keys(tool).map((field) => (
//               <td
//                 key={field}
//                 onClick={() => handleCellClick(tool.id, field, tool[field])}
//               >
//                 {editingCell?.id === tool.id && editingCell?.field === field ? (
//                   <Form.Control
//                     // type="text"
//                     type={field === "bindingTime" || field === "releaseTime" ?"time":"text"}
//                     value={editedValue}
//                     onChange={handleInputChange}
//                     onBlur={handleBlur}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         handleBlur();
//                       }
//                     }}
//                     autoFocus
//                   />
//                 ) : (
//                   // tool[field]
//                   String(tool[field])
//                 )}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>


//     </Table>
//     </Container>
//   );
// };

// export default page;



"use client";
import React, { useEffect, useState } from "react";
import { Table, Button, Form, Container } from "react-bootstrap";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import { fetchUnlockTools, updateUnlockTool } from "@/app/(admin)/adminboard/tServer";
import { format } from "date-fns";

const page = () => {
  const [unlockTools, setUnlockTools] = useState([]);
  const [editingCell, setEditingCell] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  
  // () => {
  //   const [startDate, setStartDate] = useState(new Date());
  //   return (
  //     <DatePicker
  //       selected={startDate}
  //       onChange={(date) => setStartDate(date)}
  //       timeInputLabel="Time:"
  //       dateFormat="MM/dd/yyyy h:mm aa"
  //       showTimeInput
  //     />
  //   );
  // };

  useEffect(() => {
    async function loadData() {
      const data = await fetchUnlockTools();
      setUnlockTools(data);
    }
    loadData();
  }, []);

  const handleCellClick = (id, field, value) => {
    setEditingCell({ id, field });
    setEditedValue(value);
  };

  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleDateChange = (date) => {
    
    const formattedDate = format(date, "MM/dd/yyyy h:mm a"); 
    console.log(formattedDate); 
    setStartDate(formattedDate);
    // setEditedValue(formattedDate.toString()); 
    // console.log("Edited Value",editedValue)
  };

  const handleBlur = async () => {
    if (editingCell) {
      const { id, field } = editingCell;
      await updateUnlockTool(id, { [field]: editedValue });
      setUnlockTools(await fetchUnlockTools());
      setEditingCell(null);
    }
  };
  const handleBlurDate = async () => {
    if (editingCell) {
      const { id, field } = editingCell;
      await updateUnlockTool(id, { [field]: startDate });
      setUnlockTools(await fetchUnlockTools());
      setEditingCell(null);

    }
  };

 

  return (
    <Container fluid>
      <h3 className="text-light text-center">Unlock Tools</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>userName</th>
            <th>userPass</th>
            <th>bindingTime</th>
            <th>releaseTime</th>
            <th>isSold</th>
          </tr>
        </thead>
        <tbody>
          {unlockTools.map((tool) => (
            <tr key={tool.id}>
              {Object.keys(tool).map((field) => (
                <td
                  key={field}
                  onClick={() => handleCellClick(tool.id, field, tool[field])}
                >
                  {editingCell?.id === tool.id && editingCell?.field === field ? (
                    field === "bindingTime" || field === "releaseTime" ? (
                      <DatePicker
                        selected={new Date(startDate)}
                  
                
              
                        showTimeInput
                        dateFormat="MM/dd/yyyy h:mm aa"
                        timeInputLabel="Set Time:"
                        onChange={handleDateChange}
                        onCalendarClose={handleBlurDate}
                        autoFocus
                    
                      />
                    ) : (
                      // <Form.Control name="toolTable"
                      //   type={field === "bindingTime" || field === "releaseTime" ? "time" : "text"}
                      //   value={editedValue}
                      //   onChange={handleInputChange}
                      //   onBlur={handleBlur}
                      //   onKeyDown={(e) => {
                      //     if (e.key === "Enter") {
                      //       handleBlur();
                      //     }
                      //   }}
                      //   autoFocus
                      // />

                
                      <Form.Select aria-label="Default select example">

      <option value={true}>True</option>
      <option value={false}>False</option>
    </Form.Select>
                   
                    )
                  ) : (
                    String(tool[field])
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default page;


