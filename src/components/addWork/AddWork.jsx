import { useState, useEffect } from "react"
import * as service from "../../services/WorksCrudServices";
import { useNavigate, Link, useParams } from "react-router-dom";
const AddWork = ()=>{
    const navigate = useNavigate();
    const {id} = useParams();
    const [formData, setFormData] = useState({
        date:'',
        company:'',
        service:'',
        description:'',
        from: '',
        to:'',
    });

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(id){
            service.updateWork(id,formData)
        }else{
            service.addWork(formData)
        }
        navigate("/");
    }

    useEffect(()=>{
        id && service.getWorkById((item)=>setFormData(item), id)   
    },[id])

    console.log('Noriu atnaujinti dokumenta, kurio id', id)
    return(
        <div className="card">
            <div className="card-header">
                <h2>Pridėti atliktą darbą</h2>
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler} className="form">
                    <div className="mb-3">
                        <label htmlFor="date">Pasirinkite datą:</label>
                        <input type="date" name="date" className="form-control" onChange={handleChange} value={formData.date} />
                    </div>
                    <div className="mb-3">
                        <select name="company" className="form-control" onChange={handleChange} value={formData.company}>
                        <option selected disabled>--Pasirinkite klientą--</option>
                            <option value="kb">Kilobaitas</option>
                            <option value="it">IT sfera</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select name="service" className="form-control" onChange={handleChange} value={formData.service}>
                            <option selected disabled>--Pasirinkite paslaugą--</option>
                            <option value="dev">Development</option>
                            <option value="ux">UX research</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea name="description" className="form-control" placeholder="Darbo aprašymas" onChange={handleChange} value={formData.description}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">Nuo:</label>
                        <input type="time" name="from" className="form-control" onChange={handleChange} value={formData.from}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to">To:</label>
                        <input type="time" name="to" className="form-control" onChange={handleChange} value={formData.to}/>
                    </div>
                    <div className="mb-3">
                        {(id)?
                           <button type="submit" className="btn btn-primary">Atnaujinti</button>:
                           <button type="submit" className="btn btn-primary">Saugoti</button> 
                    }
                        
                    </div>
                </form>
            </div>
        </div>
    )
  
}

export default AddWork