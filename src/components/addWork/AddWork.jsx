import { useState, useEffect } from "react";
import * as service from "../../services/WorksCrudServices";
import * as clientService from "../../services/ClientServices";
import * as serviceService from "../../services/ServiceServices";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const AddWork = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();
    const [clients, setClients] = useState([]);
    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        company: '',
        service: '',
        description: '',
        from: '',
        to: '',
        uid: ""
    });

    useEffect(() => {
        clientService.getAllClients(setClients);
        serviceService.getAllServices(setServices);

        if (id) {
            service.getWorkById((item) => setFormData(item), id);
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (id) {
            service.updateWork(id, formData);
        } else {
            service.addWork({
                ...formData,
                uid: user.uid
            });
        }
        navigate("/");
    };

    return (
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
                            <option value="" disabled>--Pasirinkite klientą--</option>
                            {clients.map((client) => (
                                <option key={client.id} value={client.id}>{client.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select name="service" className="form-control" onChange={handleChange} value={formData.service}>
                            <option value="" disabled>--Pasirinkite paslaugą--</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.id}>{service.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea name="description" className="form-control" placeholder="Darbo aprašymas" onChange={handleChange} value={formData.description}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">Nuo:</label>
                        <input type="time" name="from" className="form-control" onChange={handleChange} value={formData.from} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to">Iki:</label>
                        <input type="time" name="to" className="form-control" onChange={handleChange} value={formData.to} />
                    </div>
                    <div className="mb-3">
                        {id ?
                            <button type="submit" className="btn btn-primary">Atnaujinti</button> :
                            <button type="submit" className="btn btn-primary">Saugoti</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddWork;
