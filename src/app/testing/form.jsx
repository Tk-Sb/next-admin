'use client'

import { useState } from 'react';  
import * as XLSX from 'xlsx';  

export default function FileUpload() {  
    const [data, setData] = useState([])  

    const handleFileChange = (event) => {  
        const file = event.target.files[0]
        if (!file) return

        const reader = new FileReader()

        reader.onload = (e) => {  
            const fileData = e.target.result

            // Read the file buffer
            const workbook = XLSX.read(fileData, { type: 'binary' })

            // Get the first sheet name
            const sheetName = workbook.SheetNames[0]

            // Get the row data from the first sheet
            const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])

            // Update the state with the parsed data
            setData(sheetData)
            console.log(sheetData)
        }  
        
    reader.readAsBinaryString(file)
}  

    return (  
        <div>  
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />  
        <div>  
            {data.length > 0 && (  
            <table>  
                <thead>  
                <tr>  
                    {Object.keys(data[0]).map((key) => (  
                    <th key={key}>{key}</th>  
                    ))}  
                </tr>  
                </thead>  
                <tbody>  
                {data.map((row, index) => (  
                    <tr key={index}>  
                    {Object.values(row).map((value, idx) => (  
                        <td key={idx}>{value}</td>  
                    ))}  
                    </tr>  
                ))}  
                </tbody>  
            </table>  
            )}  
        </div>  
        </div>  
    )  
}