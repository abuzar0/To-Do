
 var count=0;
function del(ctl){
 var x=$(ctl).parents("tr").children('td:eq(0)').text();  
    $(ctl).parents("tr").remove();
    console.log(x);
    count=count-1;
    card=$('.card-hearder');
    card.html(`<b>There are ${count} Todos<b>`);
}

$(document).ready(function(){
    console.log('ok');
    $('#add').on('click',function(){
        const name=$('#name').val();
        if(name===''){
          alert("Do enter any thing...");
        }
        else{
        // console.log(name);
        tableBody = $(".table"); 
        tableBody.append('<tr><td colspan="10">'+$('#name').val()+'</td>'+
        '<td colspan="2"><button type=button  onclick=del(this) class="button">&#128465;</td>'+'</tr>');
        card=$('.card-hearder');
        count=count+1;
        card.html(`<b>There are ${count} Todos<b>`);
        // alert("your todo is insert ")
        }

  })
    
});