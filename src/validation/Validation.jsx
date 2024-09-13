const MobileNumber=(number)=>{
  const cleanedNumber = number.replace(/\D/g, '');
  if (cleanedNumber.length === 10) {
    const regex = /^[6789]\d{9}$/; 
    return regex.test(cleanedNumber);
  }else{
    return "Invalid mobile number. Please enter correct number"
  }
}
export {MobileNumber}
