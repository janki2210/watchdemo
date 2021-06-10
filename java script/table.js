let SName=["html","javascript","css","jquery","bootstrap"];
let tot=0;
// let txt="<table><tr> <th>subject name</th> <th>subject marks</th> </tr>"

for(let i=0;i<SName.length,i++;)
{
 let marks=prompt("enter the marks"+SName[i]);
 tot+=marks;
 txt+="<tr><td>"+SName[i]+"</td><td>"+marks+"</td></tr>";
}
// txt+="</table>";

document.write(txt);