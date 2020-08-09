import React, {useState} from 'react';
import axios from 'axios';

const Courses = () =>{
    const [course, setCourse] = useState('');
    const [material, setMaterial] = useState([]);

const onChange = (e)=>{
    setCourse(e.target.value);
}
const onClick = ()=>{
    axios.get(`https://agile-tor-34853.herokuapp.com/courses/${course}`)
    .then((res)=>{
        setMaterial(res.data);
    })
}
    return(
        <div>
            <div className='upload'>
                <h1 className="f4 fw6 ph0 mh0" >Select Courses</h1>
                <select  className=" db h2 f6 bg-near-white ba b--sliver gray" name="courses" onChange={onChange}>
                <option value="Get Courses">Get courses
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
                <div className="">
                        <input className="button ph3 pv2 input-reset ba white grow pointer f6 dib" type="submit" value="Submit" onClick={onClick} />
                </div>
            </div>
            { material.length ? material.map((material)=>{
                return <div className='collection' key={material._id}><a className='collection-item' href={`https://agile-tor-34853.herokuapp.com/pdf/${material.filename}`}>{material.filename}</a></div>
               }):
                <div className='collection-item'> no courses available as at the time of request </div>
                }
        </div>
    )
}





export default Courses