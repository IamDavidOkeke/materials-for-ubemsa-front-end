import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState('');
    const [course, setCourse] = useState('');
    const [message, setMessage] = useState('');

  const onChangefile = (e)=>{
    setFile(e.target.files[0]);
  }
  const onChangecourse = (e)=>{
    setCourse(e.target.value);
  };

 const onsubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    console.log('b4'+ formData);
    formData.append('file', file);
    formData.append('course', course)
    console.log('after'+ formData);
    try{
      const res = await axios.post('https://agile-tor-34853.herokuapp.com/upload', formData, {
        header:{
          'Content-Type': 'multipart/form-data'
        }
      })
       console.log(res.data)
       setMessage('File succesfully uploaded');
    }catch(err){
      console.log(err)
      setMessage('Error uploading file, please try again');
    };
  }
    return(
        <div classname="upload">
           <h1 className="f4 fw6 ph0 mh0" >Upload Course</h1>
             <form className=' measure center' onSubmit={onsubmit}>
               <select  required className="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="courses" onChange={onChangecourse}>
                <option value="Get Courses">Select course
                </option>
                <option value="Anatomy">Anatomy
                </option>
                <option value="Physiology">Physiology
                </option>
                <option value="Medical Biochemistry">Medical Biochemistry
                </option>
                <option value="Pathology">Pathology
                </option>
                <option value="Pharmacology">Pharmacology
                </option>
                <option value="Medicine">Medicine
                </option>
                <option value="Surgery">Surgery
                </option>
                </select>
                <div classsName="file-field input-field">
                  <div classsName>
                    <input type="file" name='file' onChange={onChangefile} className='button ph3 pv2 input-reset ba white grow pointer f6 dib' required/>
                  </div>
                </div>
                <div classsName="">
                    <input className='button ph3 pv2 input-reset ba white grow pointer f6 dib' type="submit"/>
                  </div>
              </form>
                  {message.length ?
              <div className='message'>{message}</div> :
              null}
              <hr></hr>
              <div>
              <h4 className="f4 fw6 ph0 mh0"> Guidelines to Uploading Materials </h4>
                  <ul classsName="list pl0 measure center">
                    <li classsName="">Please ensure file is named appriopriately with enough details as possible e.g Cell by Professor Ajayi.</li>
                    <li classsName="">Please do wait for some time to be sure file was uploaded correctly.</li>
                  </ul>
                
              </div>
        </div>
    )
}




export default Upload