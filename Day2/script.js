const firebaseConfig = {
    apiKey: "AIzaSyD7nnsni2Ox-OMd50CiKaSRl33DWsB2xGA",
    authDomain: "second-project-f3bb0.firebaseapp.com",
    databaseURL: "https://second-project-f3bb0-default-rtdb.firebaseio.com",
    projectId: "second-project-f3bb0",
    storageBucket: "second-project-f3bb0.appspot.com",
    messagingSenderId: "88249677900",
    appId: "1:88249677900:web:213babf99b1338eb1fdce9"
  }
  firebase.initializeApp(firebaseConfig);
  const FormDB=firebase.database().ref('Form')
  document.getElementById('form').addEventListener('submit',submitForm);
  function submitForm(e){
    e.preventDefault();
    var name = getElementVal('username')
    var email = getElementVal('email')
    var number = getElementVal('number')

    messages(username,email,number);
  }
const messages= (username,email,number)=>
{
    var newForm= FormDB.push();
    newForm.set({
        username : username,
        email: email,
        number : number
    })
}

  const getElementVal = (id)=>{
    return document.getElementById(id).value;
  }