import './EmptyTodos.css'
import { motion } from "framer-motion"
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


function EmptyTodos (){
    
    return(
        <li className={`emptyTodo`}>
            
            Create your first Todo
            <motion.div
                    animate={{
                    rotate: [270, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{ duration: 5 }}
                ><AiOutlineLoading3Quarters /></motion.div>
        </li>
    )
}


export { EmptyTodos }