import React from 'react';
import { jsPDF } from "jspdf";
import { useState } from 'react';

export default function App() {
  function xyz(textxyz,textxyz1,textxyz2,textxyz3,textxyz4){
    let startX = 70;
    let startY = 40;
    const doc = new jsPDF("p", "pt");
    doc.setFont(undefined,"bold")
    doc.setFontSize(22);
    doc.text("RENT AGREEMENT", 180, 35);
    doc.setFontSize(14);
  doc.setFont(undefined,"normal")
    
    const inputValue = textxyz
    const inputValue1 = textxyz1
    const inputValue2 = textxyz2
    const inputValue3 = textxyz3
    const inputValue4 = textxyz4
    let endX = 420;
    let textMap = doc.splitTextToSize(
      inputValue,
      endX
    );
    let textMap3 = doc.splitTextToSize(
      inputValue3,
      endX
    );
    let textMap1 = doc.splitTextToSize(
      inputValue1,
      endX
    );
    let textMap2 = doc.splitTextToSize(
      inputValue2,
      endX
    );
    let textMap4 = doc.splitTextToSize(
      inputValue4,
      endX
    );
    
    let startXCached = startX;
      let boldOpen = false;
      textMap.map((text, i) => {
          if (text) {
              const arrayOfNormalAndBoldText = text.split('**');
              const boldStr = 'bold';
              const normalOr = 'normal';
              arrayOfNormalAndBoldText.map((textItems, j) => {
                  doc.setFont(undefined, boldOpen ? normalOr : boldStr);
                  if (j % 2 === 0) {
                      doc.setFont(undefined, boldOpen ? boldStr : normalOr);
                  }
                  doc.text(textItems, startX, startY);
                  startX = startX + doc.getStringUnitWidth(textItems) * 14;
                  return null;
              });
              boldOpen = isBoldOpen(arrayOfNormalAndBoldText.length, boldOpen);
              startX = startXCached;
              startY += 20;
          }
          return null;
      });
      endX = 400;
      startX=95;
      startXCached = startX;
      textMap3.map((text, i) => {
          if (text) {
              const arrayOfNormalAndBoldText = text.split('**');
              const boldStr = 'bold';
              const normalOr = 'normal';
              arrayOfNormalAndBoldText.map((textItems, j) => {
                  doc.setFont(undefined, boldOpen ? normalOr : boldStr);
                  if (j % 2 === 0) {
                      doc.setFont(undefined, boldOpen ? boldStr : normalOr);
                  }
                  doc.text(textItems, startX, startY);
                  startX = startX + doc.getStringUnitWidth(textItems) * 14;
                  return null;
              });
              boldOpen = isBoldOpen(arrayOfNormalAndBoldText.length, boldOpen);
              startX = startXCached;
              startY += 20;
          }
          return null;
      });
      doc.addPage()
      endX = 400;
      startX = 95;
      startY = 40;
      textMap1.map((text, i) => {
          if (text) {
              const arrayOfNormalAndBoldText = text.split('**');
              const boldStr = 'bold';
              const normalOr = 'normal';
              arrayOfNormalAndBoldText.map((textItems, j) => {
                  doc.setFont(undefined, boldOpen ? normalOr : boldStr);
                  if (j % 2 === 0) {
                      doc.setFont(undefined, boldOpen ? boldStr : normalOr);
                  }
                  doc.text(textItems, startX, startY);
                  startX = startX + doc.getStringUnitWidth(textItems) * 14;
                  return null;
              });
              boldOpen = isBoldOpen(arrayOfNormalAndBoldText.length, boldOpen);
              startX = startXCached;
              startY += 20;
          }
          return null;
      });
      doc.addPage()
      endX = 400;
      startX = 95;
      startY = 40;
      textMap2.map((text, i) => {
          if (text) {
              const arrayOfNormalAndBoldText = text.split('**');
              const boldStr = 'bold';
              const normalOr = 'normal';
              arrayOfNormalAndBoldText.map((textItems, j) => {
                  doc.setFont(undefined, boldOpen ? normalOr : boldStr);
                  if (j % 2 === 0) {
                      doc.setFont(undefined, boldOpen ? boldStr : normalOr);
                  }
                  doc.text(textItems, startX, startY);
                  startX = startX + doc.getStringUnitWidth(textItems) * 14;
                  return null;
              });
              boldOpen = isBoldOpen(arrayOfNormalAndBoldText.length, boldOpen);
              startX = startXCached;
              startY += 20;
          }
          return null;
      });
      startX = 70;
      startXCached = startX;
      textMap4.map((text, i) => {
          if (text) {
              const arrayOfNormalAndBoldText = text.split('**');
              const boldStr = 'bold';
              const normalOr = 'normal';
              arrayOfNormalAndBoldText.map((textItems, j) => {
                  doc.setFont(undefined, boldOpen ? normalOr : boldStr);
                  if (j % 2 === 0) {
                      doc.setFont(undefined, boldOpen ? boldStr : normalOr);
                  }
                  doc.text(textItems, startX, startY);
                  startX = startX + doc.getStringUnitWidth(textItems) * 14;
                  return null;
              });
              boldOpen = isBoldOpen(arrayOfNormalAndBoldText.length, boldOpen);
              startX = startXCached;
              startY += 20;
          }
          return null;
      });
    
    doc.save(`rent.pdf`);
  };
  
  const isBoldOpen = (arrayLength, valueBefore = false) => {
      const isEven = arrayLength % 2 === 0;
      const result = valueBefore !== isEven;
  
      return result;
  }
  const [formData, setformData] = useState({
    propertyOwnerName:"",
    propertyAddress:"",
    tenOneName:"",
    tenTwoName:"",
    tenThreeName:"",
    tenFourName:"",
    tenOneAddress:"",
    tenTwoAddress:"",
    tenThreeAddress:"",
    tenFourAddress:"",
    shiftingDate:"",
    period:"",
    rent:"",
    security:""

  });
  return (
    <>
<h1>Rent Agreement</h1>
    <form onSubmit={(e)=>{ 
      e.preventDefault();
  let tenantData
  if (formData.tenTwoName!==""){
    if(formData.tenThreeName!==""){
      if(formData.tenFourName!==""){
        tenantData=`\n      1. **${formData.tenOneName.toUpperCase()}**  R/O  **${formData.tenOneAddress.toUpperCase()} **\n      2. **${formData.tenTwoName.toUpperCase()}**  R/O  **${formData.tenTwoAddress.toUpperCase()}** \n      3. **${formData.tenThreeName.toUpperCase()}**  R/O  **${formData.tenThreeAddress.toUpperCase()}** \n      4.  **${formData.tenFourName.toUpperCase()}**  R/O  **${formData.tenFourAddress.toUpperCase()}** `
      }
      else{
        tenantData=`\n      1. **${formData.tenOneName.toUpperCase()}**  R/O  **${formData.tenOneAddress.toUpperCase()}** \n      2. **${formData.tenTwoName.toUpperCase()}**  R/O  **${formData.tenTwoAddress.toUpperCase()}** \n      3. **${formData.tenThreeName.toUpperCase()}**  R/O  **${formData.tenThreeAddress.toUpperCase()}**   `
      }
    }
    else{
      tenantData=`\n      1. ** ${formData.tenOneName.toUpperCase()}**  R/O  **${formData.tenOneAddress.toUpperCase()}**  \n      2. **${formData.tenTwoName.toUpperCase()}**  R/O   **${formData.tenTwoAddress.toUpperCase()}**`
    }
  }
  else{
    tenantData=`\n      1.  **${formData.tenOneName.toUpperCase()}**  R/O  **${formData.tenOneAddress.toUpperCase()}**  `
  }
      // let text = `RENT AGREEMENT`
    let text1=`\n                                             \n\n\n
    
    \nThis Rent agreement is made and executed at Delhi on 25/12/2021, BETWEEN SMT. **${formData.propertyOwnerName.toUpperCase()}** W/O    R/O  **${formData.propertyAddress.toUpperCase()}** .(Hereinafter called the First Party.
    \n                                          ...AND...\n
    \n` + tenantData +`\n(Hereinafter called the Second Party).
    \nThe Expressions of the first party and second party both shall mean and include their heirs, successors, executors and assigns.
    \nThat the Second Party has approached the First Party to let out of his Property Built up **${formData.propertyAddress.toUpperCase()}** .(Herein called the premises) on the following terms and conditions of this agreement as under :- 
    \n**NOW THIS RENT DEED WITNESSETH AS UNDER :-**
`
      let text4=`\n1. That the tenancy has commenced from **${formData.shiftingDate.toUpperCase()}** , for a period of **${formData.period.toUpperCase()}** MONTHS, which shall be extended for a further terms on such terms and conditions as mutually agreed between the parties. \n2. That the monthly rent settled between the Parties RS.**${formData.rent.toUpperCase()}**, Which shall be paid by the Second Party to the First Party in advance, as on or before 5th day of each English Calendar month.\n
      `
      let text2=`3. That the Second Party shall pay rent only through online mode of payment.\n4. That the First Party has delivered the vacant possession with fully fitted items of the said property to the Second Party.\n5. That the Second Party shall pay Electricity bills & water bills charges excluding the monthly rent to the First party.\n6.That the Second Party will deliver the vacant possession of the said  property hereby demised to the First Party without any hindrance with ready conditions after the expiry of the period of this agreement.\n7. That the Second Party shall not make any additions, alterations, changes or renovations in the existing structure of the said premises hereby demised, without the prior written consent of the first party.\n8. That the Second Party paying the rents regularly and shall peacefully enjoy the said premises without any hindrance of the First Party.\n9. That the First Party or Second Party may vacant the said premises hereby demised after giving one month written notice of his / her/ their intention to do so to each other. \n10. That in case of default or nonpayment of rent for two consecutive months, the Tenancy will automatically stand terminated and the Tenant shall be under obligation to vacate the premises and handover vacant possession immediately to the first party.\n11. That the Second Party will not do any act in contravention of the property and the civil authorities in the Second Parties premises.\n12. That the Second party shall not use the said premises for storing and manufacturing any hazardous or inflammable material and shall be bound by the bye-laws of the local body in this regard. \n13.That all the terms shall be followed under the provision of the Delhi Rent Control Act and The Rules and By Law Frame the render and amended from time to time.\n14. That the Second Party will not do any illegal / unlawful activities in the said tenanted premises.\n15. That the First Party has rights to inspect the rented premises during day time at reasonable hours.`
      let text3=`\n16. That the First Party alone shall be entitled to determine the renewal of tenancy at the expiry of the period of the lease on the consent of the Second Party.\n\n17. That the Second Party shall not sublet the said premises to any other person of persons and not create any type of misuse in the said property or any part thereof or in properties hereby.\n18. That the damage inflicted upon the assets provided by the 3rd party will be recovered from the security deposit paid to the first party.\n\n19. That if the Second Party shall make any misuse and theft of electricity etc. of the demised premises, then the Second Party shall be fully liable & responsible for the same on his / her own risk.\n20. That the First Party has received a sum of Rs. **${formData.security.toUpperCase()}** in advance as a Security amount which will be refundable after the expiry period of this rent agreement.\n21. That this Agreement has been prepared by the First Party at the expense of the Second Party and has been executed by the First Party & the Second Party.\n22.That this Rent Agreement is not valid for any bank loan & Credit Card.\n23. That after the expiry of this Agreement if both the parties have mutually agreed to extend the renting period then the rent will be increased **10%** minimum and maximum shall be depend at will on both parties\n24. That the period of tenancy can be renewed further with mutual consent of both the parties in writing.\n25. That the tenant shall abide by all the rules and regulations MCD / TPDDL / Delhi Administration or any other concerned authority remains. 
      `
let text5=`\n**IN WITNESS WHEREOF**   the Second Party and First Party set their hands signatures on this Deed of Agreement at Delhi on the day month and year first mentioned above in the presence of the following witnesses:\n \n
WITNESSES :-\n1.                                                              (FIRST PARTY)\n\n\n
\n
\n
\n      \n\n2.                                                              (SECOND PARTY)`
  
  xyz(text1,text2,text3,text4,text5);
  setformData({
    propertyOwnerName:"",
    propertyAddress:"",   
    tenOneName:"",
    tenTwoName:"",
    tenThreeName:"",
    tenFourName:"",
    tenOneAddress:"",
    tenTwoAddress:"",
    tenThreeAddress:"",
    tenFourAddress:"",
    shiftingDate:"",
    period:"",
    rent:"",
    security:""

  })
}}>
      <input type="text" placeholder='Property Owner Name' onChange={(e)=>{
        setformData({ ...formData, propertyOwnerName: e.target.value })
      }} value={formData.propertyOwnerName} required/> <br/>
      <input type="text" placeholder='Property Address' onChange={(e)=>{
        setformData({ ...formData, propertyAddress: e.target.value })
      }} value={formData.propertyAddress} required/> <br/>
      <input type="text" placeholder='Tenant 1 Name' onChange={(e)=>{
        setformData({ ...formData, tenOneName: e.target.value })
      }} value={formData.tenOneName} required/> <br/>
      <input type="text" placeholder='Tenant 1 Address' onChange={(e)=>{
        setformData({ ...formData, tenOneAddress: e.target.value })
      }} value={formData.tenOneAddress} required/> <br/>
      <input type="text" placeholder='Tenant 2 Name' onChange={(e)=>{
        setformData({ ...formData, tenTwoName: e.target.value })
      }} value={formData.tenTwoName} /> <br/>
      <input type="text" placeholder='Tenant 2 Address' onChange={(e)=>{
        setformData({ ...formData, tenTwoAddress: e.target.value })
      }} value={formData.tenTwoAddress} /> <br/>
      <input type="text" placeholder='Tenant 3 Name' onChange={(e)=>{
        setformData({ ...formData, tenThreeName: e.target.value })
      }} value={formData.tenThreeName} /> <br/>
      <input type="text" placeholder='Tenant 3 Address' onChange={(e)=>{
        setformData({ ...formData, tenThreeAddress: e.target.value })
      }} value={formData.tenThreeAddress} /> <br/>
      <input type="text" placeholder='Tenant 4 Name' onChange={(e)=>{
        setformData({ ...formData, tenFourName: e.target.value })
      }} value={formData.tenFourName} /> <br/>
      <input type="text" placeholder='Tenant 4 Address' onChange={(e)=>{
        setformData({ ...formData, tenFourAddress: e.target.value })
      }} value={formData.tenFourAddress} /> <br/>
      <input type="date" placeholder='Shifting Date' onChange={(e)=>{
        setformData({ ...formData, shiftingDate: e.target.value })
      }} value={formData.shiftingDate} required/> <br/>
      <input type="text" placeholder='Period' onChange={(e)=>{
        setformData({ ...formData, period: e.target.value })
      }} value={formData.period} required/> <br/>
      <input type="text" placeholder='Rent' onChange={(e)=>{
        setformData({ ...formData, rent: e.target.value })
      }} value={formData.rent} required/> <br/>
      <input type="text" placeholder='Security' onChange={(e)=>{
        setformData({ ...formData, security: e.target.value })
      }} value={formData.security} required/> <br/>
       <button type='submit'> Submit</button> 
    </form>

    </>
  );
}

