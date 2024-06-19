import { useState, useEffect } from "react";
import * as clientService from "../../services/ClientServices";

const ClientManagement = () => {
    const [clients, setClients] = useState([]);
    const [formData, setFormData] = useState({ name: '' });

    useEffect(() => {
        clientService.getAllClients(setClients);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        clientService.addClient(formData);
        setFormData({ name: '' });
        clientService.getAllClients(setClients);
    };

    const deleteHandler = (id) => {
        clientService.deleteClient(id);
        clientService.getAllClients(setClients);
    };

    return (
        <div className="container">
            <h2>Klientų valdymas</h2>
            <form onSubmit={submitHandler} className="form-inline mb-3">
                <input type="text" name="name" className="form-control mr-2" onChange={handleChange} value={formData.name} placeholder="Kliento pavadinimas" />
                <button type="submit" className="btn btn-primary">Pridėti</button>
            </form>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Kliento pavadinimas</th>
                        <th>Veiksmai</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td>{client.name}</td>
                            <td>
                                <button onClick={() => deleteHandler(client.id)} className="btn btn-danger">Šalinti</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClientManagement;
