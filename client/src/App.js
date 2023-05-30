import './App.css';
import {useEffect, useState} from "react";
import Header from "./Header";
import axios from "axios";

function App() {
    const [drugs, setDrugs] = useState([])
    const [isAdd, setIsAdd] = useState(false)
    const [newDrag, setNewDrug] = useState({name: "", count: 0, type: ""})
    const url = "http://192.168.0.101:8080/api"

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setDrugs((await axios.get(url + "/getAllMedicines")).data)
    }

    const setData = (e) => {
        setNewDrug({...newDrag, [e.target.name]: e.target.value})
    }

    const deleteDrug = async (drug) => {
        await axios.post(url + "/removeMedicines", {id: drug.id})
        fetchData()
    }

    const toggleIsAdd = () => {
        setIsAdd(!isAdd)
    }

    const addDrug = async () => {
        await axios.post(url + "/createNewMedicines", newDrag)
        fetchData()
    }

    return (
        <div className={""}>
            <Header/>
            <hr/>

            <div className={"flex justify-end"}>
                {!isAdd ? <span onClick={toggleIsAdd} className={"text-3xl cursor-pointer m-5"}>+</span> : null}
            </div>
            {isAdd ?
                <div className={"flex flex-col p-2"}>
                    <p>Name: <input onChange={setData} value={newDrag.name} className={"border m-1"} type={"text"}
                                    name={"name"}/></p>
                    <p>Count: <input onChange={setData} value={newDrag.count} className={"border m-1"} type={"number"}
                                     name={"count"}/></p>
                    <p>Type: <input onChange={setData} value={newDrag.type} className={"border m-1 mx-3"} type={"text"}
                                    name={"type"}/></p>
                    <div className={"flex justify-end w-56"}>
                        <button onClick={() => {
                            addDrug()
                            setIsAdd(false)
                            setNewDrug({name: "", count: 0, type: ""})
                        }} className={"p-2 border-2 bg-green-500 hover:bg-green-600 w-24"}>Add
                        </button>
                    </div>
                </div>
                : null}

            <button className={"p-2 border bg-blue-500 hover:bg-blue-600 m-2"}>Export as CSV</button>
            <a href={url + "/download/excel"} className={"p-2 border bg-blue-500 hover:bg-blue-600 m-2"}>Export as xlsx</a>
            <a href={url + "/download/pdf"} className={"p-2 border bg-blue-500 hover:bg-blue-600 m-2"}>Export as PDF
            </a>
            <hr/>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Count</th>
                                    <th scope="col" className="px-6 py-4">Type</th>
                                    <th scope="col" className="px-6 py-4">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {drugs.length ? drugs.map((drug, ind) => {
                                    return (
                                        <tr className="border-b dark:border-neutral-500" key={ind}>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{ind}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{drug.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{drug.count}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{drug.type}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <button
                                                    className={"p-1 border hover:bg-blue-500 bg-blue-300"}>Edit
                                                </button>
                                                <button onClick={() => {
                                                    deleteDrug(drug)
                                                }}
                                                        className={"p-1 border hover:bg-red-500 bg-red-300"}>Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }) : null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
