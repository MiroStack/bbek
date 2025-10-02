import Logo from '../../../../assets/img/logobbek.jpg';
import { motion } from "framer-motion";
export const LoaderPage=()=>{
    return(
        <div className="w-screen h-screen bg-slate-100 flex flex-col items-center justify-center gap-2">
            <img src={Logo} alt='logo' className='rounded-full h-20'/>
            <div className='flex items-center gap-2'>
                <motion.div 
                   
                   className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
                <motion.div className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
                <motion.div className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
                <motion.div className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
                <motion.div className='h-4 w-4 rounded-full bg-gray-300'></motion.div>
            </div>
            
        </div>
    );
}