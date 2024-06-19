import { useState, useEffect } from "react";
import * as serviceService from "../../services/ServiceServices";

const ServiceManagement = () => {
    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({ name: '' });

    useEffect(() => {
        serviceService.getAllServices(setServices);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        serviceService.addService(formData);
        setFormData({ name: '' });
        serviceService.getAllServices(setServices);
    };

    const deleteHandler = (id) => {
        serviceService.deleteService(id);
        serviceService.getAllServices(setServices);
    };

    return (
        <div className="container">
            <h2>Paslaugų valdymas</h2>
            <form onSubmit={submitHandler} className="form-inline mb-3">
                <input type="text" name="name" className="form-control mr-2" onChange={handleChange} value={formData.name} placeholder="Paslaugos pavadinimas" />
                <button type="submit" className="btn btn-primary">Pridėti</button>
            </form>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Paslaugos pavadinimas</th>
                        <th>Veiksmai</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr key={service.id}>
                            <td>{service.name}</td>
                            <td>
                                <button onClick={() => deleteHandler(service.id)} className="btn btn-danger">Šalinti</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceManagement;
