const os =require("node:os")

function getSystemInfo() {
   const systemInfo={
      totalmem:os.totalmem()/1024/1024/1024,
     freemem:os.freemem()/1024/1024/1024,
     platForm:os.platform(),
     archetecture:os.arch(),
     processId:process.pid,

   }
    return systemInfo
}

module.exports=getSystemInfo