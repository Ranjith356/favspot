import toast from "react-hot-toast";
import supabase from "./supabase";
const UpdateQuery=async(props)=>{
   try{
    const { data } = await supabase.from('FreshMatchtable').select();
    const user=data.find((v)=>v.mobileNumber===props);
    const logincounting= user ? user.logincount +1 :1;
    if(!user){
        await supabase.from('FreshMatchtable').insert({ mobileNumber: props });
    }else{
        await supabase.from('FreshMatchtable').update({logincount :logincounting}).eq('mobileNumber',props);
    }
   }catch{
    toast.error("Data Insert Fail");
    console.log("data BaseUpdating errors");
   }
}
export {UpdateQuery}