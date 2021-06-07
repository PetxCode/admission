import { Button, Input, Select, Switch } from 'antd';
import Reactc, {useState, useEffect} from 'react'
import {app} from "./../base"
import ClipLoader from "react-spinners/ClipLoader";
import ClockLoader from "react-spinners/ClockLoader";
import Floating from "react-floating-label-paper-input"
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';
import img from "../asset/newLogo.png"
import { useHistory } from 'react-router';
import firebase from "firebase"


const Home = () => {
  const hist = useHistory()
  const[imgProfile, setImgProfile] = useState(null)
  const [avatar, setAvatar] = useState(null)

const [name, setName] = useState('')
const [address, setAddress] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const [parent, setParent] = useState('')
const [parentAdress, setParentAdress] = useState('')
const [occupation, setOccupation] = useState('')
const [future, setFuture] = useState('')
const [hobbies, setHobbies] = useState('')
const [leader, setLeader] = useState('')
const [position, setPosition] = useState('')
const [interest, setInterest] = useState('')
const [led, setLed] = useState('')
const [soo, setSoo] = useState('')
const [education, setEducation] = useState('')
const [area, setArea] = useState('')
const [agree, setAgree] = useState(false)





const hangleImage = async(e) => {
  

  const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setImgProfile(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])


  const file = e.target.files[0]
  const storageRef = app.storage().ref()
  const fileRef = storageRef.child(file.name)
  await fileRef.put(file)
  setAvatar( await fileRef.getDownloadURL())


}


const uploadToBackEndd = async() => {
  await app.firestore().collection("admission").doc().set({
    name,
    avatar,
    address, phone, email, parent, occupation, future,hobbies, leader, led, soo,
    interest, education, agree,
    position, parentAdress,
    time: firebase.firestore.FieldValue.serverTimestamp()
  })
  hist.push('/review')
}


useEffect(()=>{
 
}, [])

  return (
    <div>
      <div
      style={{
        display:"flex",
        flexDirection:"column",
        width:"300px",
        
      }}
      >
        <div
      style={{
        display:"flex",
        justifyContent:" center",
        width:"300px",
        flexDirection:"column",
        alignItems:'center',
        marginBottom:"30px"
      }}
      >
        <img 
        src={img}
        style={{
          width:"300px",
          height:"100px",
          objectFit:" cover",
         
        }}
/>
<div>Please fill all field accurately</div>
      </div>
       <div
       style={{
        display:"flex",
        justifyContent:"center",
        width:"300px",
       }}
       >
         

{
  imgProfile === null ? (
 <img        
        src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
        style={{
          width:"250px",
          height:"250px",
          objectFit:"cover",
          borderRadius:"10px",
          boxShadow: "0 3px 3px 0 rgba(0,0,0,0.2)"
        }}
      />
  ) : (
 <img        
        src={imgProfile}
        style={{
          width:"250px",
          height:"250px",
          objectFit:"cover",
          borderRadius:"10px",
          boxShadow: "0 3px 3px 0 rgba(0,0,0,0.2)"
        }}
      />
  )
}


      
       </div>
        <Input
          type="file"
          // value={imgProfile}
          onChange={hangleImage}
          style={{           
            display:"none"
          }}
          accept="image/*" 
          name="image-upload" 
          id="pix"
        />
          {
            imgProfile ? (
              <div
              style={{
                widtgh:"300px",
                justifyContent:"center",
                display:"flex"
              }}
              >
                <Button
              type="primary"
              danger
              style={{
                width:"250px",
                height:"50px",
                marginTop:"10px",
                justifyContent:"center",
                fontSize:"15px",
                fontWeight:"bold"
              }}
              onClick={()=>{
                setImgProfile(null)
              }}
              >Reset</Button>
              </div>
            ) : (
              <div
              style={{
                widtgh:"300px",
                justifyContent:"center",
                display:"flex"
              }}
              >
                <label 
          htmlFor="pix"
          style={{
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            width:"250px",
            backgroundColor:"lightgray",
            height:"50px",
            borderRadius:"5px",
            alignItems:"center",
            marginTop:"10px",
            fontSize:"15px",
            fontWeight:"bold"

          }}
          >					
						Choose your Photo
					</label>
              </div>
            )
          }
      </div>
 
    
<div
style={{
  width:"300px"
}}
>
  
          
    <Floating 
     labelName={"Full Name"}   
     value={name}
     onChange={(e) => {
       setName(e.target.value)
     }}      
   />

    <Floating 
     labelName={"Address"}   
     value={address}
     onChange={(e) => {
       setAddress(e.target.value)
     }}      
   />

    <Floating 
    min="1"
     labelName={"Phone Number"}   
     type="number"
     value={phone}
     onChange={(e) => {
       setPhone(e.target.value)
     }}      
   />
    <Floating 
     labelName={"Highest Level of Eductaion"}       
     value={education}
     onChange={(e) => {
      setEducation(e.target.value)
     }}      
   />
    <Floating 
     labelName={"Email"}  
     value={email}
     onChange={(e) => {
       setEmail(e.target.value)
     }}      
   />
    <Floating 
     labelName={"Parent Name"}   
     value={parent}
     onChange={(e) => {
       setParent(e.target.value)
     }}      
   />
    <Floating 
     labelName={"Parent Address"}   
     value={parentAdress}
     onChange={(e) => {
       setParentAdress(e.target.value)
     }}      
   />
    <Floating 
     labelName={"Parent Occapation"}   
     value={occupation}
     onChange={(e) => {
      setOccupation(e.target.value)
     }}      
   />
    <Floating 
     labelName={"Future Ambition"}   
     value={future}
     onChange={(e) => {
      setFuture(e.target.value)
     }}      
   />
    {/* <Floating 
     labelName={"Hobbies"}   
     value={hobbies}
     onChange={(e) => {
      setHobbies(e.target.value)
     }}      
   /> */}
    <TextArea
     placeholder="What's your Hobbies"  
     style={{
       height:"100px",
       resize:"none",
       marginTop:"10px",
       paddingTop:"10px"
     }}
     value={hobbies}
     onChange={(e) => {
      setHobbies(e.target.value)
     }}      
   />

   <div
   style={{
    display:"flex",
    height:"40px",
    alignItems:"center",
    marginTop:"10px"
   }}
   >
     <div>Have you held any leadership position before?</div>
     <select
     style={{
       width:" 100px",
       height:"30px",
       paddingLeft:"10px",
       marginLeft:"10px"
     }}
     value={led}
     onChange={(e) => {
       setLed(e.target.value)
     }}
     >
       <option label="Can't Tell" >can't tell</option>
       <option label="Yes" >Yes</option>
       <option label="No" >No</option>
     </select>
   </div>
 
   <TextArea
     placeholder=" In what capacity did you lead and what position did you held?"  
     style={{
       height:"100px",
       resize:"none",
       marginTop:"10px",
       paddingTop:"10px"
     }}
     value={leader}
     onChange={(e) => {
      setLeader(e.target.value)
     }}      
   />

<div
   style={{
    display:"flex",
    height:"40px",
    alignItems:"center",
    marginTop:"10px",
    justifyContent:"space-between",
   }}
   >
     <div>Which area are you applying from?</div>
     <select
     style={{
       width:" 130px",
       height:"30px",
       paddingLeft:"10px",
       marginLeft:"10px"
     }}
     value={area}
     onChange={(e) => {
       setArea(e.target.value)
     }}
     >
       <option label="Not in Ajegunle" >Not in Ajegunle</option>
       <option label="Alaba" >Alaba</option>
       <option label="Boundary" >Boundary</option>
       <option label="Orige" >Orige</option>
       <option label="Tolu" >Tolu</option>
       <option label="Wilmer" >Wilmer</option>
     </select>
   </div>
<div
   style={{
    display:"flex",
    height:"40px",
    alignItems:"center",
    marginTop:"30px",
    marginBottom:"10px",
    justifyContent:"space-between",
   }}
   >
     <br/>
     <div>What are you applying for?</div>
     <select
     style={{
       width:" 130px",
       height:"30px",
       paddingLeft:"10px",
       marginLeft:"10px",
       fontWeight:"bold"
     }}
     value={interest}
     onChange={(e) => {
       setInterest(e.target.value)
     }}
     >
       <option label="AI/ML" >AI/ML</option>
       <option label="Desktop Dev" >Desktop Dev</option>
       <option label="Mobile Dev" >Mobile Dev</option>
       <option label="Web Dev" >Web Dev</option>
       <option label="UI/UX" >UI/UX</option>
     </select>
   </div>

<div
   style={{
    display:"flex",
    // height:"40px",
    alignItems:"center",
    marginTop:"10px",
    justifyContent:"space-between",
    width:"320px",
    marginTop:"20px"
   }}
   >
     <Switch
     checkedChildren="Yes" unCheckedChildren="No"
     onClick={()=>{
       setAgree(!agree)
     }}
     />
     <div
     style={{
       width:"80%"
     }}
     >Upon clicking on the switch button besides you, you therefore agree to all Teams and Condition governing <strong>CodeLab's</strong> across all her annex branches</div>
    
   </div>
<div
style={{
  width:"300px",
  display:" flex",
  justifyContent:"center"
}}
>
<Button
type="primary"
danger
style={{
  marginTop:" 50px",
  width:"100%"
  
}}
disabled={!agree}
onClick={()=>{
  uploadToBackEndd()
  // console.log(agree)
}}
>Submit</Button>
</div>

 <br/>
      <br/>
 <br/>
      <br/>
 <br/>
      <br/>
 <br/>
      <br/>
  </div>    

    </div>
  )
}

export default Home
