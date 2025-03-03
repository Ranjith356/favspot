import toast from "react-hot-toast";
import supabase from "./supabase";
const UpdateQuery=async(props)=>{
   try{
    const { data } = await supabase.from('FreshMatchtable').select();
    const user=data.find((v)=>v.mobileNumber===props.MobileNumber);
    const logincounting= user ? user.logincount +1 :1;
    if(!user){
        await supabase.from('FreshMatchtable').insert({ mobileNumber: props.MobileNumber });
    }else{
        await supabase.from('FreshMatchtable').update({logincount :logincounting}).eq('mobileNumber',props.MobileNumber);
    }
   }catch{
    toast.error("Data Insert Fail");
   }
}
const userUpdateQuery=async(props)=>{
    try {
    await supabase
          .from('FreshMatchtable')
          .update({ addresses:[JSON.stringify(props.addressValues)]})
          .eq('mobileNumber',props.MobileNumber);
      } catch (error) {
        toast.error("Address update failed: " + error.message);
      }
}
const fetchDpValuesQuery=async(props)=>{
    try {
  const { data } = await supabase.from('FreshMatchtable').select();
    const user=data.find((v)=>v.mobileNumber===props.MobileNumber);
    let parseValue=JSON.parse(user.addresses);
     return parseValue;            
          } catch (error) {
            toast.error("Error fetching failed: " + error.message);
          }
}
export {UpdateQuery,userUpdateQuery,fetchDpValuesQuery}