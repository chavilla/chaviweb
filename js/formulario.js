
export default class Frame {
    constructor(data) {
         this.data=data;
    }
  
    send(){    
  
      const form=new FormData();
      form.append('email',this.data.email);
      form.append('message',this.data.message);
      form.append('name',this.data.name);
      form.append('phone',this.data.phone);
      
    
      console.log(form); return;
        
       fetch('send.php',{
           method:'POST',
           body:form
       }).then(res=>{
         
         return res.json();
       }).then(data=>{
         if(data.status===200){
          this.showMessage(data.response,'notification-exit');
          this.clean();
         }
         else{
          this.showMessage(data.response,'notification-error');
          this.clean();
         }
       });
    }
  
    showMessage(message,status){
      const page=document.querySelector('body');
      const dialog=document.createElement('div');
      dialog.classList.add('notification',status);
      dialog.textContent=message;
  
  
      page.insertBefore(dialog, document.querySelector('.whatsapp'));
      dialog.classList.add('visible');
  
      setTimeout(()=>{
        dialog.classList.add('visible');
  
        setTimeout(()=>{
          dialog.classList.remove('visible');
          setTimeout(() => {
            dialog.remove();
       }, 500);
        },3000);
      },100);
      
    }
  
    clean(){
      const fields=document.querySelectorAll('input,textarea,select');
      fields.forEach(field=>{
        field.value='';
        field.classList.remove('exit');
      })
    }
  
  }