import { Button } from 'antd'
import React,{useState, useEffect} from 'react'
import { app } from '../base'

const Review = () => {
  const [admData, setAdmData] = useState([])
  const [admData1, setAdmData1] = useState([])

  const getData = async() => {
    await app.firestore().collection("admission")
    .orderBy("time", "desc")
    .limit(1)
    .onSnapshot(snapshot => {
      const r =[]
      snapshot.forEach(doc => {
        r.push({...doc.data(), id: doc.id})
      })
      setAdmData(r)
    })
  }

  const getInData = async(id) => {
    await app.firestore().collection("admission").doc().get().then(el => {
        setAdmData1(el.data())
    })
  }

  useEffect(() => {
    getInData()
    getData()
  }, [])

  return (
    <div
    style={{
      backgroundColor:"#010306",
      height:"100vh",
      width:"100vw ",
    }}
    >
   {
     admData.map(r => (
       <div key={r.id}> 
          <div
      // style={{
      //   display:"flex",
      //   justifyContent:"space-between",
      //   margin:"20px 10px  "
      // }}
      style={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap",
        // marginTop:"30px",
        alignContent:"center",
        height:"100vh",
        width:"100% ",
      }}
      >
        <div
        style={{
            width: "300px",
            backgroundColor:"lightcoral",
            margin:"10px 5px",
            borderRadius:" 5px",
            marginRight:"10px"
          }}
        >
          <img            
            src={r.avatar}
            style={{
              width: "300px",
              height:"350px",
              borderRadius:"5px",
              objectFit:"cover",           

            }}
          />
        </div>
        <div
         style={{
          width: "300px",
          // backgroundColor:"lightcoral",
          margin:"10px 5px"
        }}
        >
          <div
          style={{
            fontWeight:"bold",
            fontSize:"20px",
            lineHeight:"21px",
            color:"white"
          }}
          >Thank you  <i>"{r.name}" </i> for applying. <br/> <br/>
          You would be sent an invite for an interview as the next step of the screening exercise.</div>

          <br/>
          <div
          style={{
            color:"white"
          }}
          >Keep up to date with our activities via our social media pages (add the link to our social media pages) and email.</div>

          <br/>
          <div>
            <Button
            type="primary"
            >
              <a href="https://www.facebook.com/groups/brighterdayscodelab" >Click here to see our works on Facebook</a>
            </Button>
          </div>
        </div>
      </div>
    
        </div>
     ))
   }
    </div>
  )
}

export default Review
