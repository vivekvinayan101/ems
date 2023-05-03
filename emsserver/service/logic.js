const db=require('./db')

const allEmployee=()=>{
  return db.Employee.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                employees:result,
            }
        }else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
}

const addEmployee=(id,uname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:404,
                message:"Employee already present"
            }

        }else{
            const newEmp=new db.Employee({
                id,
                uname,
                age,
                designation,
                salary
            })

            newEmp.save()

            return{
                statusCode:200,
                message:"Employee added successfully"
            }
        }
    })
}

const removeEmployee=(id)=>{
   return  db.Employee.deleteOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message: "Employee removed successfully" 
            }
        }else{
            return{
                statusCode:404,
                message:"Employee doesnot Exist"
            }
        }
    })
}

const getAnEmployee=(id)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                employee:result,
            }
        }else{
            return{
                statusCode:404,
                message:"Employee doesnot Exist"
            }
        }
    })
}

const editEmployee=(id,uname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            result.uname=uname,
            result.age=age,
            result.designation=designation,
            result.salary=salary

            result.save()

            return{
                statusCode:200,
                message:'Employee data updated'
            }
        }else{
            return{
                statusCode:404,
                message:"Employee doesnot Exist"
            
            }
        }
    })
}

module.exports={
    allEmployee,
    addEmployee,
    removeEmployee,
    getAnEmployee,
    editEmployee
}