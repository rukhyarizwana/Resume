document.getElementById('btn').addEventListener('click',function(e){

    e.preventDefault()

    // defining object

    var details={
        fullName:'',
        mobileNumber:'',
        emailId:'',
        tenth:'',
        inter:'',
        degree:'',
        mySkills:'',
        myHobbies:''
    }
        // Storing details in to the object

        details.fullName=document.getElementById('input_name').value
        details.mobileNumber=document.getElementById('input_contact').value
        details.emailId=document.getElementById('input_email').value
        details.tenth=document.getElementById('10th').value
        details.inter=document.getElementById('12th').value
        details.degree=document.getElementById('ug').value
        details.mySkills=document.getElementById('s').value
        details.myHobbies=document.getElementById('h').value

        // sending the object to other fumction

        buildResume(details)        
})
function buildResume(details){

    // injecting details into html using their id's
    document.getElementById('name').innerHTML=details.fullName
    document.getElementById('mobile').innerHTML=details.mobileNumber
    document.getElementById('email').innerHTML=details.emailId
    document.getElementById('10').innerHTML=details.tenth
    document.getElementById('12').innerHTML=details.inter
    document.getElementById('ug_resume').innerHTML=details.degree
    document.getElementById('skills').innerHTML=details.mySkills
    document.getElementById('hobbies').innerHTML=details.myHobbies

    // turning on the visibility of the resume div

    document.getElementById('div').style.visibility='visible'
}